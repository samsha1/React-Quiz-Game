import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthorQuiz from './AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';
import {shuffle,sample} from 'underscore';


const authors=[
		{
			name:'Mark Twain',
			imageUrl:'images/mark.jpg',
			imageSource: 'Wikimedia Common',
			books:[
			'The Adventures of Huckkley Finn',
			'Life on the Missippi',
			'Roughing',
			'MockingBird',
			'As Boy Become Men'
			]

		},
		{
			name:'JK',
			imageUrl:'images/jk.jpg',
			imageSource: 'Wikimedia Common',
			books:[
			
			'Harry Potter',
			'Harry'
			
			]

		},
		{
			name:'William',
			imageUrl:'images/william.jpeg',
			imageSource: 'Wikimedia Common',
			books:[
			'Macbeth','Romeo and juliet','Hamlet'
			]

		},
		{
			name:'Charles Dickens',
			imageUrl:'images/cd.jpg',
			imageSource: 'Wikimedia Common',
			books:[
			'The Shining','Sun In Night','Hello Summer'
			]

		}

];


function getTurnData(authors){

	const allBooks=authors.reduce(function(p,c,i){
		return p.concat(c.books);
	},[]);

	const fourRandomBooks=shuffle(allBooks).slice(0,4);
	const answer=sample(fourRandomBooks);
	return
	{
		books: fourRandomBooks,
		author: authors.find((author) => 
			author.books.some((title) => 
				title===answer))
	}
}

const state={
	turnData:getTurnData(authors)
};

ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById('root'));
registerServiceWorker();
