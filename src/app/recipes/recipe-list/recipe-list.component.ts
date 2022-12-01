import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe!!',"Testing Purpose..","https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg"),
    new Recipe('A Test Recipe!!',"Testing Purpose..","https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:low,c_fill,g_auto,w_750,h_500/k%2F2020_howto_peachpie_shot04_047-cropped")
  ];
  constructor(){}
  ngOnInit(){

  }
}
