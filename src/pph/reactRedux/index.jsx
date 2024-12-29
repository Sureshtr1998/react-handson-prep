import { Provider } from "react-redux";
import Counter from "./counter.jsx";
import store from "./store.js";

const ReactRedux = () => {
  return (
  <Provider store={store}>
    <div>
      <Counter />
    </div>
  </Provider>
  );
};

export default ReactRedux;
