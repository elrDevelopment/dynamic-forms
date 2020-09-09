import { TestBed } from '@angular/core/testing';

import { GlobalScriptGuardsGuard } from './global-script-guards.guard';

describe('GlobalScriptGuardsGuard', () => {
  let guard: GlobalScriptGuardsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GlobalScriptGuardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
