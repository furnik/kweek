import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import {App} from './App';
import {Provider} from './ApolloProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
    <BrowserRouter>
      <Provider>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </Provider>
    </BrowserRouter>,
);
