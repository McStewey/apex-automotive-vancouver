import { ReactNode } from "react";

export function SubHeader() {
  return <header className="site-header sub-header"><a className="brand" href="/"><img src="/apex-logo.png" alt=""/><span>APEX <b>AUTOMOTIVE</b></span></a><nav aria-label="Primary navigation"><a href="/">Home</a><a href="/facility">Facility</a><a href="/specialty">Specialty shops</a><a href="/parts">Parts & tire</a><a href="/support">Support</a><a href="/pricing">Pricing</a></nav><a className="header-cta" href="/#apply">Apply <span>↗</span></a></header>;
}

export function DetailPage({ eyebrow, title, intro, image, imageAlt, children }: { eyebrow:string; title:string; intro:string; image:string; imageAlt:string; children:ReactNode }) {
  return <main><SubHeader/><section className="detail-hero"><img src={image} alt={imageAlt}/><div><p className="eyebrow"><span/>{eyebrow}</p><h1>{title}</h1><p>{intro}</p></div></section>{children}<section className="detail-cta"><p className="section-kicker">Founding shop applications</p><h2>Build your business<br/>inside Apex.</h2><a className="primary-cta" href="/#apply">Start your application <span>↗</span></a></section></main>;
}

export function FeatureGrid({ items }: { items:Array<[string,string,string]> }) {
  return <section className="detail-grid">{items.map(([n,t,c])=><article key={n}><span>{n}</span><h2>{t}</h2><p>{c}</p></article>)}</section>;
}
