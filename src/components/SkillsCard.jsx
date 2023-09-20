import React from "react";

const SkillsCard = ({ icon, title, text }) => {
  return (
    <div>
      <span>{icon}</span>
      <h4 className="mt-6 font-bold ">{title}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </div>
  );
};

export default SkillsCard;
