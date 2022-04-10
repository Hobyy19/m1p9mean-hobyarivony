import { TestBed } from '@angular/core/testing';

import { CommandePlatService } from './commande-plat.service';

describe('CommandePlatService', () => {
  let service: CommandePlatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandePlatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
