import { DetailPage } from "../components/SiteChrome";

export default function Pricing(){return <DetailPage eyebrow="Transparent pricing model" title="Know how the work pays." intro="A straightforward framework designed to reward expertise, productive workflow, and long-term customer relationships." image="/operator-partners.png" imageAlt="Independent automotive shop owner-operators">
  <section className="pricing-overview">
    <div className="price-lead"><small>STANDARD CUSTOMER LABOR RATE</small><strong>$135<em>/billable hour</em></strong><p>Customer labor is priced using standardized billable times for each repair—not simply the number of clock hours a technician spends on the job.</p></div>
    <div className="price-split"><h2>How each labor hour is allocated</h2><div><span><b>$100</b> Operator business share</span><span><b>$35</b> Apex platform share</span></div><p>The operator company retains $100 of each completed billable labor hour. Apex retains $35 to support the shared facility and operating platform. Final terms are documented in the applicable agreements.</p></div>
  </section>
  <section className="pricing-details">
    <article><span>01</span><h2>Efficiency upside</h2><p>Because repairs use standardized billable hours, skilled operators keep the benefit when they complete excellent work efficiently.</p><div className="example"><small>ILLUSTRATIVE REPAIR</small><p><b>3.0</b> standardized billable hours × <b>$100</b> operator share = <strong>$300</strong> to the operator business—even if expertise allows the work to be completed in two actual hours.</p></div></article>
    <article><span>02</span><h2>Parts participation</h2><p>Mechanic operators receive <strong>10% of the list price of parts</strong> used in their completed repairs, creating participation beyond labor revenue.</p></article>
    <article><span>03</span><h2>Repair supplies fee</h2><p>Each repair includes a <strong>$20 shop-supplies fee</strong> supporting items such as rags, gloves, cleaning materials, spill cleanup, uniforms, and waste disposal.</p><div className="mini-split"><span>$10 <small>OPERATOR</small></span><span>$10 <small>APEX</small></span></div></article>
    <article><span>04</span><h2>Independent ownership</h2><p>Each two-bay location is operated by an independent company with two owner-operators. Operators build their own customer relationships and business value inside the Apex ecosystem.</p></article>
  </section>
  <section className="pricing-disclosure"><h2>What is provided during qualification</h2><p>Lease pricing, optional-service costs, deposits, payment schedules, insurance requirements, and complete operating terms are provided directly to qualified applicants. They are not yet included here because the current brief does not establish those figures.</p><a className="primary-cta" href="/#apply">Request full terms <span>↗</span></a></section>
</DetailPage>}
