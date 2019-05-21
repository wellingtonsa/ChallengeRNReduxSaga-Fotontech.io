import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';

import { Container, SearchButton, SearchInput, MenuButton, BackButton } from './styles';

export default class Header extends Component {
  render() {
    return (
    <Container>
      {(this.props.details)?
      <BackButton>
          <Icon name="ios-arrow-round-back" size={24} color={'#3D3D3D'} />
      </BackButton>
      :
      <MenuButton>
        <Icon name="md-menu" size={24} color={'#3D3D3D'} />
      </MenuButton>}

      <SearchInput/>

      <SearchButton>
        <Icon name="ios-search" size={24} color={'#3D3D3D'} />
      </SearchButton>
    </Container>);
  }
}
