import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatAjoutComponent } from './plat-ajout.component';

describe('PlatAjoutComponent', () => {
  let component: PlatAjoutComponent;
  let fixture: ComponentFixture<PlatAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
