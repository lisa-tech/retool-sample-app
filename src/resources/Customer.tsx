import * as React from 'react'
import {Controller,Lookup} from '@retool/app'

export default class Customer {
    Name = "";
    City = "";
    State = "";

    static fields = {
        Name:{label:"Name"},
        City:{label:"City"},
        State:{label:"State"}
    }
}


export class DefaultLookup extends Lookup {
    placeholder = "Search on customer name...";

    static data = [
        {Id:"1000",Name:"Acme Industries"},
        {Id:"1001",Name:"Active Manufacturing"},
        {Id:"1002",Name:"Brownfield, Inc."}
    ];
    
    fill(partialEntry: string, props: any):any{
        return {
            filter:{field:'Name'},
            options:DefaultLookup.data
        }
    }

    find(id: string, props: any) {
        var data = DefaultLookup.data;
        for(var i = 0 ; i < data.length; i++){
            if (data[i].Id == id) return data[i];
        }
    }

    formatDroplist(props: any) {
        return {
            height: 8,
            showAddNew: true
        }
    }

    formatOption(option: any, props): any{
        return {
            icon: "standard/account",
            text: option.Name,
            details: ['Customer']
        }
    }

    formatInput(value: any, props): any {
        return {
            icon: "standard/account",
            text:value.Name
        }
    }
}
