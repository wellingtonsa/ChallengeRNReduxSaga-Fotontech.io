import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Header from '../Header';

import { Container, Preview, Thumbnail, Title } from './styles';

export default class List extends Component {

  state = {
    books : 
    [
      {
        id: 0,
        title: 'title 01',
        tumbnail: 'http://books.google.com/books/content?id=MVxPDzaBtxoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      {
        id: 1,
        title: 'title 01',
        tumbnail: 'http://books.google.com/books/content?id=MVxPDzaBtxoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      {
        id: 2,
        title: 'title 01',
        tumbnail: 'http://books.google.com/books/content?id=MVxPDzaBtxoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      {
        id: 3,
        title: 'title 01',
        tumbnail: 'http://books.google.com/books/content?id=MVxPDzaBtxoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      {
        id: 4,
        title: 'title 01',
        tumbnail: 'http://books.google.com/books/content?id=MVxPDzaBtxoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      {
        id: 5,
        title: 'title 01',
        tumbnail: 'http://books.google.com/books/content?id=MVxPDzaBtxoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      {
        id: 7,
        title: 'title 01',
        tumbnail: 'http://books.google.com/books/content?id=MVxPDzaBtxoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },

      {
        id: 8,
        title: 'title 01',
        tumbnail: 'http://books.google.com/books/content?id=MVxPDzaBtxoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      {
        id: 9,
        title: 'title 01',
        tumbnail: 'http://books.google.com/books/content?id=MVxPDzaBtxoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      {
        id: 10,
        title: 'title 01',
        tumbnail: 'http://books.google.com/books/content?id=MVxPDzaBtxoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      {
        id: 11,
        title: 'title 01',
        tumbnail: 'http://books.google.com/books/content?id=MVxPDzaBtxoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
    ]
  }

  showDetails = (item) => {
    this.props.navigation.navigate('Details', { item })
  }

  renderBooks = ({ item }) => (
    <Preview 
    onPress={() => this.showDetails(item)}>
      <Thumbnail source={{uri: item.tumbnail}}/>
      <Title>{item.title}</Title>
    </Preview>
  )


  render() {
    return (
    <Container>
      <Header/>
      <FlatList
        data={this.state.books}
        keyExtractor={book => book.id.toString()}
        renderItem={this.renderBooks}
        numColumns={3}
      /> 
    </Container>);
  }
}
