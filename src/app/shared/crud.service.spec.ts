import { TestBed } from '@angular/core/testing';
import { CrudService } from './crud.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Component Testing - 4. Service Test Component', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [CrudService]
  }));

   it('should be created', () => {
    const service: CrudService = TestBed.get(CrudService);
    expect(service).toBeTruthy();
   });

   it('should have getCountryData function', () => {
    const service: CrudService = TestBed.get(CrudService);
    expect(service.getCountryData('')).toBeTruthy();
});
});