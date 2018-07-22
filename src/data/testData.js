import logo from './../img/logo.jpg';
import background from './../img/background.jpg';

var imgData = {
  background: background,
  logo: logo
}

var events = [
  {name: "name1",
   description: "This is a short description"
 },
 {
   name: "name2",
   description: "This is a nother description"
 },
 {
   name: "name3",
   description: "Yet another description"
 }

]
var messages = {
  title: "IEEE Student Branch of ATEITH",
  moto: "Advancing technology for humanity",
  newEvents: "Upcoming Events",
  noNewEvents: "No upcoming events"

}

var contactInfo = [
  {
    label: "(+30)2310-013024",
    fontawesome: "phone"
  },
  {
    label: "(+30)2310798256",
    fontawesome: "fax"
  },
  {
    label: "ieeeteithe@gmail.com",
    fontawesome: "at"
  },
  {
    label: "P.O. Box 141, GR-57400 Sindos",
    fontawesome: "envelope"
  },
  {
    label: "Thessaloniki, GREECE",
    fontawesome: "location-arrow"
  }
]

var socialMedia = [
  {
    label: "facebook",
    fontawesome: "facebook-official",
    link: "https://www.facebook.com/ieeeteithe"
  },
  {
    label: "twitter",
    fontawesome: "twitter-square",
    link: "https://twitter.com/ieeeteithe"
  },
  {
    label: "instagram",
    fontawesome: "instagram",
    link: "https://instagram.com/ieeeteithe/"
  },
  {
    label: "google+",
    fontawesome: "google-plus",
    link: "https://plus.google.com/u/0/105664618061785376358"
  },
  {
    label: "youtube",
    fontawesome: "youtube-play",
    link: "https://www.youtube.com/channel/UCmzjQYFb33sHrWKVWv-VW0A"
  }
]

// events = [];
// contactInfo = [];
export default {imgData, events, messages, contactInfo, socialMedia};
