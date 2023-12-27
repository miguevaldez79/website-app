import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanaTuColegioComponent } from './gana-tu-colegio.component';

describe('GanaTuColegioComponent', () => {
  let component: GanaTuColegioComponent;
  let fixture: ComponentFixture<GanaTuColegioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GanaTuColegioComponent]
    });
    fixture = TestBed.createComponent(GanaTuColegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
