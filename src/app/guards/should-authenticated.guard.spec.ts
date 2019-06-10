import { TestBed, async, inject } from '@angular/core/testing';

import { ShouldAuthenticatedGuard } from './should-authenticated.guard';

describe('ShouldAuthenticatedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShouldAuthenticatedGuard]
    });
  });

  it('should ...', inject([ShouldAuthenticatedGuard], (guard: ShouldAuthenticatedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
