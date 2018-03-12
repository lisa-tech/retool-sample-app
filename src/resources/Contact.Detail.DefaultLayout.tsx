import * as React from 'react'
import {Heading,Button} from "../controls";
import {If} from '../statements'; 

export default {
    template:"Sidebar",
    Body: {$kind:"Retool.Section",children:[
        {$kind:"Header",text:"Contacts"}
    ]},
    Header:<>
        <Heading text="Contacts" textSize="large"/>
        <If condition="{true}">
            <Button label="Save" />
        </If>
    </>
}


