import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Concierge } from './concierge';

describe('Concierge', () => {
  let component: Concierge;
  let fixture: ComponentFixture<Concierge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Concierge],
    }).compileComponents();

    fixture = TestBed.createComponent(Concierge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
