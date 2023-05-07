import { Component, ElementRef, OnInit, OnDestroy, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LikeCommentService } from 'src/app/services/like-comment.service';
import { Comment } from 'src/app/models/comment.model';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoViewComponent implements OnInit, OnDestroy {

  comments: any[] | undefined;
  numLikes: number | undefined;
  likeCommentId: number | undefined;

  queryParams: any = {};

  videoSrc: string = '';

  videoUrls: string[] = [];
  currentVideoIndex = 0;

  @ViewChild('videoScreen', { static: true }) videoScreen!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoDiv', { static: true }) videoDiv!: ElementRef<HTMLDivElement>;
  @ViewChild('videoPlayer', { static: true }) videoPlayer!: ElementRef<HTMLVideoElement>;

  private subscription!: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
    private likeCommentService: LikeCommentService) { }

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

  playPause() {
    if (this.videoPlayer.nativeElement.paused) {
      this.videoPlayer.nativeElement.play();
    } else {
      this.videoPlayer.nativeElement.pause();
    }
  }

  previous() {
    if (this.currentVideoIndex > 0) {
      this.currentVideoIndex--;
      this.videoSrc = this.videoUrls[this.currentVideoIndex];
      this.videoScreen.nativeElement.src = this.videoSrc;
    }
  }

  next() {
    if (this.currentVideoIndex < this.videoUrls.length - 1) {
      this.currentVideoIndex++;
      this.videoSrc = this.videoUrls[this.currentVideoIndex];
      this.videoScreen.nativeElement.src = this.videoSrc;
    }
  }

  like() {
    this.likeCommentService.createLikeComment(new Comment(), 'username').subscribe(
      (likeComment) => {
        this.likeCommentService.getNumberOfLikesForComment(likeComment).subscribe(
          (numLikes) => {
            this.numLikes = numLikes;
          }
        );
      },
      (error) => {
        console.error(error);
      }
    );
  }

  dislike() {
    this.likeCommentService.deleteLikeComment(this.likeCommentId).subscribe(
      () => {
        this.likeCommentService.getNumberOfLikesForComment(new Comment()).subscribe(
          (numLikes) => {
            this.numLikes = numLikes;
          }
        );
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
