// Alert

// alert("Merhaba");



// console.log(cevap);

// Confirm
// const cevap=confirm("Emin misiniz?");

// if (cevap){
//       console.log("Silin Gitsin");

// }
// else{
//     console.log("Silmeyin");
// }

//    const cevap=prompt("2+2 = ?");
//    if(cevap== "4"){
//      console.log("Doğru");
//    }
//    else{
//    console.log("Yanlış");
// }

 let value;


 value = window;
 value = window.location;
 value = window.location.host;
 value = window.location.hostname;
 value = window.location.port;
 value = window.location.href;

 if(confirm("Sayfa yenilensin mi?")){
    window.location.reload();
 }
 else{
 console.log("Sayfa yenilenmedi");
 }
 console.log(value);