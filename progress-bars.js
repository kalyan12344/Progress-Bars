const progress = document.querySelector(".progress");
const next = document.querySelector(".next");
const previous = document.querySelector(".prev");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
    //on clicking nxt current active will increase by 1
  currentActive++;
  //making sure that the current active does not go beyond number of circles 
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  

  update();
  disablingNext();
  disablingPrev();
});

previous.addEventListener("click", () => {
    // on clicking prev we reduce current active by 1
  currentActive--;
  // making the current active not go less than 1
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
  disablingNext();
  disablingPrev();
 
});

function update() {

    
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    }
    else{
        

        circle.classList.remove("active")
    }
  });
//width of progresss bar
  progress.style.width = ((currentActive-1)*30)+'%';

}
function disablingPrev(){
    //if cuurent active is 1 then prev is disabled
    if(currentActive==1){
        previous.disabled = true;
    }
    else{
        previous.disabled =false;
    }

}

function disablingNext(){
    //current active is max then next will be idsabled
    if(currentActive==circles.length){
        next.disabled = true;
    }
    else{
        next.disabled =false;
    }
}
