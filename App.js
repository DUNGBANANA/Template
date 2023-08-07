import React from 'react';

import Route from './src/routes/Route';
import Home from './src/screen/Home';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import {store} from './src/store/store';

export default function App() {
  return (
    // <Provider store={store}>
    <>
      <StatusBar
        backgroundColor="#fff" // Màu nền của thanh hiển thị giờ
        barStyle="dark-content" // Kiểu chữ trên thanh hiển thị giờ (light-content hoặc dark-content)
      />
      <Route/>
    </>
    // </Provider>
  );
}
