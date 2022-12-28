import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFriendComponent } from './search-friend.component';

describe('SearchFriendComponent', () => {
  let component: SearchFriendComponent;
  let fixture: ComponentFixture<SearchFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFriendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
