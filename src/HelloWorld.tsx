
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {Canvas,Controller,Application,template} from '@retool/app'
import {Heading} from '@retool/standard-controls'

class Contact {
    FirstName = "";
    LastName = "";

    static fields = {
        FirstName: { label: "First Name" },
        LastName: { label: "Last Name" }
    }
}

class HomeController extends Controller {

    contact:Contact;
    greeting:string; 

    init(params) {
        this.contact = new Contact();
        this.contact.FirstName = "John";
        this.contact.LastName = "Doe";
        this.greeting = params.greeting || "Hello";
        return this.contact;
    }

    static variables = {
        greeting: {type:"text"}
    }

    static DefaultLayout = {
        template:'simple',
        Header:<Heading text="HelloWorld App" textSize="small"/>,
        Body: <>
            <Heading text="{greeting} {FirstName} {LastName}!" textSize="large" />
        </>
    }
    static params = {
        greeting: {type:"string"}
    }
}

class Simple extends React.Component<any> {
    render(){
        var header = this.props.Header ? this.props.Header() : null;
        var body = this.props.Body ? this.props.Body() : null;
        return <div style={{padding:"30px"}}>{header}<hr/>{body}</div>
    }
}

template(Simple,{
    sections: [
        { name: 'Header', allowEdit: true },
        { name: 'Body', allowEdit: true }
    ]
})

const ContactResource = {
    Contact,
    HomeController
}

var app = new Application("HelloWorld");

app.templates.import({
    Simple
})

app.controls.import({
    Heading
})

app.resources.import({
    Contact:ContactResource  
})

const launchAppBuilder = () => {
    app.launchAppBuilder()
}

const LaunchButton = (props) =>
    <button style={{ position: "absolute", top: 5, right: 5 }} onClick={launchAppBuilder}>
    Launch App Builder</button>

ReactDOM.render(<div>
    <Canvas app={app} resource="Contact" controller="Home"  greeting="Bonjour"/>
     {!app.hasOpenBuilder ? <LaunchButton /> : null}
</div>, document.getElementById('root'));

