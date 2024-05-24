import { Component, OnInit, numberAttribute } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.scss']
})
export class ViewQuizzesComponent implements OnInit {


  quizzes = [] as any; 
    

  constructor(private _quiz:QuizService) { }

  ngOnInit(): void {

    this._quiz.quizzes().subscribe((data: any) => {
      this.quizzes = data;
      console.log(this.quizzes);
    },
    (error) => {
      console.log(error);
      Swal.fire('Error !!', 'Error in loading data', 'error');
    }
    );
}
//delete quiz
deleteQuiz(qid: number)
{
  Swal.fire({
    icon: 'info',
    title: 'Are you sure?',
    confirmButtonText: 'Delete',
    showCancelButton: true,
  }).then((result)=>{
    if(result.isConfirmed)
      {
        //delete quiz
                console.log('Quiz ID to delete:', qid);
          
            this._quiz
            .deleteQuiz(qid)
            .subscribe((data) => {
              Swal.fire('Success !!', 'Quiz Deleted Successfully', 'success');
              this.loadQuizzes();
            },
            (error) => {
              Swal.fire('Error !!', 'Error in deleting quiz', 'error');
            });
          }
        });
}

  loadQuizzes() {
    this._quiz.quizzes().subscribe((data: any) => {
      this.quizzes = data;
      console.log(this.quizzes);
    },
    (error) => {
      console.log(error);
      Swal.fire('Error !!', 'Error in loading data', 'error');
    }
    );
  }
}
