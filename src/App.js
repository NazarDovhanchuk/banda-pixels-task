import { Provider } from 'react-redux';
import { TodoInput } from './components/TodoInput/TodoInput';
import { TodoList } from './components/TodoList/TodoList';
import {store} from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <TodoInput />
      <TodoList />
    </Provider>
  );
}

export default App;
