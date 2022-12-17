function checkform(){
 
  
}
function what(){
  alert('Thank You For Your Feedback');
}
function gotowhatsapp() {
  
    names = document.getElementById('stdname').value;
  year = document.getElementById('year').value;
  department = document.getElementById('department').value;
  from = document.getElementById('from').value;
  to = document.getElementById('to').value;
  days = document.getElementById('days').value;
 /* datesub = document.getElementById('date-sub').value;*/
  stdpass = document.getElementById('std-pass').value;
  reason = document.getElementById('reason').value;
  num = document.getElementById('number').value;
  pass = 2022;
  
  if(names==""){
    alert('plz enter your name');
    return false;
  }
  else if(year==''){
    alert('select year of study');
    return false;
  }
  else if(department ==''){
    alert('select your department');
    return false;
  }
  else if(from==''){
    alert('select the from date');
    return false;
  }
  else if(to=='') {
    alert('select the to date');
    return false;
  }
  else if(days==''){
    alert('Enter number of days');
    return false;
  }
  /*else if(datesub==''){
    alert('Enter the date of submission');
    return false;
    
  }*/
  else if(stdpass==""){
    alert('Enter the student pass');
    return false;
  }
  else if(reason==''){
    alert('Enter reason for the leave');
    return false;
  }
  else if(num==''){
    alert('Enter your parent number');
    return false;
  }
  else if(num.length<10||num.length>10){
    alert('Plz enter valid mobile number');
    return false;
    
  }
  else if(stdpass!=pass){
    alert('enter valid pass')
    return false;
  }
  else if(stdpass=='2022'&&department =="B COM"){
    alert('Successfully');
    
  
  
  
    var name = document.getElementById("stdname").value;
    var year = document.getElementById("year").value;
    var department = document.getElementById("department").value;
    var from = document.getElementById("from").value;
    
    var to = document.getElementById("to").value;
    var days = document.getElementById("days").value;
    var reason = document.getElementById("reason").value;
    var number = document.getElementById("number").value;

 var li ="https://wa.me/919363344081?text=" ;
 
    var url = li
    + "Name: " + name + "%0a"
    + "year: " + year + "%0a"
    + "department: " + department  + "%0a"
        + "From: " + from + "%0a"
    + "To: " + to + "%0a"
    + "No of days: " + days  + "%0a"
        + "Reason: " + reason + "%0a"
    + "parent number: " + number;
    
   window.open(url, '_blank').focus();
   return true;}
}
else if(stdpass=='2022'&&department =="B COM"){
  alert('Successfull');
  



  var name = document.getElementById("stdname").value;
  var year = document.getElementById("year").value;
  var department = document.getElementById("department").value;
  var from = document.getElementById("from").value;
  
  var to = document.getElementById("to").value;
  var days = document.getElementById("days").value;
  var reason = document.getElementById("reason").value;
  var number = document.getElementById("number").value;

var li ="https://wa.me/918056672948?text=" ;

  var url = li
  + "Name: " + name + "%0a"
  + "year: " + year + "%0a"
  + "department: " + department  + "%0a"
      + "From: " + from + "%0a"
  + "To: " + to + "%0a"
  + "No of days: " + days  + "%0a"
      + "Reason: " + reason + "%0a"
  + "parent number: " + number;
  
 window.open(url, '_blank').focus();
 return true;}

