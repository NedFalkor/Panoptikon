import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureImageComponent } from './capture-image.component';

describe('CaptureImageComponent', () => {
  let component: CaptureImageComponent;
  let fixture: ComponentFixture<CaptureImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptureImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptureImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
