import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChannelComponent } from './account-channel.component';

describe('AccountChannelComponent', () => {
  let component: AccountChannelComponent;
  let fixture: ComponentFixture<AccountChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
