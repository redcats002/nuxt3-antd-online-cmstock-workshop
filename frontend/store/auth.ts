import { message } from "ant-design-vue";
import { FetchingStatus } from "~/models/FetchingStatus";
import { Session } from "~/models/session.model";
import { User } from "~/models/user.model";

export const useAuth = defineStore("auth", () => {
  const username = useCookie(server.TOKEN_KEY);
  const token = useCookie(server.TOKEN_KEY);
  const fetchingStatus = ref<FetchingStatus>(FetchingStatus.init);
  const session = reactive<Session>({ isLoggedIn: false });
  const api = useApi();
  const router = useRouter();
  const restoreSession = () => {
    if (!!token.value && !!username.value) {
      session.isLoggedIn = true;
      session.username = username.value!;
    } else {
      session.isLoggedIn = false;
    }
  };

  const login = async (user: User) => {
    try {
      fetchingStatus.value = FetchingStatus.fetching;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const result = await api.login(user);

      if (result == true) {
        session.username = user.username;
        session.isLoggedIn = true;
        fetchingStatus.value = FetchingStatus.success;
        message.success("Login successful");
      } else {
        session.isLoggedIn = false;
        fetchingStatus.value = FetchingStatus.failed;
        message.error("Login Failed");
      }
      // router.push("/stock");
      // return await navigateTo("/login", { redirectCode: 301 });
      window.open("/stock", "_self");
    } catch (e) {
      session.isLoggedIn = false;
      fetchingStatus.value = FetchingStatus.failed;
      message.error("Something went wrong");
    }
  };

  const register = async (user: User) => {
    try {
      fetchingStatus.value = FetchingStatus.fetching;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const result = await api.register(user);
      if (result == true) {
        fetchingStatus.value = FetchingStatus.success;
        message.success("Register successful");
        return await navigateTo("/login", { redirectCode: 301 });
      } else {
        fetchingStatus.value = FetchingStatus.failed;
        message.error("Register Failed");
      }
    } catch (e) {
      fetchingStatus.value = FetchingStatus.failed;
      message.error("Something went wrong");
    }
  };

  const logout = async () => {
    username.value = null;
    token.value = null;
    session.isLoggedIn = false;
    session.username = undefined;
    console.log(`${username.value}====${token.value}`);
    message.success("Logout successful");
    return await navigateTo("/login");
  };

  const isLoading = () => fetchingStatus.value == FetchingStatus.fetching;

  return {
    restoreSession,
    session,
    logout,
    login,
    register,
    fetchingStatus,
    isLoading,
  };
});
