let results = document.getElementById("inputs");

let Calculator=(number)=>{
    results.value+=number;
}
let Results=()=>{
   try {
       results.value=eval(results.value)
   } catch (error) {
       alert("Error please try again")
   }
}
function Clear(){
   results.value=" ";
}
function Del(){
   results.value=results.value.slice(0,-1);
}
