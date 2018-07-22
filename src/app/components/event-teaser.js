import React from 'react';
import IconLabel from './icon-label';

class ExpandibleCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  render() {
    const event = this.props.event;

    const title = event.title || '';
    const subtitle = event.subtitle || '';
    const day = event.date.getDate();
    const month = event.date.getMonth() + 1;
    const hours = event.date.getHours();
    const mins = event.date.getMinutes();
    const description = event.description;

    const date_upper = `${day}/${month}`;
    const date_lower = `${hours}:${mins}`;

    const location_label = event.location || 'no location found';
    const location = <IconLabel label={location_label} icon='location' />

    let organizer = <div></div>;
    if (event.organizer) {
      organizer = <IconLabel label={event.organizer} icon='organizer' />
    }

    let link = <div></div>;
    if (event.link) {
      link = <IconLabel label='Learn more' icon='link' url={event.link}/>
    }

    const extraClasses = this.state.open ? 'event-teaser--open' : '';

    return (
      <div className={`event-teaser ${extraClasses}`}>
        <div className="event-teaser__header">
          <div className="event-teaser__date">
            <div className="event-teaser__date--date">
              {date_upper}
            </div>
            <div className="event-teaser__date--time">
              {date_lower}
            </div>
          </div>
          <div className="event-teaser__title-wrapper">
            <div className="event-teaser__title">
              {title}
            </div>
            <div className="event-teaser__subtitle">
              {subtitle}
            </div>
          </div>
          <div className="event-teaser__button"></div>
        </div>
        <div className="event-teaser__body">
          <div className="event-teaser__basic-info">
            {location}
            {organizer}
            {link}
          </div>
          <div className="event-teaser__description">
            {description}
          </div>
        </div>
      </div>
    );
  }
}

export default ExpandibleCard;
