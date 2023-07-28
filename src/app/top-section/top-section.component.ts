import { Component, ViewChild, ElementRef, OnInit, Renderer2 } from "@angular/core";
@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.css']
})
export class TopSectionComponent implements OnInit {
    video: HTMLVideoElement | null;
    muteButton: HTMLElement | null;

    constructor(private renderer:Renderer2) {
      this.video = null;
      this.muteButton = null;
    }
    ngOnInit(): void {
      this.video = document.getElementById("myVideo") as HTMLVideoElement;
      this.muteButton = document.getElementById("muteButton");
    }
  
    onClick(event: Event): void {
      if (this.video) {
        if (this.video.paused) {
          console.log("Inside OnClick function: if block");
          this.video.play();
        } else {
          console.log("Inside OnClick function: else block");
          this.video.pause();
        }
      } else {
        console.log("this.video is undefined");
      }
    }
  }