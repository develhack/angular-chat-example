import { TestBed, async, inject } from '@angular/core/testing';

import { ShouldNotAuthenticatedGuard } from './should-not-authenticated.guard';

describe('ShouldNotAuthenticatedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShouldNotAuthenticatedGuard]
    });
  });

  it('should ...', inject([ShouldNotAuthenticatedGuard], (guard: ShouldNotAuthenticatedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
