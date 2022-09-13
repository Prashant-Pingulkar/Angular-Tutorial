import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [{path:'register',component:SignUpComponent},
{path:'products',component:ProductsComponent},
{path:'about-us',component:AboutUsComponent},
{path:'contact',component:ContactUsComponent},
{path:'**',component:LoginComponent},
{path:'**',component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
