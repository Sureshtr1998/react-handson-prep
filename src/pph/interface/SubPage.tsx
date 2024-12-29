import { ReactNode } from "react";

interface Props<T, U> {
  random: T;
  value: U;
}
const SubPage = <T extends ReactNode, U extends ReactNode>(
  props: Props<T, U>
) => {
  const { random, value } = props;
  return (
    <div>
      {random} {value}
    </div>
  );
};

export default SubPage;
