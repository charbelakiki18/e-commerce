import { TestBed } from '@angular/core/testing';

import { SignInServicesService } from './sign-in-services.service';

describe('SignInServicesService', () => {
  let service: SignInServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
