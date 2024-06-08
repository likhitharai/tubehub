import { Provider } from 'react-redux';
import Body from './components/Body';
import Head from './components/Head';
import store from './Utils/store';

function App() {
  return (
    <Provider store = {store}>
        <div className="App">
          <Head />
          <Body />
        </div>
    </Provider>
  );
}

export default App;
