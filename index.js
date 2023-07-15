/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((element, index, list) => {
    // check if the curr element profession is "developer"
    if (element.profession === "developer") {
      console.log(element.name);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((element, index, list) => {
    // check if the curr element profession is "developer"
    if (element.profession === "developer") {
      console.log(element.name);
    }
  });
}

function addData() {
  //Write your code here, just console.log

  // creating new object
  // let newObj = {
  //   id: 4,
  //   name: "susan",
  //   age: "20",
  //   profession: "intern",
  // }
  // another way simpler one
  arr.push({
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern",
  });
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].profession === "admin") {
      arr.splice(i, 1);
    }
  }
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newObj = [
    { id: 5, name: "sun", age: "22", profession: "tester" },
    { id: 7, name: "mun", age: "23", profession: "fooder" },
    { id: 6, name: "bun", age: "24", profession: "coder" },
  ];

  console.log(arr.concat(newObj));
}
