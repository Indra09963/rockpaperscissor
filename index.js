let userscore=0;
let compscore=0;

let choices= document.querySelectorAll(".choice");
let msg=document.querySelector(".msg");
let userscorepara=document.querySelector("#user-score");
let compscorepara=document.querySelector("#comp-score");

    const generateNumber=()=>
    {
        let a=["rock" ,"scissor" ,"paper"];
        let Idx=Math.floor(Math.random()*3);
        return a[Idx];
    }
   const draw= ()=>
    {
            console.log("Draw game");
            msg.innerText="Game Draw";
            msg.style.backgroundColor="blue";
    }
 
    let showWinner=(userwin, userchoice, compchoice)=>{
            if(userwin)
            {
                userscore++;
                userscorepara.innerText=userscore;
                msg.innerText="You Win";
                msg.style.backgroundColor="green";
            }
            else{
                compscore++;
                compscorepara.innerText=compscore;
                msg.innerText="Comp Win";
                msg.style.backgroundColor="red";
            }
    }

const PlayGame= (userchoice)=>
{
   
   let compchoice=generateNumber(); 
    console.log("Computer choice",compchoice);
    
    if(userchoice===compchoice)
    {
        draw();
    }
    else{
        let userwin = true;
    if (userchoice === "rock") {
      //scissors, paper
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      //rock, scissors
      userwin = compchoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userwin = compchoice === "rock" ? false : true;
    }
    showWinner(userwin, userchoice, compchoice);
    }
    
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=> {
       let userchoice=choice.getAttribute("id");
       console.log("User", userchoice);
        PlayGame(userchoice);
    });
});







