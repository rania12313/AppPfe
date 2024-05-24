import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { CategoryService } from '../../services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.scss'],
})
export class UpdateQuizComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _quiz: QuizService,
    private _cat: CategoryService,
    private _router: Router
  ) {}

  qId = 0;
  quiz: any;
  categories = [] as any;

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    //alert(this.qId);

    this._quiz.getQuiz(this.qId).subscribe(
      (data: any) => {
        this.quiz = data;
        console.log(this.quiz);
      },
      (error) => {
        console.log(error);
        alert('Error in loading quiz');
      }
    );

    this._cat.categories().subscribe(
      (data: any) => {
        this.categories = data;
        console.log(this.categories);
      },
      (error) => {
        console.log(error);
        alert('Error in loading categories');
      }
    );
  }

  //update quiz
  public updateData() {
    //validatate
    this._quiz.updateQuiz(this.quiz).subscribe(
      (data) => {
        Swal.fire('Success', 'Quiz updated successfully', 'success').then(
          (e) => {
            // this._router.navigate(['/dashboarAdmin/quizzes']);
            window.location.href = '/dashboarAdmin/quizzes';
          }
        );
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Error in updating quiz', 'error');
      }
    );
  }
}
