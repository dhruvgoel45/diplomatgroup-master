import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  carousel!: HTMLElement;
  firstImg!: HTMLImageElement;
  arrowIcons!: NodeListOf<HTMLElement>;
  isDragStart = false;
  isDragging = false;
  prevPageX=0;
  prevScrollLeft=0;
  positionDiff=0 ;
  
  ngOnInit() {
    this.carousel = document.querySelector(".carousel") as HTMLElement;
    this.firstImg = this.carousel.querySelectorAll("img")[0] as HTMLImageElement;
    this.arrowIcons = document.querySelectorAll(".wrapper i") as NodeListOf<HTMLElement>;

    this.arrowIcons.forEach(icon => {
      icon.addEventListener("click", () => {
        let firstImgWidth = this.firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        this.carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => this.showHideIcons(), 60); // calling showHideIcons after 60ms
      });
    });
  }

  showHideIcons() {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = this.carousel.scrollWidth - this.carousel.clientWidth; // getting max scrollable width
    this.arrowIcons[0].style.display = this.carousel.scrollLeft == 0 ? "none" : "block";
    this.arrowIcons[1].style.display = this.carousel.scrollLeft == scrollWidth ? "none" : "block";
  }

  autoSlide(): void {
    // if there is no image left to scroll then return from here
    if (this.carousel.scrollLeft - (this.carousel.scrollWidth - this.carousel.clientWidth) > -1 || this.carousel.scrollLeft <= 0) return;
  
    this.positionDiff = Math.abs(this.positionDiff); // making positionDiff value positive
    let firstImgWidth = this.firstImg.clientWidth + 14;
    // getting the difference value that needs to be added or reduced from carousel left to take middle img center
    let valDifference = firstImgWidth - this.positionDiff;
  
    if (this.carousel.scrollLeft > this.prevScrollLeft) { // if the user is scrolling to the right
      this.carousel.scrollLeft += this.positionDiff > firstImgWidth / 3 ? valDifference : -this.positionDiff;
      return;
    }
    // if the user is scrolling to the left
    this.carousel.scrollLeft -= this.positionDiff > firstImgWidth / 3 ? valDifference : -this.positionDiff;
  }
  

  dragStart(e: MouseEvent | TouchEvent) {
    // updating global variables value on mouse down event
    this.isDragStart = true;
    this.prevPageX = e instanceof MouseEvent ? e.pageX : e.touches[0].pageX;
    this.prevScrollLeft = this.carousel.scrollLeft;
  }

  dragging(e: MouseEvent | TouchEvent) {
    // scrolling images/carousel to the left according to the mouse pointer
    if (!this.isDragStart) return;
    e.preventDefault();
    this.isDragging = true;
    this.carousel.classList.add("dragging");
    this.positionDiff = (e instanceof MouseEvent ? e.pageX : e.touches[0].pageX) - this.prevPageX;
    this.carousel.scrollLeft = this.prevScrollLeft - this.positionDiff;
    this.showHideIcons();
  }
  dragStop(): void {
    this.isDragStart = false;
    this.carousel.classList.remove("dragging");

    if (!this.isDragging) return;
    this.isDragging = false;
    this.autoSlide();
  }
}