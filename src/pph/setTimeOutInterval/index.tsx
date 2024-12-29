import { useEffect } from "react";

const SetTimeOutInterval = () => {
  useEffect(() => {
    setTimeout(() => {
      console.log("This message will appear after 2 seconds.");
    }, 2000);

    let counter = 0;
    const intervalID = setInterval(() => {
      console.log(`Counter: ${counter}`);
      counter++;
      if (counter === 5) {
        console.log(`Counter: ${counter}, stopping....`);
        clearInterval(intervalID); // Stops the interval after counter reaches 5
      }
    }, 1000);
  }, []);
  return <div> Set TimeOut & Interval</div>;
};

export default SetTimeOutInterval;
