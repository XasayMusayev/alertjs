let date = new Date();
let x= date.getHours();
console.log(x);

if(x>=6 && x<=12){
    alert('Sabahiniz xeyir')
    document.body.style.backgroundColor ='blue'
}
else if(x>=13 && x<=15){
    alert('Gunortaniz xeyir')
    document.body.style.backgroundColor='green'
    
}
else if (x>=16 && x<=23){
    alert('Axsaminiz xeyir')
    document.body.style.backgroundColor='purple'
    
}