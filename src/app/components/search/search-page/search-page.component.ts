import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/interfaces/video';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  videos: Video[] = [];
  filteredVideos: Video[] = [];

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.value) {
      const query = inputElement.value.trim().toLowerCase();
      this.filteredVideos = this.videos.filter(video =>
        video.title.toLowerCase().includes(query)
      );
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}