let superheroes = [
    {
      name: "Ajay",
      age: 15,
      City: "Pune",
      salary: "6.3L",
    },
    {
      name: "Vijay",
      age: 24,
      City: "Mumbai",
      salary: "5.10L",
    },
    {
      name: "Rahul",
      age: 21,
      City: "Nashik",
      salary: "3L",
    },
    {
        name: "Vikas",
        age: 21,
        City: "Indor",
        salary: "4L",
      },
      {
        name: "Majnubhai",
        age: 21,
        City: "Kanpur",
        salary: "6.2L",
      },
  ];
  
  function display(superarray) {
    let tabledata = "";
  
    superarray.forEach(function (superhero, index) {
      let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${superhero.name}</td>
      <td>${superhero.age}</td>
      <td>${superhero.City}</td>
      <td>${superhero.salary}</td>
      <td>
      <button onclick='deleteSuperhero(${index})'>delete</button>
      
      </td>
      </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    //   document.getElementById("tdata").innerHTML = tabledata;
  }
  
  display(superheroes);
  
  
  
  function searchByName() {
    let searchValue = document.getElementById("searchName").value;
  
    let newdata = superheroes.filter(function (superhero) {
      return (
        superhero.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }

  function searchByCity() {
    let searchValue = document.getElementById("searchCity").value;
  
    let newdata = superheroes.filter(function (superhero) {
      return (
        superhero.City.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }
  
  function deleteSuperhero(index) {
    superheroes.splice(index, 1);
    display(superheroes);
  }
  
    
  
