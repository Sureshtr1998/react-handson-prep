/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

const Programming = () => {
  const factorialNum = (val: number): number => {
    if (val === 0) {
      return 1;
    } else {
      return val * factorialNum(val - 1);
    }
  };
  const fibonacci = (len: number): number => {
    if (len <= 1) return len;
    else {
      return fibonacci(len - 1) + fibonacci(len - 2);
    }
  };
  const reverseString = (name: string): string => {
    if (name === "") {
      return "";
    }
    return reverseString(name.substring(1)) + name.charAt(0);
    // return name.split("").reverse().join("");
  };

  const bubleSort = (arr: number[]): number[] => {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const objFlat = (): any => {
    const a = {
      abc: "123",
      def: "456",
      ghi: {
        jkl: "mno",
        pqr: "zzz",
        stu: {
          vwx: "xyz",
          num: {
            last: "1234",
          },
        },
      },
    };
    const getFlat = (obj: any, prefix: string = ""): any => {
      let flattened: Record<string, any> = {};

      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === "object" && obj[key] !== null) {
            const nested = getFlat(obj[key], `${prefix}${key}.`);
            flattened = { ...flattened, ...nested };
          } else {
            flattened[`${prefix}${key}`] = obj[key];
          }
        }
      }

      return flattened;
    };

    const flat = getFlat(a);

    return flat;
  };

  const maxChar = (str: string) => {
    const charCount: any = {};

    for (const char of str) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
    let maxCount = 0;
    for (const count in charCount) {
      if (charCount[count] > maxCount) {
        maxCount = charCount[count];
      }
    }

    return maxCount;

    // if (str.length === 0) {
    //   return 0;
    // }
    // let maxCount = 1;
    // let currentCount = 1;
    // for (let i = 0; i < str.length - 1; i++) {
    //   if (str.charAt(i) === str.charAt(i + 1)) {
    //     currentCount++;
    //     if (currentCount > maxCount) {
    //       maxCount = currentCount;
    //     }
    //   } else {
    //     currentCount = 1;
    //   }
    // }
    // return maxCount;
    // Write a logic to count the maximum number of repeating characters in string
  };
  //   0 1 1 2 3 5 8 13

  const moveZero = (arr: number[]) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === 0) {
        arr.splice(i, 1);
        arr.splice(arr.length, 0, 0);
      }
    }
    return arr;
  };

  useEffect(() => {
    console.log("PRO FACT", factorialNum(5));
    console.log("PRO FIBBO", fibonacci(10));
    console.log("PRO Reverse String", reverseString("Suresh"));
    console.log("PRO Bubble Sort", bubleSort([20, 32, 12, 43, 11, 5, 92, 7]));
    console.log("PRO Object Flat", objFlat());
    console.log("PRO maxChar", maxChar("Suruseshs"));
    console.log("PRO move zero", moveZero([1, 2, 0, 4, 3, 0, 5, 0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Factorial of a number</div>;
};

export default Programming;
