import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.scss']
})
export class VideoViewComponent  {

/*   queryParams: any;
  @ViewChild('videoScreen') videoScreen: ElementRef<HTMLVideoElement>;
  @ViewChild('videoDiv') videoDiv: ElementRef<HTMLDivElement>;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.queryParams = params;
      if (this.queryParams.video) {
        this.videoScreen.nativeElement.src = "http://localhost:8080/video/${this.queryParams.video}";
        this.videoDiv.nativeElement.style.display = 'block';
        document.querySelector('#now-playing').innerText = 'Now playing ' + this.queryParams.video;
      }
    });
  } */
}