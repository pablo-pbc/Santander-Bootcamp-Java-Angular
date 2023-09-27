import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropIconComponent } from './drop-icon.component';

describe('DropIconComponent', () => {
  let component: DropIconComponent;
  let fixture: ComponentFixture<DropIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropIconComponent]
    });
    fixture = TestBed.createComponent(DropIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
