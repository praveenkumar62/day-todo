import React, {Component} from 'react';

import AddTodo from './Component/AddTodo'
import './css/App.css'

class App extends Component {
  state = {
    list: [
      {id: null, desc: 'Never forgot! without Struggle, there is no progress..', author: 'Praveen', decoration: 'none'}
    ],
    todocount: null
  }

  addTodo = (items) => {
    items.id = Math.random()*100;
    items.decoration = 'none';
    const lists = [...this.state.list,items];
    this.setState({
      list: lists
    })
  }

  callStrike = (data) => {
    let delData = this.state.list.filter(item => {
      return item.id !== data
    }) 
    this.setState({
      list: delData
    })
  }

  render() {
    const stateData = this.state.list;

    let data = 0;
    const datalist = stateData.map(item => {

      item.id= data++;
      return(
        <div className="container-datalist" key={item.id}>
          {/* <p className="description center" style={{textDecoration: this.state.list[item.id].decoration}} onClick={() => {this.callStrike(item.id)}}>{item.desc}</p> */}
          <i className="fa fa-trash-o" onClick={() => {this.callStrike(item.id)}}></i>
          <div className="listing">
            <p className="description center">{item.desc}</p>
            <p className="assigner center">Given by <span className="sub-assigner">{item.author}</span></p>
          </div>
        </div>
      )
    });

    
    return (
      <div className="container">
        <h1 className="center head"><i className="fa fa-bolt"></i> Day to do</h1>

        <div className="content-list">
          <div className="data-list">
            {datalist}
          </div>

          <div className="add-new">
            <hr className="divider"/>
            <AddTodo receiveData={this.addTodo} />
          </div>

          <p>{this.state.todocount}</p>
        </div>

        <p className="dev-links">
          <a href="https://github.com/praveenkumar62"><i className="fa fa-github"></i></a>
          <a href="http://facebook.com/praveen.cruzerz"><i className="fa fa-facebook-official"></i></a>
          <a href="https://www.linkedin.com/in/praveen-kumar-309334159"><i className="fa fa-linkedin-square"></i></a>
        </p>
        <p className="dev-author">Developed by <span>Praveen Cruzerz </span> <i className="fa fa-paw"></i></p>
      </div>
    );
  }
}

export default App;
