import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecusarContaModalComponent } from './recusar-conta-modal.component';

describe('RecusarContaModalComponent', () => {
  let component: RecusarContaModalComponent;
  let fixture: ComponentFixture<RecusarContaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecusarContaModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecusarContaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
