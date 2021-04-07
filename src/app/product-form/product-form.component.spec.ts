import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductFormComponent } from './product-form.component';

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

fdescribe('add product component tests', () => {
  let component: ProductFormComponent; 
  let fixure: ComponentFixture<ProductFormComponent>; 

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ProductFormComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
    

    }).compileComponents(); 

    fixure = TestBed.createComponent(ProductFormComponent); 
    component = fixure.componentInstance;

  })

  it('is update product component defined', ()=>{
    
    //creates a testing model and simulates an app model of the actual application
    expect(component).toBeDefined();  


  }); 


it('is update form vailid when empty', ()=> {

  let itemName = component.productForm.controls["name"]; 
  itemName.setValue("AHA30%"); 

  let itemCategory = component.productForm.controls["category"]; 
  itemCategory.setValue("skincare"); 

  let itemBrand = component.productForm.controls["brand"]; 
  itemBrand.setValue("The Ordinary"); 

  let itemPrice = component.productForm.controls["price"]; 
  itemPrice.setValue("20"); 

  let itemISBN = component.productForm.controls["isbn"]; 
  itemISBN.setValue("S10"); 

  let itemImageURL = component.productForm.controls["imageurl"]; 
  itemImageURL.setValue("https://images.beautybay.com/eoaaqxyywn6o/THEO0026F_1.jpg_s3.lmb_wuz4un/6360a6007eddaedc0fbbf21fbe11c8ce/THEO0026F_1.jpg"); 

  expect(component.productForm.valid).toBeTruthy(); 

   });

})