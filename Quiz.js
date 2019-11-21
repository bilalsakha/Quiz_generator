$(function() {
	var questions = getAllQuestions();
	var container = $("#questionContainer");
	console.log("Inside jQuery document.ready(). Total Questions: " + questions.length);

	function shuffle(array)
	{
		var currentIndex = array.length, temporaryValue, randomIndex;
		while (0 !== currentIndex) 
		{
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
	return array;
	}

	var questionsA = [];
	var answers = [];

	$("#quizBuilder").click(function() {
		console.log("Inside #quizBuilder.click ...");
		window.alert("Generating and Printing Quiz Questions. See source file for further details.");
		// TODO: Get a random number of JavaScript Questions
		answers = []	//resest the list of answers
		var JS = questions.slice(0, 20);
		JS = shuffle(JS);
		var R_js = Math.floor((Math.random() * JS.length) + 1);
		JS = JS.slice(0, R_js);
		
		// TODO: Get a random number of jQuery Questions
		var jQuery = questions.slice(20);
		jQuery  = shuffle(jQuery);
		var R_jq = Math.floor((Math.random() * jQuery.length) + 1);
		jQuery = jQuery.slice(0, R_jq);

		
		// TODO: Create question elements (DIV) for each JavaScript question and push that into an array, shuffling (randomizing) answer order
		// TODO: Create question elements (DIV) for each jQuery question and push that into the same array, shuffling (randomizing) answer order
		questionsA = JS.concat(jQuery);
		questionsA = shuffle(questionsA);

		// TODO: Shuffle the array so that the order of questions is randomized
		for (var i = 0; i < questionsA.length; i++) 
		{
			var correctans = questionsA[i].options[0].option;
			var shuffleAns = shuffle(questionsA[i].options);
			answers.push(correctans);
		}


		// Empty container element so that previous questions are cleared
		container.empty();
		// TODO: Add questions from question elements array created above to container so that questions with answer options are displayed
		OLst = $(document.createElement('ol'))
		OLst.addClass('questions');

		for (var i = 0; i < questionsA.length; i++)
		{			
			Contrquestions = $(document.createElement('div'))//Outer element, div that wraps a question.
			OptionsAns = $(document.createElement('ol'))//List for options
			OptionsAns.addClass('options');
			Contrquestions.append(questionsA[i].question)
			for (var j = 0; j < questionsA[i].options.length; j++)
			{
				OptionsAns.append('<li>' + questionsA[i].options[j].option + '</li>')
			}				
			
			Contrquestions.append(OptionsAns)
			console.log(Contrquestions)
			OLst.append($(document.createElement('li')).append(Contrquestions));
		}
		console.log(OLst)
		console.log(answers);
		container.append(OLst);

		// Call print() method, to print the page
		window.print();
	});

	$("#answerBuilder").click(function() {
		console.log("Inside #answerBuilder.click ...")
		window.alert("Generating and Printing Quiz Questions. See source file for further details.");

		// TODO: Create question elements (DIV) for each question in questions array, include just the answer option (first one)
		OLst = $(document.createElement('ol'))
		OLst.addClass('questions');

		// Empty container element so that previous questions are cleared
		container.empty();
		// TODO: Add questions from question elements array created above to container so that questions with answers are displayed
		for (var i = 0; i < questionsA.length; i++){
			
			Contrquestions = $(document.createElement('div'))//Outer element, div that wraps a question.
			OptionsAns = $(document.createElement('ul'))//List for options
			OptionsAns.addClass('ansoption');
			Contrquestions.append(questionsA[i].question)
			OptionsAns.append('<li>' + answers[i] + '</li>')			
			Contrquestions.append(OptionsAns)
			console.log(Contrquestions)
			OLst.append($(document.createElement('li')).append(Contrquestions));
		}
		console.log(OLst);
		container.append(OLst);
		// Call print() method, to print the page
		window.print();
	});
});
