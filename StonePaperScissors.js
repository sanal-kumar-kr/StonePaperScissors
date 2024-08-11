let alertDiv=document.querySelector(".won-alert");
alertDiv.addEventListener("click",()=>{
 
})
let textString="Enter Score Limit?"
let scoreLimit=prompt(textString);
scoreLimit == "" || scoreLimit == 0?window.location.reload():true;

let divs=document.querySelectorAll(".selection");
let flag=true; 
let userScore=0;
let computerScore=0;
let msg=document.querySelector(".btn");
const imageObj={
    stone:"stone.png",
    scissors:"sci.png",
    paper:"paper.png"
}


const ChoiceValue=()=>{
    let choicArray=["stone","scissors","paper"]
   let idx= Math.floor(Math.random()*3);
   return choicArray[idx] ;  
}

const drawMatch=()=>{
     msg.innerText="Its a Draw Match"
}
const Winner=()=>{
   
    if(flag){
      let user=document.querySelector("#user");
      userScore+=1;  
      user.innerText=userScore;
      msg.innerText="You Won"

    }else{
      let comp=document.querySelector("#computer");
      computerScore+=1;  
      comp.innerHTML=computerScore;
      msg.innerText="Computer Won"
    }
    if(userScore == scoreLimit || computerScore == scoreLimit){
     alertDiv.style.display="block";
     let newElement=document.createElement("h1");
     if(userScore === computerScore){
        newElement.innerText="Its A draw Match";
        newElement.style.color="green";
     }
     else if(userScore > computerScore){
        newElement.innerText="You Won The Game.Congrates";
        newElement.style.color="green";
     }else{
        newElement.innerText="You Lose!!!!!!!!";
        newElement.style.color="red";
     }
     alertDiv.append(newElement);
     setTimeout(()=>{
      alertDiv.style.display = "none";
      window.location.reload();
     },3000)
     return;
   }
}
const playGame=(selection)=>{
 
   let computerChoice=ChoiceValue();
   document.querySelector("#user-selection").src=imageObj[selection];
   document.querySelector("#comp-selection").src=imageObj[computerChoice];
   console.log(`User selected ${selection}\n Computer Selected ${computerChoice}`)
   if(selection === computerChoice){
       drawMatch();
   }else{

    if(selection === "stone"){
        flag= computerChoice === "paper"?false:true;
    }else if(selection === "paper"){
        flag= computerChoice === "scissors"?false:true;
    }else{
        flag= computerChoice === "stone"?false:true;
    }
    Winner();
   }
}
divs.forEach((ele)=>{
  ele.addEventListener("click",(e)=>{
       let selection=ele.getAttribute("id");
       playGame(selection)
  })
})
