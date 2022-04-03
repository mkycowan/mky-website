import React from "react";

type LayoutContextState =
  | {
      isMobileMenuOpen: boolean;
    }
  | undefined;

export const LayoutContext = React.createContext<LayoutContextState>(undefined);

export const useLayout = () => {
  const layoutContext = React.useContext<LayoutContextState>(LayoutContext);
  if (layoutContext === undefined) {
    throw new Error(
      "'useLayoutContext' is being used outside of it's context - 'LayoutContext'",
    );
  }
  return layoutContext;
};

export default LayoutContext;
