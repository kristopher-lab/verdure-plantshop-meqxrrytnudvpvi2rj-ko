import { Leaf, Truck, HeartHandshake, Sprout } from 'lucide-react';
import { StaticPage } from '@/components/StaticPage';
const values = [
  {
    icon: Sprout,
    title: 'Sustainably Grown',
    description: 'Every plant is sourced from growers who prioritize sustainable, pesticide-light cultivation practices.',
  },
  {
    icon: Truck,
    title: 'Careful Delivery',
    description: "Plants are fragile travelers. We've refined our packaging over hundreds of shipments so yours arrives happy and healthy.",
  },
  {
    icon: HeartHandshake,
    title: 'Real Plant Care Support',
    description: "Not sure why your fiddle leaf fig is dropping leaves? Our team (and growing plant-care guides) are here to help.",
  },
];
export default function AboutPage() {
  return (
    <StaticPage
      title="Our Story"
      subtitle="Verdure started with a single overwatered pothos and a stubborn refusal to give up on it."
    >
      <p>
        Verdure was founded in 2021 by a small group of plant enthusiasts who were tired of choosing between
        "cheap and unhealthy" or "beautiful and overpriced" houseplants. We believed there was room for a
        plant shop that treated sourcing, packaging, and customer support as seriously as the plants
        themselves.
      </p>
      <p>
        Today, we work directly with a network of independent growers across North America to bring you
        healthy, well-rooted plants &mdash; from low-maintenance snake plants to show-stopping fiddle leaf figs
        &mdash; without the markup of big-box garden centers.
      </p>
      <h2>What We Stand For</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {values.map(({ icon: Icon, title, description }) => (
          <div key={title} className="rounded-lg border bg-card p-5">
            <Icon className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-foreground">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
      <h2>Where We're Headed</h2>
      <p>
        We're just getting started. Whether that means expanding our plant-care content, growing our
        network of local growers, or simply getting better at answering "is this plant pet-friendly?" &mdash;
        we're building Verdure one leaf at a time.
      </p>
      <div className="flex items-center gap-2 text-primary font-medium">
        <Leaf className="h-5 w-5" />
        <span>Thanks for growing with us.</span>
      </div>
    </StaticPage>
  );
}
