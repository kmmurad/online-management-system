import ActiveElection from "../../Components/active_election";
import CandidateSideNav from "../../Components/navigation/CandidateSideNav";

const CandidateActiveElections = ({ userData }) => {
  return (
    <div className="flex">
      <CandidateSideNav userData={userData} />
      <div className="flex-1 ml-64">
        <ActiveElection />
      </div>
    </div>
  );
};

export default CandidateActiveElections;
