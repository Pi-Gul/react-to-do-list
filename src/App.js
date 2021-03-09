import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {newItem: '', list: []};
  }

  updateInput(key, value) {
    this.setState({
      [key]: value
    })
  }
  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    const list = [...this.state.list];
    list.push(newItem);
    this.setState({list, newItem:''});
  }
  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => {return item.id !== id});
    this.setState({list: updatedList});
  }
  render() {
    return (
      <div className='app'>
        <h1>MY LIST</h1>
        <div className='list-box'>
          <h2>Add an Item...</h2>
          <input
            type='text'
            placeHolder='Type item here'
            value={this.state.newItem}
            onChange={(e) => {this.updateInput('newItem', e.target.value)}}
          />
          <button className='add-button' onClick={() => {this.addItem()}}>Add</button>
          <ul>
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>X</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;