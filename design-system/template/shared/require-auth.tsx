import { Box } from "@chakra-ui/react";
import { getSessionToken } from "@helpers/session-manager";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const RequireAuth: React.FC<IRequiredAuth> = ({ children }) => {
  const router = useRouter();

  const [authToken, setAuthToken] = useState<string | null | undefined>();

  useEffect(() => {
    setAuthToken(getSessionToken());
  }, []);

  useEffect(() => {
    if (!getSessionToken()) {
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <Box className="!w-full" as="div">
      {authToken && children}
    </Box>
  );
};

export default RequireAuth;
