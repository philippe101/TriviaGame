var panel = $('#quiz-area');

$(document).on('click','#start',function(e) {
	game.start();
});

$(document).on('click','#done',function(e) {
	game.done();
});


var questions = [{

	question: "1-What year was Blade Runner released?",
	answers: ["1979", "1980", "1982", "1984"],
	correctAnswer: "1982"
}, {
	question: "2-What was the year in the movie?",
	answers: ["2019", "2029", "2036", "2049"],
	correctAnswer: "2019"
}, {
	question: "3-How many replicants is Rick Deckard chasing?",
	answers: ["Three", "Four", "Five", "Six"],
	correctAnswer: "Four"
}, {
	question: "4-What is the name of Tyrell's niece?",
	answers: ["Ellen", "Pris", "Rachael", "Monica"],
	correctAnswer: "Rachael"
}, {
	question: "5-What is the name of the replicants'leader?",
	answers: ["Jack", "Leon", "Jamy", "Roy"],
	correctAnswer: "Roy"
}];


var game = {
	correct: 0,
	incorrect: 0,
	counter: 45,
	countdown: function(){
		game.counter--;
		$('#counter-number').html(game.counter);

		if (game.counter === 0){
			console.log('TIME UP');
			game.done();
		}
	},
	start: function() {
		timer = setInterval(game.countdown, 1000);

		$('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">45</span> Seconds!</h2>');
		$('#start').remove();

		for (var i = 0; i < questions.length; i++) {
			panel.append('<h2>' + questions[i].question + '</h2>');
			for (var j = 0; j < questions[i].answers.length; j++) {
				panel.append('<input style="color:red" type="radio"  name="question' + '-' + i +'"value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);		
			}
		}	
			panel.append('<button id="done"><font color= "red">Done!</font></button>');

	},

	done: function() {


		$.each($("input[name='question-0']:checked"), function() {
			if ($(this).val() == questions[0].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-1']:checked"), function() {
			if ($(this).val() == questions[1].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-2']:checked"), function() {
			if ($(this).val() == questions[2].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-3']:checked"), function() {
			if ($(this).val() == questions[3].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-4']:checked"), function() {
			if ($(this).val() == questions[4].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		this.result();
	},
		result: function(){

		clearInterval(timer);

		$('#subwrapper h2').remove();
		panel.html('<h2>Thanks for visiting!</h2>');
		panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
		panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
		panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');

		}

};





















function newFunction() {
	$('input[type="radio"]').click(function () {
		changeColor('label', 'red');
	});
}

