'use strict';

{
    const button = document.getElementById("button");

    button.addEventListener("click", () =>{
        // const result = ["大吉","中吉","凶","末吉"]
        // button.textContent = result[Math.floor(Math.random()*result.length)];
        const n = Math.random();
        if (n < 0.05){  //5%
            button.textContent="大吉";
        }else if (n < 0.7){ //70%
            button.textContent="中吉";
        } else{//15%
            button.textContent="凶";    
        }

                  

        // but、ton.textContent = n;

        // switch(n){
        //     case 0:
        //         button.textContent="大吉";
        //         break;
        //     case 1:
        //         button.textContent="中吉";
        //         break;
        //     case 2:
        //         button.textContent="凶";
        //         break;
        // }
    });
}