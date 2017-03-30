import { Link, IndexLink } from 'react-router';
import React, { Component } from 'react';
import ThreadItem from '../ThreadItem/ThreadItem';
import InterviewItem from '../InterviewItem/InterviewItem'
import axios from 'axios';
import update from 'immutability-helper';

class InterviewItemContainer extends Component {
  // has to be switched back to a class Component
  // this container will contain the two methods

  constructor(props){
    super(props);

    this.state = {
      threads: []
    };

    // without these, instances don't have these methods
    this.upvoteCount = this.upvoteCount.bind(this);
    this.downvoteCount = this.downvoteCount.bind(this);
  }

  // should have two methods here where I can update the counts
  upvoteCount(idx) {
    // update the thread's count
    console.log('updating the count na mean');
    const updatedCount = update(this.state.threads[idx], {votes: {$apply: (x) => x+1}}); 
    let copy = this.state.threads.slice();
    copy[idx] = updatedCount;

    this.setState({threads: copy});
  }

  downvoteCount(idx) {
    // update the thread's count
    const updatedCount = update(this.state.threads[idx], {votes: {$apply: (x) => x-1}}); 
    let copy = this.state.threads.slice();
    copy[idx] = updatedCount;

    this.setState({threads: copy});
  }

  componentDidMount() {
    // const url = 'http://rest.learncode.academy/api/am/friends'; 

    const url = '/posts/'; 
    axios.get(url)
      .then(res => {
        console.log(res.data);
        console.log(res.data[0]._id);
        this.setState({threads: res.data})
      });

    // mongo jobquest --eval "db.dropDatabase()" => to reset DB

     const dummy = {title: 'new stuff brahh', thread: 'Nonsense bahh'};
     axios.post('/posts/', dummy)
     .then((res) => {console.log('the res is, ', res)})
     .catch(err => {
       console.log(err);
     });
  }

  render(){
    return (
      <div className="row">
        <div className="col s8">
          <div className="card-panel white z-depth-4"> 
            <div className="card-action">
              <h3>Interview Questions</h3> 
            </div>

            {this.state.threads ? 
              this.state.threads.map((thread, idx) => {
                return <InterviewItem key={idx} data={thread} upvote={() => this.upvoteCount(idx)}
                                                           downvote={() => this.downvoteCount(idx)}/>
              })
              : null}
          </div>
        </div>

        <div className="col s4">
          <div className="card-panel white z-depth-4"> 
            <div className="card-action">
              <Link to="/postNewInterview">Submit New Question</Link> 
            </div>
          </div>
        </div>
      </div>
    );
  }

}

InterviewItemContainer.PropTypes = {
  items: React.PropTypes.array.isRequired
  // add two funcs, TODO
};

export default InterviewItemContainer;