import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './views/Home';
import List from './views/List';
import Details from './views/Details';

    const stackNavigator =  createStackNavigator({
        Home:{ 
            screen: Home,  
            navigationOptions: {
                header: null,
            }
        },
        List:{ 
            screen: List,  
            navigationOptions: {
                header: null,
            }
        },
        Details:{ 
            screen: Details,  
            navigationOptions: {
                header: null,
            }
        },
    })

    export default createAppContainer(stackNavigator);