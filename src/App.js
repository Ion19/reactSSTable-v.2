import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import TableDemo from './components/Table';
import {  Container } from 'semantic-ui-react';



function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Container style={{ padding: '2em 0em' }}>
      <TableDemo/>
    </Container>
    </div>
    </Provider>
  );
}

export default App;
