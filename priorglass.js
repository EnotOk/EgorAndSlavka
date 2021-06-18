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

    volume = parseFloat (shirina)* parseFloat (dlina)* parseFloat(tolshina);

    ploschad = parseFloat (shirina)* parseFloat (dlina);
    document.getElementById('ploschad').innerHTML = "Площадь равна: "+ ploschad +" кв. м.";
    
    stoimost = ploschad*cena;
    document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";

    }
    }
