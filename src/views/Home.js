import React from 'react';
import { View } from 'react-native';
import Categories from '../components/Categories';
import List from '../components/List';
import  Header  from '../components/Header';
const HomeView = (props) => (
    <View>
        <Header/>
        <Categories navigation={props.navigation}/>
        <List navigation={props.navigation}/>
    </View>
);

export default HomeView;
