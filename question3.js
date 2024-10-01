const insertionSort = (array) => {
  //iterate over the array
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    //compare current element to predecessor and compare to others before
    while (j >= 0 && array[j] > key) {
      //move greater elements up to make space
      array[j + 1] = array[j];
      j = j - 1;
    }

    array[j + 1] = key;
  }
  return array;
};

const heightChecker = (heights) => {
  //copy the given array of heights and sort
  const sortedHeights = insertionSort([...heights]);

  //initialize mis-match count
  let misMatch = 0;

  //loop through the given array and compare each element to our sorted array
  heights.forEach((child, index) => {
    //if it doesn't match increase our mis-match count
    if (child !== sortedHeights[index]) {
      misMatch++;
    }
  });

  //return the mis-match count
  return misMatch;
};

//test with jest
module.exports = { heightChecker };
