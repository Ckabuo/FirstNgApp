import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBetaComponent } from './component-beta.component';

describe('ComponentBetaComponent', () => {
  let component: ComponentBetaComponent;
  let fixture: ComponentFixture<ComponentBetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentBetaComponent]
    });
    fixture = TestBed.createComponent(ComponentBetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
