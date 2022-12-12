import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.changeActiveClass();
  }

  public changeActiveClass(): void {
    const btns = document.querySelectorAll("[data-js='nav-link']");
    Array.from(btns).forEach((item) => {
      item.addEventListener("click", () => {
        var selected = document.getElementsByClassName("side-nav__link--activeLink");
        selected[0].className = selected[0].className.replace(" side-nav__link--activeLink", "");
        item.className += " side-nav__link--activeLink";
      });
    });
  }

  public navigation(page: string): void {
    this.router.navigate([page]);
  }
}
