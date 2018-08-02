import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthorQuiz from './AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';


const authors=[
		{
			name:'Mark Twain',
			imageUrl:'images/mark.jpg',
			imageSource: 'Wikimedia Common',
			books:['The Adventures of Huckkley Finn']

		}

];

const state={
	turnData:
	{
		author:authors[0],
		book:authors[0].books
	}

};

ReactDOM.render(< AuthorQuiz {...state} />, document.getElementById('root'));
registerServiceWorker();
