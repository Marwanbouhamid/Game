 
 
 
 
 
 const words=[
    "Hello",
    "Code",
    "JvaScript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Html",
    "Internet",
    "Python",
    "Scale",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing",
    "Programming",
 ];
let WordsHard = [
    "Programming",
    "Dependencies",
    "Documentation",
    "Destructuring",
    "Linkedin"
]
let wordsEasy =[
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing",
    "Coding",
    "Funny",
    "Working",
    "Paradigm",
    "Styling",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Html",
    "Internet",
    "Python",
    "Scale",
    "Cascade",
    "Hello",
    "Code",
]
 let iconSetting = document.querySelector(".game .material-symbols-outlined");
 iconSetting.onclick=function(){
     document.querySelector(".menu").classList.toggle("add-display-none")
 }
 let levelGame1 = document.querySelector(".levels-game1");
 let levelGame2 = document.querySelector(".levels-game2");
 let levelGame3= document.querySelector(".levels-game3");

 const lvls ={
    "Easy":5 ,
    "Normal":3 ,
    "Hard":2
 };


 
//  let defaultNormal = "Easy";     
let StartButton =document.querySelector(".start");
let lvlNameSpan =document.querySelector(".message .lvl");
  let secondsNameSpan =document.querySelector(".message .seconds");
  let theWord =document.querySelector(".the-word");
  let upcomingWords =document.querySelector(".upcoming-words");
  let input =document.querySelector(".input");
  let timeLeftSpan =document.querySelector(".time span");
  let scoreGot =document.querySelector(".score .got");
  let scoreTotal =document.querySelector(".score .total");
  let finishMessage =document.querySelector(".finish");

  let defaultNormal = "Normal";
  let defaultNormalValue = lvls[defaultNormal];
//   StartButton.onclick =function(){
//     this.remove();
//     input.focus();
//     getAttribute()

// }



levelGame1.onclick=function(){
       defaultNormal = "Easy";
      defaultNormalValue = lvls[defaultNormal];
      lvlNameSpan.innerHTML = defaultNormal;
      secondsNameSpan.innerHTML = defaultNormalValue;
      timeLeftSpan.innerHTML = defaultNormalValue;
      scoreTotal.innerHTML= wordsEasy.length;
      window.localStorage.setItem("defaultNormal",defaultNormal);
      StartButton.onclick =function(){
        this.remove();
        input.focus();
        getAttribute()
    
    }
           function getAttribute(){
            let random = wordsEasy[Math.floor(Math.random() * wordsEasy.length)];
            let WordIndexOf = wordsEasy.indexOf(random);
            words.splice(WordIndexOf,1);
            theWord.innerHTML=random;
            upcomingWords.innerHTML="";
            for (let index = 0; index < wordsEasy.length; index++) {
                let div = document.createElement("div");
                let text = document.createTextNode(wordsEasy[index]);
                div.appendChild(text);
                upcomingWords.appendChild(div)
                
            }
            startplay();
        }
        
        function startplay(){
            timeLeftSpan.innerHTML=defaultNormalValue;
            let start = setInterval(()=>{
                timeLeftSpan.innerHTML--;
                if(timeLeftSpan.innerHTML === "0"){
                    clearInterval(start)
                    if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                        input.value ='';
                        scoreGot.innerHTML++;
                        if(wordsEasy.length > 0){
                            getAttribute()
                        }else{
                            let span= document.createElement("span");
                            span.className="good";
                            let textSpan = document.createTextNode("Congratz");
                            span.appendChild(textSpan);
                            finishMessage.appendChild(span);
                            upcomingWords.remove()
                        }
                    }else{
                        let res =document.createElement("div");
                        res.className="reset";
                        let textReset = document.createTextNode("Reset");
                        res.appendChild(textReset);
                        // resetGame.appendChild(reset);
                        finishMessage.appendChild(res)
                    }
                }
            },1000)
        }
        
      }
  levelGame2.onclick=function(){

        defaultNormal = "Normal";
       defaultNormalValue = lvls[defaultNormal];
       lvlNameSpan.innerHTML = defaultNormal;
       secondsNameSpan.innerHTML = defaultNormalValue;
       timeLeftSpan.innerHTML = defaultNormalValue;
       scoreTotal.innerHTML= words.length;
       window.localStorage.setItem("defaultNormal",defaultNormal);
         StartButton.onclick =function(){
    this.remove();
    input.focus();
    getAttribute()

}
       function getAttribute(){
        let random = words[Math.floor(Math.random() * words.length)];
        let WordIndexOf = words.indexOf(random);
        words.splice(WordIndexOf,1);
        theWord.innerHTML=random;
        upcomingWords.innerHTML="";
        for (let index = 0; index < words.length; index++) {
            let div = document.createElement("div");
            let text = document.createTextNode(words[index]);
            div.appendChild(text);
            upcomingWords.appendChild(div)
            
        }
        startplay();
    }
    
    function startplay(){
        timeLeftSpan.innerHTML=defaultNormalValue;
        let start = setInterval(()=>{
            timeLeftSpan.innerHTML--;
            if(timeLeftSpan.innerHTML === "0"){
                clearInterval(start)
                if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                    input.value ='';
                    scoreGot.innerHTML++;
                    if(words.length > 0){
                        getAttribute()
                    }else{
                        let span= document.createElement("span");
                        span.className="good";
                        let textSpan = document.createTextNode("Congratz");
                        span.appendChild(textSpan);
                        finishMessage.appendChild(span);
                        upcomingWords.remove()
                    }
                }else{
                    let span= document.createElement("span")
                    span.className ="bad";
                    let spanText = document.createTextNode("Game Over");
                    span.appendChild(spanText);
                    finishMessage.appendChild(span)
                }
            }
        },1000)
    }
    
  }
  levelGame3.onclick=function(){
    

        defaultNormal = "Hard";
       defaultNormalValue = lvls[defaultNormal];
       lvlNameSpan.innerHTML = defaultNormal;
       secondsNameSpan.innerHTML = defaultNormalValue;
       timeLeftSpan.innerHTML = defaultNormalValue;
       scoreTotal.innerHTML= WordsHard.length;
       window.localStorage.setItem("defaultNormal",defaultNormal);
       StartButton.onclick =function(){
        this.remove();
        input.focus();
        getAttribute()
    
    }
       function getAttribute(){
        let random = WordsHard[Math.floor(Math.random() * WordsHard.length)];
        let WordIndexOf = WordsHard.indexOf(random);
        words.splice(WordIndexOf,1);
        theWord.innerHTML=random;
        upcomingWords.innerHTML="";
        for (let index = 0; index < WordsHard.length; index++) {
            let div = document.createElement("div");
            let text = document.createTextNode(WordsHard[index]);
            div.appendChild(text);
            upcomingWords.appendChild(div)
            
        }
        startplay();
    }




    function startplay(){
        timeLeftSpan.innerHTML=defaultNormalValue;
        let start = setInterval(()=>{
            timeLeftSpan.innerHTML--;
            if(timeLeftSpan.innerHTML === "0"){
                clearInterval(start)
                if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                    input.value ='';
                    scoreGot.innerHTML++;
                    if(WordsHard.length > 0){
                        getAttribute()
                    }else{
                        let span= document.createElement("span");
                        span.className="good";
                        let textSpan = document.createTextNode("Congratz");
                        span.appendChild(textSpan);
                        finishMessage.appendChild(span);
                        upcomingWords.remove()
                    }
                }else{
                    let res =document.createElement("div");
                    res.className="reset";
                    let textReset = document.createTextNode("Reset");
                    res.appendChild(textReset);
                    // resetGame.appendChild(reset);
                    finishMessage.appendChild(res)


                    // let span= document.createElement("span")
                    // span.className ="bad";
                    // let spanText = document.createTextNode("Game Over");
                    // span.appendChild(spanText);
                    // finishMessage.appendChild(span)
                }
            }
        },1000)
    }
    
    
    }






    lvlNameSpan.innerHTML = defaultNormal;
    secondsNameSpan.innerHTML = defaultNormalValue;
    timeLeftSpan.innerHTML = defaultNormalValue;
    scoreTotal.innerHTML= words.length;
    window.localStorage.setItem("defaultNormal",defaultNormal);
input.onpaste = function(){
    return false;
}


StartButton.onclick =function(){
    this.remove();
    input.focus();
    getAttribute()

}
       function getAttribute(){
        let random = words[Math.floor(Math.random() * words.length)];
        let WordIndexOf = words.indexOf(random);
        words.splice(WordIndexOf,1);
        theWord.innerHTML=random;
        upcomingWords.innerHTML="";
        for (let index = 0; index < words.length; index++) {
            let div = document.createElement("div");
            let text = document.createTextNode(words[index]);
            div.appendChild(text);
            upcomingWords.appendChild(div)
            
        }
        startplay();
    }
    
    function startplay(){
        timeLeftSpan.innerHTML=defaultNormalValue;
        let start = setInterval(()=>{
            timeLeftSpan.innerHTML--;
            if(timeLeftSpan.innerHTML === "0"){
                clearInterval(start)
                if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                    input.value ='';
                    scoreGot.innerHTML++;
                    if(words.length > 0){
                        getAttribute()
                    }else{
                        let span= document.createElement("span");
                        span.className="good";
                        let textSpan = document.createTextNode("Congratz");
                        span.appendChild(textSpan);
                        finishMessage.appendChild(span);
                        upcomingWords.remove()
                    }
                }else{
                    let res =document.createElement("div");
                    res.className="reset";
                    let textReset = document.createTextNode("Reset");
                    res.appendChild(textReset);
                    // resetGame.appendChild(reset);
                    finishMessage.appendChild(res)
                }
            }
        },1000)
    }
setTimeout(()=>{
    document.querySelector(".loading").remove()
},7000)


