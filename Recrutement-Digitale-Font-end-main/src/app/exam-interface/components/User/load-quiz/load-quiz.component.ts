import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/exam-interface/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.scss']
})
export class LoadQuizComponent implements OnInit {

  catId: any;
  quizzes = [] as any; 

  constructor(private _route: ActivatedRoute, private _quiz:QuizService) { }

  ngOnInit(): void {
    

    this._route.params.subscribe((params)=>{
      this.catId = +params['catId'];

      if(this.catId==0)
        {
          console.log("Load all quiz");
  
          this._quiz.getActiveQuizzes().subscribe((data:any)=>{
            this.quizzes = data;
            console.log(this.quizzes);
          },
          (error)=>{
            console.log(error);
            alert("Error in loading quizzes");
          });
  
        }else{
          console.log("Load specific quiz");
          this._quiz.getQuizzesOfCategory(this.catId).subscribe((data:any)=>{
            this.quizzes = data;
            console.log(this.quizzes);
            
          },
          (error)=>{
            console.log(error);
            alert("Error in loading quizzes");
          });
        }
      
      
    });
    
    


    

  }

}
