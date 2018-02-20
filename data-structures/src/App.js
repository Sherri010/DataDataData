import React, { Component } from 'react';
import { LinkedList } from './dataStructures';
import Menu from './components/Menu';
import LinkedLists from './components/LinkedLists';
import Tree from './components/Trees';
import Graph from './components/Graph';
import Queue from './components/Queue';
import Stack from './components/Stack';
import './App.css';

export const MENU_ITEMS = [
    { name: 'linkedList', title: 'Linked List', component: LinkedLists },
    { name: 'stack', title: 'Stack', component: Stack },
    { name: 'queue', title: 'Queue', component: Queue },
    { name: 'tree', title: 'Tree', component: Tree },
    { name: 'graph', title: 'Graph', component: Graph },
];


class App extends Component {
 constructor(props){
     super(props);
    this.state = {
        currentDataStructure: 'linkedList',
    };
 }

 renderDataStructure = () => {
     const { currentDataStructure } = this.state;
     const Component = MENU_ITEMS.find((menuItem) => menuItem.name === currentDataStructure).component;

     return <Component/>;

 }

  render() {
    const  { currentDataStructure } = this.state;

    return (
      <div className="App">
        <Menu
            onClickItem={(item) => this.setState({ currentDataStructure: item })}
            activeItem={currentDataStructure}
            menuItems={MENU_ITEMS}
        />
        <div className='structureWrapper'>
            {this.renderDataStructure()}
        </div>
      </div>
    );
  }
}

export default App;
