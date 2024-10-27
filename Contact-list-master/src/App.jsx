// src/App.jsx
import { Provider } from 'react-redux';
import { store } from './store';
import ContactList from './ContactList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ContactList />
      </div>
    </Provider>
  );
}

export default App;
