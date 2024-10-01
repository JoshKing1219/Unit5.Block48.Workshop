const queueManager = (queue) => {
  //sort the input
  queue.sort((a, b) => b[0] - a[0] || (b[0] === a[0] && a[1] - b[1]));

  const result = [];

  //loop through the queue array
  for (let person of queue) {
    const [height, k] = person;
    //add each person to the front of the array
    result.splice(k, 0, person);
  }

  return result;
};

module.exports = {
  queueManager,
};
