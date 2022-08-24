import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilfacultyComponent } from './civilfaculty.component';

describe('CivilfacultyComponent', () => {
  let component: CivilfacultyComponent;
  let fixture: ComponentFixture<CivilfacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilfacultyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivilfacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
