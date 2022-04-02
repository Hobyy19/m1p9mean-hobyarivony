import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatDetailsComponent } from './plat-details.component';

describe('PlatDetailsComponent', () => {
  let component: PlatDetailsComponent;
  let fixture: ComponentFixture<PlatDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
