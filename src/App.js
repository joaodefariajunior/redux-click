import React,{Component} from 'react';
import  { voteAngular,voteReact,voteVuejs} from './actions';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.store=this.props.store;
  }

   handleVoteAngular=()=>{
     this.store.dispatch(voteAngular())
   }
   handleVoteReact=()=>{
    this.store.dispatch(voteReact())
  }
  handleVoteVuejs=()=>{
    this.store.dispatch(voteVuejs())
  }
  render(){
    return (
      <div>
        <div className="jumbotron" style={{'textAlign':'center'}}>
        <img src="./fsociety.png" height='250' alt="fsociety logo"/>
                  
          <h2>What is  your favorite framework  in  2020 ?</h2>
          <h4>Click on the logos below to vote! </h4>
          <br/>
          <div className="row">
            <div className="fotos">
              <img src="angular.png" height="96" alt="Angular" onClick={this.handleVoteAngular}></img>
                      
              <img src="react.png" height="96" alt="React" onClick={this.handleVoteReact}></img>
            
            
              <img src="vuejs.png" height="96" alt="Vue.js" onClick={this.handleVoteVuejs}></img>
            
              </div>
      </div>
        </div>
      </div>
    );
      

  }
  
}

export default App;
