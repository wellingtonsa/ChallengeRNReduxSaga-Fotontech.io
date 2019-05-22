import React, { Fragment } from 'react';
import List from '../components/List'
import Header from '../components/Header';

const ListView = (props) => (
<>
    <Header/>
    <List navigation={props.navigation}/>
 </>);

export default ListView;
