import { useEffect } from "react";

const Hoisting = () => {
  useEffect(() => {
    //Calling before declaration
    console.log(getData());

    function getData() {
      return "Hello This is function";
    }
    const nonHoist = () => {
      return "It will throw err if you call this function before declaratiom";
    };
    console.log(nonHoist());
  }, []);
  return <div> Hoisting</div>;
};

export default Hoisting;
