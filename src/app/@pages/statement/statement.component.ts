import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hoolio-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {
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
        openButton[i].classList.toggle("close");
        let showTxt: any = openButton[i].nextElementSibling;
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
