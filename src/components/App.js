import React from 'react';
import { View } from 'react-native';

import Header from './layout/Header';
import AlbumList from './AlbumList';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText="Albums" />
      <AlbumList />
    </View>
  );
};

export default App;
