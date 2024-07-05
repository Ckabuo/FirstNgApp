import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAlphaComponent } from './component-alpha.component';

describe('ComponentAlphaComponent', () => {
  let component: ComponentAlphaComponent;
  let fixture: ComponentFixture<ComponentAlphaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentAlphaComponent]
    });
    fixture = TestBed.createComponent(ComponentAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
