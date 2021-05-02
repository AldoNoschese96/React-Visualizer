function generateRandomArray(min = 0, max = 60, c = 0, arr = []) {
  let counter = c;
  const array = arr;
  if (c >= max) {
    return array;
  }
  const random = Math.floor(Math.random() * (max - min) + min);

  if (!array.includes(random)) {
    array.push(random);
    counter++;
  }
  return generateRandomArray(min, max, counter, array);
}

export default generateRandomArray;
