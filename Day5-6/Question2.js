window.onload = function () {
    let initialbuses = [
      {
        name: "yashvanti",
        source:"mumbai",
        distination: "pune",
        bnumber: 1234,
        passcapacity:50,
      },
      {
        name: "Shivshahi",
        source:"Nashik",
        distination: "Jalgon",
        bnumber: 5678,
        passcapacity:30,
      },
      {
        name: "Jalpari",
        source:"dhule",
        distination: "satara",
        bnumber: 7845,
        passcapacity: 20,
      },
      {
        name: "Vijaynagri",
        source:"Vijapur",
        distination: "Nanded",
        bnumber: 7845,
        passcapacity: 20,
      },
    ];
  
    if (localStorage.getItem("buses") == null) {
      localStorage.setItem("buses", JSON.stringify(initialbuses));
    }
  };
  
  function display(superarray = undefined) {
    let tabledata = "";
    let buses;
    if (superarray == undefined) {
      buses = JSON.parse(localStorage.getItem("buses"));
    } else {
      buses = superarray;
    }
  
    buses.forEach(function (bus, index) {
      let currentrow = `<tr>
        <td>${index + 1}</td>
        <td>${bus.name}</td>
        <td>${bus.source}</td>
        <td>${bus.distination}</td>
        <td>${bus.bnumber}</td>
        <td>${bus.passcapacity}</td>
        <td>
        <button onclick='deleteBus(${index})'>delete</button>
        </td>
        </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    //   document.getElementById("tdata").innerHTML = tabledata;
  }
  
  display();
  
  function addBus(e) {
    e.preventDefault();
    let bus = {};
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let distination = document.getElementById("distination").value;
    let bnumber = document.getElementById("bnumber").value;
    let passcapacity = document.getElementById("passcapacity").value;
    bus.name = name;
    bus.source = source;
    bus.distination = distination;
    bus.bnumber = Number(bnumber);
    bus.passcapacity = Number(passcapacity);
  
    // buses.push(bus);
  
    let buses = JSON.parse(localStorage.getItem("buses"));
    buses.push(bus);
    localStorage.setItem("buses", JSON.stringify(buses));
  
    display();
  
    document.getElementById("name").value = "";
    document.getElementById("source").value = "";
    document.getElementById("distination").value = "";
    document.getElementById("bnumber").value = "";
    document.getElementById("passcapacity").value = "";
  }
  
  function searchBySource() {
    let searchValue = document.getElementById("searchSource").value;
    let buses = JSON.parse(localStorage.getItem("buses"));
    let newdata = buses.filter(function (bus) {
      return (
        bus.source.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
     display(newdata);
}

    function searchByDistination() {
        let searchValue = document.getElementById("searchDistination").value;
        let buses = JSON.parse(localStorage.getItem("buses"));
        let newdata = buses.filter(function (bus) {
          return (
            bus.distination.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
          );
        });
      
    display(newdata);
  }
  function deleteBus(index) {
    let buses = JSON.parse(localStorage.getItem("buses"));
  buses.splice(index, 1);
  localStorage.setItem("buses", JSON.stringify(buses));
  display();
  }
  
  
  
  
  