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

  // if (query.toLowerCase().includes("plus")) {
  //   // Extract numbers from the query
  //   const numbers = query.match(/\d+/g).map(Number);
    
  //   // Find the largest number
  //   const theirsum = Math.sum(...numbers);
  
  //   return `${theirsum}`;
  // }
  

  return "";
}
