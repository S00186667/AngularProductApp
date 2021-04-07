import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { NewProductFormComponent } from './new-product-form.component';


describe('NewProductFormComponent', () => {
  let component: NewProductFormComponent;
  let fixture: ComponentFixture<NewProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProductFormComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


fdescribe('add product component tests', () => {
  let component: NewProductFormComponent; 
  let fixure: ComponentFixture<NewProductFormComponent>; 

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [NewProductFormComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
    

    }).compileComponents(); 

    fixure = TestBed.createComponent(NewProductFormComponent); 
    component = fixure.componentInstance;

  })

  it('is product component defined', ()=>{
    
    //creates a testing model and simulates an app model of the actual application
    expect(component).toBeDefined();  


  }); 


it('is form vailid when empty', ()=> {

  let itemName = component.productForm.controls["name"]; 
  itemName.setValue("Hoola Caramel Matte Bronzing"); 

  let itemCategory = component.productForm.controls["category"]; 
  itemCategory.setValue("makeup"); 

  let itemBrand = component.productForm.controls["brand"]; 
  itemBrand.setValue("benefit"); 

  let itemPrice = component.productForm.controls["price"]; 
  itemPrice.setValue("34"); 

  let itemISBN = component.productForm.controls["isbn"]; 
  itemISBN.setValue("m15"); 

  let itemImageURL = component.productForm.controls["imageurl"]; 
  itemImageURL.setValue("https://static.thcdn.com/images/large/webp//productimg/1600/1600/12054193-3284769714662611.jpg"); 

  expect(component.productForm.valid).toBeTruthy(); 

   });

   it('is form invaild when price less than 1 ', () =>{

    let itemName = component.productForm.controls["name"]; 
    itemName.setValue("Hoola Caramel Matte Bronzing"); 
  
    let itemCategory = component.productForm.controls["category"]; 
    itemCategory.setValue("makeup"); 
  
    let itemBrand = component.productForm.controls["brand"]; 
    itemBrand.setValue("benefit"); 
  
    let itemPrice = component.productForm.controls["price"]; 
    itemPrice.setValue("40"); 
  
    let itemISBN = component.productForm.controls["isbn"]; 
    itemISBN.setValue("m15"); 
    
    let itemImageURL = component.productForm.controls["imageurl"]; 
    itemImageURL.setValue("https://static.thcdn.com/images/large/webp//productimg/1600/1600/12054193-3284769714662611.jpg"); 
  

    //check first if the form is valid or not
    expect(component.productForm.valid).toBeTruthy(); 
    expect(component.productForm.controls["price"].valid).toBeTruthy(); 



   })
})
