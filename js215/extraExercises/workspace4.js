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



//Update the wprskpace array to remove all the workers to fire 
// 1. grab names of workers to fire 
// 2. for each department in the workspace: 
//   - accees workers: 
//     filter workers object that:
//       Are not on the list:
//       - iterate through each name of workers to fire:
//          if (the obj.name !== nameToFIre) 
///           
//     return the workspace



function fire(workspace, workersToFire) {
  let toFire = Object.values(workersToFire).flat();

  workspace.forEach(department => {
    update(department, toFire);
  })
  return workspace;
}

function update(department, toFire) {
  let workers = department.workers;

  let newArr = workers.filter(worker => !isOnTheList(worker, toFire));
  department.workers = newArr;
}

function isOnTheList(worker, toFire) {
  return toFire.includes(worker.name)
}



console.log(fire(workspace, workersToFire));