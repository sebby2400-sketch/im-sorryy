const messages = [

{
emoji:"🥺",
title:"Hey...",
text:"I made this because I wanted to say something from my heart.",
button:"Next 💜"
},

{
emoji:"💜",
title:"I'm Sorry",
text:"I'm sorry I made you feel like a fool. I want you to feel important and loved.",
button:"Keep Reading"
},

{
emoji:"🌸",
title:"Please Forgive Me",
text:"Please forgive me and keep that hopeful and beautiful heart you have.",
button:"Next"
},

{
emoji:"🫶",
title:"My Promise",
text:"I will do my best to show you through my actions how much I care about you.",
button:"Next"
},

{
emoji:"💌",
title:"From Your Stupid Hot Boyfriend",
text:"Thank you for reading this and for being patient with me.\n\nFrom your stupid hot boyfriend 💜",
button:"💜"
}

];


let current = 0;


const emoji = document.getElementById("emoji");
const title = document.getElementById("title");
const text = document.getElementById("text");
const next = document.getElementById("next");


next.onclick = function(){

  current++;

  if(current >= messages.length){
    current = messages.length - 1;
  }


  emoji.innerHTML = messages[current].emoji;

  title.innerHTML = messages[current].title;

  text.innerHTML = messages[current].text;

  next.innerHTML = messages[current].button;

};
