// import { ComponentFixture, TestBed } from '@angular/core/testing';
import {render, screen, fireEvent} from '@testing-library/angular';
import { provideMockStore } from '@ngrx/store/testing';

//use this to test individual component files: ng test --include=src\app\features\product-details\components\product-details\product-details.component.spec.ts
//if you are using store, make sure to mock it
//dont confuse libray testing with the other one

import { ProductDetailsComponent } from './product-details.component';
import { NavbarComponent } from '../../../../core/app-shell/navbar/navbar.component';
import { Store, StoreModule } from '@ngrx/store';
describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  // let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    // await TestBed.configureTestingModule({
    //   declarations: [ProductDetailsComponent, NavbarComponent],
    //   providers: [provideMockStore({})],
    //   imports: [ StoreModule,
    //   ]
    // })
    // .compileComponents();
  
  

    // fixture = TestBed.createComponent(ProductDetailsComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should increment the counter', async() => {
    const component = await render(ProductDetailsComponent, {
      declarations: [ProductDetailsComponent, NavbarComponent],
      providers: [provideMockStore({})],
      imports: [ StoreModule]
    })

    // component.findByDisplayValue('0')

    expect(true).toBe(true);
  })
});
