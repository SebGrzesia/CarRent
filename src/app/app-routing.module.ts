import { SelectCarComponent } from './component/select-car/select-car.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoseRegionToRentComponent } from './component/chose-region-to-rent/chose-region-to-rent.component';
import { RentEnterDetailsComponent } from './component/rent-enter-details/rent-enter-details.component';

const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'region',component:ChoseRegionToRentComponent},
  {path:'carSelector', component:SelectCarComponent},
  {path:'rentDetails', component:RentEnterDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
