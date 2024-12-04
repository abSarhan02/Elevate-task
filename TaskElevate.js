function findPrimeNumbers(n, m) {
    let primeNumbers = []; // Array to conserve the prime numbers
    
    if (n > m || n < 2 || n > 1000) {
        console.log("Error!");
        return;
    }

    // Loop at numbers between n and m
    for (let i = n; i <= m; i++) {
        let isPrime = true; 
        
        if (i < 2) {
            isPrime = false; // numbers less than 2, are not prime
        } else {
            for (let j = 2; j * j <= i; j++) {
                if (i % j === 0) {
                    isPrime = false; 
                    break;
                }
            }
        }
        
        if (isPrime) {
            primeNumbers.push(i);
        }
    }

    return primeNumbers; 
}


let result = findPrimeNumbers(1, 10);
console.log("Prime numbers found:", result);
