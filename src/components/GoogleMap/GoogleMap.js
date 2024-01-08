import React from "react";

const GoogleMap = ({
  containerClassName = "google-map",
  mapClassName = "google-map__one",
  mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.966895682464!2d55.138096076120526!3d25.069111136875335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6cad99d6a37f%3A0x93c2a47150a13b98!2sAlmas%20Tower!5e0!3m2!1str!2saz!4v1704634615803!5m2!1str!2saz",
}) => {
  return (
    <section className={containerClassName}>
      <iframe src={mapSrc} className={mapClassName} allowFullScreen></iframe>
    </section>
  );
};

export default GoogleMap;

