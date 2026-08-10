import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Menu, X, Quote, Mail } from 'lucide-react';
import './styles.css';


const testimonials = [
  { quote: 'POWERHOUSE and an excellent communicator!', name: 'American Express Company', role: 'Client testimonial', image: 'https://quincyoliver.com/wp-content/uploads/2017/12/ON_Air-250x250.png' },
  { quote: 'A Flame of Fire! If Quincy had never been born, Thomas Edison would have invented him. A dynamic speaker who has the talent to empower his audience. Absolutely Amazing!', name: 'Joyce Robinson', role: 'Senior Sales Director, Mary Kay Cosmetic', image: 'https://quincyoliver.com/wp-content/uploads/2017/12/Mary_Kay-250x250.png' },
  { quote: 'Totally Awesome! Quincy is an exciting teacher, inspirational speaker, and a motivating preacher.', name: 'United States Air Force', role: 'Client testimonial', image: 'https://quincyoliver.com/wp-content/uploads/2017/12/Air_force_Pic-250x250.png' },
];

const topics = ['Business / Leadership', 'Customer Service', 'Motivational / Inspirational Keynotes', 'Communication', 'Goals & Dreaming Big', 'Cryptocurrency'];
const engagements = ['American Express Company', 'WCCO News-TV, Minneapolis', 'Georgetown University', 'North Memorial Health Hospital', 'UCLA, Los Angeles', 'Mary Kay Cosmetics'];

function Button({ children, light = false, href = '#contact' }) { return <a className={`button ${light ? 'button-light' : ''}`} href={href}>{children}<ArrowUpRight size={17} /></a>; }

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const links = [['Home', '#top'], ['About', '#about'], ['Speaking', '#speaking'], ['Books', '#books'], ['Contact', '#contact']];
  return <header className="navbar"><a className="brand" href="#top">Q<span>.</span>O.</a><nav className={open ? 'nav-links open' : 'nav-links'}>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<Button href="#book">Book Quincy</Button></nav><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button></header>;
}

function Hero() {
  const videoRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(true);
  const [soundOn, setSoundOn] = React.useState(true);
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) { videoRef.current.play(); setPlaying(true); }
    else { videoRef.current.pause(); setPlaying(false); }
  };
  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = soundOn;
    setSoundOn(!soundOn);
  };
  return <section className="hero" id="top">
    <div className="hero-content">
      <p className="hero-name">QUINCY OLIVER</p>
      <h1 className="hero-tagline">THE MOST DANGEROUS SPEAKER IN NORTH AMERICA<sup>®</sup></h1>
      <p className="hero-roles">SPEAKER <span>—</span> INFLUENCER <span>—</span> AUTHOR <span>—</span> ENTREPRENEUR</p>
    </div>
    <div className="hero-video">
      <video ref={videoRef} className="hero-local-video" src="./media/intro-movie.mp4" autoPlay loop playsInline controls preload="metadata" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
      <div className="video-shade" />
    </div>
    <div className="scroll-cue">Scroll to explore <ArrowDownRight size={16} /></div>
  </section>;
}
function Intro() { return <section className="intro section"><p className="eyebrow">01 / The difference</p><div className="intro-grid"><h2>He doesn't just<br /><i>fill a stage.</i></h2><div><p className="lead">He changes what happens next.</p><p className="body-copy">Quincy brings a clear message, strong communication and a memorable presence to every room.</p><a className="arrow-link" href="#about">His story <ArrowUpRight size={18} /></a></div></div></section>; }

function Testimonials() { const [active, setActive] = React.useState(0); return <section className="quote-section section"><div className="section-top"><p className="eyebrow">02 / In their words</p><span className="count">0{active + 1} — 0{testimonials.length}</span></div><div className="quote-wrap"><Quote className="quote-mark" size={62} /><blockquote>&ldquo;{testimonials[active].quote}&rdquo;</blockquote><div className="quote-author"><div className="author-info"><img className="testimonial-avatar" src={testimonials[active].image} alt="" /><div><strong>{testimonials[active].name}</strong><span>{testimonials[active].role}</span></div></div><div className="quote-controls"><button onClick={() => setActive((active + testimonials.length - 1) % testimonials.length)}>&larr;</button><button onClick={() => setActive((active + 1) % testimonials.length)}>&rarr;</button></div></div></div></section>; }

function Speaking() { return <section className="speaking section" id="speaking"><div className="section-top"><p className="eyebrow">03 / The work</p><p className="muted">Ideas with a pulse.</p></div><div className="speaking-grid"><div><h2>Make your next<br /><i>moment matter.</i></h2><p className="body-copy">From the boardroom to the big stage, Quincy brings practical tools, contagious energy and a message that stays with people long after the applause.</p><Button>Explore speaking</Button></div><div className="topic-list">{topics.map((topic, i) => <div className="topic" key={topic}><span>0{i + 1}</span><strong>{topic}</strong><ArrowUpRight size={19} /></div>)}</div></div><div className="engagements"><p className="eyebrow">Selected engagements</p><div className="logo-row">{engagements.map(item => <span key={item}>{item}</span>)}</div></div></section>; }

function AboutBooks() { return <><section className="about section" id="about"><div className="about-image"><img className="quincy-photo" src="https://quincyoliver.com/wp-content/uploads/2017/12/photo-1.png" alt="Quincy Oliver" /><div className="image-caption">Quincy Oliver<br /><span>Always in motion.</span></div></div><div className="about-copy"><p className="eyebrow">04 / The man behind the message</p><h2>Built for the<br /><i>big conversation.</i></h2><p className="body-copy">Quincy Oliver is a motivational speaker, trainer, author and consultant. While serving as a Career Advisor in the United States Air Force, he discovered a talent for connecting with people.</p><p className="body-copy">He has made appearances on radio and television, including W.C.C.O. News in Minneapolis, Minnesota.</p><a className="arrow-link" href="#contact">Get to know Quincy <ArrowUpRight size={18} /></a></div></section><section className="books section" id="books"><div className="section-top"><p className="eyebrow">05 / On the shelf</p><p className="muted">Words worth carrying.</p></div><div className="book-grid"><div className="book-card featured"><img className="book-cover-image" src="https://quincyoliver.com/wp-content/uploads/2023/05/book-settle-no-more-1-1.png" alt="Settle No More book cover" /><div><p className="book-status">Available now</p><h3>Settle No More</h3><a href="#contact" className="arrow-link">Ask about the book <ArrowUpRight size={17} /></a></div></div><div className="book-card"><img className="book-cover-image" src="https://quincyoliver.com/wp-content/uploads/2023/05/Communicating-with-Ease.png" alt="Communicating with Ease book cover" /><div><p className="book-status">Coming soon</p><h3>Communicating with Ease</h3><a href="#contact" className="arrow-link">Stay in the loop <ArrowUpRight size={17} /></a></div></div></div></section></>; }

function Footer() { return <footer className="footer section" id="contact"><div className="footer-main"><p className="eyebrow">06 / Start a conversation</p><h2>Ready to make<br /><i>some noise?</i></h2><Button light href="#book">Let's talk</Button><a className="marketing-link" href="https://elitemarketing.media/" target="_blank" rel="noreferrer">Interested in marketing? <ArrowUpRight size={16} /></a></div><div className="footer-bottom"><div><a className="brand" href="#top">Q<span>.</span>O.</a><p>Most Dangerous Speaker in North America<sup>®</sup></p></div><div className="contact-details"><a href="mailto:quincyoliver@gmail"><Mail size={15} /> quincyoliver@gmail</a><a href="tel:555-555-5555"><span aria-hidden="true">☎</span> 555-555-5555</a></div><div className="socials"><a href="https://www.instagram.com/quincyoliver2026/" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a><a href="https://www.facebook.com/quincy.oliver.21" target="_blank" rel="noreferrer" aria-label="Facebook">FB</a></div></div></footer>; }

function BookingPage() {
  const [submitted, setSubmitted] = React.useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return <main className="booking-page">
    <section className="booking-hero">
      <div className="booking-intro">
        <p className="eyebrow">Start a conversation</p>
        <h1>Bring Quincy<br /><i>to your room.</i></h1>
        <p>Tell us a little about your event and the kind of energy you want to create. This form is a demo for now—nothing is sent or stored.</p>
        <a className="booking-back" href="#top">← Back to the site</a>
      </div>
      <div className="booking-card">
        <div className="booking-card-head"><span>Booking request</span><span>01 / 01</span></div>
        {submitted ? <div className="booking-success"><span className="booking-success-mark">✓</span><h2>Request ready.</h2><p>This demo shows where a confirmation would appear. No information was sent or saved.</p><button type="button" className="button" onClick={() => setSubmitted(false)}>Send another request <ArrowUpRight size={17} /></button></div> : <form onSubmit={handleSubmit}>
          <div className="booking-fields">
            <label>Full name<input name="name" type="text" placeholder="Your name" required /></label>
            <label>Work email<input name="email" type="email" placeholder="you@company.com" required /></label>
            <label>Organization<input name="organization" type="text" placeholder="Company or organization" /></label>
            <label>Event date<input name="date" type="date" /></label>
            <label className="booking-wide">Event location<input name="location" type="text" placeholder="City, state, or virtual" /></label>
            <label className="booking-wide">Tell us about the event<textarea name="message" rows="4" placeholder="Audience, goals, and what you have in mind" /></label>
          </div>
          <div className="booking-submit"><p>Demo form · no information leaves this page</p><button type="submit" className="button">Book Quincy <ArrowUpRight size={17} /></button></div>
        </form>}
      </div>
    </section>
  </main>;
}
function ContactPage() {
  return <main className="contact-page">
    <section className="contact-hero">
      <div className="contact-intro">
        <p className="eyebrow">Reach Quincy</p>
        <h1>Let’s keep<br /><i>the conversation</i><br />moving.</h1>
        <p>For speaking, training, author appearances, or a conversation about what comes next, choose the path that works best for you.</p>
        <a className="booking-back" href="#top">← Back to the site</a>
      </div>
      <div className="contact-panel">
        <div className="booking-card-head"><span>Direct connections</span><span>01 / 04</span></div>
        <div className="contact-methods">
          <a className="contact-method" href="mailto:quincyoliver@gmail"><span className="contact-method-label">Email</span><strong>quincyoliver@gmail</strong><span className="contact-method-action">Write Quincy <ArrowUpRight size={16} /></span></a>
          <a className="contact-method" href="tel:555-555-5555"><span className="contact-method-label">Phone</span><strong>555-555-5555</strong><span className="contact-method-action">Call now <ArrowUpRight size={16} /></span></a>
          <a className="contact-method" href="https://www.instagram.com/quincyoliver2026/" target="_blank" rel="noreferrer"><span className="contact-method-label">Instagram</span><strong>@quincyoliver2026</strong><span className="contact-method-action">Open Instagram <ArrowUpRight size={16} /></span></a>
          <a className="contact-method" href="https://www.facebook.com/quincy.oliver.21" target="_blank" rel="noreferrer"><span className="contact-method-label">Facebook</span><strong>Quincy Oliver</strong><span className="contact-method-action">Open Facebook <ArrowUpRight size={16} /></span></a>
        </div>
        <div className="contact-book"><p>Planning an event?</p><a className="button" href="#book">Book Quincy <ArrowUpRight size={17} /></a></div>
      </div>
    </section>
  </main>;
}
function App() {
  const [view, setView] = React.useState(window.location.hash);
  React.useEffect(() => { const onHashChange = () => setView(window.location.hash); window.addEventListener('hashchange', onHashChange); return () => window.removeEventListener('hashchange', onHashChange); }, []);
  if (view === '#book') return <><Navbar /><BookingPage /></>;
  if (view === '#contact') return <><Navbar /><ContactPage /></>;
  return <><Navbar /><main><Hero /><Intro /><Testimonials /><Speaking /><AboutBooks /></main><Footer /></>;
}
createRoot(document.getElementById('root')).render(<App />);























