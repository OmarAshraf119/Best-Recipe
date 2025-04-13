import { Component, OnInit } from '@angular/core';
import { MealsService } from '../meals.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import meals from '../../assets/popular.json';
import {Router, RouterLink, RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css'],
  imports:[MatCardModule,MatButtonModule,CommonModule],
  standalone:true,
})
export class MealComponent implements OnInit {
  meal: any = null;
  popularMeals = meals.meals;

  constructor(private MealsService: MealsService, private router: Router) { }

  ngOnInit(): void {
    this.MealsService.getRandomMeal().subscribe(data => {
      // Get the first meal from the meals array
      this.meal = data.meals[0];
    });
}
goToRecipe(ID:any): void {
  this.router.navigate(['recipe/',ID]);
}
}
