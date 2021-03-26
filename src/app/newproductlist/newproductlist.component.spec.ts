import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewproductlistComponent } from './newproductlist.component';

describe('NewproductlistComponent', () => {
  let component: NewproductlistComponent;
  let fixture: ComponentFixture<NewproductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewproductlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewproductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
