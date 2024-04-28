let randomnumber1 = Math.floor(Math.random()*6+1);
let randomnumber2 = Math.floor(Math.random()*6+1);



/*if(randomnumber1 == 1)
document.querySelectorAll(".img1")[0].setAttribute("src","./images/dice1.png");
else if(randomnumber1==2)
document.querySelectorAll(".img1")[0].setAttribute("src","./images/dice2.png");
else if(randomnumber1==3)
document.querySelectorAll(".img1")[0].setAttribute("src","./images/dice3.png");
else if(randomnumber1==4)
document.querySelectorAll(".img1")[0].setAttribute("src","./images/dice4.png");
else if(randomnumber1==5)
document.querySelectorAll(".img1")[0].setAttribute("src","./images/dice5.png");
else
document.querySelectorAll(".img1")[0].setAttribute("src","./images/dice6.png");
if(randomnumber2 == 1)
document.querySelectorAll(".img2")[0].setAttribute("src","./images/dice1.png");
else if(randomnumber2==2)
document.querySelectorAll(".img2")[0].setAttribute("src","./images/dice2.png");
else if(randomnumber2==3)
document.querySelectorAll(".img2")[0].setAttribute("src","./images/dice3.png");
else if(randomnumber2==4)
document.querySelectorAll(".img2")[0].setAttribute("src","./images/dice4.png");
else if(randomnumber2==5)
document.querySelectorAll(".img2")[0].setAttribute("src","./images/dice5.png");
else
document.querySelectorAll(".img2")[0].setAttribute("src","./images/dice6.png");*/

let imgsrc1 = "./images/dice"+randomnumber1+".png";
let imgsrc2 = "./images/dice"+randomnumber2+".png";
document.querySelectorAll(".img1")[0].setAttribute("src",imgsrc1);
document.querySelectorAll(".img2")[0].setAttribute("src",imgsrc2);
if(randomnumber1==randomnumber2){
    document.querySelectorAll("h1")[0].innerText="Tie!";
}
else if(randomnumber1>randomnumber2){
    document.querySelectorAll("h1")[0].innerText="🚩 Player 1 Wins!";
}
else{
    document.querySelectorAll("h1")[0].innerText="Player 2 Wins! 🚩";
}