import React from 'react'
import { Edit, EmailField, SimpleForm, TextInput } from 'react-admin'

const UserEdit = (props) => {
  return (
    <Edit title="Edit User"{...props}>
        <SimpleForm>
            <TextInput disabled source='id'/>
            <TextInput source='name'/>
            <TextInput source='email'/>
            <TextInput source='role'/>
        </SimpleForm>
    </Edit>
  )
}

export default UserEdit