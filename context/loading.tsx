"use client";

import React, { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

interface LoadingContextValue {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextValue | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);

  const startLoading = useCallback(() => {
    setCount((current) => current + 1);
  }, []);

  const stopLoading = useCallback(() => {
    setCount((current) => Math.max(0, current - 1));
  }, []);

  const value = useMemo(
    () => ({
      isLoading: count > 0,
      startLoading,
      stopLoading,
    }),
    [count, startLoading, stopLoading],
  );

  return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>;
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}
