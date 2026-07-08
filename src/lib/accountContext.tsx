"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  createMockUser,
  findUserByCredentials,
  mockUsers,
  toPublicUser,
  type MockUser,
} from "@/lib/mockAccount";

const STORAGE_KEY = "compute-beauty-account";

type PublicUser = Omit<MockUser, "password">;

type StoredAccountState = {
  userId: string | null;
  customUsers: MockUser[];
};

type AccountContextValue = {
  user: PublicUser | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => string | null;
  signUp: (name: string, email: string, password: string) => string | null;
  signOut: () => void;
};

const AccountContext = createContext<AccountContextValue | null>(null);

function loadStoredState(): StoredAccountState {
  if (typeof window === "undefined") {
    return { userId: null, customUsers: [] };
  }

  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return { userId: null, customUsers: [] };
  }

  try {
    return JSON.parse(raw) as StoredAccountState;
  } catch {
    return { userId: null, customUsers: [] };
  }
}

function saveStoredState(state: StoredAccountState) {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function AccountProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<MockUser[]>(mockUsers);
  const [user, setUser] = useState<PublicUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = loadStoredState();
    const allUsers = [...mockUsers, ...stored.customUsers];
    setUsers(allUsers);

    if (stored.userId) {
      const activeUser = allUsers.find((entry) => entry.id === stored.userId);
      if (activeUser) {
        setUser(toPublicUser(activeUser));
      }
    }

    setIsLoading(false);
  }, []);

  const persistSession = useCallback(
    (nextUsers: MockUser[], activeUser: MockUser | null) => {
      const customUsers = nextUsers.filter(
        (entry) => !mockUsers.some((seed) => seed.id === entry.id),
      );

      saveStoredState({
        userId: activeUser?.id ?? null,
        customUsers,
      });
    },
    [],
  );

  const signIn = useCallback(
    (email: string, password: string) => {
      const match = findUserByCredentials(users, email, password);
      if (!match) {
        return "Invalid email or password. Try the demo credentials below.";
      }

      const publicUser = toPublicUser(match);
      setUser(publicUser);
      persistSession(users, match);
      return null;
    },
    [users, persistSession],
  );

  const signUp = useCallback(
    (name: string, email: string, password: string) => {
      const normalizedEmail = email.trim().toLowerCase();

      if (!name.trim()) {
        return "Please enter your name.";
      }
      if (!normalizedEmail) {
        return "Please enter your email.";
      }
      if (password.length < 6) {
        return "Password must be at least 6 characters.";
      }
      if (users.some((entry) => entry.email.toLowerCase() === normalizedEmail)) {
        return "An account with this email already exists.";
      }

      const newUser = createMockUser(name, email, password);
      const nextUsers = [...users, newUser];
      setUsers(nextUsers);
      setUser(toPublicUser(newUser));
      persistSession(nextUsers, newUser);
      return null;
    },
    [users, persistSession],
  );

  const signOut = useCallback(() => {
    setUser(null);
    persistSession(users, null);
  }, [users, persistSession]);

  const value = useMemo(
    () => ({ user, isLoading, signIn, signUp, signOut }),
    [user, isLoading, signIn, signUp, signOut],
  );

  return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>;
}

export function useAccount() {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error("useAccount must be used within AccountProvider");
  }
  return context;
}
