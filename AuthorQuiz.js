import React, { Component } from 'react';
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

function Desc(author,book){
  return(<div className="row">
      <div className="col-4 offset-1">
        <img src={author.imageUrl} alt="author"/>
      </div> 
      <div className="col-6">
        {book.map((title)=><p>{title}</p>)}
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
      <div className="col-12">
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
