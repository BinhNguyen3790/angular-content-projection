import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyNgprojectComponent } from './zippy-ngproject.component';

describe('ZippyNgprojectComponent', () => {
  let component: ZippyNgprojectComponent;
  let fixture: ComponentFixture<ZippyNgprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZippyNgprojectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZippyNgprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
