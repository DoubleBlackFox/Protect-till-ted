//šablony - třída(class)
//třída (class) má vždy první písmeno velké
export class Enemy {
// statitc - dana vec patri tride
//vec pouzivame pomoci zapisu trida.vec
//Enemy.entitiesData
static entitiesData;

  // constructor - metoda ktera se vola pri vytvoreni objektu
  constructor(name, hp, dmg, imagePath, width, height, velocity, type) {
    // this- ukazuje na vzniklou instanci - kopii od tridy
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.imagePath = imagePath
    this.img = new Image();
    this.img.src = this.imagePath;
    this.position = {
      x: 0,
      y: 0,
    };
    if (type == "ground"){
      this.position.y =400
    }
    this.ratio = 1;
    this.size = {
      width: width * this.ratio,
      height: height * this.ratio,
    };
    this.velocity = {
      x: velocity,
     
    };
    this.type = type
  }

  draw(ctx) {
    ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }

 

  update() {
    this.move();
  }

  move() {
    this.position.x += this.velocity.x;
    if (this.position.x >= 550) {
      this.velocity.x *= -1;
    }

    if (this.position.x <= 0) {
      this.velocity.x *= -1;
    }
  }
}

//const myEnemy = new Enemy("Enemy 1", 100, 12); //vytvoření kopie od šablony - objekt(instance)
