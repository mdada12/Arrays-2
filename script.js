var wrapperEle = document.body.querySelector(".wrapper");
var warriors = [
  {
    name: "Bob",
    damage: 2,
    health: 10,
    warrior: true
  },
  {
    name: "Jerry",
    damage: 1,
    health: 12,
    warrior: true
  },
  {
    name: "Mavis",
    damage: 2,
    health: 10,
    warrior: true
  },
  {
    name: "Morty",
    damage: 4,
    health: 10,
    warrior: true
  },
  {
    name: "Shorty",
    damage: 10,
    health: 3,
    warrior: false
  },
  {
    name: "Porty",
    damage: 1,
    health: 14,
    warrior: true
  },
  {
    name: "Perry",
    damage: 2,
    health: 9,
    warrior: true
  },
  {
    name: "Larry",
    damage: 2,
    health: 17,
    warrior: false
  }
];
//for (var i = 0; i < warriors.length; i++)
//{
//var ele = document.createElement("div");
//ele.innerHTML =
//warriors[i].name +
//"  " +
//warriors[i].health +
//"  " +
//warriors[i].damage +
//"     " +
//warriors[i].warrior;
//ele.style.color = warriors[i].color;
//if(warriors[i].name == "Mavis"){
//ele.style.color = "red"
//}
//if(warriors[i].name == "Larry"){
//ele.style.color = "red"
//}
//wrapperEle.appendChild(ele);
//}

for (var i = 0; i < warriors.length; i++) {
  if (
    warriors[i].health >= 10 &&
    warriors[i].damage >= 2 &&
    warriors[i].warrior === true
  ) {
    var ele = document.createElement("div");
    ele.innerHTML =
      warriors[i].name +
      " " +
      warriors[i].health +
      " " +
      warriors[i].damage +
      " " +
      warriors[i].warrior;
   
  }
   if(warriors[i].name == "Mavis"){
     ele.style.color= "Red"
     }
  wrapperEle.appendChild(ele);
  
}