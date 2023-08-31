"use client";
import React, { useEffect } from "react";
import MainContent from "./templetes/MainContent";
import LocationSection from "./templetes/LocationSection";
import CourseSection from "./templetes/CourseSection";
import useArea from "@/hooks/useArea";
import { areaState } from "@/recoil/atoms/areaState";
import { useRecoilState } from "recoil";

const Main = () => {
  const { data: location } = useArea({});
  const [areas, setAreas] = useRecoilState(areaState);

  useEffect(() => {
    location && setAreas(location?.response?.body?.items?.item);
  }, [location, setAreas]);

  return (
    <div>
      <MainContent />
      <CourseSection />
      <LocationSection />
    </div>
  );
};

export default Main;
