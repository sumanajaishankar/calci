const type= document.querySelector('.inp');
const but=document.querySelectorAll('button');
const specialChar=["+","-","*","/","%","=","."];
let output="";
// console.log(type,but)
const calculate=(btnValue)=>{
    // console.log(btnValue);
    if (btnValue==="=" && btnValue !== "" ){
        output=eval(output.replace("%","/100"))
    }
    else if(btnValue==="AC"){
        output="";
    }
    else if(btnValue==="DEL"){
        output=output.toString().slice(0,-1);
    }
    else{
        if(output==="" && specialChar.includes(btnValue)
        )return;
        output += btnValue;
    }
    type.value = output;
};


but.forEach((button)=>{
    button.addEventListener('click',(e)=>calculate(e.target.dataset.value))
});



