import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleveFilterComponent } from './eleve-filter.component';

describe('EleveFilterComponent', () => {
  let component: EleveFilterComponent;
  let fixture: ComponentFixture<EleveFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EleveFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EleveFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
