import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    title:"Best Recipe"
  },
  {
    path:'recipe/:id',
    component:RecipeComponent,
    title:"Best Recipe"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
