import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})

export class AddVideoComponent {

/*   queryParams: any;

  @ViewChild('videoForm') form: HTMLFormElement;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.queryParams = params;
    });
  }

  ngAfterViewInit(): void {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();

      let data = new FormData(this.form);

      fetch('http://localhost:8080/video', {
        method: 'POST',
        body: data
      })
        .then(result => result.text())
        .then(_ => {
          window.location.reload();
        });
    });
    // get the video file from the form
    const file = this.form.querySelector('input[type="file"]').files[0];
    const fileURL = URL.createObjectURL(file);
  } */
}
