import React, { Component } from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';

const UserProfile = ({created_at, company, role, status, ...otherProps}) =>{
    return(
            <TableRow {...otherProps}>
                {otherProps.children[0]}
                <TableRowColumn>{created_at}</TableRowColumn>
                <TableRowColumn>{company}</TableRowColumn>
                <TableRowColumn>{role}</TableRowColumn>
                <TableRowColumn>{status}</TableRowColumn>
            </TableRow>
 
    );
}
export default UserProfile;