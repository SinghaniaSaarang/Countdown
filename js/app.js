
const inputs=document.querySelectorAll("input")

function datefun(){
    const td=new Date();
    const evdt=new Date();
    evdt.setFullYear(inputs[2].value,inputs[1].value-1,inputs[0].value);
    evdt.setHours(0);
    evdt.setMinutes(0,0);
    const diff=(evdt-td)/1000;
    inputs[3].value=Math.floor(diff/3600/24);
    inputs[4].value=Math.floor(diff/3600)%24;
    inputs[5].value=Math.floor(diff/60)%60;
    inputs[6].value=Math.floor(diff)%60;

    setInterval(()=>{
        datefun()
    },1000)
}




