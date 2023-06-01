import { Component, ElementRef, OnInit, OnDestroy, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Comment } from 'src/app/interfaces/comment'
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoViewComponent implements OnInit, OnDestroy {

  comments: Comment[] | undefined;
  numLikes: number | undefined;
  likeCommentId: number | undefined;
  username: string = ''

  queryParams: any = {};

  videoSrc: string = 'C:\Users\Administrateur\Videos\8995fec9-c3ff-4ed5-b3d8-1138ab928dd2.webm';

  videoUrls: string[] = [];
  currentVideoIndex = 0;

  @ViewChild('videoScreen', { static: true }) videoScreen!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoDiv', { static: true }) videoDiv!: ElementRef<HTMLDivElement>;
  @ViewChild('videoPlayer', { static: true }) videoPlayer!: ElementRef<HTMLVideoElement>;

  private subscription!: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
    private commentService: CommentService) { }

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
        this.username = this.queryParams.username;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

 createNewComment(username: string, text: string): Comment {
  return {
    username,
    text,
    date: new Date().toISOString(),
    replies: [],
    numLikes: 0
  };
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
    const newComment = this.createNewComment(this.username, 'some text');
    this.commentService.createComment(newComment).subscribe(
      (error: any) => {
        console.error(error);
      }
    );
  }  
  
  dislike() {
    this.commentService.deleteComment(this.likeCommentId as number).subscribe(
      (error: any) => {
        console.error(error);
      }
    );
  }

}