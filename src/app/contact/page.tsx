"use client";
import React from "react";
import Contact from "./Contact";
import FeatureSection from "@/components/shared/FeatureSection";
import SectionHeader from "@/components/shared/SectionHeader";

const ContactPage = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto flex min-h-screen flex-col overflow-hidden">
      <SectionHeader label="Contact" url="/contact" />
      <div className="mt-28">
        <Contact />
        <div className="pb-8">
          <FeatureSection />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
