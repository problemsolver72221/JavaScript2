'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const tasks = monday.concat(tuesday);

// Add your code here

//1. Map the tasks to durations in hours:

const taskMapping = tasks.map((i) => i.duration / 60)

//2. Filter out everything that took less than two hours:

const plusTwoHour = taskMapping.filter((i) => i >= 2)

//3. Multiply the each duration by a per-hour rate for billing and sum it all up.

let maartjteRate = 9.67;
const maartjteSalary = plusTwoHour.reduce((sum,i) => {return sum + i * maartjteRate}, 0)

//4. Output a formatted Euro amount, rounded to Euro cents:

let euroFormat = "€" + (maartjteSalary * 10.31).toFixed(2)
console.log(euroFormat);