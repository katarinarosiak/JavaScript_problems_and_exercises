

function makeList(task) {
  let allToDos = [];
  return {
    add(task) {
      allToDos.push(task);
      console.log(`${task} added!`);
    },
    list() {
      allToDos.forEach(el => console.log(el));
    },
    remove(task) {
      allToDos.splice(allToDos.indexOf(task), 1);
      console.log(`${task} removed!`);
    }
  }
}
//     if (!task) {
//       !allToDos.length ? console.log('The list is empty') : allToDos.forEach(el => console.log(el));
//     } else if (allToDos.includes(task)) {
//       allToDos.splice(allToDos.indexOf(task), 1);
//       console.log(`${task} removed!`);
//      } else {

//      }
//   }
// }

let list = makeList();
list.add("peas");
// peas added!

list.list();
// peas

list.add("corn");
// corn added!

list.list();
// peas
// corn

list.remove("peas");
// peas removed!

list.list();
// corn


