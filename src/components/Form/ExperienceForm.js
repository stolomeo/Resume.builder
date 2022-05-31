import React from "react";

export default function ExperienceForm({
  id,
  experienceItem,
  handleChangeExperience,
}) {
  const { employerName, jobTitle, workCity, workState, startDate, endDate } =
    experienceItem;
  return (
    <form>
      <input
        type="text"
        name="employerName"
        placeholder="Employer name"
        value={employerName}
        onChange={(e) => handleChangeExperience(e, id)}
      />
      <input
        type="text"
        name="jobTitle"
        placeholder="Job title"
        value={jobTitle}
        onChange={(e) => handleChangeExperience(e, id)}
      />

      <input
        type="text"
        name="workCity"
        placeholder="City"
        value={workCity}
        onChange={(e) => handleChangeExperience(e, id)}
      />
      <input
        type="text"
        name="workState"
        placeholder="State"
        value={workState}
        onChange={(e) => handleChangeExperience(e, id)}
      />
      <input
        type="text"
        name="startDate"
        placeholder="Start date"
        value={startDate}
        onChange={(e) => handleChangeExperience(e, id)}
      />
      <input
        type="text"
        name="endDate"
        placeholder="End date"
        value={endDate}
        onChange={(e) => handleChangeExperience(e, id)}
      />
    </form>
  );
}
