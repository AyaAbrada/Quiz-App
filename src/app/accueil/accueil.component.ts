import { Component, inject,  OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule , HttpClientModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit {
 
  question : string = '' ;
  private http = inject(HttpClient);

  categories: Array<any> = [];
  
  selectedCategory: number = 9; 
  selectedDifficulty: string = 'medium';
  numQuestions: number = 10;
  httpClient: any;
  quizData: any;

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.http.get('https://opentdb.com/api_category.php')
     .subscribe({
      next: (res: any) => {
        this.categories = res.trivia_categories;
        console.log('Categories:', res);
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
      }
    });
  }
}
