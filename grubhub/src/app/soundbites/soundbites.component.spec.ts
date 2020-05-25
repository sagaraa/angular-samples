import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundbitesComponent } from './soundbites.component';

describe('SoundbitesComponent', () => {
  let component: SoundbitesComponent;
  let fixture: ComponentFixture<SoundbitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundbitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundbitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
