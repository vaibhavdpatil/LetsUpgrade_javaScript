// Program to display only element contain "a" in array of string  
let data = ["apple","nirv","aajay","vvv","ccc","abc"];
console.log("element those contain \"a\" ");
for(let i=0;i<data.length;i++){
   let c=data[i];
    if (c.includes("a")== true){
        console.log(c);
    }
}