import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";

/* Above Fold */
import Hero from "../Components/Hero";
import Card from "../Components/Card";

/* Lazy Load Below Fold Components */
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

/* Removed unused GoogleReviews import */

const Loader = () => <div className="py-8"></div>;

const Home = () => {
  const url = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <Helmet>
        <title>
          Best Australia PR Immigration Consultant & Migration Agents Melbourne
        </title>

        <meta
          name="description"
          content="Best Australia PR Immigration Consultants & Migration Agents in Melbourne. Expert Support for Skilled Migration, PR Visas, Employer-Sponsored Visas & All type Documentation."
        />

        <link rel="canonical" href={url} />

        <meta
          property="og:title"
          content="Best Australia PR Immigration Consultant & Migration Agents Melbourne"
        />

        <meta
          property="og:description"
          content="Best Australia PR Immigration Consultants & Migration Agents in Melbourne. Expert Support for Skilled Migration, PR Visas, Employer-Sponsored Visas & All type Documentation."
        />

        <meta property="og:url" content={url} />
        <meta property="og:image" content="/logo.webp" />
      </Helmet>

      <main className="bg-white">
        {/* First Paint Priority */}
        <Hero />
        <Card />

        {/* Lazy Sections */}
        <Suspense fallback={<Loader />}>
          <Famliy />
          <Process />
          <Member />
          <Labour />
          <CertificationSection />
          <BlogSection />
          <Testimonials />
          <FAQ />
        </Suspense>
      </main>
    </>
  );
};

export default Home;