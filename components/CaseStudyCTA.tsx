import Link from 'next/link';

export default function CaseStudyCTA() {
  return (
    <section className="block block--ruled">
      <div className="container">
        <div className="cta-block">
          <h2 className="heading title">Like what you see?</h2>
          <p className="body muted">
            Let&apos;s talk about how I can bring this same impact to your team.
          </p>
          <div className="actions">
            <Link href="/contact" className="ds-btn ds-btn--primary">Get In Touch →</Link>
            <Link href="/projects" className="ds-btn ds-btn--secondary">View All Projects</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
