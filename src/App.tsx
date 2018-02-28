
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Application,PageLayout } from '@retool/app'
import * as standardControls  from '@retool/standard-controls'
import * as controls from './controls'

var app = new Application("SampleApp");

app.controls.import(controls);

import * as templates from "./templates"
app.templates.import(templates);

import * as objects from "./objects/index"
app.objects.import(objects);


const launchAppBuilder = () => {
    app.launchAppBuilder()
}

const LaunchButton = (props) =>
    <button className="slds-button" style={{ position: "absolute", top: 5, right: 5}} onClick={launchAppBuilder}>
    Launch App Builder</button>

ReactDOM.render(<div>
    <PageLayout app={app} route={{ object: "Contact" }} />
    {!app.hasOpenBuilder ? <LaunchButton /> : null}
</div>, document.getElementById('root'));


