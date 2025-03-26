import ActiveElection from "../../Components/active_election";
import VoterSideNav from "../../Components/navigation/VoterSideNav";

const VoterActiveElections = ({ userData, electionStats = {} }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <div className="fixed left-0 top-0 bottom-0 w-64 bg-white shadow z-10">
        <VoterSideNav userData={userData} electionStats={electionStats} />
      </div>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Active Elections
          </h1>
          <ActiveElection />
        </div>
      </main>
    </div>
  );
};

export default VoterActiveElections;
