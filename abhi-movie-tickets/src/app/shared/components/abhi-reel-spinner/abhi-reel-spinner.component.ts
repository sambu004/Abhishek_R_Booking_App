import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'abhi-reel-spinner',
  templateUrl: './abhi-reel-spinner.component.html',
  styleUrls: ['./abhi-reel-spinner.component.scss']
})
export class AbhiReelSpinnerComponent implements OnInit, OnDestroy {
  spinnerText!: string;
  timeInterval: any;

  ngOnInit(): void {
    this.loadSpinnerMessage();
    this.timeInterval = setInterval(()=>{
      this.loadSpinnerMessage();
    }, 10000)
  }

  loadSpinnerMessage(): void {
    this.spinnerText = "Movie Loading....";
      setTimeout(()=>{
      this.spinnerText = "Popcorn Cooking....";
      }, 2000);
      setTimeout(()=>{
        this.spinnerText = "Please Wait....";
      }, 4000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timeInterval);
  }

}
