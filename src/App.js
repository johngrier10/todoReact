import FormInputs from './components/FormInputs';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';
import {DataProvider} from './components/DataProvider';
import './App.css';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>To Do List</h1>
        <FormInputs />
        <TodoList />
        <TodoFooter />
      </div>
    </DataProvider>
  );
}

export default App;
