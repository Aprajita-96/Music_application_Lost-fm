import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FavouriteComponent } from './favourite/favourite.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [{
  path: "home", component: HomeComponent
},
// {
//   path: '', pathMatch:'full', redirectTo:'/home' 
// },
{
  path:"favourite", component:FavouriteComponent
},
{
  path:"register" , component:RegisterComponent
},
{
  path:"**", component:HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
