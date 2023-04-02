const left = document.getElementById('left-side');
const startButton = document.getElementsByClassName('startButton')[0];
const inputFieldLeft = document.getElementById('input-field-left');
const inputFieldRight = document.getElementById('input-field-right');
const leftText = document.getElementById('left-text')
const rightText = document.getElementById('right-text')

var stopped = false;

function logKey(e) {

    if(!stopped){
        var p = e.clientX / window.innerWidth * 100;
        pPercent = p +"%"
        left.style.width = pPercent;
    }

}

function stopStart(){
    if(stopped){
        stopped = false;
        startButton.style.zIndex = 10;
    }
    else {
        stopped = true;
        startButton.style.zIndex = 3;
    }
}

document.addEventListener('mousemove', logKey);
document.addEventListener('keydown', function(event) {

    if (event.code === 'Space') {
        stopStart();
    }

})

inputFieldLeft.addEventListener('input', function(event) {
    
  const text = event.target.value;
  leftText.innerHTML = text;

});

inputFieldRight.addEventListener('input', function(event) {
    
    const text = event.target.value;
    rightText.innerHTML = text;
  
  });
