import React from 'react';
import { StyleProviderThemed } from './StyleProviderThemed';
import { MyApp } from './MyApp';

export default class App extends React.Component {
  render() {
    return (
        <StyleProviderThemed>
          <MyApp />
        </StyleProviderThemed>
    );
  }
}


