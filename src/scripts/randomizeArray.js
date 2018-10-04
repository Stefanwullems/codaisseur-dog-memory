export default (array, n) => {
  return randomize([], array, n);
};

const randomize = (randomizedArray, array, n) => {
  if (randomizedArray.length < n) {
    return randomize(...randomElement(array, randomizedArray), n);
  } else {
    return randomizedArray;
  }
};

const randomElement = (array, randomizedArray) => {
  return [
    [
      ...randomizedArray,
      array.splice([Math.floor(Math.random() * array.length)], 1)[0]
    ],
    array
  ];
};
