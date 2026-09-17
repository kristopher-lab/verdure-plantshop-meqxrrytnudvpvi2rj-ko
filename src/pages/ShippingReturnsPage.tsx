import { Link } from 'react-router-dom';
import { StaticPage } from '@/components/StaticPage';
export default function ShippingReturnsPage() {
  return (
    <StaticPage title="Shipping & Returns" subtitle="How we get plants to your door, and what happens if something goes wrong.">
      <h2>Shipping</h2>
      <p>
        Orders are packed and shipped within 1-2 business days. Most orders arrive within 3-7 business days
        depending on your location. Live plants ship Monday through Wednesday to avoid weekend transit delays
        that could stress your new plant.
      </p>
      <ul>
        <li>Standard Shipping: $6.99 flat rate, 3-7 business days</li>
        <li>Express Shipping: $14.99 flat rate, 1-2 business days</li>
        <li>Free standard shipping on orders over $75</li>
      </ul>
      <h2>Our 14-Day Care Guarantee</h2>
      <p>
        If your plant arrives damaged, or shows signs of shipping-related stress within 14 days of delivery,
        we'll replace it or refund you in full. Just contact us with your order number and a photo of the
        plant.
      </p>
      <h2>Returns</h2>
      <p>
        Because live plants are perishable, we're unable to accept returns for change-of-mind purchases.
        Non-plant items (pots, accessories, plant food) can be returned unused within 30 days of delivery for
        a full refund, minus original shipping costs.
      </p>
      <h2>Questions?</h2>
      <p>
        Reach out any time through our <Link to="/contact">Contact page</Link> and we'll get back to you within 1-2
        business days.
      </p>
    </StaticPage>
  );
}
