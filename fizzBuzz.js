// print the numbers from one to 100. if the number
// is a multiple of three, print fizz.
// if the number is a multiple of 5, print buzz.
// if its a multiple of both, print fizzbuzz

for (i = 1; i <= 100; i++) {


  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz')
  } else if (i % 3 === 0) {
    console.log('fizz');
  } else if (i % 5 === 0) {
    console.log('buzz');
  } else {
    console.log(i)
  }

}





