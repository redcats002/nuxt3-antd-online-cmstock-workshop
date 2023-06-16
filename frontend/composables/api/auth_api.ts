import type { User } from "~/models/user.model";
import { server } from "~/utils/constants";
import { useFetcher } from "~/composables/useFetcher";

const { fetch } = useFetcher();

export const login = async (values: User) => {
  const result = await fetch(server.LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  if (result.result == "ok") {
    const username = useCookie(server.USERNAME);
    const token = useCookie(server.TOKEN_KEY);
    username.value = values.username;
    token.value = "DUMP token";

    return true;
  }
  return false;
};

export const register = async (values: User) => {
  const result = await fetch(server.REGISTER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  if (result.result == "ok") {
    return true;
  }
  return false;
};
