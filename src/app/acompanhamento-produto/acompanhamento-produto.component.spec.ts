import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhamentoProdutoComponent } from './acompanhamento-produto.component';

describe('AcompanhamentoProdutoComponent', () => {
  let component: AcompanhamentoProdutoComponent;
  let fixture: ComponentFixture<AcompanhamentoProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcompanhamentoProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcompanhamentoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
