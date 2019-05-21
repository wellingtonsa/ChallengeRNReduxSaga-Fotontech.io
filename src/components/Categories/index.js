import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from 'react-native';

 import { Container, Category, CategoryText } from './styles';

export default class Categories extends Component {

  state = {
    categories : [

      { id: 1, 
        icon: 'grav', 
        title: 'Science'
      },
      { id: 2, 
        icon: 'music', 
        title: 'Art'
      },
      { id: 3, 
        icon: 'heart', 
        title: 'Romance'
      },
      { id: 4, 
        icon: 'soccer-ball-o', 
        title: 'Sports'
      },
      { id: 5, 
        icon: 'building', 
        title: 'Business'
      }
    ]
  }

  render() {
    const { categories } = this.state;
    return (
    <Container>
        { categories.map(category => (
          <Category key={category.id}>
            <Icon name={category.icon} size={20} color="#3D3D3D"/>
            <CategoryText>{category.title}</CategoryText>
          </Category>
        ))}
    </Container>);
  }
}
