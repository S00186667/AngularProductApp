import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


fdescribe('login component tests', () => {
  let component: LoginComponent; 
  let fixure: ComponentFixture<LoginComponent>; 

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
    

    }).compileComponents(); 

    fixure = TestBed.createComponent(LoginComponent); 
    component = fixure.componentInstance;

  })

  it('is login component defined', ()=>{
    
    //creates a testing model and simulates an app model of the actual application
    expect(component).toBeDefined();  


  }); 


it('is form vailid when empty', ()=> {

  let itemEmail = component.loginForm.controls["email"]; 
  itemEmail.setValue("AdminUser@AdminUser.com"); 

  let itemPassword = component.loginForm.controls["password"]; 
  itemPassword.setValue("AdminUser"); 

  expect(component.loginForm.valid).toBeTruthy(); 

   });


})
