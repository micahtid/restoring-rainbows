"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";

import Loader from "@/components/Loader";
import Hero from "@/components/landing-page/Hero";

// Lazy load heavy components
const AboutUs = dynamic(() => import("@/components/landing-page/AboutUs"), {
  loading: () => <div className="h-20 animate-pulse bg-gray-100 rounded" />
});
const Statistics = dynamic(() => import("@/components/landing-page/Statistics"), {
  loading: () => <div className="h-32 animate-pulse bg-gray-100 rounded" />
});
const Mission = dynamic(() => import("@/components/landing-page/Mission"), {
  loading: () => <div className="h-40 animate-pulse bg-gray-100 rounded" />
});
const Prism = dynamic(() => import("@/components/landing-page/Prism"), {
  loading: () => <div className="h-60 animate-pulse bg-gray-100 rounded" />
});
const SocialMedia = dynamic(() => import("@/components/landing-page/SocialMedia"), {
  loading: () => <div className="h-32 animate-pulse bg-gray-100 rounded" />
});
const RecentEvents = dynamic(() => import("@/components/landing-page/RecentEvents"), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100 rounded" />
});
const TakeAction = dynamic(() => import("@/components/landing-page/TakeAction"), {
  loading: () => <div className="h-48 animate-pulse bg-gray-100 rounded" />
});
const Partners = dynamic(() => import("@/components/landing-page/Partners"), {
  loading: () => <div className="h-40 animate-pulse bg-gray-100 rounded" />
});

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex w-[100vw] h-[100vh] justify-center items-center bg-white z-[10000]">
        <Loader />
      </div>
    );
  }

  return (
    <main>
      <div className="relative max-[325px]:hidden">
        <div
          style={{
            background: `
                conic-gradient(from 0deg, #e3f0ff, #d3f8e6, #e3f0ff)`,
          }}
          className="absolute top-0 w-full h-[3000px] -z-[100] max-md:h-[3200px]"
        />
        <div className="pb-24" />
        <Hero />
        <Suspense fallback={<div className="h-20 animate-pulse bg-gray-100 rounded" />}>
          <AboutUs />
        </Suspense>
        <Suspense fallback={<div className="h-32 animate-pulse bg-gray-100 rounded" />}>
          <Statistics />
        </Suspense>
        <Suspense fallback={<div className="h-40 animate-pulse bg-gray-100 rounded" />}>
          <Mission />
        </Suspense>
        <Suspense fallback={<div className="h-60 animate-pulse bg-gray-100 rounded" />}>
          <Prism />
        </Suspense>
        <Suspense fallback={<div className="h-32 animate-pulse bg-gray-100 rounded" />}>
          <SocialMedia />
        </Suspense>
        <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100 rounded" />}>
          <RecentEvents />
        </Suspense>
        <Suspense fallback={<div className="h-48 animate-pulse bg-gray-100 rounded" />}>
          <TakeAction />
        </Suspense>
        <Suspense fallback={<div className="h-40 animate-pulse bg-gray-100 rounded" />}>
          <Partners />
        </Suspense>
      </div>
      <div className="absolute inset-0 hidden w-[100vw] h-[100vh] bg-white z-[10000] max-[325px]:inline-block">
        <p className="p-x">Oops! It looks like this website is not supported on smaller devices.</p>
      </div>
    </main>
  );
};

export default Home;
