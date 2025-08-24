import * as React from "react";

export type ToastProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  // Add other props as needed for your toast implementation
};

export type ToastActionElement = React.ReactNode;
