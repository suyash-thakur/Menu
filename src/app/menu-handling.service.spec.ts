import { TestBed } from '@angular/core/testing';

import { MenuHandlingService } from './menu-handling.service';

describe('MenuHandlingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuHandlingService = TestBed.get(MenuHandlingService);
    expect(service).toBeTruthy();
  });
});
