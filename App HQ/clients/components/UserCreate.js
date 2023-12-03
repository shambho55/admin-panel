import React from 'react'
import { Create, EmailField, SimpleForm, TextInput } from 'react-admin'

export const UserCreate = (props) => {
  return (
    <Create title="Create a User "{...props}>
        <SimpleForm>
            <TextInput source="id"/>
            <TextInput source="name"/>
            <TextInput source="email"/>
            <TextInput source="role"/>
        </SimpleForm>
    </Create>
  )
}
