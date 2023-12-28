export class Mouse {
    isDrag;
    startX;
    startScrollLeft;


    constructor(lrBtns, carousel, firstCardWidth) {
        this.isDrag = false
        this.lrBtns = lrBtns
        this.carousel = carousel
        this.firstCardWidth = firstCardWidth
    }

    move() {
        this.lrBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                this.carousel.scrollLeft += btn.id === "left" ? -this.firstCardWidth.offsetWidth : this.firstCardWidth.offsetWidth;
            });
        });
    }

  
    
    

};