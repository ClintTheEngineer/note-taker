import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { NoteList } from './components/NoteList';
import { NoteForm } from './components/NoteForm';

interface AppProps {
  component: typeof Route
}

const App: React.FC<AppProps> = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/notes" Component={NoteList} />
          <Route path="/notes/:id" Component={NoteForm} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

export { AppProps }; // Exporting the AppProps type for potential future use
