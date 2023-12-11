// selection of the display
const displayEle=document.querySelector('.display');


// select the btn 1
const allbtn=document.querySelectorAll('.btn');


//variable for displaying the values
let strtodisplay = '';
allbtn.forEach((item)=>{
    
    item.addEventListener('click',() => { 
        //get the value of selected element
        const val = item.innerText;

      // when ac is pressed the element will be removed

        if(val==='AC'){
            strtodisplay="";
            display();
        return;}

        if(val ==='='){
        const totalvalue = eval(strtodisplay);
        strtodisplay = totalvalue;
        display(totalvalue);
           return; }


           if (val === 'C'){
            
            const newValue = strtodisplay.slice(0,-1);
            strtodisplay = newValue;
            display(newValue);
            return;
           }


        //handling more value in same place
        //updating srttodispaly by adding the new value.
        strtodisplay += val;
    
        //display value 1
    
       display(strtodisplay);
       
    })
    
})

const display =(srt)=>{
    displayEle.innerText=srt || "0.00";
}
