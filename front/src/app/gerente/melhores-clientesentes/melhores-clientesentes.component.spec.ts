import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelhoresClientesentesComponent } from './melhores-clientesentes.component';

describe('MelhoresClientesentesComponent', () => {
  let component: MelhoresClientesentesComponent;
  let fixture: ComponentFixture<MelhoresClientesentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MelhoresClientesentesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MelhoresClientesentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
