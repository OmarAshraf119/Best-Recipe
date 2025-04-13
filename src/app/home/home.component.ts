import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MealComponent } from '../meal/meal.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports:[MatCardModule,MatButtonModule,MealComponent],
  standalone:true,
})
export class HomeComponent {
  scrollToRecipes() {
    const recipesSection = document.getElementById('recipes');
    if (recipesSection) {
      const toolbarHeight = document.querySelector('mat-toolbar')?.clientHeight || 64;
      const yOffset = -toolbarHeight;
      const y = recipesSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
  
}
