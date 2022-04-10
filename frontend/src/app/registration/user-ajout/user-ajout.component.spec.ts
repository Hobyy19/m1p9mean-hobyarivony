import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAjoutComponent } from './user-ajout.component';

describe('UserAjoutComponent', () => {
  let component: UserAjoutComponent;
  let fixture: ComponentFixture<UserAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
