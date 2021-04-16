function transformMilitary(time){
  var answer = "";
  
  if(time.charAt(8)=="A"){
    if(time.substring(0,2)=="12"){
     return "00"+time.substring(2,8);
    }
    else{
      return time.substring(0,8)
    }
    
  }
  else{
    if(time.substring(0,2)=="12"){
      return time.substring(0,8)
    }
    
    else{
      return parseInt(time.substring(0,2))+12 + time.substring(2,8)
    }
  }
  return answer;
}

console.log(transformMilitary("07:05:45PM"));
console.log(transformMilitary("12:05:45AM"));
console.log(transformMilitary("12:05:45PM"));
