let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");

const winPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let turn0 = true;    //playerX and player0
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        } else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();

    });
   
})

let container = document.querySelector(".container");

const checkWinner = () => {
    for(let pat of winPattern){
        let pos1 = boxes[pat[0]].innerText;
        let pos2 = boxes[pat[1]].innerText;
        let pos3 = boxes[pat[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "" ){
            if (pos1 == pos2 && pos2 == pos3){
                console.log("winner is", pos1);
                let el = document.querySelector(".win");
                el.innerText = `Congratulations , Winner is ${pos1}`;
                

            }
        }
       
    }
}

const enableBoxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};


const resetGame = () => {
    turn0 = true;
    enableBoxes();
}; 

resetBtn.addEventListener("click",resetGame);