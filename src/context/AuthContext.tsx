import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import api from "../lib/api";

type Role = "admin" | "user";

type AuthUser = { id: string; email: string; role: Role } | null;

type AuthContextValue = {
  user: AuthUser;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
  refreshMe: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue>({} as any);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const t = localStorage.getItem("access_token");
    const u = localStorage.getItem("auth_user");
    if (t) setToken(t);
    if (u) setUser(JSON.parse(u));
  }, []);

  const persist = (token: string, user: AuthUser) => {
    setToken(token);
    setUser(user);
    localStorage.setItem("access_token", token);
    localStorage.setItem("auth_user", JSON.stringify(user));
  };

  const login = async (email: string, password: string) => {
    const { data } = await api.post("/auth/login", { email, password });
    persist(data.token, data.user);
  };

  const register = async (email: string, password: string) => {
    const { data } = await api.post("/auth/register", { email, password });
    persist(data.token, data.user);
  };

  const refreshMe = async () => {
    const { data } = await api.get("/auth/me");
    setUser(data);
    localStorage.setItem("auth_user", JSON.stringify(data));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("access_token");
    localStorage.removeItem("auth_user");
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, register, logout, refreshMe }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
