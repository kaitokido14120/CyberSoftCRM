import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhansuComponent } from './nhansu.component';

describe('NhansuComponent', () => {
  let component: NhansuComponent;
  let fixture: ComponentFixture<NhansuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhansuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhansuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
