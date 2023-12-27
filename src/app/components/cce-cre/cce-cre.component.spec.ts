import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CceCreComponent } from './cce-cre.component';

describe('CceCreComponent', () => {
  let component: CceCreComponent;
  let fixture: ComponentFixture<CceCreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CceCreComponent]
    });
    fixture = TestBed.createComponent(CceCreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
