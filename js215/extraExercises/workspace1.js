let workspace = [
  {
    department: 'management',
    workers: [
      { name: 'Anna', position: 'HR manager', salary: 200 },
      { name: 'Karen', position: 'Project Manager', salary: 100 },
      { name: 'Jule', position: 'Managing Director', salary: 500 }]
  },
  {
    department: 'accounting',
    workers: [
      { name: 'Ben', position: 'accountant', salary: 100 },
      { name: 'Miles', position: 'accountant', salary: 100 },
      { name: 'Ann', position: 'accountant', salary: 100 }
    ]
  },
  {
    department: 'sales',
    workers: [
      { name: 'Victoria', position: 'seller', salary: 140 },
      { name: 'Johny', position: 'sales assistant', salary: 120 },
      { name: 'Mike', position: 'sales assistant', salary: 80 }
    ]
  }
]

let newWorkers = [{ name: 'jenny', position: 'accountant', salary: 100 }, { name: undefined, position: '', salary: NaN }, null, { name: '111', position: 'undefined', salary: '100' }, { position: 'accountant', salary: 100 }]

let workersToFire = {
  management: ['Anna', 'Karen'],
  accounting: ['Ben'],
  sales: ['Victoria']
}

//1. Return an array of objects with all the employees who will be fired 
// [
//   { name: 'Anna', position: 'HR manager', salary: 200 },
//   { name: 'Karen', position: 'Project Manager', salary: 100 },
//   { name: 'Ben', position: 'accountant', salary: 100 },
//   { name: 'Victoria', position: 'seller', salary: 140 }
// ]

// - get all the names of workers to fire ['', '']
// - worskpace : 
//   - get an array with all workers [{}, {}] => wokingPeople 
//   - filter out all the objects (workerTOfire)that's keys is not the name in the workers array: 
//     - ieterate throgh the working People array for each ieteartion 
//       - check if the name is the current wokrerstoFire name
//         - return true if yes
//         - false otehrwise 
// - return the arrya of obj

function working(workspace, workersToFire) {
  let toFire = Object.values(workersToFire).flat();
  let workers = workspace.map(department => Object.values(department)).map(innerArr => innerArr[1]).flat();

  return workers.filter(worker => isFired(worker, toFire));
}

function isFired(worker, toFire) {
  return toFire.includes(worker.name);
}


console.log(working(workspace, workersToFire));