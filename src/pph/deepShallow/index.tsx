import { useEffect } from "react";
import _ from "lodash";

const DeepShallow = () => {
  useEffect(() => {
    //It only goes one level deep, so if the original object has nested objects or arrays, the references to those nested structures are copied, not the actual nested objects themselves.
    //This concept is for only array and object

    const originalObject = { a: 1, b: { c: 2 } };

    // Shallow copy using spread operator for objects
    const shallowCopy = { ...originalObject };
    //here 1 level won't get affected in this case a won't be strongly coupled,but c is affected in both obj
    originalObject.a = 100;
    originalObject.b.c = 200; // Modifying the nested object in the original

    console.log(shallowCopy);

    const deepExampleObj = { a: 1, b: { c: 2 } };
    const deepCopy = _.cloneDeep(deepExampleObj);
    // _.debounce;
    // _.throttle;

    deepExampleObj.b.c = 200; // Modifying the nested object in the original

    console.log(deepCopy);
  }, []);
  return <div> Deep and Shallow Copy</div>;
};

export default DeepShallow;
