import { Component, OnInit } from '@angular/core';

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
  }

  public fadeIn(): void {
    setTimeout(() => {
      this.isProcessing = true;
    }, 50);
  }
}
