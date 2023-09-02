//Vamos definir uma classe para as bolas 
class CannonBall {
    //Vamos definir os parametros do sprite bola  (posição x e posição y)
    constructor(x,y){
        //Vamos definir uma variável para armazenar a caracteristica para o sprite 
        var options = {
            //Vamos definir uma característica estática
            isIstatic: true
        };
        //Vamos definir um raido de 30px para a bola
        this.r = 30;
        //Vamos criar um corpo circular para a bola 
        //com os parametros ( posição x, posição y, raio, característica)
        this.body = Bodies.circle(x, y, this.r, options);
        //Vamos carregar a imagem da bola
        this.image = loadImage("./Assets/cannonball.png");
        //Vamos adicionar a bola ao mundo
        World.add(world, this.body);
    }

    //Vamod definir uma função lançar a bola
    shoot(){

        //Vamos inicializar uma variável para guardar um novo angulo para a bola  
        var newAngle = cannon.angle - 28;

        //Vamos atribuir um novo valor para o ângulo
        //3.14/180: Isso é uma conversão de graus para radianos.
        newAngle = newAngle*(3.14/180);

        //Agora atribuimos ao sprite a propriedade angulo com seu novo valor
        var velocity = p5.Vector.fromAngle(newAngle);

        //Mutiplique a velocidade por 0.5
        velocity.mult(0.5);

        //defina uma caracteristica para o corpo, estático
        Matter.Body.setStatic(this.body, false);
    
        //Vamos redefinir a velocidade do corpo em x e y
        Matter.Body.setVelocity(this.body,{
            x: velocity.x*(180/3.14), y: velocity.y*(180/3.14)
        });
    }
    //Vamos definir a função display() para rendenizar o canhão na tela
    display(){
        //vamos criar uma variavel para armazenar a posição do corpo em movimento
        var pos = this.body.position;
        //Vamos chamar a função push() para salvar a nova configuração
        push();
        //Vamos chamar a função imageMode(CENTER) para criar uma imagem a partir do centro
        imageMode(CENTER);
        //Vamos usar a função image que recebe os parametros (imagem, posição x, posição y, largura e altura) para exibir a bola
        image(this.image, pos.x, pos.y, this.r, this.r);
        //Vamos chamar a função pop() para reverter para a configuração anterior
        pop();
    }
}