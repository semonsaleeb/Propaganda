import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurClient } from './our-client';

describe('OurClient', () => {
  let component: OurClient;
  let fixture: ComponentFixture<OurClient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
