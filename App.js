import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header getHeader= {'Album'} />
        <AlbumList  />
      </View>
    );
  }
}

