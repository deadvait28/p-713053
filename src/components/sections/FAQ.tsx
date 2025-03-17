
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What apps can I connect to The Relay?",
    answer:
      "The Relay can connect to a wide range of productivity and communication apps including Gmail, Slack, Microsoft Office, Google Workspace, Asana, Trello, and many more.",
  },
  {
    question: "Do I need technical skills to set up The Relay?",
    answer:
      "No, The Relay is designed to be user-friendly and requires no coding knowledge. The setup process is intuitive and guided.",
  },
  {
    question: "Is The Relay secure?",
    answer:
      "Yes, security is our top priority. The Relay uses industry-standard encryption and authentication protocols to ensure your data remains private and protected.",
  },
  {
    question: "What exactly can I automate with The Relay?",
    answer:
      "You can automate emails, messages, calendar events, task assignments, file sharing, report generation, and many more routine tasks across your connected apps.",
  },
  {
    question: "Which platforms is The Relay on?",
    answer:
      "The Relay is available as a mobile app for iOS and Android, and as a web application accessible from any modern browser.",
  },
  {
    question: "What features will be added in the future?",
    answer:
      "We're constantly expanding our capabilities based on user feedback. Upcoming features include advanced workflow automation, AI-powered task prioritization, and integration with more specialized business tools.",
  },
];

export function FAQ() {
  return (
    <section className="bg-zinc-950 flex w-full flex-col items-center justify-center px-8 py-20 max-md:px-5">
      <div className="w-full max-w-3xl">
        <h2 className="text-neutral-50 text-center text-4xl font-semibold leading-none mb-12">
          Answers for the curious
        </h2>

        <Accordion
          type="single"
          collapsible
          className="w-full text-base text-neutral-50"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b-[rgba(255,255,255,0.1)]"
            >
              <AccordionTrigger className="hover:no-underline py-4 font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
