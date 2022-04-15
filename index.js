//this is my favourite code
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   var key=this.innerHTML;

   makeSound(key);
   addButtonAnimation(key);
});
}
document.addEventListener("keydown",function(event){

   makeSound(event.key);
   addButtonAnimation(event.key);
});

function makeSound(k){
  switch(k){

  case "w":
     var audio=new Audio("sounds/tom-1.mp3");
     audio.play();
     break;

  case "a":
  var audio=new Audio("sounds/tom-2.mp3");
  audio.play();
  break;

  case "s":
  var audio=new Audio("sounds/tom-3.mp3");
  audio.play();
  break;

  case "d":
  var audio=new Audio("sounds/tom-4.mp3");
  audio.play();
  break;

  case "j":
  var audio=new Audio("sounds/snare.mp3");
  audio.play();
  break;

  case "k":
  var audio=new Audio("sounds/crash.mp3");
  audio.play();
  break;

  case "l":
  var audio=new Audio("sounds/kick-bass.mp3");
  audio.play();
  break;

  default:
     console.log(k);
   }
}

function addButtonAnimation(presentKey){
  var presentButton= document.querySelector("."+presentKey);
  presentButton.classList.add("pressed");
  setTimeout(function(){
    presentButton.classList.remove("pressed");
  },100);
}
