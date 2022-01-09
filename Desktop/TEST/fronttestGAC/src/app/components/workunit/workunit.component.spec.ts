import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkunitComponent } from './workunit.component';

describe('WorkunitComponent', () => {
  let component: WorkunitComponent;
  let fixture: ComponentFixture<WorkunitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkunitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
