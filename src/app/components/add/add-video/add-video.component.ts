import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})

export class AddVideoComponent {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {

  }
}
