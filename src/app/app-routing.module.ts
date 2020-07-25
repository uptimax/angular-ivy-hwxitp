import { Routes, RouterModule } from "@angular/routing";
import { NgModule } from "@angular/core";
import { ContentComponent } from "./content/content.component";

const routes : Routes = [
  {path:"content", component: ContentComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{
  
}