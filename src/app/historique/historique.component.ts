import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from '../services/quiz.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-historique',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  template: `
    <h2>Questions Quiz</h2>
    <ul *ngIf="quizData.length > 0; else loading">
      <li *ngFor="let question of quizData">
        {{ question.question }}
      </li>
    </ul>
    <ng-template #loading>
      <p>Chargement des questions...</p>
    </ng-template>
  `,
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
  quizData: any[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    // console.log(typeof this.quizService.getQuestions())
    this.quizService.getQuestions().subscribe({
      next: (res) => {
        this.quizData = res.results;
        console.log('Questions chargées :', this.quizData);
      },
      error: (err) => {
        console.error('Erreur de chargement des questions :', err);
      }
    });
  }
}
