//  Fonksiyon Tanımlama

function merhaba(name, age){
     if(typeof name === "undefined") name === "Bilgi Yok";
     if(typeof age === "undefined") age === "Bilgi Yok";
    
    
    
    
    console.log(`Ìsim: ${name} Yaş: ${age}`);

}
 merhaba("Eslem",22); //Fonksiyon Çağrısı
 merhaba();


