import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vmasculino } from './vmasculino';

describe('Vmasculino', () => {
  let component: Vmasculino;
  let fixture: ComponentFixture<Vmasculino>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vmasculino],
    }).compileComponents();

    fixture = TestBed.createComponent(Vmasculino);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
