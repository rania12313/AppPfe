import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidatListOffreComponent } from './condidat-list-offre.component';

describe('CondidatListOffreComponent', () => {
  let component: CondidatListOffreComponent;
  let fixture: ComponentFixture<CondidatListOffreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CondidatListOffreComponent]
    });
    fixture = TestBed.createComponent(CondidatListOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
