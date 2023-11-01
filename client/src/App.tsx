import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './components/Login';
import { NoteList } from './components/NoteList';
import { NoteForm } from './components/NoteForm';

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/notes" exact component={NoteList} />
          <Route path="/notes/:id" component={NoteForm} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
