import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Menu, X, Play, Quote, Mail, MapPin } from 'lucide-react';
import './styles.css';

const heroYoutubeUrl = 'https://www.youtube.com/watch?v=--8Q9W36G_Q';

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
  const links = [['About', '#about'], ['Speaking', '#speaking'], ['Books', '#books'], ['Contact', '#contact']];
  return <header className="navbar"><a className="brand" href="#top">Q<span>.</span>O.</a><nav className={open ? 'nav-links open' : 'nav-links'}>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<Button href="#contact">Book Quincy</Button></nav><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button></header>;
}

function Hero() {
  const iframeRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(true);
  const [soundOn, setSoundOn] = React.useState(true);
  const embed = heroYoutubeUrl ? `https://www.youtube.com/embed/${(heroYoutubeUrl.match(/(?:v=|youtu\.be\/)([^&?/]+)/) || [])[1] || heroYoutubeUrl}` : '';
  const sendCommand = (func) => iframeRef.current?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func, args: [] }), '*');
  const togglePlay = () => { sendCommand(playing ? 'pauseVideo' : 'playVideo'); setPlaying(!playing); };
  const toggleSound = () => { sendCommand(soundOn ? 'mute' : 'unMute'); setSoundOn(!soundOn); };
  return <section className="hero" id="top"><div className="hero-video">{embed ? <iframe ref={iframeRef} src={`${embed}?autoplay=1&mute=0&loop=1&playlist=${embed.split('/').pop()}&rel=0&modestbranding=1&cc_load_policy=0&iv_load_policy=3&playsinline=1&enablejsapi=1`} title="Quincy Oliver speaking" allow="autoplay; fullscreen; picture-in-picture" /> : <div className="video-placeholder"><div className="play-ring"><Play fill="currentColor" size={23} /></div><span>YouTube hero video ready</span><small>YouTube hero video</small></div>}<div className="video-shade" /></div><div className="hero-content"><p className="eyebrow"><span className="eyebrow-line" /> Speaker · Author · Catalyst</p><h1>The most <em>dangerous</em><br />speaker in <span>North America.</span></h1><p className="hero-copy">Quincy Oliver turns bold ideas into brave action. For leaders ready to shift the room — and the world.</p><div className="hero-actions"><Button href="#speaking">Bring the energy</Button><a href="#about" className="text-link">Discover Quincy <ArrowDownRight size={18} /></a></div></div>{embed && <div className="hero-video-controls"><button onClick={togglePlay} aria-label={playing ? 'Pause video' : 'Play video'}>{playing ? 'Pause' : 'Play'} <span>{playing ? '||' : '>'}</span></button><button onClick={toggleSound} aria-label={soundOn ? 'Mute video' : 'Turn sound on'}>{soundOn ? 'Sound on' : 'Sound off'} <span>{soundOn ? '))' : 'x'}</span></button></div>}<div className="hero-note">Most Dangerous Speaker<sup>®</sup><br /><span>Since 2007</span></div><div className="scroll-cue">Scroll to explore <ArrowDownRight size={16} /></div></section>;
}

function Intro() { return <section className="intro section"><p className="eyebrow">01 / The difference</p><div className="intro-grid"><h2>He doesn't just<br /><i>fill a stage.</i></h2><div><p className="lead">He changes what happens next.</p><p className="body-copy">Quincy brings a clear message, strong communication and a memorable presence to every room.</p><a className="arrow-link" href="#about">His story <ArrowUpRight size={18} /></a></div></div></section>; }

function Testimonials() { const [active, setActive] = React.useState(0); return <section className="quote-section section"><div className="section-top"><p className="eyebrow">02 / In their words</p><span className="count">0{active + 1} — 0{testimonials.length}</span></div><div className="quote-wrap"><Quote className="quote-mark" size={62} /><blockquote>&ldquo;{testimonials[active].quote}&rdquo;</blockquote><div className="quote-author"><div className="author-info"><img className="testimonial-avatar" src={testimonials[active].image} alt="" /><div><strong>{testimonials[active].name}</strong><span>{testimonials[active].role}</span></div></div><div className="quote-controls"><button onClick={() => setActive((active + testimonials.length - 1) % testimonials.length)}>&larr;</button><button onClick={() => setActive((active + 1) % testimonials.length)}>&rarr;</button></div></div></div></section>; }

function Speaking() { return <section className="speaking section" id="speaking"><div className="section-top"><p className="eyebrow">03 / The work</p><p className="muted">Ideas with a pulse.</p></div><div className="speaking-grid"><div><h2>Make your next<br /><i>moment matter.</i></h2><p className="body-copy">From the boardroom to the big stage, Quincy brings practical tools, contagious energy and a message that stays with people long after the applause.</p><Button>Explore speaking</Button></div><div className="topic-list">{topics.map((topic, i) => <div className="topic" key={topic}><span>0{i + 1}</span><strong>{topic}</strong><ArrowUpRight size={19} /></div>)}</div></div><div className="engagements"><p className="eyebrow">Selected engagements</p><div className="logo-row">{engagements.map(item => <span key={item}>{item}</span>)}</div></div></section>; }

function AboutBooks() { return <><section className="about section" id="about"><div className="about-image"><img className="quincy-photo" src="https://quincyoliver.com/wp-content/uploads/2017/12/photo-1.png" alt="Quincy Oliver" /><div className="image-caption">Quincy Oliver<br /><span>Always in motion.</span></div></div><div className="about-copy"><p className="eyebrow">04 / The man behind the message</p><h2>Built for the<br /><i>big conversation.</i></h2><p className="body-copy">Quincy Oliver is a motivational speaker, trainer, author and consultant. While serving as a Career Advisor in the United States Air Force, he discovered a talent for connecting with people.</p><p className="body-copy">He has made appearances on radio and television, including W.C.C.O. News in Minneapolis, Minnesota.</p><a className="arrow-link" href="#contact">Get to know Quincy <ArrowUpRight size={18} /></a></div></section><section className="books section" id="books"><div className="section-top"><p className="eyebrow">05 / On the shelf</p><p className="muted">Words worth carrying.</p></div><div className="book-grid"><div className="book-card featured"><img className="book-cover-image" src="https://quincyoliver.com/wp-content/uploads/2023/05/book-settle-no-more-1-1.png" alt="Settle No More book cover" /><div><p className="book-status">Available now</p><h3>Settle No More</h3><a href="#contact" className="arrow-link">Ask about the book <ArrowUpRight size={17} /></a></div></div><div className="book-card"><img className="book-cover-image" src="https://quincyoliver.com/wp-content/uploads/2023/05/Communicating-with-Ease.png" alt="Communicating with Ease book cover" /><div><p className="book-status">Coming soon</p><h3>Communicating with Ease</h3><a href="#contact" className="arrow-link">Stay in the loop <ArrowUpRight size={17} /></a></div></div></div></section></>; }

function Footer() { return <footer className="footer section" id="contact"><div className="footer-main"><p className="eyebrow">06 / Start a conversation</p><h2>Ready to make<br /><i>some noise?</i></h2><Button light href="mailto:hello@quincyoliver.com">Let's talk</Button></div><div className="footer-bottom"><div><a className="brand" href="#top">Q<span>.</span>O.</a><p>Most Dangerous Speaker in North America<sup>®</sup></p></div><div className="contact-details"><a href="mailto:hello@quincyoliver.com"><Mail size={15} /> hello@quincyoliver.com</a><span><MapPin size={15} /> North America · Worldwide</span></div><div className="socials"><a href="#contact" aria-label="Instagram">IG</a><a href="#contact" aria-label="LinkedIn">IN</a><a href="#contact" aria-label="YouTube">YT</a></div></div></footer>; }

function App() { return <><Navbar /><main><Hero /><Intro /><Testimonials /><Speaking /><AboutBooks /></main><Footer /></>; }
createRoot(document.getElementById('root')).render(<App />);











