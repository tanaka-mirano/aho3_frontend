import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HyoujiComponent } from './hyouji/hyouji.component';
import { StartComponent } from './start/start.component';
import { OmoroComponent } from './omoro/omoro.component';

const routes: Routes = [
  { path: '', component: StartComponent},
  { path: 'start', component: StartComponent },
  { path: 'hyouji', component: HyoujiComponent },
  { path: 'omoro', component: OmoroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
@RouteConfig([
  {path: "/pageA", component: PageA, name: "PageA", useAsDefault: true}
])
*/