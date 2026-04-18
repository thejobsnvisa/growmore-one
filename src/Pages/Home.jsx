import React from "react";
import Hero from "../Components/Hero";
import Card from "../Components/Card";
import Famliy from "../Components/Famliy";
import Labour from "../Components/Labour";
import Process from "../Components/Process";
import FAQ from "../Components/FAQ";
import BlogSection from "../Components/BlogSection";
import Member from "../Components/Member";
import Testimonials from "../Components/Testimonials"; // Removed .jsx and ensured Capital T
import GoogleReviews from "../Components/GoogleReviews";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const url = window.location.href;

  return (
    <>
      <Helmet>
        <title>Best Australia PR Immigration Consultant & Migration Agents Melbourne</title>

        <meta
          name="description"
          content="Best Australia PR Immigration Consultants & Migration Agents in Melbourne. Expert Support for Skilled Migration, PR Visas, Employer-Sponsored Visas & All type Documentation."
        />

        {/* ✅ Canonical for homepage */}
        <link rel="canonical" href={url} />

        {/* ✅ OG */}
        <meta
          property="og:title"
          content="Best Australia PR Immigration Consultant & Migration Agents Melbourne"
        />
        <meta
          property="og:description"
          content="Best Australia PR Immigration Consultants & Migration Agents in Melbourne. Expert Support for Skilled Migration, PR Visas, Employer-Sponsored Visas & All type Documentation."
        />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://www.growmore.one/logo.jpg" />
      </Helmet>
      <div className="bg-white">
        <Hero />
        <Card />
        <Famliy />
        <Process />
        <Member />
        <Labour />
        <BlogSection />
        <Testimonials />
        <FAQ />
      </div>
    </>
  );
};

export default Home;
