import React from 'react';
import { View } from 'react-native';

import Categories from '../components/Categories';
import TopList from '../components/TopList';
const HomeView = (props) => (
    <View>
        <Categories navigation={props.navigation}/>
        <TopList navigation={props.navigation}/>
    </View>
);

export default HomeView;
