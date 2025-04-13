import { Component ,OnInit,inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealsService } from '../meals.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  MealId: any;
  meal: any = null;
  ingredients: any;
  constructor(private MealsService: MealsService) {
     this.MealId = this.route.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.MealsService.getMealByID(this.MealId).subscribe(data => {
      // Get the first meal from the meals array
      this.meal = data.meals[0];
      this.ingredients = this.getIngredients();
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    });
  }
    
  getIngredients() {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = this.meal[`strIngredient${i}`];
      const measure = this.meal[`strMeasure${i}`];
      const url = "https://www.themealdb.com/images/ingredients/"+ingredient+"-small.png"
      if (ingredient && ingredient !== "") {
        ingredients.push({ ingredient, measure ,url});
      }
    }
    return ingredients;
  }

}
