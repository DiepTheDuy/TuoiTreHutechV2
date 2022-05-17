import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionBooksComponent } from './union-books.component';

describe('UnionBooksComponent', () => {
  let component: UnionBooksComponent;
  let fixture: ComponentFixture<UnionBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnionBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnionBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
