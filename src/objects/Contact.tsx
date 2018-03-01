import * as React from 'react'
import { Controller } from '@retool/app'
import { Heading, Form, Input, Text, Button, Spacer, ContactList } from '../controls'
import { If, ElseIf, Else, ForEach, OnClick, SetField, CallAction, Validator, CloseDialog, SetHandler, OpenDialog, On } from "@retool/app"
import { ContactApi } from "../api/MockApi"


export default class Contact {
    FirstName = ""
    LastName = ""
    Email = ""
    Phone = ""

    static fields = {
        FirstName: { label: "First Name", required: true },
        LastName: { label: "Last Name", required: true },
        Email: { label: "Email", type: "email" },
        Phone: { label: "Phone", type: "tel" },
        Customer: { label: "Customer", belongsTo: "Customer" }
    }
}

export class ListController extends Controller {
    contacts = null;

    init(params) {
        return ContactApi.list().then(contacts => this.contacts = contacts);
    }

    static DefaultLayout = {
        template: "ListPage",
        Header: <Heading text="Contacts" textSize="medium" />,
        Body: <>
            <ContactList rows="{contacts}">
                <On event="Edit">
                    <OpenDialog object="contact" pageType="edit" id="{event.row.Id}" />
                </On>
            </ContactList>
        </>
    }

    static variables = {
        contacts: {}
    }

    static actions = {
        createNew: {}
    }
}


export class EditController extends Controller {
    contact = null;

    fullName = () => this.contact.FirstName + this.contact.LastName;

    init(params) {
        return ContactApi.get(params.id).then(contact => this.contact = contact);
    }

    save() {
        var validator = new Validator(this.contact);
        validator.validate();
    }

    static actions = {
        save: { label: "Save" }
    }

    static params = {
        id: { label: "Record Id" },
        showDetail: { label: "Show Detail", type: "checkbox" }
    }

    static variables = {
        fullName: {}
    }

    static DefaultLayout = {
        template: "DialogBox",
        Header: <Heading text="Editing {FirstName} {LastName}" textSize="medium" />,
        Body: <>
            <Form variant="stacked">
                <Input field="FirstName" />
                <Input field="LastName" />
                <Input field="Email" />
                <Input field="Phone" />
                <Input field="Customer" />
            </Form>
        </>,
        Footer: <>
            <Button label="Save" variant="brand">
                <OnClick>
                    <CallAction action="save" />
                    <CloseDialog />
                </OnClick>
            </Button>
            <Button label="Cancel" variant="neutral">
                <OnClick>
                    <CloseDialog />
                </OnClick>
            </Button>
        </>
    }
}
