import * as React from 'react'
import {Datagrid,DeleteButton,EditButton,EmailField,Filter,FilterButton,List, TextField} from 'react-admin'
import { SearchInput,TextInput } from 'react-admin';
import { Pagination } from 'react-admin';

const userFilters = /*(props) => (*/ [
  // <Filter {...props}>
  <TextInput label="search" source='q' alwaysOn/>,
  <TextInput label="Name" source='name' placeholder="xyz"/>,
  <TextInput label="Email" source='email'/>,
  <TextInput label="Role" source='role' defaultValue="Add Filter"/>,
  // </Filter>
];



const UserPagination = props => <Pagination rowsPerPageOptions={[5,10,15,20,25,30,35,50]} {...props}/>;

const UsersList = (props) => {
  return (
    <List {...props} title="List of Users" filters={userFilters} pagination={<UserPagination/>} alwaysOn>
        <Datagrid>
            <TextField source='id'/>
            <TextField source='name'/>
            <EmailField source='email'/>
            <TextField source='role'/>
            <EditButton basePath="/users"/>
            <DeleteButton basePath="/users"/>
        </Datagrid>
    </List>
  )
}

export default UsersList