import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/_navigation/Menu';
import Home from './components/Home';
import Footer from './components/Footer';
// import Work from './components/_pages/Work';
import Adopt from './components/_pages/Adopt';
import Error from './components/Error';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faHeart, faShare } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(faHeart, faShare, faPhone, fab );



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu />
          <Switch>
            <Route path="/" component={Home} exact />
            {/* <Route path="/work" component={Work} /> */}
            <Route path="/adopt" component={Adopt} />
            {/* <Route path="/contact" component={Contact} /> */}
            {/* <Route path="/more" component={More} /> */}
            {/* <Route path="/story" component={Error} /> */}
            
            
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
};

export default App; 
