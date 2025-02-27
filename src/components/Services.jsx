import Section from "./Section";
import Heading from "./Heading";
import { service1Video, service2Video, service3Video, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="How Walkthru.AI Works?"
          text="Seamlessly guide users with dynamic, real-time AI-generated walkthroughs."
        />

        <div className="relative">
          {/* FIRST VIDEO (service1.mp4) */}
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <video
                className="w-[800px] h-[730px] object-cover md:object-right"
                autoPlay
                loop
                muted
              >
                <source src={service1Video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">3 Step Integration</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Extend the walkthrough functionality with our easy-to-use API and SDK.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            {/* SECOND VIDEO (service2.mp4) */}
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <video
                  className="h-[750px] w-[630px] object-cover"
                  autoPlay
                  loop
                  muted
                >
                  <source src={service2Video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Platform Usage Analytics</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Capture user inputs and sync with AI to deliver personalized AI agent experiences.
                </p>
              </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Import your DOM Documents</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Import UI documents from custom data sources like docs or PDFs to get your walkthru.ai trained.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt="AI Feature" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* THIRD VIDEO (service3.mp4) */}
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <video
                  className="w-[520px] h-[400px] object-cover"
                  autoPlay
                  loop
                  muted
                >
                  <source src={service3Video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
