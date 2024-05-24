import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCandidatComponent } from './list-candidat.component';

describe('ListCandidatComponent', () => {
  let component: ListCandidatComponent;
  let fixture: ComponentFixture<ListCandidatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCandidatComponent]
    });
    fixture = TestBed.createComponent(ListCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
