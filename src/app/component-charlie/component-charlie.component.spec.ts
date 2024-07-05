import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCharlieComponent } from './component-charlie.component';

describe('ComponentCharlieComponent', () => {
  let component: ComponentCharlieComponent;
  let fixture: ComponentFixture<ComponentCharlieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentCharlieComponent]
    });
    fixture = TestBed.createComponent(ComponentCharlieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
