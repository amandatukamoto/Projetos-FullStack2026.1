let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

ctx.scale(1.66, 1.66);


//quadrados
function quadrado (cor,x,y,l,a){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.fillRect(x,y,l,a);
    ctx.closePath();
}

quadrado ('blue', 7.5, 7.5,40,40 );
quadrado('red', 252, 7.5,40,40 );
quadrado('black', 262,262,30,30);
quadrado('black', 232,262,30,30);
quadrado('black', 262,232,30,30);
quadrado('yellow', 7.5,262,30,30 );
quadrado('yellow', 7.5,232,30,30 );
quadrado('yellow', 37,262,30,30 );
quadrado('cyan', 7.5,150,30,30);
quadrado('cyan', 7.5,120,30,30);
quadrado('cyan', 262,135,30,30);
quadrado('red', 110,150,40,40);


//linhas 
function linha (width,cor,x,y,w,z){
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = cor;
    ctx.moveTo(x,y);
    ctx.lineTo(w,z);
    ctx.stroke();
    ctx.closePath();
}

linha(2,'blue',7.5,7.5,150,150);
linha(2,'red',292.5,7.5,150,150);
linha(1.5,'green',7.5,150,292.5,150);
linha(2,'gray',150,150,150,252);


//quadrado cinza
ctx.beginPath();
ctx.lineWidth = 1.5;
ctx.strokeStyle = 'gray';
ctx.strokeRect(7.5, 7.5, 285, 285);
ctx.closePath();


//circulos 
function circulo(width,cor,x,y,z,pi1,pi2){
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = cor;
    ctx.arc(x,y,z,pi1,pi2);
    ctx.stroke();
    ctx.closePath();
}

circulo(1.5,'green',150,150,60,1*Math.PI, 0*Math.PI);
circulo(1.5,'green',147,150,70,1*Math.PI, 1.25*Math.PI);
circulo(1.5,'green',154,150,70,1.75*Math.PI, 2*Math.PI);
circulo(1.5,'green',152,292,57,1.5*Math.PI, 2*Math.PI);
circulo(1.5,'green',148,292,70,1*Math.PI, 1.5*Math.PI);


//circulos preenchidos
function bolas(width,cor,corb,x,y,z,pi1,pi2){
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = cor;
    ctx.fillStyle = corb;
    ctx.arc(x,y,z,pi1,pi2);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

bolas(3,'green','yellow',72.5,230,15,Math.PI, 3*Math.PI);
bolas(3,'green','yellow',217.5,230,15,Math.PI, 3*Math.PI);
bolas(3,'green','cyan',150,292,40,1*Math.PI, 0*Math.PI);
bolas(3,'blue','cyan',150,115,15,Math.PI, 3*Math.PI);


//escrita
function escrita(x,y,texto,font,color){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.font = font;
    ctx.fillText(texto,x,y);
    ctx.closePath();
}

escrita(110,70,"Canvas","22px Arial",'black');


//Canvas 2

let canvas2 = document.getElementById("canvas2");
let ctx2 = canvas2.getContext("2d");

// céu
ctx2.fillStyle = "#89fcdf";
ctx2.fillRect(0,0,500,500);

// chão
ctx2.fillStyle = "gray";
ctx2.fillRect(0,350,500,150);

// sol
ctx2.beginPath();
ctx2.arc(400,100,60,0,2*Math.PI);
ctx2.fillStyle = "yellow";
ctx2.fill();

// rio
ctx2.fillStyle = "#4a86d4";
ctx2.fillRect(0,350,100,150);

ctx2.beginPath();
ctx2.arc(150,500,100,Math.PI,2*Math.PI);
ctx2.fill();

// casa
ctx2.fillStyle = "#8b4513";
ctx2.fillRect(200,250,100,100);

// telhado
ctx2.beginPath();
ctx2.moveTo(200,250);
ctx2.lineTo(250,200);
ctx2.lineTo(300,250);
ctx2.fillStyle = "#f06449";
ctx2.fill();

// porta
ctx2.fillStyle = "#5a381e";
ctx2.fillRect(240,280,20,70);

// janelas
ctx2.fillStyle = "#94d5f3";
ctx2.fillRect(210,270,25,25);
ctx2.fillRect(265,270,25,25);

// árvore esquerda
ctx2.fillStyle = "#8b4513";
ctx2.fillRect(80,280,20,70);

ctx2.beginPath();
ctx2.arc(90,260,40,0,2*Math.PI);
ctx2.fillStyle = "green";
ctx2.fill();

// árvore direita
ctx2.fillStyle = "#8b4513";
ctx2.fillRect(400,320,20,60);

ctx2.beginPath();
ctx2.arc(410,300,40,0,2*Math.PI);
ctx2.fillStyle = "green";
ctx2.fill();