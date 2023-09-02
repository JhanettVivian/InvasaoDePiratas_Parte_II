//Vamos começar definindo as variáveis

//As variáveis abaixo estão importando objetos definidos na biblioteca Matter.min.js World, Engine, Bodies e Constraint(Mundo, Motor, Corpos e Limites).

//O objeto abaixo será usado para criar o motor da física
const Engine = Matter.Engine;

//O objeto abaixo será usado para criar o mundo fisíco e adicionar objetos a ele
const World = Matter.World;

//O objeto abaixo será usado para criar os objetos físicos que habitam o mundo
const Bodies = Matter.Bodies;

//O objeto abaixo será usado para criar os limites do mundo
const Constraint = Matter.Constraint;

//Vamos inicializar uma variável para armazenar o motor do mundo
var engine;

//Vamos inicializar uma variável para armazenar o mundo
var world;

//Vamos inicializar uma variável para armazenar a imagem de fundo
var backgroundImg;

//Vamos inicializar uma variável para armazenar a imagem da torre
var towerImg;

//Vamos inicializar uma variável para armazenar a tela de jogo
var canvas;

//Vamos inicializar uma variável para armazenar o angulo da imagem
var angle;

//Vamos inicializar uma variável para armazenar o sprite da torre
var tower;

//Vamos inicializar uma variável para armazenar o sprite chão
var ground;

//Vamos inicializar uma variável para armazenar o sprite do canhão
var cannon;

//Vamos inicializar uma variável para armazenar o placar
var score;




//Vamos definir a função que ajuda a carregar os ativos do projeto
function preload(){

    //Vamos carregar a imagem de fundo e guardar na variável backgroundImg
    backgroundImg = loadImage("./Assets/background.gif");

    //Vamos carregar a imagem da torre na variável towerImg
    towerImg = loadImage("./Assets/tower.png");

}

//Vamos definir a função que ajuda a definir os parametros dos elementos do projeto
function setup(){

    //Vamos criar a tela do jogo com uma largura de 1200px e altura de 600px, depois armazenar na variável canvas
    canvas = createCanvas(1200, 600);

    //Vamos atribuir a variável engine a criação do motor
    engine = Engine.create();

    //Vamos adicionar o motor ao mundo e atribuilo a variável world
    world = engine.world;

    //Vamos mudar a unidade do angulo para graus 
    angleMode(DEGREES);
    angle = 15;

    //Vamos definir uma variável para guardar caracteristicas de um sprite (objeto/corpo)
    //A propriedade isStatic define se o corpo será estático ou não
    var options = {isStatic:true}

    //Vamos criar um corpo retangular e guarda-lo na variável ground
    //Para criar um corpo retangular use o objeto Bodies, depois chame a função .rectangle que recebe os seguintes parametros ( posição x, posição y, largura, altura, caracteristicas)
    ground = Bodies.rectangle(0, height-1, width*2, 1, options);

    //Vamos adicionar o corpo ground ao mundo
    //Para adicionar um corpo ao mundo você pode chamar o objeto Mundo e com a função .add que recebe os parametros (mundo, corpo)
    World.add(world, ground);

    //Vamos criar um corpo retangular e guarda-lo na variável tower
    //Para criar um corpo retangular use o objeto Bodies, depois chame a função .rectangle que recebe os seguintes parametros ( posição x, posição y, largura, altura, caracteristicas)
    tower = Bodies.rectangle(160, 350, 160, 310, options);

    //Vamos adicionar o corpo tower ao mundo
    //Para adicionar um corpo ao mundo você pode chamar o objeto Mundo e com a função .add que recebe os parametros (mundo, corpo)
    World.add(world, tower);

    //Vamos guardar na variável cannon os parametros do sprite canhão
    cannon = new Cannon(180,110,130,100,angle);

    //Vamos criar uma nova bola na mesma posição do canhão
    cannonBall = new CannonBall(cannon.x, cannon.y);
}

//Vamos definir a função continua para adiconar as regras do jogo
function draw(){

    //Vamos usar a função image que recebe os parametros (imagem, posição x, posição y, largura e altura) para exibir o fundo
    image(backgroundImg, 0, 0, width, height);

    //Carregue o motor na variável engine com a ajuda da função update()
    Engine.update(engine);

    //Vamos chamar a função push() para salvar a nova configuração 
    push();

    //Vamos chamar a função imageMode(CENTER) para criar uma imagem a partir do centro
    imageMode(CENTER);

    //Vamos usar a função image que recebe os parametros (imagem, posição x, posição y, largura e altura) para exibir A TORRE
    image(towerImg, tower.position.x, tower.position.y, 160, 310);

    //Vamos chamar a função pop() para reverter para a configuração anterior
    pop();

    //Vamos chamar a classe cannon para desenhar o canhão
    cannon.display();

    //Vamos chamar a função que exibe a bola no jogo
    cannonBall.display();

}

//Vamos definir uma função que é chamada quando você solta uma tecla do teclado
function keyReleased(){
    ///Vamos definir uma condição para verificar se atela para baixo foi pressionada
    if(keyCode === DOWN_ARROW){
        //Vamos chamar a função que lança a bola
        cannonBall.shoot();
    }
}