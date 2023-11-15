let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");


function generatorQr(){
    if(qrText.value.length> 0){
  qrImage.src ="" + qrText.value;  //link to img generator API + input field id
   imgBox.classList.add("show-img");
    }else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    }
}