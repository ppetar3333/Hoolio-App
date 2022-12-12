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
  }

  public fadeIn(): void {
    setTimeout(() => {
      this.isProcessing = true;
    }, 50);
  }
}
