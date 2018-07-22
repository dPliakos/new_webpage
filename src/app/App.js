import React from 'react';
import ExpandibleCard from './components/event-teaser';

class App extends React.Component {
  render() {

    const event = {
      title: 'title',
      date: new Date(),
      subtitle: 'subtitle',
      description: 'Lorem ipsum dolor sit amet, meis adipiscing at per, at mea suscipit oportere. Nostrum salutandi an his, eu vel invidunt accusamus, ferri facilisi consulatu per te. No tale nominavi usu. Ut veritus referrentur vim, hinc volumus cu cum, enim incorrupte ius ut. Sit ex appareat disputationi, an quando accumsan insolens ius.',
      location: 'Thessaloniki',
      organizer: 'IEEE student branch',
      link: 'http://google.com'
    }

    return (
      <div>
        <ExpandibleCard event={event} />
      </div>
    );
  }
}

export default App;
