import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEditionComponent } from './card-edition.component';

describe('CardEditionComponent', () => {
  let component: CardEditionComponent;
  let fixture: ComponentFixture<CardEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
