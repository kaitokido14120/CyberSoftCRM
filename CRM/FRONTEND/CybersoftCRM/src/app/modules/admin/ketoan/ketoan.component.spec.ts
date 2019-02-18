import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KetoanComponent } from './ketoan.component';

describe('KetoanComponent', () => {
  let component: KetoanComponent;
  let fixture: ComponentFixture<KetoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KetoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
