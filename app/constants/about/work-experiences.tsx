import { calculateWorkDuration } from "~/lib/utils";

export const WorkExperiences = () => {
  const studio20WorkDuration = calculateWorkDuration(
    new Date("2024-03-01"),
    new Date()
  );

  return (
    <div className="space-y-4">
      <div className="text-white">
        <h3 className="text-[#00df9a] text-xl">
          Full Stack Developer @ Studio 20
        </h3>
        <p>Mar 2024 - Present ({studio20WorkDuration})</p>
      </div>
      <ul className="space-y-4 text-sm relative">
        <li>
          Deliver high-quality, robust production code for a diverse array of
          projects for clients including Football Association of Singapore, CKP
          partner group, Happie-Token, Syspex, ICare Trace, and more
        </li>
        <li>
          Engineered an alert system to detect and send emails to admins in
          Singapore Youth League Website, which has allowed the admins to
          address unusual matches schedules before the match begun.
        </li>
        <li>
          Built a dashboard application for managing farm animals sales,
          transfers and distribution for NFC organization, developing
          data-tables and creating access control for different user levels for
          the organization.
        </li>
        <li>
          Developed dashboard and mobile applications for writing and reviewing
          medical surgical assessments for medical trainees for Hospital in
          Malaysia using Capacitor JS for cross-platform development.
        </li>
      </ul>
    </div>
  );
};
