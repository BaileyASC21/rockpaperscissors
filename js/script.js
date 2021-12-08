


$(".play").click(function(){
  
  let userChoice = $(".input").val();
  $(".userChoice").text(userChoice);
  
  let computerChoice = Math.ceil(Math.random()*3);

  $(".computerChoice").text(computerChoice);
  
   if (computerChoice === 1){
  let computerChoice = "rock";
    $(".computerChoice").text(computerChoice);
 } else if(computerChoice === 2){
   let computerChoice = "paper";
   $(".computerChoice").text(computerChoice);
 } else if(computerChoice === 3){
    let computerChoice = "scissors";
   $(".computerChoice").text(computerChoice);
 } 

});

//



