import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarUsersComponent } from './side-bar-users.component';

describe('SideBarUsersComponent', () => {
  let component: SideBarUsersComponent;
  let fixture: ComponentFixture<SideBarUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarUsersComponent]
    });
    fixture = TestBed.createComponent(SideBarUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
