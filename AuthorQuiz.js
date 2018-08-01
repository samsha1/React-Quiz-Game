import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Title(){
  return(
      <div className="container-fluid">
        <div className="jumbtron col-10 offset-1">


           <h1>Author Quiz</h1>
           <p> Select A Book Of Author</p>     
        </div>

      </div>

    );
}

function Desc(){
  return(<div/>);


}

function Continue(){

  return(<div/>);
}

class AuthorQuiz extends Component {
  render() {
    return (
      <div>
       <Title/>
       <Desc/>
       <Continue/>
      </div>
    );
  }
}

export default AuthorQuiz;
