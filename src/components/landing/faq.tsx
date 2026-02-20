import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How long does server setup take?',
    answer:
      'Our systems are fully automated. Your server will be provisioned and ready to use in under 60 seconds after your payment is confirmed.',
  },
  {
    question: 'Do you offer DDoS protection?',
    answer:
      'Yes, absolutely. All our services come with enterprise-grade DDoS protection (17+ Tbps) to keep your server online and safe from attacks, free of charge.',
  },
  {
    question: 'Can I upload my own custom modpacks?',
    answer:
      'Of course. You get full FTP access to your server, allowing you to upload any custom modpacks, plugins, or server files you want.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept a wide range of payment methods, including all major Credit/Debit Cards, PayPal, and various cryptocurrencies.',
  },
];

export default function Faq() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Have questions? We have answers. If you can&apos;t find what you&apos;re looking for, feel free to contact our
            support team.
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/40">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
