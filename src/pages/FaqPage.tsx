import { StaticPage } from '@/components/StaticPage';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
const faqs = [
  {
    question: 'How do I know which plant is right for my space?',
    answer: "Check the light and care tags on each product (Full Sun, Partial Shade, Low Light) and use the Features filter on our shop page. If you're still not sure, reach out through our Contact page and we're happy to help you pick.",
  },
  {
    question: 'How are plants packaged for shipping?',
    answer: 'Every plant ships in a form-fitted box with a nursery pot secured in place, moisture-retaining packaging around the soil, and breathing room for the foliage. Larger plants may ship in specialized plant boxes.',
  },
  {
    question: 'What if my plant arrives damaged?',
    answer: "We stand behind every shipment. If your plant arrives damaged or unhealthy, contact us within 3 days with a photo and we'll send a replacement or issue a full refund \u2014 see our Shipping & Returns page for details.",
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Currently we only ship within the continental United States and Canada due to agricultural import regulations on live plants.',
  },
  {
    question: 'Are your plants pet-friendly?',
    answer: 'Some are! Look for the "Pet-Friendly" tag on product listings, or filter by it in the Features section of the shop page. When in doubt, double-check with the ASPCA\u2019s toxic plant list before bringing a new plant home.',
  },
  {
    question: 'Can I return a plant if I change my mind?',
    answer: 'Because plants are perishable, we\u2019re unable to accept returns for buyer\u2019s remorse, but we do offer a 14-day care guarantee against arrival damage or defects. See Shipping & Returns for the full policy.',
  },
];
export default function FaqPage() {
  return (
    <StaticPage
      title="Frequently Asked Questions"
      subtitle="Answers to the questions we hear most from fellow plant parents."
    >
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-left text-lg">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </StaticPage>
  );
}
