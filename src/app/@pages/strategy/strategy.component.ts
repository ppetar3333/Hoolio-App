import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hoolio-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent implements OnInit {
  public isProcessing: boolean = false;

  constructor() { }

  public ngOnInit(): void {
    this.fadeIn();
    this.changeActiveClass();
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

  public changeActiveClass(): void {
    const tabsBtn = document.querySelectorAll("[data-js='button-strategic']");
    const tabs = document.querySelectorAll("[data-js='tab-panel']");
    Array.from(tabsBtn).forEach((items: any) => {
      items.addEventListener("click", ({ target: { dataset: { id = '' }}}) =>  {
        if (id.length > 0) {
          tabs.forEach(t => t.classList.add('hidden'));
          document.querySelector(`#${id}`)?.classList.remove('hidden');
        }
        var selectedBtn = document.querySelectorAll(".strategy__button--active");
        selectedBtn[0].className = selectedBtn[0].className.replace(" strategy__button--active", "");
        items.className += " strategy__button--active";
      });
    });
  }

  public fadeIn(): void {
    setTimeout(() => {
      this.isProcessing = true;
    }, 50);
  }
}
