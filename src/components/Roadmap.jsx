import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { Gradient } from "./design/Roadmap";

const roadmap = [
  {
    id: 1,
    date: "Q1 2024",
    title: "Vision & Strategy Alignment",
    text: "Defined the core vision of Walkthru.ai, aligning AI-powered automation with seamless user experience strategies.",
    status: "completed",
  },
  {
    id: 2,
    date: "Q2 2024",
    title: "AI Knowledge Engine Development",
    text: "Built a foundational AI system capable of learning from UI elements, allowing Walkthru.ai to generate dynamic, adaptive walkthroughs tailored to individual needs.",
    status: "completed",
  },
  {
    id: 3,
    date: "Q3 2024",
    title: "Scalability & Performance Boost",
    text: "Optimized platform infrastructure for speed, efficiency, and multi-platform compatibility.",
    status: "completed",
  },
  {
    id: 4,
    date: "Q4 2024",
    title: "User Experience Overhaul",
    text: "Redesigning the Walkthru.ai interface to ensure an intuitive, frictionless experience. Enhancing customization options to allow businesses to personalize walkthroughs effortlessly.",
    status: "in progress",
  },
  {
    id: 5,
    date: "Q1 2025",
    title: "Enterprise-Ready Expansion",
    text: "Introducing advanced security, team collaboration tools, and deeper integrations with enterprise software, making Walkthru.ai a go-to solution for large-scale user onboarding.",
    status: "upcoming",
  },
  {
    id: 6,
    date: "Q2 2025",
    title: "AI-Powered Personalization & Automation",
    text: "Developing next-generation AI personalization, enabling Walkthru.ai to automatically adjust walkthroughs based on user behavior, intent, and past interactions for an unparalleled guided experience.",
    status: "upcoming",
  },
];

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Our Journey" title="Roadmap to AI-Powered Walkthroughs" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const statusLabel =
            item.status === "completed"
              ? "Completed"
              : item.status === "in progress"
              ? "In Progress"
              : "Upcoming";

          return (
            <div
              className={`p-6 border rounded-lg ${
                item.status === "completed"
                  ? "border-green-500"
                  : item.status === "in progress"
                  ? "border-yellow-500"
                  : "border-gray-500"
              }`}
              key={item.id}
            >
              <div className="flex items-center justify-between mb-4">
                <Tagline>{item.date}</Tagline>
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    item.status === "completed"
                      ? "bg-green-500 text-white"
                      : item.status === "in progress"
                      ? "bg-yellow-500 text-black"
                      : "bg-gray-500 text-white"
                  }`}
                >
                  {statusLabel}
                </span>
              </div>

              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-300">{item.text}</p>
            </div>
          );
        })}

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">Explore Our Roadmap</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
