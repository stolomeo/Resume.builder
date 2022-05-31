import React from "react";
import ExperienceItems from "./ExperienceItems";

export default function Experience({ experienceItems }) {
  const experienceElements = experienceItems.map((experienceItem) => {
    return (
      <ExperienceItems
        key={experienceItem.id}
        id={experienceItem.id}
        experienceItem={experienceItem}
      />
    );
  });

  return (
    <section className="resume-section">
      <h2 className="section-title">WORK EXPERIENCE</h2>
      <hr />
      {experienceElements}
    </section>
  );
}
