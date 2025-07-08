import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAndGroups } from './users-and-groups';

describe('UsersAndGroups', () => {
  let component: UsersAndGroups;
  let fixture: ComponentFixture<UsersAndGroups>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersAndGroups]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersAndGroups);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
