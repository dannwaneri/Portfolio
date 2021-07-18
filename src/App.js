import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { About,Project,Blog, Contact } from './Pages';
import {keepTheme} from './utilities/themes'


Aos.init();

const  App = () => {
  useEffect(() => {
    keepTheme()
  })
  return (
  <Router className='relative'>
      <div className="App">
      <Switch>
        <Route path='/project'>
          <Project />
        </Route>
        <Route path='/Blog'>
          <Blog />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/'>
          <About />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;