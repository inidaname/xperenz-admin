import { apiSlice } from "@app/api/apiSlice";

export const getAuthUserData = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    authUserData: builder.query<IAuthUserData, void>({
      query: () => ({
        url: "authuser",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useAuthUserDataQuery } = getAuthUserData;
