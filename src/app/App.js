import React from 'react';
import ExpandibleCard from './components/event-teaser';
import Card from './components/card';

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

    const eventPreview = `07/12/2018 This is a title`;
    const eventDesc = `Lorem ipsum donor sit amet Lorem ipsum donor sit amet Lorem ipsum donor sit amet`
    const evtime = '23:03';
    const location = 'location';

    const eventBody = [evtime, location, eventDesc ];

    return (
      <div>
        <ExpandibleCard event={event} />
        <Card title={eventPreview} body={eventBody}/>
      </div>
    );
  }
}

export default App;
