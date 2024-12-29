import HigherOrderComponent from "./higherOrderComponent";

interface Props {
  isAuthenticated: boolean;
}

const HOC = (props: Props) => {
  return (
    <div>{props.isAuthenticated ? "Authenticated" : "Not Authenticated"}</div>
  );
};
const WrappedComponent = HigherOrderComponent(HOC);
export default WrappedComponent;
