import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPadronComponent } from './consulta-padron.component';

describe('ConsultaPadronComponent', () => {
  let component: ConsultaPadronComponent;
  let fixture: ComponentFixture<ConsultaPadronComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaPadronComponent]
    });
    fixture = TestBed.createComponent(ConsultaPadronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
