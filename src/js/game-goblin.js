import imgs from '../img/goblin.png'
import {lose} from './result'
export class Game {
  constructor(item) {
    this._item = item;
    this.skore = 0;
    this.lose = 0;
    this.loseNumber = document.querySelector('.lose');
    this.skoreNumber = document.querySelector('.win');
  }
  lose(){
    this.skore = 0;
    this.lose = 0;
    this.loseNumber.innerHTML = 0;
    alert("Проиграл");
    startGame();
  }
  startGame() {
    let pole = 16;
    //цикл для создания элементов
    for (let i = 0; i <= pole; i++) {
      const element = document.createElement("div");
      element.classList.add("field-item");
      this._item.appendChild(element);
    }
    //перемещение картинки
    const img = document.createElement("img");
    img.src = imgs;
    img.classList.add("img");
    setInterval(() => {
      let elementImg = document.querySelectorAll(".field-item");
      elementImg.forEach(el=>{
        let image = el.querySelector(".img");
        if (image){
          image.remove()
        };
      })
      const position = Math.floor(Math.random() * 15);
      elementImg[position].appendChild(img);
      elementImg[position].addEventListener('click',(e)=>{
        if(e.target == img){
          this.skore = this.skore + 1;
          this.skoreNumber.innerHTML = this.skore
        }else{
          if(this.lose == 5){
            lose();
          }else{
            this.lose = this.lose +1;
            this.loseNumber.innerHTML = this.lose;
          }
        }
      })
      /*for(let child of elementImg){
        child.addEventListener('click',(e)=>{
          if(e.target == img){
            this.skore = this.skore + 1;
            this.skoreNumber.innerHTML = this.skore
          }else{
            if(this.lose == 5){
              lose();
            }else{
              this.lose = this.lose +1;
              this.loseNumber.innerHTML = this.lose;
            }
          }
        })
        console.log(this.lose, this.skore)
      }*/
    }, 2000);
  }
}
