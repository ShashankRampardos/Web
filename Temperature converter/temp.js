function ctof(c){
    let tempC=document.getElementById('tempc').value;
    let f=(tempC*9)/5+32;
    document.getElementById("tempf").value=Math.round(f);
}
function ftoc(f){
    let tempF=document.getElementById('tempf').value;
    let c= ((tempF-32)*5)/9;
    document.getElementById('tempc').value=Math.round(c);
}


