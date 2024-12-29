import "./App.css";
import CallBack from "./pph/callback";
import ReactUseContext from "./pph/context/main";
import DeepShallow from "./pph/deepShallow";
import ErrorBoundExamp from "./pph/errorBoundary";
import Hoisting from "./pph/hoist";
import Interface from "./pph/interface";
import LazyComp from "./pph/lazy";
import MagicPortal from "./pph/portal/data";
import Programming from "./pph/programm";
import Promises from "./pph/promises";
import ReactRedux from "./pph/reactRedux";
import SetTimeOutInterval from "./pph/setTimeOutInterval";
import ShimmerLoading from "./pph/shimmer";



const App=() =>{

  return (
    <>
      <Interface />
      <ReactUseContext />
      <CallBack />
      <Promises />
      <LazyComp />
      <ErrorBoundExamp />
      <MagicPortal />
      <Hoisting />
      <DeepShallow />
      <SetTimeOutInterval />
      <ShimmerLoading />
      <Programming />
      <ReactRedux />
      {/* <WrappedComponent /> */}
    </>
  );
}

export default App;
