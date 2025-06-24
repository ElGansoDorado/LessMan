import { rqClient } from "@/shared/api/instance";
import { ApiSchemas } from "@/shared/api/schema";
import { ROUTES } from "@/shared/model/routes";
import { useNavigate } from "react-router";

export function useRegister() {
  const navigate = useNavigate();

  const loginMutation = rqClient.useMutation("post", "/auth/register", {
    onSuccess() {
      navigate(ROUTES.HOME);
    },
  });

  const regist = (data: ApiSchemas["RegisterRequest"]) => {
    loginMutation.mutate({ body: data });
  };

  const errorMessage = loginMutation.isError
    ? loginMutation.error.message
    : undefined;

  return { regist, isPending: loginMutation.isPending, errorMessage };
}
