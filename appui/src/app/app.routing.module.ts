import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppHomeComp} from './app.home.comp';

const routes: Routes = [
  {path: "", component: AppHomeComp, data: {title: "Home"}},
  {path: "home", component: AppHomeComp, data: {title: "Home"}},
  {path: "dietician", loadChildren: () => import("../appsrc/dietician").then(m => m.DieticianModule)},
  {path: "user", loadChildren: () => import("../appsrc/user").then(m => m.UserModule)},
  {path: "admin", loadChildren: () => import("../appsrc/admin").then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
