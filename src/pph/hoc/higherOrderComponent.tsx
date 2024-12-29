// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HigherOrderComponent = (WrappedComponent: any) => {
  return (
    <WrappedComponent {...WrappedComponent.props} isAuthenticated={false} />
  );
};

export default HigherOrderComponent;
