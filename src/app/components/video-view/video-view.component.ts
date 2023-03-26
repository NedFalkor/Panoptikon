import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VideoViewComponent implements OnInit, OnDestroy {

  queryParams: any = {};

  videoSrc: string = '';

  @ViewChild('videoScreen', { static: true }) videoScreen!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoDiv', { static: true }) videoDiv!: ElementRef<HTMLDivElement>;

  private subscription!: Subscription;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.queryParams.subscribe(params => {
      this.queryParams = params;
      if (this.queryParams.video) {
        this.videoSrc = `http://localhost:8080/video/${this.queryParams.video}`;
        this.videoScreen.nativeElement.src = this.videoSrc;
        this.videoDiv.nativeElement.style.display = 'block';
        const nowPlaying = document.querySelector('#now-playing');
        if (nowPlaying) {
          nowPlaying.textContent = 'Now playing ' + this.queryParams.video;
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

