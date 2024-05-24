import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCvArchiveComponent } from './list-cv-archive.component';

describe('ListCvArchiveComponent', () => {
  let component: ListCvArchiveComponent;
  let fixture: ComponentFixture<ListCvArchiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCvArchiveComponent]
    });
    fixture = TestBed.createComponent(ListCvArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
