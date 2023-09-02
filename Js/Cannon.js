//Vamos definir uma classe para a base do canhão
class Cannon {
    //Vamos definir a função constructor para inicializar as propriedades da classe para quando o objeto for criado
    //E a função recebe os parametros( posição x, posição y, largura, altura, angulo)
    constructor(x, y, width, height, angle){
        //Vamos definir as propriedades para manter o estado do objeto
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        //Vamos carregar as imagens do obejto
        this.cannon_image = loadImage("./Assets/canon.png");
        this.cannon_base = loadImage("./Assets/cannonBase.png");
    }
    //Vamos definir a função display() para rendenizar o canhão na tela
    display(){

        //Vamos definir uma condição que verifica se a tecla seta para direita foi pressionada e se o angulo do canhão é maior que 70
        if (keyIsDown(RIGHT_ARROW) && this.angle<70  ) {
            
            //vamos incrementar o angulo do canhção em 1
            this.angle += 1;
            console.log(angle);
        }
        //Vamos definir uma condição que verifica se a tecla seta para esquerda foi pressionada e se o angulo do canhão é maior que -30
        if (keyIsDown(LEFT_ARROW) && this.angle>-30 ) {
            
             //vamos decrementar o angulo do canhção em 1
             this.angle -= 1;
            console.log(angle);
        }



        //Vamos chamar a função push() para salvar a nova configuração 
        push();
        //Vamos chamar a função translate() para definir uma posição na tela de jogo
        translate(this.x, this.y);
        //Vamos chamar a função  rotate() para definir o ângulo do canhão
        rotate(this.angle);
        //Vamos chamar a função imageMode(CENTER) para criar uma imagem a partir do centro
        imageMode(CENTER);
        //Vamos chamar a função image para exibir a imagem do canhão
        //Com os parametros (imagem, posição x, posição y, largura e altura)
        image(this.cannon_image, 0, 0, this.width, this.height);
        //Vamos chamar a função pop() para reverter para a configuração anterior
        pop();
        //Com os parametros (imagem, posição x, posição y, largura e altura)
        //Vamos chamar a função image para exibir a imagem da base do canhão
        image(this.cannon_base, 70, 20, 200, 200);
    }
}