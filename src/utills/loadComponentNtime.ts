import React from "react";

export const loadComponentNtime = (component: React.ReactNode, n: number) => {
  const components = [];

  for (let i = 0; i < n; i++) {
    components.push(component);
  }
  return components;
};
