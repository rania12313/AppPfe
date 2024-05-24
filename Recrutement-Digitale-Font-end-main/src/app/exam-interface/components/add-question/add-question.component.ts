import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { QuestionService } from '../../services/question.service';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit{
  
  public Editor = ClassicEditor;

  qId: any; 
  qTitle: any;
  question = {
    quiz:{},
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
  };


    constructor(private _route:ActivatedRoute, private _question:QuestionService) { }
  
    ngOnInit(): void {
      this.qId = this._route.snapshot.params['qid']; //Dans le back-end c'est "qid"
      this.qTitle = this._route.snapshot.params['title'];
      //console.log(this.qId);
      this.question.quiz = { qid: this.qId };
    }

    fromSubmit(){
     if(this.question.content.trim() =='' || this.question.content== null)

      {
        return;
      }

      if(this.question.option1.trim() =='' || this.question.option1== null)

        {
          return;
        }

        if(this.question.option2.trim() =='' || this.question.option3== null)

          {
            return;
          }

          if(this.question.option3.trim() =='' || this.question.option3== null)

            {
              return;
            }

            if(this.question.option4.trim() =='' || this.question.option4== null)

              {
                return;
              }

            if(this.question.answer.trim() =='' || this.question.answer== null)

              {
                return;
              }

        //form sumbit
        this._question.addQuestion(this.question).subscribe(
          (data: any) => {
            console.log('Question added successfully: ', data);
            Swal.fire('Success', 'Question Added. Add Another one', 'success');
            this.question.content = '';
            this.question.option1 = '';
            this.question.option2 = '';
            this.question.option3 = '';
            this.question.option4 = '';
            this.question.answer = '';
          },
          (error) => {
            console.error('Error in adding question: ', error);
            Swal.fire('Error', 'Error in adding question', 'error');
          }
        );

    }

    

}
