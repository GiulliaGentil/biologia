let organela = prompt("Digite uma organela celular:");

let celulaAnimal = ["núcleo","membrana nuclear","citoplasma","ribossomos","lisossomos","complexo golgi","retículo endoplasmatico liso",
"retículo endoplasmatico rugoso","centríolo","citoesqueleto","membrana plasmatica","DNA","cromossomos","mitocondria"]

for (let i = 0; i < celulaAnimal.length; i++) {
    if (celulaAnimal[i] == 'núcleo' && organela == 'núcleo') {
    document.write(`É responsável por guardar e proteger o material genético, o DNA, um composto orgânico que transmite as informações hereditárias. <br> <img src="nucleo.webp">`);
    } else if(celulaAnimal[i]=="membrana nuclear" && organela == 'membrana nuclear') {
    document.write(`Tem por função a permeabilidade seletiva,seleciona as moléculas que entram e saem da célula animal. <br> 
    <img src="membrana-nuclear.webp">`);
    } else if(celulaAnimal[i]=="citoplasma" && organela == "citoplasma") {
    document.write(`Armazena substâncias químicas que são importantes para o bom funcionamento da célula. <br> 
    <img src="citoplasma.webp">`);
    } else if(celulaAnimal[i]=="ribossomos" && organela == "ribossomos") {
    document.write(`Sintetiza as proteínas, que funcionam como uma fábrica de proteína para a célula. <br>
    <img src="imagem/ribossomos.webp">`);
    } else if(celulaAnimal[i]=="lisossomos" && organela == "lisossomos") {
    document.write(`Digere substâncias que posteriormente serão utilizadas pela célula. Funciona como uma reciclagem de substâncias, que podem ser reutilizadas pela célula. <br>
    <img src="imagem/lisossomos.webp">`);
    } else if(celulaAnimal[i]=="complexo de golgi" && organela == "complexo de golgi") {
    document.write(`Sua função é receber, modificar e enviar as proteínas ribossomáticas para outras regiões da célula ou para fora dela. <br> 
    <img src="imagem/complexo.webp">`);



} else if(celulaAnimal[i]=="Retículo Endoplasmático Liso" && estrutura == "Retículo Endoplasmático Liso") {
    document.write("Responsável por produção hormonal")
}
else if(celulaAnimal[i]=="Retículo Endoplasmático Rugoso" && estrutura == "Retículo Endoplasmático Rugoso") {
    document.write("Responsável pela síntese proteíca, além da glicosilação, produção de fosfolipídios e montagem de meoléculas proteícas.")
}
else if(celulaAnimal[i]=="Centríolo" && estrutura == "Centríolo") {
    document.write("Auxiliam na divisão celulas (mitose e meiose).")
}
else if(celulaAnimal[i]=="Citoesqueleto" && estrutura == "Citoesqueleto") {
    document.write("Rede de filamentos proteicos que roporciona sustentação e resistência para as organelas")
}
else if(celulaAnimal[i]=="Membrana Plasmática" && estrutura == "Membrana Plasmática") {
    document.write("Estrutura celular que delimita as células, separando o interior do meio extracelular e selecionando o que entra e sai.")
}
else if(celulaAnimal[i]=="DNA" && estrutura == "DNA") {
    document.write("Armazena e transmite informações genéticas, funcionano ainda, como molde para a síntese do RNA.")
}
else if(celulaAnimal[i]=="Cromossomos" && estrutura == "Cromossomos") {
    document.write("Abrigam o material genético dentro das células (molécula de DNA condensada).")
}
else if(celulaAnimal[i]=="Mitocôndria" && estrutura == "Mitocôndria") {
    document.write("São responsáveis pelo processo de respiraçã celular.")
}
else if(celulaAnimal[i]=="Peroxissomos" && estrutura == "Peroxissomos") {
    document.write("Faz a desintoxicação das células e realiza a catalização do peróxido de hidrogênio.")
}
else if(celulaAnimal[i]=="RNA Mensageiro" && estrutura == "RNA Mensageiro") {
    document.write("Leva as informações do DN do núcleo até o citoplasma, onde a proteína é produzida.")
}
}
