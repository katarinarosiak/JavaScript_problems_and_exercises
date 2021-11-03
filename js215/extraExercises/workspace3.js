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



//new Workers includes invalid workers objects. Clean up the newWOrkers arrat and remove all the objects that includes undefined, NaN, '' as values. Lacking an of the keys that should be there. or the value is in a wrong data type or gives wrong information (name: '111'). null is not a valid worker either. 

// - has to be object but not null
// - if obj includes values as undeined, 'undeined', NaN, ''
// - if lacks any key 


// - filter out all that are not objects
// - get all the keys, remove all that appears only once: 
//     - grab duplicates 
// - filter out all that objects that's values are invalid: 
// - all the objects that has missing keys: 
//   - keys in the keys array is not includes in keys of that obejc 
//     - values are NaN, undefined, '', 'undefined' 
//     - string s includes numebrs 

function test(newWorkers) {
  newWorkers = newWorkers.filter(el => {
    if (typeof el !== 'object') return false;
    if (el === null) return false;
    return true;
  })

  let keys = newWorkers.map(obj => Object.keys(obj)).flat()
  let duplicates = keys.filter((key, idx) => keys.indexOf(key) === idx)

  return newWorkers.filter(worker => isValid(worker, duplicates))
}

function isValid(worker, duplicates) {
  let workerKeys = Object.keys(worker);
  let found = duplicates.some(name => !workerKeys.includes(name))
  if (found) return false;
  let val = Object.values(worker);

  if (val.includes(undefined) || val.includes('undefined') || val.includes(NaN)) return false;

  let RE = /\d/g
  return !Object.entries(worker).some(innerArr => {
    return innerArr.some(el => typeof el === 'string' && RE.test(el))
  })
}

console.log(test(newWorkers))