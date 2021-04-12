import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudService } from './../shared/crud.service'
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchComponent } from './search.component';

describe('Unit Testing - 2.a Search Component', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
      , imports: [HttpClientTestingModule]
      , providers: [CrudService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});

describe('Component Testing - 2. Search Component', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
      , imports: [HttpClientTestingModule]
      , providers: [CrudService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
