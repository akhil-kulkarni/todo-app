import { TestBed, inject } from '@angular/core/testing';

import { CreateStuffService } from './create-stuff.service';

describe('CreateStuffService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateStuffService]
    });
  });

  it('should be created', inject([CreateStuffService], (service: CreateStuffService) => {
    expect(service).toBeTruthy();
  }));
});
