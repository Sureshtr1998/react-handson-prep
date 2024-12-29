import { useState, useEffect, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function ErrorBoundaryFunction(props: Props) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      // Log the error to an error reporting service
      console.error(
        "Error Boundary caught an error:",
        event.error,
        event.message
      );
      setHasError(true);
    };

    // Assign error handling to the global error event
    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  if (hasError) {
    // Fallback UI when an error occurs
    return <p>Something went wrong. Please try again later.</p>;
  }

  return props.children;
}

export default ErrorBoundaryFunction;
