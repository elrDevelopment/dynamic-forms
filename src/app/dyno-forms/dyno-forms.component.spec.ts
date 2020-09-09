import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynoFormsComponent } from './dyno-forms.component';

describe('DynoFormsComponent', () => {
  let component: DynoFormsComponent;
  let fixture: ComponentFixture<DynoFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynoFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynoFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
