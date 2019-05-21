import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './views/Home';

    const stackNavigator =  createStackNavigator({
        Home:{ 
        screen: Home,  
        navigationOptions: {
            header: null,
        }
        },
    })

    export default createAppContainer(stackNavigator);