import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Launch UI easy to customise?",
    answer:
      "Yes, Launch UI is built with customization in mind. All components are built using Tailwind CSS and can be easily modified to match your brand.",
  },
  {
    question: "Is Launch UI optimized for search engines?",
    answer:
      "Yes, Launch UI follows SEO best practices and uses semantic HTML to ensure good search engine visibility.",
  },
  {
    question: "How does Launch UI compare to no-code tools?",
    answer:
      "Launch UI provides more flexibility and control than no-code tools while maintaining ease of use.",
  },
  {
    question: "Why not just coding a website yourself?",
    answer:
      "Launch UI saves development time by providing pre-built components and best practices out of the box.",
  },
  {
    question: "Can I get a refund if I don't like it?",
    answer:
      "Yes, we offer a 30-day money-back guarantee with no questions asked.",
  },
  {
    question: "What features will be added in the future?",
    answer:
      "We're constantly adding new components and features based on user feedback and needs.",
  },
];

export function FAQ() {
  return (
    <section className="bg-zinc-950 flex w-full flex-col items-center justify-center px-8 py-20 max-md:max-w-full max-md:px-5">
      <div className="w-[720px] max-w-[720px] max-md:max-w-full">
        <h2 className="text-neutral-50 text-center text-5xl font-semibold leading-none max-md:max-w-full max-md:text-[40px]">
          Questions and Answers
        </h2>

        <Accordion
          type="single"
          collapsible
          className="w-full text-base text-neutral-50 font-medium mt-12 max-md:max-w-full max-md:mt-10"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b-[rgba(255,255,255,0.1)]"
            >
              <AccordionTrigger className="hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
