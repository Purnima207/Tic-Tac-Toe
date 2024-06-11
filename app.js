let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//PlayerX , PlayerO

const winPattens = [
    [0 , 1 , 2],
    [3 , 4 , 5],
    [6 , 7 , 8],
    [0 , 3 , 6],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [0 , 4 , 8],
    [2 , 4 , 6]
];

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("clicked");
        
        if(turnO){
            box.innerText = "O";
            box.style.color = "green";
            turnO = false;
        }
        else {
            box.innerText = "X";   
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const checkWinner = () =>{
    for (let pattern of winPattens){
        // console.log(pattern[0] , pattern[1] , pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText , 
        //     boxes[pattern[1]].innerText , 
        //     boxes[pattern[2]].innerText
        //     );

            let post1value = boxes[pattern[0]].innerText;
            let post2value = boxes[pattern[1]].innerText;
            let post3value = boxes[pattern[2]].innerText;

            if(post1value != "" && post2value != "" && post3value != "")
            {
                if(post1value === post2value && post2value === post3value)
                {
                    console.log("winner", post1value);
                    showWinner(post1value);
                }
            }
    }
};

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);