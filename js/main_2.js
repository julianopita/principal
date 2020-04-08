var xhttp = new XMLHttpRequest();
var timeline = document.getElementById('timeline');
// faz uma requesição do arquivo timeline
function createTimeLine(){
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && this.status == 200){
            var text = JSON.parse(`${this.response}`);
            ano(text);
            // arrays(text);
        }
    };
    xhttp.open("GET","./timeline.json",true);
    xhttp.send();
}

function addLink(div,link){
    if(link != ""){
        div.style.cursor = 'pointer';
        $(div).click(()=>{
            window.open(link);
        })
    }
}


//manipulação geral dia mês e ano
function ano(text){
    anos = Object.keys(text)
    // alert(link)
    for(let i = 0; i < anos.length;i++){
        var texto = document.createTextNode(anos[i]);
        var divNova = document.createElement('div');
        divNova.appendChild(texto);
        divNova.setAttribute('id','ano');
        timeline.appendChild(divNova);
        mes(text,i,anos);
    }
}
//adiciona os meses de forma dinamica
function mes(text,i,anos){
    var meses = Object.keys(text[anos[i]]);
    // alert(meses);
    for(let j =0;j< meses.length;j++){
        //Cria nó e div, adiciona nó a div e seta atributos
        //depois adiciona a timeline
        var texto = document.createTextNode(meses[j]);
        var divNova = document.createElement('div');
        divNova.appendChild(texto);
        divNova.setAttribute('id','mes');
        timeline.appendChild(divNova);

        //adiciona os dias de forma dinâmica
        dia(text,i,j,anos,meses);
    }
}
function dia(text,i,j,anos,meses){
    
    var dias = Object.keys(text[anos[i]][meses[j]]);
    var rel = Object.values(text[anos[i]][meses[j]]);

    

    for(let k = 0;k < dias.length;k++)
    {
        var relevancia = Object.keys(rel[k])[0];
        var div_bloco = document.createElement('div');
        div_bloco.setAttribute('id','bloco'); 
        //texto_2 é o dia do evento
        var data = document.createElement('div');
        timeline.appendChild(div_bloco);
        
        var link = Object.values(rel[k])[1];
        if(link == undefined){
            link = "";
        }

        //  formatação por relevância
        data.setAttribute('id','data');
        data.setAttribute('class','data p'+relevancia);
        var texto_2 = document.createTextNode(dias[k]);
        data.appendChild(texto_2);
        div_bloco.appendChild(data);
       
                    
        var linha_horizontal = document.createElement('div');
        linha_horizontal.setAttribute('id','linha_horizontal');
        div_bloco.appendChild(linha_horizontal)

        
        var bloco_direita = document.createElement('div');
        bloco_direita.setAttribute('id','bloco_direita')
        var evento = document.createElement('div');
        evento.setAttribute('id','evento');

                    
        // imagem por relevância
        var img = document.createElement('img');
        img.setAttribute('id','imagem');
        img.src = "./imagens/template" + relevancia + ".jpg";
        img.width = 50;
        img.height = 50;

        // texto_3
        texto_3 = document.createTextNode(Object.values(rel[k])[0]);
        evento.appendChild(texto_3);
        addLink(evento,link);
        bloco_direita.appendChild(img);
        bloco_direita.setAttribute('class','bloco_direita');
        bloco_direita.appendChild(evento);
        div_bloco.appendChild(bloco_direita);

       








    }
}

createTimeLine();
