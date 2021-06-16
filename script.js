function raschitat() {
    cvet  = document.getElementById('cvet').value;
    switch (cvet) {
       case "serii":
          cena = 440;
          break
       case "goluboi":
          cena = 480;
          break   
        case "geltii":
          cena = 380;
          break   
       default:
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
    ploschad = parseFloat (shirina)* parseFloat (dlina);
    document.getElementById('ploschad').innerHTML = "Площадь равна: "+ ploschad +" кв. м.";
    stoimost = ploschad*cena;
    document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";
    }
    }
