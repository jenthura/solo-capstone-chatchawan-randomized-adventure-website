import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Story from '../components/Story/Story';
import { createMemoryHistory } from 'history';

describe(`Smoke test`, () => {
  it(`Renders without crashing`, () => {
    const div = document.createElement('div');
    const history = createMemoryHistory('/dashboard');
    ReactDOM.render(
      <BrowserRouter>
        <Story history={history} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
