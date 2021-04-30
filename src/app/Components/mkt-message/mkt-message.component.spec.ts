import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MktMessageComponent } from './mkt-message.component';

describe('MktMessageComponent', () => {
  let component: MktMessageComponent;
  let fixture: ComponentFixture<MktMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MktMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MktMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
