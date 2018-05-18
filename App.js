import React from 'react';
import { StyleProviderThemed } from './StyleProviderThemed';
import { MyComponent } from './MyComponent';

export default class App extends React.Component {
  render() {
    return (
        <StyleProviderThemed>
          <MyComponent />
        </StyleProviderThemed>
    );
  }
}


