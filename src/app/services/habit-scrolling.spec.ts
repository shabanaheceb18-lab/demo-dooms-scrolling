import { TestBed } from '@angular/core/testing';

import { HabitScrolling } from './habit-scrolling';

describe('HabitScrolling', () => {
  let service: HabitScrolling;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitScrolling);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
