import React from 'react';
import IconLabel from './icon-label';
import {Collapse} from 'react-bootstrap';

class ExpandibleCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  toggle = ()=>{this.setState({open: !this.state.open})}

  render() {
    const event = this.props.event;

    const title = event.title || '';
    const subtitle = event.subtitle || '';
    const day = ( '00' + event.date.getDate()).substr(-2);
    const month = ( '00' + (event.date.getMonth() + 1)).substr(-2);
    const hours = ('00' + event.date.getHours()).substr(-2);
    const mins = ('00' + event.date.getMinutes()).substr(-2);
    const description = event.description;

    const date_upper = `${day}/${month}`;
    const date_lower = `${hours}:${mins}`;

    const location_label = event.location || 'no location found';
    const location = <IconLabel label={location_label} icon='location-arrow' />

    let organizer = <div></div>;
    if (event.organizer) {
      organizer = <IconLabel label={event.organizer} icon='users' />
    }

    let link = <div></div>;
    if (event.link) {
      link = <IconLabel label='Learn more' icon='link' url={event.link}/>
    }

    const extraClasses = this.state.open ? 'event-teaser--open' : '';

    return (
      <div className={`event-teaser ${extraClasses}`}>
        <div className="event-teaser__header" onClick={this.toggle}>
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
          <div className="event-teaser__button">
            <span class="fas fa-angle-double-up"></span>
          </div>
        </div>
        <Collapse in={this.state.open}>
        {/* Collapse works only with a single div as it's child */}
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
        </Collapse>
      </div>
    );
  }
}

export default ExpandibleCard;
