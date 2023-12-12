// selection of the display
const displayEle=document.querySelector('.display');


// select the btn 1
const allbtn=document.querySelectorAll('.btn');

const audio = new Audio("heyboy.mp3")
//variable for displaying the values
let strtodisplay = '';
const operatorlist=['+', '-', '*', '%','/'];
let lastoperator= ''
allbtn.forEach((item)=>{
    
    item.addEventListener('click',() => { 
        //reset the prank
        displayEle.classList.remove("prank");
            displayEle.style.background = "";
            displayEle.style.color = "";

            
        //get the value of selected element
        const val = item.innerText;

      // when ac is pressed the element will be removed

        if(val==='AC'){
            strtodisplay="";
            display();
        return;}

        


           if (val === 'C'){
            
            const newValue = strtodisplay.slice(0,-1);
            strtodisplay = newValue;
            display(newValue);
            return;
           }

           if (val === '='){
            const lastChar = strtodisplay[strtodisplay.length -1];            console.log(lastChar)
            if(operatorlist.includes(lastChar)){
                strtodisplay=strtodisplay.slice(0,-1);
            }
            caclulateTotal()
            return;

           }
        // dont allow more than one operator at once, replace by the another.

        if(operatorlist.includes(val)){
            lastoperator = val;
            const lastChar = strtodisplay[strtodisplay.length -1];            console.log(lastChar)
            if(operatorlist.includes(lastChar)){
                strtodisplay=strtodisplay.slice(0,-1);
            }
        }

        if(val === '.'){
        
           
           const indexOflastoperator = strtodisplay.lastIndexOf(lastoperator);
           const lasNumberSet = strtodisplay.slice(indexOflastoperator)
           console.log(lasNumberSet)
           if(lasNumberSet.includes(".")){
            return;
           }
           if(!lastoperator && strtodisplay.includes("."))
           return;
        }


           


        //handling more value in same place
        //updating srttodispaly by adding the new value.
        strtodisplay += val;
    
        //display value 1
    
       display(strtodisplay);
       
    });

    const caclulateTotal = () =>{
        const extraValue = randomNum();
        if(extraValue > 0){
            //prank situation
            displayEle.classList.add("prank");
            displayEle.style.background = "red";
            displayEle.style.color = "white";
            audio.play();
        }
        const totalvalue = eval(strtodisplay) + extraValue;
        strtodisplay = totalvalue.toString();
        display(totalvalue);
    };
    
})

const display =(srt)=>{
    displayEle.innerText=srt || "0.00";
}

//isNaN

const randomNum = () => {
   const num = Math.round(Math.random()*10);
   return num<3 ? num :0;
}