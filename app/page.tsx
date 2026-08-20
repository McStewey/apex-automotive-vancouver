"use client";

import { FormEvent, useState } from "react";

const ecosystem = [
  ["01", "Independent repair shops", "Twenty-five private, two-bay businesses operated by pairs of master mechanics."],
  ["02", "EV & sensor labs", "Dedicated high-voltage, ADAS, calibration, and advanced diagnostics capabilities."],
  ["03", "Rapid service lanes", "Two purpose-built oil-change lines designed for high-throughput service."],
  ["04", "Parts & tire center", "In-house parts logistics, tire equipment, and shared specialty inventory."],
];

const support = [
  ["Business formation", "Company registration and the operational groundwork to open with confidence."],
  ["Bookkeeping & tax", "Optional certified bookkeeping, CPA preparation, and filing support."],
  ["Parts logistics", "Purchasing, delivery coordination, returns, and warranty processing handled on-site."],
  ["Customer acquisition", "Shared marketing infrastructure built to help participating shops grow."],
  ["Front desk operations", "Optional intake, payment processing, insurance coordination, and customer support."],
  ["CRM & communications", "Tools for estimates, approvals, service updates, follow-up, and retention."],
  ["Facility services", "Janitorial support, waste-fluid processing, shop supplies, and site upkeep."],
  ["Connected infrastructure", "High-speed Wi-Fi, phone service, shared systems, and fabrication access."],
];

export default function Home() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [menuOpen, setMenuOpen] = useState(false);

  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/inquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!response.ok) throw new Error("Unable to submit");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Apex Automotive home"><img src="/apex-logo.png" alt="" /><span>APEX <b>AUTOMOTIVE</b></span></a>
        <button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>MENU</button>
        <nav className={menuOpen ? "open" : ""} aria-label="Primary navigation" onClick={() => setMenuOpen(false)}><a href="/facility">Facility</a><a href="/specialty">Specialty shops</a><a href="/parts">Parts & tire</a><a href="/support">Operator support</a><a href="/economics">Economics</a></nav>
        <a className="header-cta" href="#apply">Lease a shop <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Vancouver, Washington · Founding mechanic applications</p>
          <h1>Own the work.<br /><em>Build the business.</em></h1>
          <p className="lede">A fully equipped automotive campus built for master mechanics ready to operate their own two-bay shop—with the infrastructure, systems, and support already in place.</p>
          <div className="hero-actions"><a className="primary-cta" href="#apply">Explore shop ownership <span>↗</span></a><a className="text-link" href="#model">See how it works <span>↓</span></a></div>
        </div>
        <div className="hero-visual photo-visual" aria-label="Apex Automotive facility concept">
          <img src="/facility-hero.png" alt="Modern Apex Automotive service campus with rows of professional repair bays" />
          <div className="photo-label"><span>THE FACILITY</span><strong>Built for serious work.</strong></div>
          <div className="corner-badge"><span>43K</span><small>SQ. FT.<br/>FACILITY</small></div>
        </div>
        <div className="hero-stats"><div><strong>25</strong><span>Independent<br/>shops</span></div><div><strong>50</strong><span>Fully equipped<br/>service bays</span></div><div><strong>02</strong><span>Owner-operators<br/>per shop</span></div><div><strong>01</strong><span>Shared automotive<br/>ecosystem</span></div></div>
      </section>

      <section className="intro" id="model">
        <p className="section-kicker">A new path to independence</p><h2>Not a job. Not a franchise.<br/><span>Your shop—without starting from zero.</span></h2>
        <div className="model-grid">
          <article><b>01</b><h3>Bring your expertise</h3><p>You and a trusted mechanic partner bring your tools, reputation, and drive to build something of your own.</p></article>
          <article className="orange-card"><b>02</b><h3>Step into two bays</h3><p>Operate a dedicated, professional shop with lifts, systems, shared infrastructure, and room to perform.</p></article>
          <article><b>03</b><h3>Own the relationship</h3><p>Build your customer base and business identity while Apex supports the operational work behind the work.</p></article>
        </div>
      </section>

      <section className="manifesto">
        <img className="manifesto-photo" src="/operator-partners.png" alt="Two experienced automotive shop owner-operators"/><div><p className="section-kicker">Made for the people who make it run</p><blockquote>“Master mechanics should have a credible path from turning wrenches to building equity in a business of their own.”</blockquote><p className="small-copy">Apex Automotive brings independent operators together under one advanced roof—without erasing the identity, standards, or ambition that make each shop valuable.</p></div>
      </section>

      <section className="facility" id="facility">
        <div className="section-head"><div><p className="section-kicker">One building. A complete ecosystem.</p><h2>More capability<br/>under one roof.</h2></div><p>Designed as a modern automotive campus, not a row of disconnected garages. Shared resources create speed, capability, and a stronger experience for every operator.</p></div>
        <div className="ecosystem-grid">{ecosystem.map(([n,title,copy]) => <article key={n}><span>{n}</span><div className={`eco-icon icon-${n}`} aria-hidden="true"><i/><i/><i/></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <div className="facility-strip"><div><small>LOCATION</small><strong>2300 E 1st St<br/>Vancouver, WA</strong></div><div><small>OPERATING HOURS</small><strong>Monday–Saturday<br/>7:00 AM–7:00 PM</strong></div><div><small>FLEET CAPABILITY</small><strong>Optional 24/7<br/>operator access</strong></div></div>
      </section>

      <section className="services" id="services">
        <div className="services-lead"><p className="section-kicker">Optional operations support</p><h2>Stay focused<br/>on the repair.</h2><p>Apex can take on the administrative and facility burdens that keep talented mechanics from growing. Choose the services that fit your business.</p><a className="dark-link" href="#apply">Discuss your shop plan <span>↗</span></a></div>
        <div className="service-list">{support.map(([title,copy],i) => <article key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{copy}</p></div><b>＋</b></article>)}</div>
      </section>

      <section className="economics" id="economics">
        <div className="economics-number"><small>STANDARD CUSTOMER LABOR RATE</small><strong>$135<span>/HR</span></strong><p>Built around transparent, standardized billable hours.</p></div>
        <div className="economics-copy"><p className="section-kicker">A model that rewards the work</p><h2>Build income around skill—not clocked hours.</h2><p>Operators run independent businesses inside the Apex campus. The model is designed so efficient, high-quality work and long-term customer relationships create meaningful upside.</p><ul><li><span>✓</span> Independent company ownership</li><li><span>✓</span> Two owner-operators per shop</li><li><span>✓</span> Standardized billable-hour framework</li><li><span>✓</span> Participation in parts revenue</li></ul><p className="fine-print">Final lease, fee, operating, and compensation terms are provided during qualification and documented in the applicable agreements.</p></div>
      </section>

      <section className="tools"><div><p className="section-kicker">Arrive ready to work</p><h2>Your tools.<br/>Your standards.<br/><span>The rest is here.</span></h2></div><div className="toolbox" aria-hidden="true"><i/><i/><i/><i/><strong>APEX</strong></div></section>

      <section className="qualification">
        <p className="section-kicker">Who we’re looking for</p><div className="qualification-grid"><h2>Expert mechanics.<br/>Future owners.</h2><div><p>Apex is assembling a founding group of operators who care deeply about technical excellence, customer trust, and building durable local businesses.</p><ul><li>Master-level diagnostic and repair experience</li><li>A trusted operating partner</li><li>Commitment to professional standards</li><li>Readiness to lead customer relationships</li><li>Drive to build an independent company</li></ul></div></div>
      </section>

      <section className="apply" id="apply">
        <div className="apply-copy"><p className="section-kicker">Founding shop applications</p><h2>Ready to own<br/>what you build?</h2><p>Tell us about your experience and the shop you want to create. Our team will follow up to discuss fit, availability, and next steps.</p><div className="availability"><span>●</span><div><strong>APPLICATIONS OPEN</strong><small>25 founding shops · Limited availability</small></div></div></div>
        <form onSubmit={submitInquiry}>
          <div className="form-grid"><label>Full name<input name="name" required autoComplete="name" placeholder="Your name" /></label><label>Email address<input name="email" type="email" required autoComplete="email" placeholder="you@email.com" /></label><label>Phone number<input name="phone" type="tel" required autoComplete="tel" placeholder="(555) 000-0000" /></label><label>Current city<input name="city" required autoComplete="address-level2" placeholder="City, State" /></label><label>Years of experience<select name="experience" required defaultValue=""><option value="" disabled>Select experience</option><option>5–9 years</option><option>10–14 years</option><option>15–19 years</option><option>20+ years</option></select></label><label>Target timeline<select name="timeline" required defaultValue=""><option value="" disabled>Select timeline</option><option>As soon as available</option><option>Within 3 months</option><option>3–6 months</option><option>6–12 months</option></select></label></div>
          <label>Certifications and specialties<input name="specialties" placeholder="ASE, EV, diesel, diagnostics, fleet…" /></label><label>Tell us about the business you want to build<textarea name="message" required rows={4} placeholder="Your background, operating partner, ideal customer, and goals…" /></label>
          <label className="consent"><input type="checkbox" name="consent" required value="yes"/><span>I agree to be contacted by Apex Automotive about shop leasing opportunities.</span></label>
          <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Submitting…" : "Submit your interest"}<span>↗</span></button>
          <div className="form-status" aria-live="polite">{status === "sent" && "Thank you. Your application has been received—we’ll be in touch."}{status === "error" && "We couldn’t submit the form. Please try again or email us directly."}</div>
        </form>
      </section>

      <section className="faq"><p className="section-kicker">Common questions</p><h2>Before you apply.</h2><div className="faq-list"><details><summary>Is this employment with Apex Automotive?<span>＋</span></summary><p>No. Each two-bay shop is intended to be leased to and operated by an independent company. Final structure and requirements are covered during qualification.</p></details><details><summary>What equipment do mechanics need to bring?<span>＋</span></summary><p>Operators bring their personal tools and toolboxes. Apex provides the core facility, shared infrastructure, and equipment described during the leasing process.</p></details><details><summary>Do I need an operating partner?<span>＋</span></summary><p>The planned model pairs two owner-operators in each two-bay shop. If you do not yet have a partner, tell us during your application.</p></details><details><summary>Can a shop specialize in fleet or advanced diagnostics?<span>＋</span></summary><p>Yes. The campus is designed to support specialist businesses, including fleet work, EV service, sensors, ADAS, diagnostics, tires, and rapid maintenance.</p></details></div></section>

      <footer><a className="footer-brand" href="#top"><img src="/apex-logo.png" alt="Apex Automotive"/><span>Built for mechanics.<br/><b>Designed for owners.</b></span></a><div><small>VISIT</small><p>2300 E 1st St<br/>Vancouver, WA</p></div><div><small>EXPLORE</small><a href="#model">The model</a><a href="#facility">Facility</a><a href="#services">Support</a></div><div><small>START</small><a href="#apply">Apply for a shop ↗</a></div><p className="copyright">© 2026 Apex Automotive. All rights reserved.</p></footer>
    </main>
  );
}
