const timeToBuyTickets = (tickets, k) => {
  // current index
  let i = 0;

  let time = 0;

  while (tickets[k] > 0) {
    //check if there available tickets at position
    if (tickets[i] > 0) {
      //remove a ticket
      tickets[i]--;
      //increase the time
      time++;
    }

    // moving to next element
    i++;
    //wrap around to front of array
    if (i > tickets.length) {
      i = 0;
    }
  }
  return time;
};

//to test with jest
module.exports = { timeToBuyTickets };
