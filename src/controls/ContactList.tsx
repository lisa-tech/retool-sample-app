import * as React from 'react';
import {control} from '@retool/app';


export default class ContactList extends React.Component<any> {
    render(){
        var rows;
        if (this.props.rows){
            rows = this.props.rows.map(row => <ContactListRow key={row.Id} row={row} page={this.props.page}/>);
        }
        return (<table>
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

class ContactListRow extends React.Component<{row:any,page:any}> {
    handleClick = (e) => {
        e.preventDefault();
        this.props.page.openDialog({object:"Contact",pageType:"edit",params:{id:this.props.row.Id}});
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
        rows:{label:"Rows"}
    }
})


