declare module "react-scroll" {
  import { ComponentType, ReactNode } from "react";

  interface ScrollLinkProps {
    to: string;
    smooth?: boolean;
    offset?: number;
    duration?: number;
    children: ReactNode;
    className?: string;
    onClick?: (event?: any) => void;
    style?: React.CSSProperties;
  }

  export const Link: ComponentType<ScrollLinkProps>;
  export const Element: ComponentType<{
    name: string;
    children: ReactNode;
    className?: string;
  }>;
  export const scroller: {
    scrollTo(target: string, options?: any): void;
  };
}
