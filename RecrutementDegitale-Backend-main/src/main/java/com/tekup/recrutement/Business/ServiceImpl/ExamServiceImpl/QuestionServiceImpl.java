package com.tekup.recrutement.Business.ServiceImpl.ExamServiceImpl;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tekup.recrutement.Business.services.ExamServices.QuestionService;
import com.tekup.recrutement.DAO.entities.ExamEntities.Question;
import com.tekup.recrutement.DAO.entities.ExamEntities.Quiz;
import com.tekup.recrutement.DAO.repositories.ExamRepositories.QuestionRepository;


@Service
public class QuestionServiceImpl implements QuestionService{

    @Autowired
    private QuestionRepository questionRepository;

    @Override
    public Question addQuestion(Question question) {
        return this.questionRepository.save(question);
    }

    @Override
    public Question updateQuestion(Question question) {
        return this.questionRepository.save(question);
    }

    @Override
    public Set<Question> getQuestions() {
        return new HashSet<>(this.questionRepository.findAll()) ;
    }

    @Override
    public Question getQuestion(Long questionId) {
       return this.questionRepository.findById(questionId).get(); 
    }

    @Override
    public Set<Question> getQuestionsOfQuiz(Quiz quiz) {
        return this.questionRepository.findByQuiz(quiz);
    }

    @Override
    public void deleteQuestion(Long quesId) {
        Question question = new Question();
        question.setQuesId(quesId);
        this.questionRepository.delete(question);
    }

}
