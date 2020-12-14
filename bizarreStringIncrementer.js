function bizarreStringIncrementer(inputChar){
  var inputNumber="";
  var outputChar =0;
  var zeroCount=0;
  var charStrIdx=0;
  for (var i = inputChar.length; i > 0; i--) {
    var tempc=inputChar.charAt(i-1);
    if(!isNaN(tempc)){
        inputNumber=tempc+inputNumber;
        if(tempc === "0"){
          zeroCount++;   
        }
    }else{
      charStrIdx=i;
      break;
    }
}
if(inputNumber!="" && !isNaN(inputNumber)){
  outputChar= parseInt(inputNumber)+1;
  outputChar = outputChar+"";
  var newZeros=inputNumber.length-outputChar.length;
  if(newZeros <= zeroCount  ){
    for(var i1=0; i1<newZeros;i1++){
        outputChar="0"+outputChar;
    }
  }
  return inputChar.substring(0, charStrIdx)+outputChar;
}else{
  return inputChar+"1";
}
}