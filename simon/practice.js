let gameseq=[];
let userseq=[];
let level=0;
let started=false;

let btns=["red","yellow","green","purple"];

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        // console.log("key was pressed");
        started=true;
        levelup();
    } 
})


function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },150);
 
    


}


function levelup(){
    level++;
    h2.innerText=`level ${level}`;
    userseq=[];
    let btnindex=Math.floor(Math.random()*4);
    let randcolor=btns[btnindex];
    let randbtn=document.querySelector(`.${randcolor}`)
    gameseq.push(randcolor)
    // console.log(gameseq)


    flash(randbtn)
    
}


function checkans(index){
    if(userseq[index]===gameseq[index]){
        if(userseq.length==gameseq.length)
            

        setTimeout(levelup,500)

        // console.log("gameseq",gameseq)
        // console.log("us",userseq)
    }
    else{
        h2.innerText="please restart the game by pressing any key"
        started=false;
        level=0;
        gameseq=[];
        userseq=[];
    }

}
function btnpress(){
    let btn=this;
    flash(btn)
    userColor=btn.getAttribute("id");
    userseq.push(userColor)
    // console.log(userseq)

    checkans(userseq.length-1);
    // if(gameseq==userColor){
    //     levelup()
    //     console.log(`gameseq=${gameseq}`)
    //     console.log(`userseq=${userseq}`)
    // }
    

    
}
let buttons=document.querySelectorAll(".btn")
for (button  of buttons){
    button.addEventListener("click",btnpress);

}















