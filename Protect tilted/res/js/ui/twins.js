export class Twins {
  constructor(hp, x, y, width, height) {
    this.hp = hp;
    this.position = {
      x: x,
      y: y,
    };
    this.size = {
      width: width,
      height: height,
    };
  }

  draw(ctx) {
    ctx.fillStyle = "green";
   /* ctx.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
*/if(this.hp > 0)

    ctx.fillRect(
      this.position.x,
      this.position.y -30 ,
      this.hp,
      20
    );
  
  }
  detectCollision(enemy){
    if (
        this.position.x < enemy.position.x + enemy.size.width &&
        this.position.x + this.size.width > enemy.position.x &&
        this.position.y < enemy.position.y + enemy.size.height &&
        this.position.y + this.size.height > enemy.position.y
      ) {
        // Collision detected!
        enemy.position.x = -50
        this.hp -= enemy.dmg;
      }
  }
}
