import { Link } from "react-router";
import ScoreCircle from "./ScoreCircle";

const ResumeCard = ({ resume }: { resume: Resume }) => {

  return (
    <Link
      to={`/resume/${resume?.id}`}
      className="resume-card animate-in fade-in duration-1000"
    >
      <div className="resume-card-header">
        <div className="flex flex-col gap-2">
          <h2 className="!text-black font-bold break-words">
            {resume?.companyName || "Company Name"}
          </h2>
          <h3 className="text-lg break-words text-gray-500">
            {resume?.jobTitle || "Job Title"}
          </h3>
        </div>
        <div className="flex-shrink-0">
          <ScoreCircle score={resume?.feedback?.overallScore || 0} />
        </div>
      </div>
      <div className="gradient-border animate-in fade-in duration-1000">
        <div className="h-full w-full">
          <img
            src={resume?.imagePath}
            alt="Resume Preview"
            className="w-full h-[350px] max-sm:h-[200px] object-cover object-top"
          />
        </div>
      </div>
    </Link>
  );
};

export default ResumeCard;
