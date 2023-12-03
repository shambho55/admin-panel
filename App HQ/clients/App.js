import {Admin,List,ListBase,ListFilterContext,Resource, ResourceContextProvider, SearchInput, SimpleList, TextInput} from 'react-admin'
import './App.css';
import jsonServerProvider from 'ra-data-json-server';
import UsersList from './components/UsersList';
import { UserCreate } from './components/UserCreate';
import UserEdit from './components/UserEdit';

const dataProvider = jsonServerProvider("http://localhost:5000");

function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider}>
          <Resource alwaysOn
            name = 'users'
            list = {UsersList}
            create={UserCreate}
            edit={UserEdit}
          />
          
      </Admin>
    </div>
  );
}

export default App;
