
import * as React from 'react'
import * as ReactDOM from 'react-dom'


import { Application,Canvas } from '@retool/app'
import {Spinner,Notifications} from '@retool/standard-controls'


var app = new Application("SampleApp");

import * as controls from './controls'
app.controls.import(controls);

import * as templates from "./templates"
app.templates.import(templates);

import * as statements from "./statements"
app.statements.import(statements);

import * as resources from "./resources"
app.resources.import(resources);

app.theme = {
    assetPath:"/slds/assets"
}


const launchAppBuilder = () => {
    app.launchAppBuilder()
}
;

const LaunchButton = (props) =>
    <button className="slds-button" style={{ position: "absolute", top: 5, right: 5}} onClick={launchAppBuilder}>
    Launch App Builder</button>

ReactDOM.render(<div>
    <Notifications app={app}/>
    <Spinner app={app} />
    <Canvas app={app} resource="Contact" controller="list" />
    {!app.hasOpenBuilder ? <LaunchButton /> : null}
</div>, document.getElementById('root'));





