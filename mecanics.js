//função base
function rolar( min = 0, max = 0 ) {
   let resultado = Math.random() * (max - min) + min;
        return  Math.floor(resultado);
}
let result= document.getElementById('roll-area')

rolarD4=()=>{
        let d4= rolar(1,5);
        result.innerHTML=`${d4}`;
}

rolarD6=()=>{
        let d6= rolar(1,7);
        result.innerHTML=`${d6}`;
}

rolarD8=()=>{
        let d8= rolar(1,9);
        result.innerHTML=`${d8}`;
}
rolarD10=()=>{
        let d10= rolar(1,11)
        result.innerHTML=`${d10}`
}
rolarD12=()=>{
        let d12= rolar(1,13)
        result.innerHTML=`${d12}`
}
rolarD20=()=>{
        let d20= rolar(1,21)
        result.innerHTML=`${d20}`
}
rolarD100=()=>{
        let d100= rolar(1,101)
        result.innerHTML=`${d100}`
}