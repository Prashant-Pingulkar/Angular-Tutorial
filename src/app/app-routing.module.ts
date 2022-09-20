import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [{path:'register',component:SignUpComponent},
{path:'products',component:ProductsComponent},
{path:'products/:category',component:SignUpComponent},
{path:'about-us',component:AboutUsComponent},
{path:'contact',component:ContactUsComponent},
{path:'login',component:LoginComponent},
{path:'dashboard',component:DashboardComponent},
{path:'myOrders',component:MyOrdersComponent},
{path:'**',component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
