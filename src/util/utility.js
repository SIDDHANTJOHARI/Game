// generate Random NumberBetween 1 and n
const generateRandomNumber = (n, t) => {
  while (1) {
    let num = parseInt(Math.random() * n + 1);
    if (t.indexOf(num) == -1) return num;
  }
};
export default generateRandomNumber;
//console.log(generateRandomNumber(10,[1,2,3,4,5,6,7,8]))
