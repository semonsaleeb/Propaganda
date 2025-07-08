import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mediazone } from './mediazone';

describe('Mediazone', () => {
  let component: Mediazone;
  let fixture: ComponentFixture<Mediazone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mediazone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mediazone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
