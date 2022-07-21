/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

//use 220 as upper limit and check if numbers are evenly divisable

//input = 8
//sum = []
/* for i = 1 up until less than 8 i++ {
    if (8 % i == 0)
    {
        sum.push(i)
    }
    return sum => [1, 2, 4]
    add all numbers in sum => 7
    d(7) = [1]

}


*/

function d(input) {
    let sumArray = [];
    let sum = 0;
    if (input == 1) {
        return 0
    }
    for (let i = 1; i < input; i++) {
        if (input % i == 0) {
            sumArray.push(i);
        }
      }

       sum = sumArray.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
        });
    return sum;

    /*

    input = 6
    sumArray = []
    sum = 0


    for i = 1; i < input; i++ {
        if (input % i == 0)
        {
            sumArray.push(i)
        }
    }

    reduce arary to 6 [1, 2, 3]

    do the same thing for 7

    */
}
function isaAmicableNumberPair(initialInput) {
    const a = d(initialInput); // => 6
    const b = d(a); // => 6
    if (a != b) {
        if (b == initialInput) {
            return true;
        }
    }  
    return false;
}

function lessThanTenThousand() {
    let sum = 0
    for (let i = 220; i < 10000; i++) {
        if (isaAmicableNumberPair(i)) {
            sum += i
        }
    }
    return sum
}
console.log(lessThanTenThousand());