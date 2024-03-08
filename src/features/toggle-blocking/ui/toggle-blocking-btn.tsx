import React from "react";
import { useToggleBlocking } from "../model/use-toggle-blocking";
import Button from "@/shared/ui/button";

export const ToggleBlockingBtn = () => {
  const { isLoading, toggleBlocking, isBlockingEnabled, isReady } =
    useToggleBlocking();

  if (!isReady) return null;

  return (
    <Button
      variant={!isBlockingEnabled ? "primary" : "secondary"}
      disabled={isLoading}
      onClick={toggleBlocking}
    >
      {isBlockingEnabled ? "Disable" : "Enable"}
    </Button>
  );
};
