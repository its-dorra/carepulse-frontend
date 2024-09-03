import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';

export interface AuthContextInterface {
  token: string | null;
  updateToken: (token: string) => void;
}

const AuthContext = createContext<AuthContextInterface | null>(null);

export const AuthProvider: FC = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState<string | null>(null);

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
    throw new Error('useAuth must be used insided the AuthProvider');

  return context;
};
