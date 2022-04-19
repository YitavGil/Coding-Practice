const cache = {
    "0": 1,
    "1": 1,
  };
  
  const climbStairs = function (n) {
    //base cases
    if (n <= 1) return 1;
    for (let i = 2; i <= n; i++) {
      cache[i] = cache[i - 1] + cache[i - 2];
      console.log(cache);
    }
    return cache[n];
  };

  console.log(climbStairs(4));

  