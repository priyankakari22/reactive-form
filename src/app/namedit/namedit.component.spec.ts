import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameditComponent } from './namedit.component';

describe('NameditComponent', () => {
  let component: NameditComponent;
  let fixture: ComponentFixture<NameditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
