import React from "react";

export const useLoading = (init = false) => {
  const [isLoading, setIsLoading] = React.useState(init);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return [isLoading, startLoading, stopLoading];
};
