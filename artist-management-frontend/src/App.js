import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArtistList from './components/ArtistList';
import ArtistDetail from './components/ArtistDetail';
import ArtistForm from './components/ArtistForm';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/artists/:id/edit" render={({ match }) => <ArtistForm initialData={match.params.id} />} />
          <Route path="/artists/new" component={ArtistForm} />
          <Route path="/artists/:id" component={ArtistDetail} />
          <Route path="/artists" component={ArtistList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
