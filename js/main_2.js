var xhttp = new XMLHttpRequest();


function timeline(){
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && this.status == 200){
            var text = JSON.parse(`${this.response}`);
            arrays(text);
        }
    };
    xhttp.open("GET","./timeline.json",true);
    xhttp.send();
}


function arrays(text){
    var meses = Object.keys(text);
    var dias;
    var relevancia;
    var timeline = document.getElementById('timeline');
    for(let i =0;i< meses.length;i++){
        // console.log("Mês : "+meses[i]);


        // 
        var texto = document.createTextNode(meses[i]);
        var divNova = document.createElement('div');
        divNova.appendChild(texto);
        divNova.setAttribute('id','mes');
        timeline.appendChild(divNova);
        dias = Object.keys(text[meses[i]]);


        //
        for(let j = 0;j < dias.length;j++)
        {
            var div_bloco = document.createElement('div');
            div_bloco.setAttribute('id','bloco');
            relevancia = Object.keys(text[meses[i]][dias[j]]);
            //texto_2 é o dia do evento
            var data = document.createElement('div');
             if (relevancia == 0) {
                // // data
                data.setAttribute('id','data');
                data.setAttribute('class','data p0');
                var texto_2 = document.createTextNode(dias[j]);
                data.appendChild(texto_2);
                div_bloco.appendChild(data);
            } else if (relevancia == 1) {
                // // data
                data.setAttribute('id','data');
                data.setAttribute('class','data p1');
                var texto_2 = document.createTextNode(dias[j]);
                data.appendChild(texto_2);
                div_bloco.appendChild(data);
            } else {
                // // data
                data.setAttribute('id','data');
                data.setAttribute('class','data p2');
                var texto_2 = document.createTextNode(dias[j]);
                data.appendChild(texto_2);
                div_bloco.appendChild(data);
            };
                        
            var linha_horizontal = document.createElement('div');
            linha_horizontal.setAttribute('id','linha_horizontal');
            div_bloco.appendChild(linha_horizontal)

            
            var bloco_direita = document.createElement('div');
            bloco_direita.setAttribute('id','bloco_direita')
            var evento = document.createElement('div');
            evento.setAttribute('id','evento');

            if (relevancia == 0) {
                
                // imagem por relevância
                var img = document.createElement('img');
                img.setAttribute('id','imagem');
                img.src = "./imagens/template" + relevancia + ".jpg";
                img.width = 50;
                img.height = 50;

                // texto_3
                texto_3 = document.createTextNode(text[meses[i]][dias[j]][0]);
                evento.appendChild(texto_3);
                bloco_direita.appendChild(img);
                bloco_direita.setAttribute('class','bloco_direita');
                bloco_direita.appendChild(evento);
                div_bloco.appendChild(bloco_direita);

            } else if (relevancia == 1) {

                // imagem por relevância
                var img = document.createElement('img');
                img.setAttribute('id','imagem');
                img.src = "./imagens/template" + relevancia + ".jpg";
                img.width = 50;
                img.height = 50;

                // // texto_3
                texto_3 = document.createTextNode(text[meses[i]][dias[j]][1]);
                evento.appendChild(texto_3);
                bloco_direita.appendChild(img);
                bloco_direita.setAttribute('class','bloco_direita');
                bloco_direita.appendChild(evento);
                div_bloco.appendChild(bloco_direita);
            } else {

                // imagem por relevância
                var img = document.createElement('img');
                img.setAttribute('id','imagem');
                img.src = "./imagens/template" + relevancia + ".jpg";
                img.width = 50;
                img.height = 50;

                // // texto_3
                texto_3 = document.createTextNode(text[meses[i]][dias[j]][2]);
                evento.appendChild(texto_3);
                bloco_direita.appendChild(img);
                bloco_direita.setAttribute('class','bloco_direita');
                bloco_direita.appendChild(evento);
                div_bloco.appendChild(bloco_direita);
            };
        




            // console.log(dias[j]);
            // console.log(text[meses[i]][dias[j]][0]);
            


            timeline.appendChild(div_bloco);
        }
    }
}

timeline();
