import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Title(){
  return(
      <div className="container-fluid">
        <div className="jumbotron col-10 offset-1">
           <h1>Author Quiz</h1>
           <p> Select A Book Of Author</p>     
        </div>

      </div>

    );
}

function Book({title}){
    return(
        <div className="answer">
          <h4>{title}</h4>

        </div>

      );


}

function Desc({author,book}){
  return(<div className="row">
      <div className="col-3 offset-1">
        <img src={author.imageUrl} alt="Author" className="authorimage"/>
      </div> 
      <div className="col-8">
        {book.map((title) => <Book title={title} key={title}/>)}
      </div>
      </div>

    );
}

function Continue(){

  return(<div/>);
}

function Footer(){
 return(
     <div id="footer" className="row">
      <div className="col-11 offset-1">
        <p className="text-muted credit">
          All images are From <a href="https://commons.wikipedia.org/wiki/main">Wikimedia Common</a> and are in public domain
        </p>
      </div>
  </div>


  );
}

function AuthorQuiz({turnData}){
 
    return (
      <div>
       <Title/>
       <Desc {...turnData}/>
       <Continue/>
       <Footer/>
      </div>
    );

}

export default AuthorQuiz;
