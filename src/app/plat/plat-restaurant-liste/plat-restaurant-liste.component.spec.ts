import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatRestaurantListeComponent } from './plat-restaurant-liste.component';

describe('PlatRestaurantListeComponent', () => {
  let component: PlatRestaurantListeComponent;
  let fixture: ComponentFixture<PlatRestaurantListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatRestaurantListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatRestaurantListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
