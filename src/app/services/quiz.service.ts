import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  
  constructor(private httpClient: HttpClient) {} // ✅ classique et sûr

  getQuestions(): Observable<any> {
    const url = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple';
    return this.httpClient.get<any>(url);
  }
}
