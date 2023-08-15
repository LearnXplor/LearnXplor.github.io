import { Component } from '@angular/core';

@Component({
  selector: 'app-interview-prep',
  templateUrl: './interview-prep.component.html',
  styleUrls: ['./interview-prep.component.css']
})
export class InterviewPrepComponent {
  timer: number = 1200; // 20 minutes in seconds
  interval: any;
  startTime: Date | null = null;
  endTime: Date | null = null;
  timerRunning: boolean = false;
  timeDifference:any;
 

  ngOnInit() {}

  startStopTimer() {
    if (!this.timerRunning) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }

  startTimer() {
    this.startTime = new Date();
    this.timerRunning = true;

    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        this.stopTimer();
      }
    }, 1000); // Update timer every second
  }

  stopTimer() {
    if (this.timerRunning) {
      this.endTime = new Date();
      clearInterval(this.interval);
      this.timerRunning = false;

      // Calculate and save the time difference (in seconds)
      const timeDifference = (this.endTime.getTime() - this.startTime!.getTime()) / 1000;
      console.log('Time Difference:', timeDifference);

      // Add code to handle quiz submission or other actions here
    }
  }
  

  formatTime(seconds: number): string {
    const minutes: string = String(Math.floor(seconds / 60)).padStart(2, '0');
    const remainingSeconds: string = String(seconds % 60).padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
  }

  calculateTimeDifference(): string {
    if (this.startTime && this.endTime) {
      const timeDifference = Math.abs(this.endTime.getTime() - this.startTime.getTime()) / 1000;
      const minutes = Math.floor(timeDifference / 60);
      const seconds = Math.floor(timeDifference % 60);
      return `${minutes} minutes and ${seconds} seconds`;
    }
    return '';
  }
}
