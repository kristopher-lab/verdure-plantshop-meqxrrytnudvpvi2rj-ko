import { Link } from 'react-router-dom';
import { StaticPage } from '@/components/StaticPage';
export default function PrivacyPolicyPage() {
  return (
    <StaticPage title="Privacy Policy" subtitle="Last updated: September 2026">
      <p>
        This is a demo storefront built to showcase what a modern e-commerce experience on Cloudflare's
        platform can look like. No real personal data is sold or shared with third parties. The summary
        below reflects the kind of policy a real plant shop built on Verdure's platform would publish.
      </p>
      <h2>Information We Collect</h2>
      <ul>
        <li>Contact details you provide voluntarily (name, email) via checkout or our contact form</li>
        <li>Order history and cart contents, used to fulfill purchases and provide support</li>
        <li>Basic usage analytics to understand which plants and pages are most popular</li>
      </ul>
      <h2>How We Use Information</h2>
      <p>
        Information is used solely to process orders, respond to support requests, and improve the shopping
        experience. We do not sell customer data to third parties.
      </p>
      <h2>Data Retention</h2>
      <p>
        Order and contact records are retained only as long as necessary to provide support and meet
        accounting obligations.
      </p>
      <h2>Your Choices</h2>
      <p>
        You can request a copy of your data or ask us to delete it at any time via our{' '}
        <Link to="/contact">Contact page</Link>.
      </p>
    </StaticPage>
  );
}
