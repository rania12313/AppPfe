import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../services/question.service';
import {Question} from '../../interfaces/question.interface'
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.scss']
})
export class ViewQuizQuestionsComponent implements OnInit {

  qId:any;
  qTitle:any;
  questions: Question[] = [];

  constructor(private _route:ActivatedRoute, private _question:QuestionService, private _snak: MatSnackBar) { }

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid']; console.log(this.qId);
    this.qTitle = this._route.snapshot.params['title']; console.log(this.qTitle);

    this._question.getQuestionsOfQuiz(this.qId).subscribe(
      (data:any)=>{
        console.log(data);
        this.questions = data;
      },
      (error)=>{
        console.log(error);
      }
    ) 
  }

  //delete question
  deleteQuestion(qid:number){

    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are you sure, want to delete this question?' 
    }).then((result)=>{
      if(result.isConfirmed)
        {
          //confirm
          this._question.deleteQuestion(qid).subscribe(
            (data)=>{
              this._snak.open('question Deletetd ', '', {
                duration: 3000,
              });
              this.questions=this.questions.filter((q) => q.quesId == qid);
            },
            (error)=>{
              this._snak.open('Error in deleting question', '', { duration: 3000,
              });
              console.log(error);
            }
          );
        }
    });
}



} 

