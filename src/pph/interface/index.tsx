import SubPage from "./SubPage";

const Interface = () => {
  return (
    <div id="lazy-id">
      <SubPage<string, string> random="10" value="123" />
      <SubPage random="10" value={123} />
      <SubPage random={10} value={123} />
    </div>
  );
};

export default Interface;
