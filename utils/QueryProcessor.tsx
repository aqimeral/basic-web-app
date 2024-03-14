export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew")) {
    return (
      "runxinz"
    );
  }
  if (query.toLowerCase().includes("what is your name")) {
    return (
      "cassandra"
    );
  }
  if (query.toLowerCase().includes("what is your player id")) {
    return (
      "efa159ad"
    );
  }

  if (query.toLowerCase().includes("largest:")) {
    // Extract numbers from the query
    const match = query.match(/\d+/g);
    if (match) {
      const numbers = match.map(Number);
    
    // Find the largest number
    const largest = Math.max(...numbers);
  
    return `${largest}`;
  }
}

if (query.toLowerCase().includes("multiplied")) {
  // Extract numbers from the query
  const match = query.match(/\d+/g);
  if (match) {
    const numbers = match.map(Number);
  
  /// Multiply all the numbers
  let product = 1;
  for (const num of numbers) {
    product *= num;
  }

  return `${product}`;
  }}
  
  if (query.toLowerCase().includes("plus")) {
    // Extract numbers from the query
    const match = query.match(/\d+/g);
    if (match) {
      const numbers = match.map(Number);

      // Add all the numbers
      const sum = numbers.reduce((acc, num) => acc + num, 0);

      return `${sum}`;
    }
  }

  if (query.toLowerCase().includes("cube")) {
    // Extract numbers from the query
    const match = query.match(/\d+/g);
    if (match) {
      const numbers = match.map(Number);


      for (const num of numbers) {
        // Check if the number is a perfect square
        const sqrt = Math.sqrt(num);
        if (Number.isInteger(sqrt)) {
          // Check if the square root is also a perfect cube
          const cubeRoot = Math.cbrt(num);
          if (Number.isInteger(cubeRoot)) {
            // Return the number if it's both a perfect square and a perfect cube
            return `${num}`;
          }
        }
      }

    }
  }

  if (query.toLowerCase().includes("minus")) {
    // Extract numbers from the query
    const match = query.match(/\d+/g);
    if (match) {
      const numbers = match.map(Number);

          // Subtract all the numbers starting from the first number
    const difference = numbers.reduce((acc, num, index) => {
      // For the first number, simply return the number itself
      if (index === 0) {
        return num;
      }
      // For subsequent numbers, subtract them from the accumulated result
      return acc - num;
    }, 0);

    return `${difference}`;
    }
  }

  if (query.toLowerCase().includes("prime")) {
    // Extract numbers from the query
    const match = query.match(/\d+/g);
    if (match) {
      const numbers = match.map(Number);


      for (const num of numbers) {
        if (num <= 1) {
        }
        
        // Check for divisibility by numbers up to the square root of the given number
        const sqrtNum = Math.sqrt(num);
        for (let i = 2; i <= sqrtNum; i++) {
          if (num % i === 0) {
            // If the number is divisible by any other number, it's not prime
          }
        }
        return `${num}`;
      }

    }
  }

  if (query.toLowerCase().includes("power of")) {
    // Extract numbers from the query
    const match = query.match(/\d+/g);
    if (match && match.length >= 2) {
      const base = Number(match[0]);
      const exponent = Number(match[1]);
  
      // Calculate the result
      const result = Math.pow(base, exponent);
  
      return `${result}`;
    }
  }

  function isPrime(num: number): boolean {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Your query processing code
  if (query.toLowerCase().includes("primes")) {
    // Extract numbers from the query
    const match = query.match(/\d+/g);
    if (match) {
      const numbers = match.map(Number);
  
      // Check each number for primality
      const primes = numbers.filter(num => isPrime(num));
  
      return `${primes.join(", ")}`;
    }
  }
  
  

  
  return "";
}
