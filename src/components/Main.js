import React, { useState } from "react";
import PersonalForm from "./Personal/PersonalForm";
import ExperienceForm from "./Experience/ExperienceForm";
import EducationForm from "./Education/EducationForm";
import Personal from "./Personal/Personal";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import resume from "./Utils/resume";
import emptyResume from "./Utils/emptyResume";

export default function Main() {
  const [resumeValues, setResumeValues] = useState(resume);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeValues((oldValues) => {
      return {
        ...oldValues,
        [name]: value,
      };
    });
  };

  return (
    <main>
      <div className="form-container">
        <PersonalForm handleChange={handleChange} />
        <ExperienceForm handleChange={handleChange} />
        <button>Add</button>
        <EducationForm handleChange={handleChange} />
      </div>
      <div className="resume-container">
        <Personal personalValues={resumeValues} />
        <Experience experienceValues={resumeValues} />
        <Education educationValues={resumeValues} />
      </div>
    </main>
  );
}
