/* Write an ES2015 Version */

const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  const {a,b} = obj.numbers




  
  [arr[0], arr[1]] = [arr[1], arr[0]]








  raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

// {first: "Tom", second: "Margaret", third: "Allison", rest: ["David", "Pierre"]}

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})