import { Enemy } from "./ui/entities.js";
import { BackGround } from "./ui/basic-ui.js";


const background = new BackGround();

const enemies = [];

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


canvas.width = 1280;
canvas.height = 720;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, 1280, 720);



const gameloop = () => {
  //clear
  clear();
  //update
  update();
  //render
  render();
  //fps
  fps();
  //gameloop
  window.requestAnimationFrame(gameloop);
};
const clear = () => {
  canvas.width = 1280;
  canvas.height = 720;
  background.draw(ctx);
};

//oop
//vlastnosti objektu - atributy
const enemy = {
  hp: 100,
  name: "Enemy 1",
  dmg: 10,
};

const update = () => {
 enemies.map((a) => {
a.update();
 })
};
const render = () => {
  enemies.map((a) =>{
    a.draw(ctx)
  })
};
const fps = () => {};

const loadData = async () =>  {
  const entitiesFile = await fetch("./res/data/entities.json")
  const data = await entitiesFile.json();
  Enemy.entitiesData = data
}
const genEnemies = ()  =>{
  Enemy.entitiesData.map((a) => {
    //push - prida novou vec do pole
    enemies.push(new Enemy(
      a.name,
      a.hp,
      a.dmg,
      a.imagePath,
      a.width,
      a.height,
      a.velocity,
      a.type
      )) 
  })
}

window.onload =async () => {
  await loadData();

  console.log(Enemy.entitiesData);
  genEnemies();
  console.log(enemies);
  window.requestAnimationFrame(gameloop);
};






/*
const battleBus = new Image();
battleBus.src = "./res/img/battle_bus.png";

let bossPaths = [
    "./res/img/battle_bus.png",
    "./res/img/BOSS.png",
    "./res/img/fnkid.png",
    "./res/img/kevin.png",
    "./res/img/mecha.png"
];
*/

// {} - objekt (object)
/*
let bus = {
  x: 200,
  y: 200,
  xVelocity: 1,
  yVelocity: 1,
};

window.onload = () => {
  setInterval(() => {
    if (canvas.width <= bus.x + 200) {
      bus.xVelocity *= -1;
      battleBus.src = bossPaths[1];
    }
    if (bus.x <= 0) {
      bus.xVelocity *= -1;
      battleBus.src = bossPaths[3];
    }
    if (canvas.height <= bus.y + 200) {
      bus.yVelocity *= -1;
      battleBus.src = bossPaths[2];
    }
    if (bus.y <= 0) {
      bus.yVelocity *= -1;
      battleBus.src = bossPaths[4];
    }

    bus.x += bus.xVelocity;
    bus.y += bus.yVelocity;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1280, 720);
    ctx.drawImage(battleBus, bus.x, bus.y, 200, 200);
  }, 10);
};

*/