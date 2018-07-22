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

    const title = this.props.title || '';
    const subtitle = this.props.subtitle || '';
    const day = this.props.date.getDate();
    const month = this.props.date.getMonth() + 1;
    const hours = this.props.date.getHours();
    const mins = this.props.date.getMinutes();
    const description = this.props.description;

    const date_upper = `${day}/${month}`;
    const date_lower = `${hours}:${mins}`;

    const location_label = this.props.location || 'no location found';
    const location = <IconLabel label={location_label} icon='location' />

    let organizer = <div></div>;
    if (this.props.organizer) {
      organizer = <IconLabel label={this.props.organizer} icon='organizer' />
    }

    let link = <div></div>;
    if (this.props.link) {
      link = <IconLabel label='Learn more' icon='link' url='http://google.com'/>
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
