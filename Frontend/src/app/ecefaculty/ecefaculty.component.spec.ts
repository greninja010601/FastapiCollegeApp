import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcefacultyComponent } from './ecefaculty.component';

describe('EcefacultyComponent', () => {
  let component: EcefacultyComponent;
  let fixture: ComponentFixture<EcefacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcefacultyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcefacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
