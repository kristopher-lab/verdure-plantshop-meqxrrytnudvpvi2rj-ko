import { StaticPage } from '@/components/StaticPage';
export default function TermsPage() {
  return (
    <StaticPage title="Terms of Service" subtitle="Last updated: September 2026">
      <p>
        By using this site, you agree to the following terms. This is a demo storefront used to showcase
        e-commerce functionality; the terms below are representative of what a real plant shop would publish.
      </p>
      <h2>Orders & Payment</h2>
      <p>
        All prices are listed in USD and are subject to change without notice. Orders are not confirmed
        until payment has been successfully processed.
      </p>
      <h2>Product Availability</h2>
      <p>
        Because our plants come from living inventory, availability can change quickly. If an item becomes
        unavailable after you order, we'll contact you with a substitution option or a full refund for that
        item.
      </p>
      <h2>Limitation of Liability</h2>
      <p>
        Verdure is not liable for indirect or consequential damages arising from the use of purchased
        products, including plant care outcomes after delivery.
      </p>
      <h2>Changes to These Terms</h2>
      <p>
        We may update these terms from time to time. Continued use of the site after changes constitutes
        acceptance of the updated terms.
      </p>
    </StaticPage>
  );
}
