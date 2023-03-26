import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";
import { getSessionToken } from "@helpers/session-manager";

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.API_BASE,
  mode: "cors",

  prepareHeaders: (headers, _) => {
    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json; charset=UTF-8");
    const token = getSessionToken();

    if (token) {
      headers.set("x-access-token", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOption) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOption);

  // if (result.error && result?.error?.status === 401) {
  //   if (!mutex.isLocked()) {
  //     const release = await mutex.acquire();

  //     try {
  //       const refreshResult = await baseQuery(
  //         {
  //           credentials: "include",
  //           url: "/auth/refresh",
  //         },
  //         api,
  //         extraOption
  //       );

  //       if (refreshResult.data) {
  //         result = await baseQuery(args, api, extraOption)
  //       }
  //     } finally {
  //       release()
  //     }
  //   } else {
  //     await mutex.waitForUnlock()
  //     result = await baseQuery(args, api, extraOption)
  //   }
  // }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Api_Xper_Admin"],
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
