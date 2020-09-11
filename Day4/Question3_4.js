console.log("Question no 3 ans");
let ave = [
       {
         name: "ajay",
         age: 15,
         country:"india",
         hobbies:["singing","writing","cycling"] 
       },
       {
        name: "vijay",
         age: 10,
         country:"bhutan",
         hobbies:["singing","writing","cycling"]        },
       {
         name: "Imran",
         age: 43,
         country:"india",
         hobbies:["singing","writing","cycling"]        },
     ];

ave.forEach(function (ave){
    console.log(ave);
});

console.log("Question no 4 ans");
console.log("elements age less than 30 ")
ave.forEach(function (ave){
  if(ave.age < 30){
  console.log(ave);
  }
});

console.log("elements country india")
ave.forEach(function (ave){
if(ave.country=="india"){
  console.log(ave);
}
}
);