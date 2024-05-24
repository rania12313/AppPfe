import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  baseUrl : string = 'http://localhost:8081';

  constructor(private _http:HttpClient ) { }

  //get all questions
  public getQuestionsOfQuiz(qid:any){
    return this._http.get(`${this.baseUrl}/question/quiz/all/${qid}`)
  }

  //add question
  public addQuestion(question:any) {
    return this._http.post(`${this.baseUrl}/question/`, question);
  }

  //delete question
 public deleteQuestion(questionId : any){
   return this._http.delete(`${this.baseUrl}/question/${questionId}`);
 }


}