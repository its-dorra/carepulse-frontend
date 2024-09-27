import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { privateAxios } from "../kyInstances";
import { AxiosError } from "axios";

export interface AuthContextInterface {
  token?: string | null;
  updateToken: (token: string) => void;
}

const AuthContext = createContext<AuthContextInterface | null>(null);

export const AuthProvider: FC = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState<string | null>();

  useLayoutEffect(() => {
    const authInterceptior = privateAxios.interceptors.request.use((config) => {
      config.headers.Authorization =
        token && !(config as any)._retry
          ? `Bearer ${token}`
          : config.headers.Authorization;

      return config;
    });

    return () => {
      privateAxios.interceptors.request.eject(authInterceptior);
    };
  }, [token]);

  useLayoutEffect(() => {
    const refreshInterceptor = privateAxios.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config;

        if (error.status === 403 && error.message === "Unauthorized") {
          try {
            const response = await privateAxios.get("/auth/refreshToken");
            setToken(response.data.accessToken);

            originalRequest!.headers.Authorization = `Bearer ${response.data.accessToken}`;
            (originalRequest as any)._retry = true;
            return privateAxios(originalRequest!);
          } catch (err) {
            setToken(null);
          }
        }
        return Promise.reject(error);
      },
    );

    return () => {
      privateAxios.interceptors.response.eject(refreshInterceptor);
    };
  }, []);

  const updateToken = useCallback((token: string) => {
    setToken(token);
  }, []);

  return (
    <AuthContext.Provider value={{ token, updateToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = function () {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error("useAuth must be used insided the AuthProvider");

  return context;
};
