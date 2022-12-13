import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'hoolio-glance',
  templateUrl: './at-a-glance.component.html',
  styleUrls: ['./at-a-glance.component.scss']
})
export class AtAGlanceComponent implements OnInit {
  public isProcessing: boolean = false;

  constructor() { }

  public ngOnInit(): void {
    this.fadeIn();
    this.accordion();
  }

  public accordion(): void {
    const openButton = document.querySelectorAll("[data-js='open']");
    for (let i = 0; i < openButton.length; i++) {
      openButton[i].addEventListener("click", function (e) {
        e.preventDefault();
        openButton[i].classList.toggle("active");
        var showTxt: any;
        if(openButton[i].previousElementSibling?.className === "card__bottom-desc-wrapper"){
          showTxt = openButton[i].previousElementSibling;
          openButton[i].classList.toggle("close-glance");
        }else{
          showTxt = openButton[i].nextElementSibling;
          openButton[i].classList.toggle("close");
        }
        if (showTxt?.style.maxHeight) {
          showTxt.style.maxHeight = null;
        } else {
          showTxt.style.maxHeight = showTxt?.scrollHeight + "px";
        }
      });
    }
  }

  public fadeIn(): void {
    setTimeout(() => {
      this.isProcessing = true;
    }, 50);
  }
}
