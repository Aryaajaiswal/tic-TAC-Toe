import { selectedBoxes } from "../mock.data";

export const selectedBoxesPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(selectedBoxes);
    }, 2000);
  });

// console.log("hello", selectedBoxesPromise);
