import React, {Component} from 'react';
import Header from './Components/layout/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Provider } from './contactContext';
import Contacts from './Components/contacts/Contacts';
import AddContact from './Components/contacts/AddContact';
import About from './Components/Pages/About';
import NotFound from './Components/Pages/NotFound';


class App extends Component {
  render(){
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );

    

    // return React.createElement('div', {className: 'App'},
    //   React.createElement('h1', '', 'The App Component!')
    // );
  }
}

export default App;
