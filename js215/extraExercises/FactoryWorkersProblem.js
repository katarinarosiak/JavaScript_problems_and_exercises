7. Factory Workers Problem: 
    
    You are given two nested objects: an object 'humanResources' with managers and all the workers that they manage and a 'machines' object with all the machines that are used in the factory.The machines consist of an array of workers who operate machines.
    
    - each worker assigned to operate the machine increases the 'utilization' by 25 %.So if there are:
  - 0 workers - utilization is 0
    - 1 worker - utilization is 25
      - 2 workers - utilization is 50
        
        and so on. 
        
    - Each machine can have max 4 workers and 100 % utilization.
    
    Your task is to return mutate and return machine object so that each machine has maximum possible utilization with minimum possible cost. (based on workers' salary) while the budget is a maximum of 45. 

        ```jsx
    let humanResources = {
        'john': {'kate': {'salary': 13, 'yearsOfExperience': 2},
            'eva': {'salary': 10,'yearsOfExperience': 3},
            'anna':  {'salary': 15,'yearsOfExperience': 4},
            },
        'felix':
          {'margo':{'salary': 13,'yearsOfExperience': 3},
          'stan':{'salary': 10,'yearsOfExperience': 4},
          'cris':{'salary': 20,'yearsOfExperience': 1},
          },
        'jane':
          {'ian':{'salary': 17,'yearsOfExperience': 5},
          'ben':{'salary': 11,'yearsOfExperience': 5},
          'caro':{'salary': 13,'yearsOfExperience': 3},
          }
        };
    
    let machines = {
        'mill':{
                'utilization': 0,  
                'names_of_workers': [],
                },
        'grinder':{
                'utilization':0,   
                'names_of_workers':[],
                },
        'shaper':{
                 'utilization':0, 
                 'names_of_workers':[],
                 }
        };
    ```

    function factory(humanResources, machines) {
          let departments = Object.entries(humanResources).flatMap(manager => manager[1]);
          let workers = getWorkersSorted(departments);

          return assignWorkers(workers, machines);
        }

function assignWorkers(workers, machines) {
          let idx = 0;
          for (let key in machines) {
            let workersArr = machines[key].names_of_workers;
            let salaryArr = [];
            let budget = 0;

            while (true) {
              let currentMachineCost = sumCost(salaryArr) + workers[idx][1].salary;
              if (currentMachineCost <= 45) {
                salaryArr.push(workers[idx][1])
                workersArr.push(workers[idx][0])
                machines[key].utilization += 25;
                machines[key].currentMachineCost = currentMachineCost;
                idx++;
                if (idx >= workers.length) {
                  break;
                }
              } else {
                break;
              }
            }
          }

          return machines;
        }



function sumCost(workersArr) {
          if (workersArr.length === 0) return 0;
          return workersArr.reduce((acc, obj) => {
            return acc + obj.salary
          }, 0);
        }


function getWorkersSorted(departments) {
          let workers = [];
          departments.forEach(obj => {
            for (let key in obj) {
              workers.push([key, obj[key]]);
            }
          })
          return workers.sort((a, b) => a[1].salary - b[1].salary);
        }


console.log(factory(humanResources, machines));