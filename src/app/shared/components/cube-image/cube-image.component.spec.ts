import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeImageComponent } from './cube-image.component';

describe('CubeImageComponent', () => {
  let component: CubeImageComponent;
  let fixture: ComponentFixture<CubeImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubeImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
