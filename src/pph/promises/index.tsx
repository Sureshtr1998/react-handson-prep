import { useEffect } from "react";

const Promises = () => {
  useEffect(() => {
    // Example using async/await with a Promise-based function

    // Asynchronous function that returns a Promise
    function getData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("PROMISES Data fetched successfully");
        }, 2000);
      });
    }
    const data = new Promise((res) => {
      setTimeout(() => {
        res("PROMISES HEYY");
      }, 5000);
    });

    // Async function using await to handle asynchronous code
    async function fetchData() {
      try {
        console.log(" PROMISES Fetching data...");
        await data.then((res) => {
          console.log(res);
        });
        const result = await getData(); // Pause until the Promise is resolved
        console.log(result); // Output: "Data fetched successfully"
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchData(); // Call the async function
  }, []);
  return <div> Callback</div>;
};

export default Promises;
