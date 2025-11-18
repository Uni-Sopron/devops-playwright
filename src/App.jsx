import { Router, Route, Switch } from 'wouter'
import './App.css'
import { Home } from './Home'
import { Todos } from './Todos'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/todos" component={Todos} />
      </Switch>
    </Router>
  )
}

export default App
