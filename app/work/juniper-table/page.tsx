import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Code2, ShoppingBag, Smartphone, Monitor, Github, ExternalLink } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const heroImage = "https://images.pexels.com/photos/37538487/pexels-photo-37538487.jpeg?cs=srgb";
const featureImage = "https://images.pexels.com/photos/36458103/pexels-photo-36458103.jpeg?cs=srgb";

const evidence = [
  { n: "01", title: "A first impression with appetite", label: "DESKTOP EXPERIENCE", image: heroImage, text: "A generous hero layout introduces the restaurant, its Nigerian and continental food direction and a direct route into the menu." },
  { n: "02", title: "A menu built to be explored", label: "MENU DISCOVERY", image: "https://images.pexels.com/photos/36458103/pexels-photo-36458103.jpeg?cs=srgb", text: "Category filters, dish descriptions and naira pricing help visitors move through the menu." },
  { n: "03", title: "The order stays close", label: "SHOPPING BAG", image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1400", text: "The persistent bag gives visitors access to their selected items, quantity controls and a live subtotal." },
];

export default function JuniperTableCaseStudy() {
  return (
    <main className="juniper-case">
      <nav className="jc-nav">
        <Link href="/" className="jc-mark">J<span>.</span></Link>
        <div className="jc-nav-right"><span>SELECTED WORK / 06</span><ThemeToggle /><Link href="/#work" className="jc-back"><ArrowLeft size={15}/> Back to work</Link></div>
      </nav>

      <header className="jc-hero jc-shell">
        <div className="jc-overline"><span>06 / RESTAURANT EXPERIENCE</span><span>WEB DESIGN · FRONTEND</span></div>
        <div className="jc-hero-grid">
          <div className="jc-title-block">
            <p className="jc-kicker">THE JUNIPER TABLE · FICTIONAL RESTAURANT CONCEPT</p>
            <h1>Good food.<br/><em>Good company.</em></h1>
            <p className="jc-intro">A bold, responsive restaurant website that brings a Nigerian and continental menu together with a complete sample online-ordering journey.</p>
            <div className="jc-actions">
              <a className="jc-button" href="https://github.com/Jey7447/juniper-table-demo" target="_blank" rel="noreferrer">View source code <Github size={16}/></a>
              <a className="jc-link" href="https://github.com/Jey7447/juniper-table-demo/blob/main/CASE-STUDY.md" target="_blank" rel="noreferrer">Project notes <ArrowUpRight size={16}/></a>
            </div>
            <div className="jc-facts">
              <div><span>TYPE</span><strong>Concept build</strong></div>
              <div><span>FOCUS</span><strong>Restaurant ordering</strong></div>
              <div><span>STATUS</span><strong>Interactive prototype</strong></div>
            </div>
          </div>
          <div className="jc-hero-visual">
            <div className="jc-browser">
              <div className="jc-browser-bar"><i/><i/><i/><span>thejunipertable.demo</span></div>
              <div className="jc-browser-content">
                <div className="jc-mini-nav"><b>J / THE JUNIPER TABLE</b><span>HOME　 MENU　 STORY　 FIND US</span><b>BAG　0</b></div>
                <div className="jc-mini-hero">
                  <div><small>A LITTLE LOCAL. A LITTLE ELSEWHERE.</small><strong>Come hungry.<br/><em>Leave happy.</em></strong><p>Big Nigerian flavour meets familiar favourites from around the world.</p><span>EXPLORE THE MENU　↗</span></div>
                  <img src={heroImage} alt="Nigerian-inspired restaurant meal" />
                </div>
                <div className="jc-mini-bottom"><span>MADE WITH HEART</span><span>JOS, NIGERIA</span><span>GOOD FOOD, NO SHORTCUTS</span></div>
              </div>
            </div>
            <div className="jc-visual-stamp">DESIGNED<br/>TO FEEL<br/>LIKE A PLACE.</div>
          </div>
        </div>
      </header>

      <section className="jc-strip"><div className="jc-shell"><span>01 / DISCOVER</span><b>02 / CHOOSE</b><span>03 / ORDER</span><span>04 / CONFIRM</span></div></section>

      <section className="jc-story jc-shell">
        <div className="jc-section-intro"><span className="jc-kicker">THE BRIEF / 01</span><h2>A restaurant site should do more than look delicious.</h2></div>
        <div className="jc-story-copy"><p>The goal was to create a distinctive digital front door for a fictional restaurant serving Nigerian favourites alongside familiar continental comfort food. Visitors needed to understand the restaurant quickly, browse the menu comfortably and move through an online order without getting lost.</p><p>The visual direction is bold modern: warm paper-like surfaces, expressive display typography, dark contrast, confident orange accents and food photography that carries the personality of the experience.</p></div>
      </section>

      <section className="jc-showcase">
        <div className="jc-showcase-image"><img src={featureImage} alt="Nigerian buffet spread with plantain and skewers"/></div>
        <div className="jc-showcase-copy"><span className="jc-kicker">VISUAL DIRECTION / 02</span><h2>A little local.<br/><em>A little elsewhere.</em></h2><p>The design balances a warm editorial restaurant identity with a practical interface. The menu gives Nigerian dishes room to lead while keeping continental options part of the same table.</p><div className="jc-palette"><i/><i/><i/><i/><span>WARM PAPER / INK / TOMATO / SAFFRON</span></div></div>
      </section>

      <section className="jc-features jc-shell">
        <div className="jc-section-intro"><span className="jc-kicker">THE CUSTOMER JOURNEY / 03</span><h2>From first look to order received.</h2><p>Each interaction is designed to make the next step obvious.</p></div>
        <div className="jc-feature-list">
          <article><span>01</span><div><h3>Discover the restaurant</h3><p>A clear hero, story section and visit details establish the concept and direct visitors to the menu.</p></div><Monitor/></article>
          <article><span>02</span><div><h3>Find the right plate</h3><p>Visitors can filter menu categories, search for a favourite and compare dish descriptions and prices.</p></div><Code2/></article>
          <article><span>03</span><div><h3>Build the bag</h3><p>Add items, change quantities, remove dishes and see the subtotal recalculate immediately.</p></div><ShoppingBag/></article>
          <article><span>04</span><div><h3>Complete a sample checkout</h3><p>Choose delivery or pickup, enter sample details and review the order before placing the demo order.</p></div><Smartphone/></article>
          <article><span>05</span><div><h3>Receive confirmation</h3><p>A generated demo reference and itemised summary close the loop without implying a real restaurant has received the order.</p></div><CheckCircle2/></article>
        </div>
      </section>

      <section className="jc-evidence jc-shell">
        <div className="jc-section-intro"><span className="jc-kicker">INTERFACE TOUR / 04</span><h2>Designed for the full journey.</h2><p>Selected interface moments from the working prototype.</p></div>
        <div className="jc-evidence-grid">
          {evidence.map((item) => <article key={item.n}><div className="jc-evidence-image"><img src={item.image} alt={item.title}/><span>{item.label}</span></div><div className="jc-evidence-caption"><span>{item.n}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></div></article>)}
        </div>
        <div className="jc-mobile-note"><span className="jc-phone"><span className="jc-phone-top"/><img src={heroImage} alt="Food image used in the mobile layout preview"/><b>Come hungry.<br/><em>Leave happy.</em></b><small>EXPLORE THE MENU ↗</small></span><div><span className="jc-kicker">MOBILE / 05</span><h2>Small screen.<br/><em>Same appetite.</em></h2><p>The layout reflows into a single-column experience, keeps the bag accessible and gives the checkout form room to scroll on narrow screens.</p></div></div>
      </section>

      <section className="jc-build">
        <div className="jc-shell jc-build-grid">
          <div><span className="jc-kicker">BUILD NOTES / 06</span><h2>What makes it work.</h2><p>The prototype is built with HTML, CSS and vanilla JavaScript. The cart and checkout interactions run in the browser, keeping the demonstration lightweight and easy to explore.</p></div>
          <div className="jc-build-points"><div><span>01</span><b>Responsive layout</b><small>Desktop and mobile breakpoints</small></div><div><span>02</span><b>Menu interactions</b><small>Search and category filtering</small></div><div><span>03</span><b>Cart state</b><small>Quantity and subtotal updates</small></div><div><span>04</span><b>Demo checkout</b><small>Delivery / pickup and confirmation</small></div></div>
        </div>
      </section>

      <section className="jc-scope jc-shell">
        <span className="jc-kicker">SCOPE & HONEST LIMITS / 07</span><h2>A convincing demo, not a live restaurant system.</h2>
        <div className="jc-scope-grid"><p>This is an interactive front-end prototype for a fictional restaurant. It does not process payments, store orders in a production database or notify a restaurant. Prices, contact information, opening hours and location are placeholders. The food photography is illustrative and sourced externally; image rights must be confirmed before commercial reuse.</p><p>A production launch would require a secure backend, order management, payment-provider integration, delivery rules, notifications, restaurant-managed menu data and owned or properly licensed photography.</p></div>
      </section>

      <footer className="jc-footer jc-shell"><div><span className="jc-kicker">NEXT STEP</span><h2>Have a menu worth<br/><em>bringing online?</em></h2></div><div className="jc-footer-actions"><a className="jc-button" href="/#contact">Discuss a project <ArrowUpRight size={16}/></a><a className="jc-link" href="https://github.com/Jey7447/juniper-table-demo" target="_blank" rel="noreferrer">Explore the repository <ExternalLink size={15}/></a><Link href="/#work" className="jc-link"><ArrowLeft size={15}/> Back to selected work</Link></div></footer>

      <style jsx global>{`
        .juniper-case{background:var(--bg);color:var(--paper);min-height:100vh;overflow:hidden}
        .jc-shell{width:min(1180px,calc(100% - 48px));margin-inline:auto}
        .jc-nav{height:76px;padding:0 28px;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:40;background:var(--nav-bg);backdrop-filter:blur(16px)}
        .jc-mark{font-size:27px;font-weight:800;color:var(--paper);text-decoration:none}.jc-mark span{color:var(--accent)}
        .jc-nav-right{display:flex;align-items:center;gap:18px}.jc-nav-right>span,.jc-back{font-size:10px;letter-spacing:.12em;color:var(--muted);text-decoration:none}.jc-back{display:flex;align-items:center;gap:6px}
        .jc-hero{padding:68px 0 100px}.jc-overline{display:flex;justify-content:space-between;border-bottom:1px solid var(--line);padding-bottom:14px;color:var(--soft);font-size:10px;letter-spacing:.14em}
        .jc-hero-grid{display:grid;grid-template-columns:.92fr 1.08fr;gap:70px;align-items:center;padding-top:70px}
        .jc-kicker{font-size:10px;letter-spacing:.16em;color:var(--soft);font-weight:700}.jc-title-block h1{font-size:clamp(64px,8vw,112px);line-height:.86;letter-spacing:-.075em;margin:28px 0;font-weight:700}.jc-title-block h1 em,.jc-showcase-copy h2 em,.jc-mobile-note h2 em,.jc-footer h2 em{font-family:Georgia,serif;font-weight:400;color:var(--accent)}
        .jc-intro{font-size:17px;line-height:1.7;color:var(--muted);max-width:510px}.jc-actions{display:flex;align-items:center;gap:22px;margin-top:32px;flex-wrap:wrap}
        .jc-button{display:inline-flex;align-items:center;gap:12px;padding:15px 18px;background:var(--paper);color:var(--bg);text-decoration:none;font-size:11px;font-weight:700;letter-spacing:.07em}.jc-link{display:inline-flex;align-items:center;gap:7px;color:var(--paper);font-size:11px;text-decoration:none;border-bottom:1px solid var(--line);padding-bottom:5px}
        .jc-facts{display:grid;grid-template-columns:repeat(3,1fr);gap:15px;border-top:1px solid var(--line);margin-top:55px;padding-top:17px}.jc-facts div{display:grid;gap:7px}.jc-facts span{font-size:9px;color:var(--soft);letter-spacing:.14em}.jc-facts strong{font-size:11px}
        .jc-hero-visual{position:relative;padding:30px 0 25px 20px}.jc-browser{background:#171714;padding:8px;border:1px solid #333;border-radius:9px;box-shadow:0 35px 80px #0003;transform:rotate(1.2deg)}.jc-browser-bar{height:24px;display:flex;align-items:center;gap:5px;padding:0 7px;color:#aaa;font-size:8px}.jc-browser-bar i{width:6px;height:6px;border-radius:50%;background:#777}.jc-browser-bar span{margin-left:12px}
        .jc-browser-content{background:#f3efe6;color:#191815;min-height:390px;padding:18px}.jc-mini-nav{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #d8d1c4;padding-bottom:13px;font-size:8px}.jc-mini-nav b:first-child{letter-spacing:.12em}.jc-mini-nav span{font-size:7px;letter-spacing:.1em}.jc-mini-hero{display:grid;grid-template-columns:1fr .9fr;gap:16px;align-items:center;padding:25px 0}.jc-mini-hero small{font-size:6px;letter-spacing:.12em;color:#777}.jc-mini-hero strong{display:block;font-family:Georgia,serif;font-size:clamp(25px,3vw,40px);line-height:.95;letter-spacing:-.05em;margin:15px 0}.jc-mini-hero strong em{color:#e85b39}.jc-mini-hero p{font-size:8px;line-height:1.5;color:#777}.jc-mini-hero img{width:100%;height:215px;object-fit:cover}.jc-mini-hero>div>span{display:inline-block;background:#191815;color:#fff;padding:10px;font-size:7px;margin-top:10px}.jc-mini-bottom{border-top:1px solid #d8d1c4;padding-top:12px;display:flex;justify-content:space-between;font-size:6px;letter-spacing:.1em;color:#777}.jc-visual-stamp{position:absolute;right:-10px;bottom:0;background:var(--accent);color:#111;padding:17px 19px;font-size:10px;font-weight:800;letter-spacing:.08em;line-height:1.3;transform:rotate(-7deg)}
        .jc-strip{background:var(--paper);color:var(--bg);padding:22px 0}.jc-strip .jc-shell{display:flex;justify-content:space-between;font-size:10px;letter-spacing:.15em}.jc-strip b{color:var(--accent)}
        .jc-story{padding:130px 0;display:grid;grid-template-columns:.9fr 1.1fr;gap:100px}.jc-section-intro h2{font-size:clamp(42px,5vw,68px);line-height:.98;letter-spacing:-.065em;margin:20px 0;max-width:600px}.jc-section-intro>p,.jc-story-copy p{font-size:15px;line-height:1.8;color:var(--muted)}.jc-story-copy{padding-top:25px}.jc-story-copy p+p{margin-top:24px}
        .jc-showcase{display:grid;grid-template-columns:1.05fr .95fr;min-height:570px;background:#111;color:#f3efe6}.jc-showcase-image img{width:100%;height:100%;min-height:570px;object-fit:cover}.jc-showcase-copy{padding:90px clamp(35px,7vw,110px);align-self:center}.jc-showcase-copy h2{font-size:clamp(48px,6vw,80px);line-height:.92;letter-spacing:-.07em;margin:25px 0}.jc-showcase-copy h2 em{color:#dda14d}.jc-showcase-copy p{color:#c5c1b7;line-height:1.8;font-size:14px;max-width:430px}.jc-palette{display:flex;align-items:center;gap:8px;margin-top:45px;flex-wrap:wrap}.jc-palette i{width:24px;height:24px;border-radius:50%;background:#f3efe6}.jc-palette i:nth-child(2){background:#191815}.jc-palette i:nth-child(3){background:#e85b39}.jc-palette i:nth-child(4){background:#dda14d}.jc-palette span{font-size:8px;letter-spacing:.1em;color:#aaa;margin-left:8px}
        .jc-features{padding:130px 0}.jc-feature-list{border-top:1px solid var(--line);margin-top:55px}.jc-feature-list article{display:grid;grid-template-columns:55px 1fr 30px;gap:22px;align-items:center;padding:25px 0;border-bottom:1px solid var(--line)}.jc-feature-list article>span{font-size:10px;color:var(--soft)}.jc-feature-list h3{font-size:23px;margin:0 0 7px;letter-spacing:-.04em}.jc-feature-list p{font-size:13px;color:var(--muted);margin:0;line-height:1.6;max-width:650px}.jc-feature-list svg{color:var(--accent);width:20px}
        .jc-evidence{padding:20px 0 130px}.jc-evidence-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:55px}.jc-evidence-grid article{border-top:1px solid var(--line);padding-top:14px}.jc-evidence-image{height:245px;position:relative;overflow:hidden;background:var(--surface)}.jc-evidence-image img{width:100%;height:100%;object-fit:cover;transition:transform .5s}.jc-evidence-grid article:hover img{transform:scale(1.04)}.jc-evidence-image>span{position:absolute;left:12px;bottom:12px;background:#171714;color:#fff;padding:7px 9px;font-size:8px;letter-spacing:.1em}.jc-evidence-caption{display:grid;grid-template-columns:30px 1fr;gap:10px;padding-top:17px}.jc-evidence-caption>span{font-size:10px;color:var(--accent)}.jc-evidence-caption h3{font-size:18px;margin:0 0 7px}.jc-evidence-caption p{font-size:12px;color:var(--muted);line-height:1.6;margin:0}
        .jc-mobile-note{display:grid;grid-template-columns: .75fr 1.25fr;gap:100px;align-items:center;margin-top:130px;padding:70px 9%;background:var(--surface)}.jc-phone{width:210px;height:400px;border:7px solid #171714;border-radius:28px;background:#f3efe6;color:#171714;display:flex;flex-direction:column;overflow:hidden;padding:15px;box-shadow:0 25px 50px #0002;justify-self:center}.jc-phone-top{width:55px;height:8px;border-radius:8px;background:#171714;margin:0 auto 15px}.jc-phone img{width:100%;height:135px;object-fit:cover}.jc-phone b{font-family:Georgia,serif;font-size:30px;line-height:.9;letter-spacing:-.06em;margin-top:16px}.jc-phone b em{color:#e85b39}.jc-phone small{font-size:7px;background:#171714;color:#fff;padding:9px;margin-top:15px;align-self:start}.jc-mobile-note h2{font-size:clamp(42px,5vw,65px);line-height:.95;letter-spacing:-.06em;margin:20px 0}.jc-mobile-note p{font-size:14px;line-height:1.8;color:var(--muted);max-width:460px}
        .jc-build{background:var(--surface);padding:110px 0}.jc-build-grid{display:grid;grid-template-columns:1fr 1fr;gap:100px}.jc-build h2,.jc-scope h2{font-size:clamp(44px,5vw,68px);line-height:.95;letter-spacing:-.06em;margin:20px 0}.jc-build-grid>div:first-child p{font-size:14px;color:var(--muted);line-height:1.8;max-width:470px}.jc-build-points{border-top:1px solid var(--line)}.jc-build-points div{display:grid;grid-template-columns:35px 1fr;gap:4px 15px;padding:17px 0;border-bottom:1px solid var(--line)}.jc-build-points span{grid-row:span 2;color:var(--accent);font-size:10px}.jc-build-points b{font-size:14px}.jc-build-points small{font-size:11px;color:var(--muted)}
        .jc-scope{padding:120px 0}.jc-scope h2{max-width:760px}.jc-scope-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;margin-top:30px}.jc-scope-grid p{font-size:13px;line-height:1.8;color:var(--muted);margin:0}
        .jc-footer{padding:65px 0 90px;border-top:1px solid var(--line);display:flex;justify-content:space-between;align-items:end;gap:40px}.jc-footer h2{font-size:clamp(44px,6vw,76px);line-height:.92;letter-spacing:-.07em;margin:20px 0 0}.jc-footer-actions{display:flex;flex-direction:column;align-items:flex-start;gap:20px}
        @media(max-width:800px){.jc-shell{width:calc(100% - 32px)}.jc-nav{padding:0 16px}.jc-nav-right>span{display:none}.jc-hero{padding:45px 0 70px}.jc-hero-grid{grid-template-columns:1fr;gap:40px;padding-top:45px}.jc-title-block h1{font-size:clamp(60px,16vw,88px)}.jc-intro{font-size:15px}.jc-facts{margin-top:40px}.jc-hero-visual{padding:0 8px 20px}.jc-browser-content{padding:10px;min-height:280px}.jc-mini-nav span{display:none}.jc-mini-hero{gap:8px;padding:20px 0}.jc-mini-hero img{height:160px}.jc-mini-hero strong{font-size:clamp(24px,7vw,34px)}.jc-mini-hero p{font-size:7px}.jc-visual-stamp{right:-5px}.jc-strip .jc-shell{gap:14px;overflow:auto;white-space:nowrap;font-size:8px}.jc-story{padding:85px 0;grid-template-columns:1fr;gap:10px}.jc-story-copy{padding-top:0}.jc-showcase{grid-template-columns:1fr}.jc-showcase-image img{min-height:320px;height:320px}.jc-showcase-copy{padding:55px 24px 65px}.jc-features{padding:90px 0}.jc-feature-list article{grid-template-columns:30px 1fr 20px;gap:12px}.jc-feature-list h3{font-size:19px}.jc-evidence{padding-bottom:90px}.jc-evidence-grid{grid-template-columns:1fr;gap:28px}.jc-evidence-image{height:250px}.jc-mobile-note{grid-template-columns:1fr;gap:45px;margin-top:80px;padding:50px 25px}.jc-phone{width:190px;height:365px}.jc-build{padding:80px 0}.jc-build-grid,.jc-scope-grid{grid-template-columns:1fr;gap:40px}.jc-scope{padding:85px 0}.jc-footer{display:block;padding:55px 0 70px}.jc-footer-actions{margin-top:35px}.jc-back{font-size:0}.jc-back svg{width:18px;height:18px}}
      `}</style>
    </main>
  );
}
