import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoristaListComponent } from './motorista-list.component';

describe('MotoristaListComponent', () => {
  let component: MotoristaListComponent;
  let fixture: ComponentFixture<MotoristaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotoristaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoristaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
