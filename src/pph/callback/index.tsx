import { useEffect } from "react";

const CallBack = () => {
  useEffect(() => {
    function greet(name: string, callback: () => void) {
      console.log(`Hello, ${name}!`);
      callback(); // Execute the callback function
    }

    // Callback function
    function sayGoodbye() {
      console.log("Goodbye!");
    }

    // Using the greet function with a callback
    greet("Alice", sayGoodbye);
  }, []);
  return <div> Callback</div>;
};

export default CallBack;
