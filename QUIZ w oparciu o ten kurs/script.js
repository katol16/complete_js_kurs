// Ustawimy 3 globalne zmienne (nie wiem czy to dobra metoda, ale chyba moga zostać)
var addQuestionBtn = document.querySelector(".questionForm__addBtn"),
	addAnswerBtn = document.querySelector(".answerForm__addBtn"),
	add = document.querySelector(".add");


// MODUŁY:

// MODUŁ w którym będziemy dodawać dane
var guestionDataController = (function() {
	// function constructor
	var Question = function(question, answers, correct) {
		this.question = question;
		this.answers = answers;
		this.correct = correct;
	}

	var questions = [];

	return {
		addQuestionWithAnswers: function(q,a,c) {
			var question = new Question(q,a,c);
			questions.push(question);
			console.log(question);
			console.log(questions);			
		}
	}
})();

// MODUŁ user interface
var UIController = (function() {

	var questionInput = document.querySelector(".questionForm__Question"),

		answerInput = document.querySelector(".answerForm__Answer"),

		questionText = document.querySelector(".questionText"),
		answersList = document.querySelector(".answersList"),

		answersList__item,

		answersArray = [];

	// zwracamy publiczne metody
	return {
		addQuestion: function() {
			questionText.textContent = questionInput.value;

			addAnswerBtn.disabled = false;
			addQuestionBtn.disabled = true;
			add.disabled = false;

			// guestionDataController.addQuestionWithAnswers(questionText.textContent,'ss',0);
		},

		addAnswer: function() {
			answersList__item = document.createElement("li");
			answersList__item.textContent = answerInput.value;
			answersList.appendChild(answersList__item);		
			answersArray.push(answersList__item.textContent);
		},

		adding: function() {
			
			guestionDataController.addQuestionWithAnswers(questionText.textContent, answersArray, 0)
		}

	}

})();

// MODUŁ controller - tutaj wstawimy nasze eventy
var controller = (function(questionCtrl, UICtrl) {

	addQuestionBtn.addEventListener("click", UICtrl.addQuestion);
	addAnswerBtn.addEventListener("click", UICtrl.addAnswer);

	add.addEventListener("click", addToData);

	function addToData() {
		UICtrl.adding();
	}

})(guestionDataController, UIController);

