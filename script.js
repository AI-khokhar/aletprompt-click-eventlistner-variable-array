  window.load = function(){
    alert("WELCOME TO THE ASSIGNMENT!");
  }
  let userResponse = "";
 const  itemsArray =[ Apple,Mango,Banana,Orange,Pineapple,graps];
function askUser(){
    userResponse= prompt("Please enter you name")
    alert("Hellow" +userResponse+ "!"); 
} 
function  displayArrayItems(){
        let output ="Arry items :/n"
        for(let i = 0 ; i< itemsArray.length; i++){
            output+=itemsArray [i]+"/n"
        }
        alert(output);
            
}
