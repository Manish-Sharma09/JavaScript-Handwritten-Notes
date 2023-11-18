/** @format */

let id = "";
// localStorage.clear();
selectData();
let a = document.getElementById("name");
a.addEventListener("keypress", function (event) {
  if (event.key === "shift") {
    manageData();
  }
});
function manageData() {
  document.getElementById("msg").innerHTML = ""; //if nothing in input field
  let name = document.getElementById("name").value;
  if (name == "") {
    document.getElementById("msg").innerHTML = "Please enter your name";
  } else {
    if (id == "") {
      let arr = getCrudData(); //data check
      if (arr == null) {
        let data = [name];
        localStorage.setItem("crud", JSON.stringify(data)); //array to string
      } else {
        arr.push(name);
        localStorage.setItem("crud", JSON.stringify(arr));
        //push the add value
      }
      document.getElementById("name").value = "";
      document.getElementById("msg").innerHTML = "DATA ADDED SUCCESFULL";
    } else {
      let arr = getCrudData();
      arr[id] = name;
      setCrudData(arr);
      document.getElementById("msg").innerHTML = "Data updated";
    }
    selectData();
  }
}
function selectData() {
  let arr = getCrudData();
  if (arr != null) {
    let allData = "";
    let sno = 1;
    for (let k in arr) {
      // let a = ["we","wer","wer","qwer"];// for(let k in a ){//   console.log("asdfghj",a[k]);//   console.log("Bhanu",k)// }
      allData =
        allData +
        `<tr>
      <td>${sno}</td>
      <td>${arr[k]}</td>
      <td>
      <a href="javascript:void(0)" class="edit" data-toggle="modal" onclick="editData(${k})"><i class="material-icons"
			data-toggle="tooltip" title="Edit">&#xE254;</i></a>
      <a href="javascript:void(0)" class="edit" data-toggle="modal" onclick="deleteData(${k})"><i class="material-icons" data-toggle="tooltip" title="" data-original-title="Delete"></i></a>
      </td>
      </tr>`;
      sno++;
    }
    document.getElementById("root").innerHTML = allData;
  }
}
function editData(rid) {
  id = rid;
  let arr = getCrudData();
  document.getElementById("name").value = arr[rid];
  document.getElementById("name").innerHTML = " ";
}
function deleteData(rid) {
  let arr = getCrudData();
  arr.splice(rid, 1);
  localStorage.setItem("crud", JSON.stringify(arr));
  selectData();
}

function getCrudData() {
  let arr = JSON.parse(localStorage.getItem("crud"));
  return arr;
}

function setCrudData(arr) {
  localStorage.setItem("crud", JSON.stringify(arr));
}
