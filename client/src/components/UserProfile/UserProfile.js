var React  = require('react');
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const UserProfile = (props) => (
    <TableRow>
        <TableRowColumn>{props.created_at}</TableRowColumn>
        <TableRowColumn>{props.company}</TableRowColumn>
        <TableRowColumn>{props.role}</TableRowColumn>
        <TableRowColumn>{props.status}</TableRowColumn>
    </TableRow>
);

UserProfile.propTypes ={
 created_at: React.PropTypes.number.isRequired,
 role: React.PropTypes.string.isRequired,
 company: React.PropTypes.string.isRequired,
 status: React.PropTypes.string.isRequired   
};

export default UserProfile;