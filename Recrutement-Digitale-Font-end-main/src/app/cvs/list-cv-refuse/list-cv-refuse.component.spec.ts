import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCvRefuseComponent } from './list-cv-refuse.component';

describe('ListCvRefuseComponent', () => {
  let component: ListCvRefuseComponent;
  let fixture: ComponentFixture<ListCvRefuseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCvRefuseComponent]
    });
    fixture = TestBed.createComponent(ListCvRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
