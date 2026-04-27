import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";

import Hero from "../Components/Hero";
import Card from "../Components/Card";

const Famliy = lazy(() => import("../Components/Famliy"));
const Labour = lazy(() => import("../Components/Labour"));
const Process = lazy(() => import("../Components/Process"));
const FAQ = lazy(() => import("../Components/FAQ"));
const BlogSection = lazy(() => import("../Components/BlogSection"));
const Member = lazy(() => import("../Components/Member"));
const Testimonials = lazy(() => import("../Components/Testimonials"));
const CertificationSection = lazy(() =>
  import("../Components/Certificate")
);

const Home = () => {
  const url = window.location.href;

  return (
    <>
      <Helmet>
        <title>
          Best Australia PR Immigration Consultant & Migration Agents Melbourne
        </title>

        <meta
          name="description"
          content="Best Australia PR Immigration Consultants & Migration Agents in Melbourne."
        />

        <link rel="canonical" href={url} />
      </Helmet>

      <div className="bg-white">
        {/* Above Fold */}
        <Hero />
        <Card />

        {/* Below Fold Lazy Load */}
        <Suspense fallback={<div className="py-10 text-center">Loading...</div>}>
          <Famliy />
          <Process />
          <Member />
          <Labour />
          <CertificationSection />
          <BlogSection />
          <Testimonials />
          <FAQ />
        </Suspense>
      </div>
    </>
  );
};

export default Home;