let one_blc = document.querySelectorAll('.slider-column-1 div');
let two_blc = document.querySelectorAll('.slider-column-2 div');
let back    = document.getElementById('btn-back');
let next    = document.getElementById('btn-next');
let int = 0, btn = 0;

function animatedBlock(i) {
  if (btn == 0) {
    one_blc[i].style = "transform: translateX(-30px)";
    one_blc[i].style = "display: block";
    setTimeout(() => {
      one_blc[i].style = "display: block; transform: translateX(-15px)";
      setTimeout(() => one_blc[i].style = "display: block; transform: translateX(0px)", 200);
    }, 50);
  }
  if (btn == 1) {
    one_blc[i].style = "transform: translateX(30px)";
    one_blc[i].style = "display: block";
    setTimeout(() => {
      one_blc[i].style = "display: block; transform: translateX(15px)";
      setTimeout(() => one_blc[i].style = "display: block; transform: translateX(0px)", 200);
    }, 50);
  }
}

function showBlock() {
  for (i = 0; i < one_blc.length; i++) one_blc[i].style = "display: none";
  for (i = 0; i < one_blc.length; i++) if (int == i) animatedBlock(i);
  for (i = 0; i < two_blc.length; i++) two_blc[i].style.background = "transparent";
  for (i = 0; i < two_blc.length; i++) if (int == i) two_blc[i].style.background = "white";
}

function blockBack() {
  setTimeout(() => {
    document.querySelector('#btn-back > i').style = "transform: translateX(-20px)";
    setTimeout(() => {
      document.querySelector('#btn-back > i').style = "transform: translateX(0px)";
      int -= 1;
      if (int < 0) int = 4;
      btn = 0;
      showBlock();
    }, 200);
  }, 50);
}
function blockNext() {
  setTimeout(() => {
    document.querySelector('#btn-next > i').style = "transform: translateX(20px)";
    setTimeout(() => {
      document.querySelector('#btn-next > i').style = "transform: translateX(0px)";
      int += 1;
      if (int > 4) int = 0;
      btn = 1;
      showBlock();
    }, 200);
  }, 50);
}

back.addEventListener('click', (e) => blockBack());
next.addEventListener('click', (e) => blockNext());

document.addEventListener('keydown', (event) => {
  if (event.code == "ArrowLeft") {blockBack(); btn = 0;}
  if (event.code == "ArrowRight") {blockNext(); btn = 1;}
});
