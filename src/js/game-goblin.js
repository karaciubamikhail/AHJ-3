import {lose} from './result'
export class Game {
  constructor(item) {
    this._item = item;
    this.skore = 0;
    this.lose = 0;
  }
  startGame() {
    //цикл для создания элементов
    for (let i = 0; i <= 16; i++) {
      const element = document.createElement("div");
      element.classList.add("field-item");
      this._item.appendChild(element);
    }
    //перемещение картинки
    const img = document.createElement("img");
    img.src = "../img/goblin.png";
    img.classList.add("img");
    setInterval(() => {
      const elementImg = document.querySelectorAll(".field-item");
      let imgs = document.querySelector(".img");
      if (imgs) {
        for (let i = 0; i >= elementImg.length; i++) {
          elementImg[i].remove(imgs);
        }
      }
      const position = Math.floor(Math.random() * 15);
      elementImg[position].appendChild(img);
      for(let child of elementImg){
        child.addEventListener('click',(e)=>{
          if(e.target == img){
            this.skore ++;
          }else{
            if(this.lose == 5){
              lose();
            }else{
              this.lose ++;
            }
          }
        })
      }
    }, 2000);
  }
}
