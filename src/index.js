
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { getData, getHeadings } from './data.js';

class Detail extends React.Component {
  changeView(view) {
    this.props.app.setState({id: this.props.app.state.id, view: view });
  }
  getCoin() {
    for (let i = 0; i < this.props.data.length; i++) {
      if (this.props.data[i].id === this.props.id) {
        return this.props.data[i];
      }
    }
    return null;
  }
  render(props) {
    var coin = this.getCoin();
    if (coin != null) {
      switch (this.props.app.state.view) {
        case 0:
          return (  
            <div id="basic">
              <img id="small_obv" alt="" src={coin.obverse} onClick={() => this.changeView(1)} />
              <img id="small_rev" alt="" src={coin.reverse} onClick={() => this.changeView(2)} />
              <h2 id="title">{coin.title}</h2>
              <p id="description">{coin.description}</p>
              <p id="notes">{coin.notes}</p>
              <a id="certified" class="pointer" onClick={() => this.changeView(3)}>{coin.certified}</a>
            </div>
          );
        case 1:
          return (
            <img id="small_obv" class="pointer" alt="" src={coin.obverse} onClick={() => this.changeView(0)} />
          );
        case 2:
          return (
            <img id="small_rev" class="pointer" alt="" src={coin.reverse} onClick={() => this.changeView(0)} />
          );
        case 3:
          return (
            <img id="obverse_slab" class="pointer" alt="" src={coin.slab_obverse} onClick={() => this.changeView(4)} />
          );
        case 4:
          return (
            <img id="reverse_slab" class="pointer" alt="" src={coin.slab_reverse} onClick={() => this.changeView(0)} />
          );
        default:
          return ("");
      }
    } else {
      return ("");
    }
  }
}

class MenuHeading extends React.Component {
  render(props) {
    return(
      <h1>{this.props.text}</h1>
    );
  }
}

class MenuItem extends React.Component {
  render(props) {
    return(
      <a class="pointer" onClick={() => this.props.app.setState({id: this.props.coin.id, view: 0})}>{this.props.coin.menu}</a>
    );
  }
}

class MenuSet extends React.Component {
  render(props) {
    return (
      this.props.data.map((coin, idx) => {
        if (this.props.data[idx].type === this.props.heading) {
          return (
            <li><MenuItem coin={this.props.data[idx]} app={this.props.app} /></li>
          );
        } else {
          return("");
        }
      })
    );
  }
}

class Menu extends React.Component {
  render(props) {
    return (
      this.props.headings.map((heading) => {
        return (
          <div>
            <MenuHeading text={heading} />
            <ul>
              <MenuSet data={this.props.data} heading={heading} app={this.props.app} />
            </ul>
          </div>
        );
      })
    );
  }
}

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      view: 0
    };
  }
  render(props) {
    return (
      <div id="container2">
        <div id="content">
          <div id="container1">
            <div id="col1">
              <Menu data={this.props.data} headings={this.props.headings} app={this} />                             
            </div>
            <div id="col2">
              <Detail id={this.state.id} data={this.props.data} app={this} />              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Application data={getData()} headings={getHeadings()} />,
  document.getElementById('root')
);
