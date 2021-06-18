function raschitat() {
    stekla  = document.getElementById('stekla').value;
    switch (stekla) {
         case "zerkalo":
          cena = 440;
          break
        case "prozrachnoe":
          cena = 480;
          break   
        case "osvetlennoe":
          cena = 380;
          break   

        case "zakalennoe":
            cena = 400;
            break
        
        case "triplex":
            cena = 410;
            break
        
        case "armirovannoe":
            cena = 390;
            break

        case "stemalit":
            cena = 500;
            break

        case "steklopaket":
            cena = 470;
            break

        case "tonirovannoe":
            cena = 460;
            break

       default :
          cena = 440;
          break
    }
    shirina  = document.getElementById('shirina').value;
    dlina  = document.getElementById('dlina').value;
    if(shirina == ""){
    alert("Вы не указали ширину");
    } else if(dlina == ""){
    alert("Вы не указали длину");
    } else {

    // volume = parseFloat (shirina)* parseFloat (dlina)* parseFloat(tolshina);

    ploschad = parseFloat (shirina)* parseFloat (dlina);
    document.getElementById('ploschad').innerHTML = "Площадь равна: "+ ploschad +" кв. м.";
    
    stoimost = ploschad*cena;
    document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";

    }
    }
 
function poschitat() {
    tolshina = document.getElementById('tolshina').value;
    switch (tolshina) {
        case "3mm":
         cena = 120;
         break
       case "4mm":
         cena = 140;
         break   
       case "5mm":
         cena = 160;
         break   

       case "6mm":
           cena = 180;
           break
       
       case "8mm":
           cena = 220;
           break
       
       case "10mm":
           cena = 260;
           break

       case "12mm":
           cena = 300;
           break

       case "15mm":
           cena = 340;
           break

       case "19mm":
           cena = 380;
           break

      default :
         cena = 100;
         break
   }

   shirina  = document.getElementById('shirina').value;
   dlina  = document.getElementById('dlina').value;
   tolshina  = document.getElementById('tolshina').value;
   if(shirina == ""){
   alert("Вы не указали ширину");
   } else if(dlina == ""){
   alert("Вы не указали длину");
   } else if(tolshina == ""){
    alert("Вы не указали толщину");
   } else {

   // volume = parseFloat (shirina)* parseFloat (dlina)* parseFloat(tolshina);

   ploschad = parseFloat (shirina)* parseFloat (dlina);
   document.getElementById('ploschad').innerHTML = "Площадь равна: "+ ploschad +" кв. м.";
   
   stoimost = ploschad*cena;
   document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";

   }

}