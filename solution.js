function solution(string) {
  var capitals = string.split("").filter(function(x){
    if(x.toUpperCase() === x){
      return x
    }
  });
  for(var i = 0; i < capitals.length; i++){
    string = string.split(capitals[i]).join(" " + capitals[i]);
  }
  return string
}
