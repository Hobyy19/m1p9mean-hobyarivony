import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreurCommandeComponent } from './livreur-commande.component';

describe('LivreurCommandeComponent', () => {
  let component: LivreurCommandeComponent;
  let fixture: ComponentFixture<LivreurCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreurCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivreurCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
