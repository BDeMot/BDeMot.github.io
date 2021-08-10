const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true }
});

scroll.on('call', (args) => {

switch(args) {
  case 'bigLettersTurnWhiteTrigger': 
  turnToWhite( document.getElementById('bigLetters') )
}
})

const turnToWhite = el => {
  return el.style.color = 'white';
}


