import { TestBed } from '@angular/core/testing';

import { EnderecoProviderService } from './endereco-provider.service';

describe('EnderecoProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnderecoProviderService = TestBed.get(EnderecoProviderService);
    expect(service).toBeTruthy();
  });
});
