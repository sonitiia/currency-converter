import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverseCurrencyFormComponent } from './converse-currency-form.component';

describe('ConverseCurrencyFormComponent', () => {
  let component: ConverseCurrencyFormComponent;
  let fixture: ComponentFixture<ConverseCurrencyFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConverseCurrencyFormComponent]
    });
    fixture = TestBed.createComponent(ConverseCurrencyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
