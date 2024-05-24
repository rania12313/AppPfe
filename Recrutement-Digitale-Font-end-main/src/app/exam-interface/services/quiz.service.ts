import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  baseUrl : string = 'http://localhost:8081';

  constructor(private _http:HttpClient ) { }

  
//Load all quizzes
  public quizzes(){
    return this._http.get<any[]>(`${this.baseUrl}/quiz/`);
    
  }

  //add quiz
  public addQuiz(quiz:any)
  {
    return this._http.post(`${this.baseUrl}/quiz/`,quiz);
  }

  //delete quiz
  public deleteQuiz(qid: number)
  {
    return this._http.delete(`${this.baseUrl}/quiz/${qid}`);
  }

  //get the single quiz 
  public getQuiz(qid:number)
  {
    return this._http.get(`${this.baseUrl}/quiz/${qid}`);
  }

  //update quiz
  public updateQuiz(quiz:any)
  {
    return this._http.put(`${this.baseUrl}/quiz/`,quiz);
  }

  //get quizzes of category
  public getQuizzesOfCategory(cid:number)
  {
    return this._http.get(`${this.baseUrl}/quiz/category/${cid}`);
  }

  //get active quizzes
  public getActiveQuizzes()
  {
    return this._http.get(`${this.baseUrl}/quiz/active`);
  }

  //get active quizzes of category
  public getActiveQuizzesOfCategory(cid:number)
  {
    return this._http.get(`${this.baseUrl}/quiz/category/active/${cid}`);
  }

}
