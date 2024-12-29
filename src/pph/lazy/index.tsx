import React, { Suspense } from "react";

const MyLazyComponent = React.lazy(() => import("./myLazyComp"));

function LazyComp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyLazyComponent />
    </Suspense>
  );
}

export default LazyComp;
