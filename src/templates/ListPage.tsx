import * as React from 'react'
import {template} from '@retool/app'

export default class ListPage extends React.Component<any>{
    render(){
        var header = this.props.Header ? this.props.Header() : null;
        var body = this.props.Body ? this.props.Body() : null;

        return <div style={{padding:"25px"}}>
            {header}
            <hr/>
            {body}
        </div>;
    }
}

template(ListPage,{
    sections: [
        {name:"Header",allowEdit:true},
        {name:"Body",allowEdit:true},
    ]
})