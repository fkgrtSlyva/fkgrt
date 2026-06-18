"use client";
import React, { useState, useContext } from "react";
import { GlobalQuery } from "../../tina/__generated__/types";

interface LayoutState {
  globalSettings: GlobalQuery["global"];
  setGlobalSettings: React.Dispatch<
    React.SetStateAction<GlobalQuery["global"]>
  >;
  pageData: {};
  setPageData: React.Dispatch<React.SetStateAction<{}>>;
  theme: GlobalQuery["global"]["theme"];
  // Ukrainian paths that have an English translation (built from public/en).
  enRoutes: string[];
}

const LayoutContext = React.createContext<LayoutState | undefined>(undefined);

export const useLayout = () => {
  const context = useContext(LayoutContext);
  return (
    context || {
      theme: {
        color: "blue",
        darkMode: "default",
      },
      globalSettings: undefined,
      pageData: undefined,
      enRoutes: [],
    }
  );
};

interface LayoutProviderProps {
  children: React.ReactNode;
  globalSettings: GlobalQuery["global"];
  pageData: {};
  enRoutes: string[];
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({
  children,
  globalSettings: initialGlobalSettings,
  pageData: initialPageData,
  enRoutes,
}) => {
  const [globalSettings, setGlobalSettings] = useState<GlobalQuery["global"]>(
    initialGlobalSettings
  );
  const [pageData, setPageData] = useState<{}>(initialPageData);

  const theme = globalSettings.theme;

  return (
    <LayoutContext.Provider
      value={{
        globalSettings,
        setGlobalSettings,
        pageData,
        setPageData,
        theme,
        enRoutes,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
