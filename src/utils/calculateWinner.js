export const calculateWinner = (boxes) => {
  //012, 345, 678

  if (
    boxes[0]?.selected === boxes[1]?.selected &&
    boxes[0]?.selected === boxes[2]?.selected &&
    boxes[0]?.selected !== ""
  ) {
    return boxes[0]?.selected;
  }

  if (
    boxes[3]?.selected === boxes[4]?.selected &&
    boxes[3]?.selected === boxes[5]?.selected &&
    boxes[3]?.selected !== ""
  ) {
    return boxes[3]?.selected;
  }

  if (
    boxes[6]?.selected === boxes[7]?.selected &&
    boxes[6]?.selected === boxes[8]?.selected &&
    boxes[6]?.selected !== ""
  ) {
    return boxes[6]?.selected;
  }
};

// console.log(calculateWinner(selectedBoxes));
