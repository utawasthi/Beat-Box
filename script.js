
window.onload = () => {
  setButtons();
}
let beats = {
  "a" : {
    beat : "./Sound/Cymbal Suspended.mp3",
    color : "#00fffe"
  },
  "b" : {
    beat : "./Sound/Drum Snare Roll.mp3",
    color : "#00fffe"
  },
  "c" : {
    beat : "./Sound/Drum Sticks.mp3",
    color : "#00fffe"
  },
  "d" : {
    beat : "./Sound/Musical Compos.mp3",
    color : "#FF00FF"
  },
  "e" : {
    beat : "./Sound/Piano Chord.mp3",
    color : "#FF00FF"
  },
  "f" : {
    beat : "./Sound/Piano Chord 331.mp3",
    color : "#FF00FF"
  },
  "g" : {
    beat : "./Sound/Piano Chord 209.mp3",
    color : "#00fffe"
  },
  "h" : {
    beat : "./Sound/Prel Musical.mp3",
    color : "#FFFFFF"
  },
  "i" : {
    beat : "./Sound/Musical Orches.mp3",
    color : "#FFFFFF"
  }
}

const setButtons = () => {
  for(let beatKey in beats){
    let beat = beats[beatKey];
    const ele = document.getElementById(beatKey);
    ele.style.borderColor = beat.color;
    ele.addEventListener("transitionend" , () => {
      ele.style.backgroundColor = "transparent";
      ele.style.boxShadow = "none"; 
    })
  }
}

const onButtonPress = (buttonKey) => {
 let ele = document.getElementById(buttonKey);
 ele.style.backgroundColor = beats[buttonKey].color;
 ele.style.boxShadow = `0px 0px 17px 0px ${beats[buttonKey].color}`;
}

const playBeat = (buttonKey) => {
  let audioSrc = beats[buttonKey].beat;
  let audio = new Audio(audioSrc);
  audio.currentTime = 0;
  audio.play();
}

document.addEventListener('keydown' , (event) => {
  playBeat(event.key);
  // console.log(event.key);
  onButtonPress(event.key);
})