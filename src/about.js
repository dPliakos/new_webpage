import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import './style/about.css';
import './style/main.css';


class Header extends React.Component {

  render() {
    return (

      <header className="masthead">
	             <div className="intro-body">
	              <div className="container">
          		   <div className="row">
            		<div>
	                   <h1 className="brand-heading">IEEE</h1>
	                   <p className="intro-text">Press the button to scroll down and learn more</p>
                       <a href="#about1" className="btn  btn-circle js-scroll-trigger">
                        <i className="fa fa-angle-double-down animated"></i>
                       </a>
	             </div>
	            </div>
	           </div>
	          </div>
    </header>
    );
  }
}

class About1 extends React.Component {
  render() {
    return (
    <section id="about1" className="content-section text-center">
      <div className="container">
        <div className="row">
         <h2>ΤΙ ΕΙΝΑΙ Η IEEE</h2>
          <div className="stl">

            <p>
	             Η ΙΕΕΕ (Institute of Electrical and Electronic Engineers)
	             είναι μια παγκόσμια τεχνολογική, επαγγελματική, μη πολιτική οργάνωση
	             με σκοπό την προώθηση της θεωρίας και των εφαρμογών της επιστήμης του
	             Ηλεκτρολόγου Μηχανικού και Μηχανικού Υπολογιστών για την εξέλιξη του επαγγέλματος
	             με γνώμονα την κοινωνική προσφορά.
            </p>

            <p>
	            Στην ΙΕΕΕ είναι σήμερα εγγεγραμμένα περισσότερα από 400.000 μέλη εκ των
	            οποίων περισσότεροι από 90.000 φοιτητές, σε περισσότερες από 160 χώρες, γεγονός
	            που την καθιστά τη μεγαλύτερη τεχνολογική επαγγελματική κοινότητα στον κόσμο.
            </p>
          </div>
          <a href="#about2" className="btn btn-circle js-scroll-trigger">
              <i className="fa fa-angle-double-down animated"></i>
          </a>
        </div>
      </div>
    </section>
    );
  }
}

class About2 extends React.Component {
  render() {
    return (
    <section id="about2" className="content-section text-center">
      <div className="container">
        <div className="row">
         <h2>Οι φοιτητΕς στην ΙΕΕΕ</h2>
          <div className="stl">

            <p>Οι φοιτητές παίζουν καθοριστικό ρόλο για την IEEE. Σήμερα υπάρχουν περισσότερες
	            από 2000 φοιτητικές ομάδες της ΙΕΕΕ στον κόσμο. Σκοπός τους είναι να παρέχουν στους
	            προπτυχιακούς και μεταπτυχιακούς φοιτητές, που ενδιαφέρονται για την επιστήμη του
	            Ηλεκτρολόγου Μηχανικού, Μηχανικού Υπολογιστών ή συγγενείς επιστήμες, ευκαιρίες
	            για ακαδημαϊκή, τεχνολογική και επαγγελματική εξέλιξη.
            </p>
          </div>
           <a href="#about3" className="btn btn-circle js-scroll-trigger">
              <i className="fa fa-angle-double-down animated"></i>
          </a>
        </div>
      </div>
    </section>
    );
  }
}

class About3 extends React.Component {
  render() {
    return (
    <section id="about3" className="content-section text-center">
      <div className="container">
        <div className="row">
         <h2>ΔραστηριΟτητες απΟ φοιτητικΕς ομΑδες</h2>
          <div className="stl">
            <ul className="text-left">
              <li><p>Διοργάνωση σεμιναρίων, συνεδρίων (workshops) και ομιλιών από διακεκριμένους επιστήμονες με σκοπό την επιμόρφωση και ενημέρωση των φοιτητών γύρω από θέματα που αφορούν την επιστήμη των Ηλεκτρολόγων Μηχανικών, Μηχανικών Υπολογιστών ή παρεμφερείς επιστήμες.</p></li>
              <li><p>Διοργάνωση εκπαιδευτικών εκδρομών και επισκέψεων σε εταιρείες και ιδρύματα που ασχολούνται με την έρευνα και την ανάπτυξη συγγενών επιστημονικών πεδίων.</p></li>
              <li><p>Συμμετοχή σε φοιτητικούς διαγωνισμούς υπό την αιγίδα της ΙΕΕΕ ή άλλων τεχνολογικών οργανισμών.</p></li>
              <li><p>Ενημέρωση των φοιτητών σχετικά με τις δραστηριότητες της ΙΕΕΕ και τις δυνατότητες που τους παρέχονται από την οργάνωση.</p></li>
              <li><p>Διοργάνωση διαγωνισμών και βραβείων με σκοπό την διάκριση της.</p></li>
            </ul>
          </div>
           <a href="#about4" className="btn btn-circle js-scroll-trigger">
              <i className="fa fa-angle-double-down animated"></i>
          </a>
        </div>
      </div>
    </section>
    );
  }
}

class About4 extends React.Component {
  render() {
    return (
    <section id="about4" className="content-section text-center">
      <div className="container">
        <div className="row">
         <h2>ΓιατI να γIνεις μEλος στην IEEE</h2>
          <div className="stl">
            <p>
               Η εγγραφή ενός φοιτητή ως μέλος της ΙΕΕΕ του παρέχει όλα τα προνόμια
               ενός κανονικού μέλους με το συγκριτικό πλεονέκτημα της πολύ μικρότερης
               συνδρομής. Η ΙΕΕΕ μέσω των πρωτοποριακών θεμάτων που πραγματεύεται και
               τη συμμετοχή σε διάφορες επαγγελματικές δραστηριότητες, συνέδρια κ.ά.,
               σου δίνει τη δυνατότητα να είσαι ενήμερος της προόδου της τεχνολογίας και
                του κλάδου σου, των τελευταίων τάσεων της βιομηχανίας και – το πιο σημαντικό –
                σε βοηθάει τελικά στην καριέρα σου.
            </p>
          </div>
           <a href="#about5" className="btn btn-circle js-scroll-trigger">
              <i className="fa fa-angle-double-down animated"></i>
          </a>
        </div>
      </div>
    </section>
    );
  }
}


class About5 extends React.Component {
  render() {
    return (
    <section id="about5" className="content-section text-center">
      <div className="container">
        <div className="row">
         <h2>ΟφΕλη μΕλους της IEEE</h2>
          <div className="stl">
            <ul className="text-left">
              <li><p>Λαμβάνεις το βραβευμένο μηνιαίο περιοδικό ΙΕΕΕ Spectrum, το οποίο περιλαμβάνει άρθρα για την κατάσταση του επαγγέλματος, ευκαιρίες για την καριέρα και την εκπαίδευση καθώς και αφιερώματα στις πιο πρόσφατες τεχνολογικές εξελίξεις και τις εφαρμογές τους.</p></li>
              <li><p>Έχεις δωρεάν ηλεκτρονική πρόσβαση στο περιοδικό POTENTIALS για φοιτητές και νέους επαγγελματίες.</p></li>
              <li><p>Μπορείς να πάρεις μέρος σε φοιτητικούς διαγωνισμούς που διοργανώνει η ΙΕΕΕ (όπως IEEEXtreme, Student Paper Contest κ.ά.) και να διακριθείς σε διεθνές επίπεδο.</p></li>
              <li><p>Μπορείς να διεκδικήσεις υποτροφίες για μέλη της ΙΕΕΕ.</p></li>
              <li><p>Αποκτάς δωρεάν @ieee.org email alias σε συνεργασία της ΙΕΕΕ με τη Google.</p></li>
              <li><p>Έχεις πρόσβαση σε καταλόγους προσφοράς εργασίας σε ευρωπαϊκό και διεθνές επίπεδο και σε εργαλεία προώθησης της καριέρας σου.</p></li>
              <li><p>Μπορείς να συμμετάσχεις σε φοιτητικά συνέδρια και συναντήσεις με άλλα μέλη στην Ελλάδα ή το εξωτερικό με σκοπό να ανταλλάξεις γνώσεις και απόψεις.</p></li>
              <li><p>Μπορείς να συμμετάσχεις σε όλα τα διεθνή επιστημονικά συνέδρια που διοργανώνει η ΙΕΕΕ έχοντας ειδικές χαμηλές φοιτητικές τιμές.</p></li>
              <li><p>Εξοικονομείς χρήματα με σημαντικές εκπτώσεις σε πάνω από 15.000 βιβλία που εκδίδει η ΙΕΕΕ.</p></li>
              <li><p>Λαμβάνεις οικονομική ενίσχυση για μεταφορά σε επιστημονικό συνέδριο στο οποίο έχεις δημοσίευση.</p></li>
              <li><p>Χρησιμοποιείς το εργαλείο IEEE Xplore για εύκολη εύρεση οποιουδήποτε επιστημονικού άρθρου και πρόσβαση σε αυτό αν περιλαμβάνεται στη συνδρομή σου.</p></li>
            </ul>
          </div>
           <a href="#about6" className="btn btn-circle js-scroll-trigger">
              <i className="fa fa-angle-double-down animated"></i>
          </a>
        </div>
      </div>
    </section>
    );
  }
}


class About6 extends React.Component {
  render() {
    return (
    <section id="about6" className="content-section text-center">
       <div id="builder-column-529c5ea63089d" className="span12 column_first column_last">
          <h2 class="rw-sentence">
            <span>Ειναι μια καλη ευκαιρια να </span>
            <br></br>
            <div class="rw-words rw-words-2">
				<span>ΕΝΗΜΕΡΩΘΕΙΣ</span>
				<span>ΔΙΑΓΩΝΙΣΤΕΙΣ</span>
				<span>ΣΥΜΜΕΤΕΧΕΙΣ</span>
		    </div>
		  </h2>
		<div>
			<a  href="http://www.ieee.org/membership_services/membership/join/index.html"
          target="_blank" rel="noopener noreferrer"
          class="btn btn-lg btn-primary push-top">Εγγραφή</a>
    	</div>
       </div>
       <div>
		<p class="lead">
		  Θα θέλαμε πολύ πριν γραφτείς, να μας γνωρίσεις, να μας ρωτήσεις ότι απορία έχεις σχετικά με την ΙΕΕΕ ή με το ΑΤΕΙΤΗ Student Branch. Θα βρείς πληροφορίες
		  στο <Link to="/blog">
		  <a target="_blank"><span class="alternative-font">STUDENT BRANCH</span></a>
		  </Link> για να επικοινωνήσεις με κάποιον από εμάς ή μπορείς να στείλεις μήνυμα συμπληρώνοντας την φόρμα που θα βρείς
		  στο <Link to="/contact">
		  <a target="_blank"><span class="alternative-font">CONTACT</span></a>
		  </Link>. Επίσης μπορείς να παρευρεθείς σε οποιαδήποτε εκδήλωση ή συνάντησή μας παρακολουθώντας
		  τα <Link to="/events">
		  <a  target="_blank"><span class="alternative-font">EVENTS</span></a>
		  </Link>  μας.		</p>

	   </div>
    </section>
    );
  }
}
export default class printAbout extends React.Component {


  render() {
	  return (
	   <div>
	  	<Header />
	  	<About1 />
	  	<About2 />
	  	<About3 />
	  	<About4 />
	  	<About5 />
	  	<About6 />
	   </div>

	  );
  }
}
