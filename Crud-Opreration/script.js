let id = "";
function manageData(){
  document.getElementById('msg').InnerHTML="";
  let name=document.getElementById('name').value;
  if(name==''){
    document.getElementById('msg').innerHTML='Plaese Enter your Name';
  }
}


