
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
var score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}
$("#scoreId").html(score)
$("#num1").html(num1);
$("#num2").html(num2);
var correctAns = num1 * num2;
$("#correct").html(correctAns);

function refreshData(){
  let num1New = Math.ceil(Math.random() * 10);
  let num2New = Math.ceil(Math.random() * 10);
  $("#num1").html(num1New);
  $("#num2").html(num2New);
  correctAns = num1New * num2New;
  $("#correct").html(correctAns);
}
$("#submitAns").click(function(event) {
  event.preventDefault();
  if($("#input").val() == correctAns){
    score++;
    console.log(score)
    updatelocalStorage();
  }else{
    score--;
    updatelocalStorage();
  }
  $("#scoreId").html(score)
  refreshData();
})
function updatelocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}
