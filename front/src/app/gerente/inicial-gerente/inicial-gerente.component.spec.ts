import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialGerenteComponent } from './inicial-gerente.component';

describe('InicialGerenteComponent', () => {
  let component: InicialGerenteComponent;
  let fixture: ComponentFixture<InicialGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicialGerenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicialGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
