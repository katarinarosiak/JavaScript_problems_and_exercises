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

//1. Return an array of objects with all the employees from the management department who will be fired 
// [{name: 'Anna', position: 'HR manager', salary: 200},
// {name: 'Karen', position: 'Project Manager', salary: 100}]


// - get an array with workers from the management depratment  [{}, {}]
//   - filetr out department that are not management (!department: managemnt)
//   - acces workers 
// - - get an array with names of all the wokrers to fire from management 
//   - workersTOFire.management ['', '']

// - filter out all the objects that name is not includes in the workers to fire arr
// - return that 


function working(workspace, workersToFire) {
  let managers = workspace.filter(obj => obj.department === 'management')[0].workers;
  let toFire = workersToFire.management;

  return managers.filter(manager => toFire.includes(manager.name));

}

console.log(working(workspace, workersToFire))