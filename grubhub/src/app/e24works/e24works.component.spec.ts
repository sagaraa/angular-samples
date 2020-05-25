import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E24worksComponent } from './e24works.component';

describe('E24worksComponent', () => {
  let component: E24worksComponent;
  let fixture: ComponentFixture<E24worksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E24worksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E24worksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
