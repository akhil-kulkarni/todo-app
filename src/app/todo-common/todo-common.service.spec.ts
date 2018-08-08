import { TestBed, inject } from '@angular/core/testing';

import { TodoCommonService } from './todo-common.service';

describe('TodoCommonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoCommonService]
    });
  });

  it('should be created', inject([TodoCommonService], (service: TodoCommonService) => {
    expect(service).toBeTruthy();
  }));
});
