import * as React from 'react';
import {control} from '@retool/app';


export default class ContactList extends React.Component<any> {
    render(){
        var rows;
        if (Array.isArray(this.props.rows)){
            rows = this.props.rows.map(row => <ContactListRow key={row.Id} row={row} page={this.props.page} onEdit={this.props.onEdit}/>);
        }
        return (<table {...this.props.retool}>
            <thead>
                <tr>
                    <th>Action</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>)
    }
}

class ContactListRow extends React.Component<{row:any,page:any,onEdit:(e,evt)=> void}> {
    handleClick = (e) => {
        e.preventDefault();
        this.props.onEdit(e,{row:this.props.row});
    }

    render(){
        var row = this.props.row;
        return <tr>
            <td><a onClick={this.handleClick}>Edit</a></td>
            <td>{row.FirstName}</td>
            <td>{row.LastName}</td>
            <td>{row.Email}</td>
            <td>{row.Phone}</td>   
        </tr>
    }
}

control(ContactList,{
    label:"Contact List",
    props: {
        rows:{label:"Rows",type:"any"},
        onEdit:{type:'handler'}
    }
})


