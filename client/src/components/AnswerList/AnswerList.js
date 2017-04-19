import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

class AnswerList extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return( 
            <div>
                <Paper>
                    {this.props.data.author}
                    <br />
                    {this.props.data.answerText}
                    <br />
                    {this.props.data.created_at.slice(0,10)}
                    <br />
                </Paper>
            </div>

        );
    }
}

AnswerList.propTypes = {
    data: React.PropTypes.object.isRequired
};

export default AnswerList;