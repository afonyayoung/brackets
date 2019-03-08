module.exports = function check(str, bracketsConfig) {
  // your solution
  if (str.length%2 !=0){
    return false
  }else {
    var checked=[];
    for (i=0; i<str.length; i++) {
      for (j=0; j<bracketsConfig.length; j++){
        if (str[i]==bracketsConfig[j][1]){
        if (checked.length>0 && checked[checked.length-1]==bracketsConfig[j][0]) {
            checked.pop();
        } else {
            checked.push(str[i]);
        }           
        } else {
            if (str[i]==bracketsConfig[j][0]) {
                checked.push(str[i]);
            }
        }
      }  
    }  
    if (checked.length !==0){ 
        return false;
        } else {
        return true;
    } 
  }  
}
