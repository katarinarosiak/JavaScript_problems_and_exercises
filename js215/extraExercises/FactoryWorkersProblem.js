// 7. Factory Workers Problem: 

//     You are given two nested objects: an object 'humanResources' with managers and all the workers that they manage and a 'machines' object with all the machines that are used in the factory.The machines consist of an array of workers who operate machines.

//     - each worker assigned to operate the machine increases the 'utilization' by 25 %.So if there are:
//   - 0 workers - utilization is 0
//     - 1 worker - utilization is 25
//       - 2 workers - utilization is 50

//         and so on. 

//     - Each machine can have max 4 workers and 100 % utilization.

//     Your task is to return mutate and return machine object so that each machine has maximum possible utilization with minimum possible cost. (based on workers' salary) while the budget is a maximum of 45. 


let humanResources = {
  'john': {
    'kate': { 'salary': 13, 'yearsOfExperience': 2 },
    'eva': { 'salary': 10, 'yearsOfExperience': 3 },
    'anna': { 'salary': 15, 'yearsOfExperience': 4 },
  },
  'felix':
  {
    'margo': { 'salary': 13, 'yearsOfExperience': 3 },
    'stan': { 'salary': 10, 'yearsOfExperience': 4 },
    'cris': { 'salary': 20, 'yearsOfExperience': 1 },
  },
  'jane':
  {
    'ian': { 'salary': 17, 'yearsOfExperience': 5 },
    'ben': { 'salary': 11, 'yearsOfExperience': 5 },
    'caro': { 'salary': 13, 'yearsOfExperience': 3 },
  }
};

let machines = {
  'mill': {
    'utilization': 0,
    'names_of_workers': [],
  },
  'grinder': {
    'utilization': 0,
    'names_of_workers': [],
  },
  'shaper': {
    'utilization': 0,
    'names_of_workers': [],
  }
};

function factory(humanResources, machines) {
  let workers = getWorkersSorted(humanResources);
  updateMachines(workers, machines);
  return machines
};

function getWorkersSorted(humanResources) {
  return Object.entries(humanResources).flatMap(arr => {
    return Object.entries(arr[1]);
  }).sort((a, b) => a[1].salary - b[1].salary);
}


function updateMachines(workers, machines) {
  let idx = 0;

  for (let key in machines) {

    let workersNames = machines[key].names_of_workers;
    let totalCost = [];

    while (true) {
      let currentWorker = workers[idx];
      if (moreThan45(currentWorker[1], totalCost)) {
        break;
      } else {
        workersNames.push(currentWorker[0]);
        totalCost.push(currentWorker[1]);
        idx++;
        machines[key].utilization += 25;
        if (idx >= workers.length) {
          break;
        }
      }
    }
  }
  return machines;
}

function moreThan45(currentWorker, totalCost) {
  let total = totalCost.slice();
  total.push(currentWorker);
  return total.reduce((acc, obj) => { return acc += obj.salary }, 0) > 45;
};

console.log(factory(humanResources, machines));