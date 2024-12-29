import { useEffect, useState } from "react";
import ErrorBoundaryFunction from "./errorHandler";

const ErrorBoundExamp = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>();

  useEffect(() => {
    const callApi = async () => {
      const abc = await fetch("sdsad/sadsadsd");
      console.log(abc, "ABC");
      setData(abc);
    };
    callApi();
  }, []);
  return (
    <ErrorBoundaryFunction>
      <div> {data}</div>
    </ErrorBoundaryFunction>
  );
};

export default ErrorBoundExamp;
