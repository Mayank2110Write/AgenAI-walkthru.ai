import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10 bg-n-8 text-white">
      <div className="container flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        
        {/* Left: Branding/Logo */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-bold">Walkthru.AI</h2>
          <p className="text-sm text-gray-400">
            AI-Powered Walkthroughs at a click
          </p>
        </div>

        {/* Center: Navigation Links */}
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <a href="/about" className="hover:text-gray-300 transition">
              About
            </a>
          </li>
          <li>
            <a href="/roadmap" className="hover:text-gray-300 transition">
              Roadmap
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-300 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Right: Social Media Icons */}
        <ul className="flex gap-5">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full transition hover:bg-gray-600"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>

      {/* Bottom: Copyright */}
      <div className="mt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AgenAI. All rights reserved.
      </div>
    </Section>
  );
};

export default Footer;
