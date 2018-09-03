import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <Header getHeader= {'Album'} />
        <AlbumList  />
      </ScrollView>
    );
  }
}

