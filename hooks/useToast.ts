import { useToast as chakraUseToast } from "@chakra-ui/react";
import { useCallback } from "react";

export function useToast(): (options: IToastOptions) => void {
  const toast = chakraUseToast();

  const toasted = useCallback(
    ({ message, type }: IToastOptions) => {
      toast({
        description: message,
        position: "top-right",
        isClosable: true,
        status: type,
        duration: 5000,
      });
    },
    [toast]
  );

  return toasted;
}
