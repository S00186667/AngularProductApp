import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


fdescribe('register component tests', () => {
  let component: RegisterComponent; 
  let fixure: ComponentFixture<RegisterComponent>; 

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
    

    }).compileComponents(); 

    fixure = TestBed.createComponent(RegisterComponent); 
    component = fixure.componentInstance;

  })

  it('is register component defined', ()=>{
    
    //creates a testing model and simulates an app model of the actual application
    expect(component).toBeDefined();  


  }); 


it('is form vailid when empty', ()=> {

  let itemEmail = component.registerForm.controls["email"]; 
  itemEmail.setValue("dylan@dylan.com"); 

  let itemPassword = component.registerForm.controls["password"]; 
  itemPassword.setValue("dylan123"); 

  expect(component.registerForm.valid).toBeTruthy(); 

   });


})

