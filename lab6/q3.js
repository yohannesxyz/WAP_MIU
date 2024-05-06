function printNumbers(from, to) {
  let timerId = setInterval(() => {
    console.log(from);
    if (from == to) {
      clearInterval(timerId);
    }
    from++;
  }, 1000);
}
printNumbers(5, 10);
