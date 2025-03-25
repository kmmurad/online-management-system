import { useState, useEffect } from "react";
import { format, formatDistanceToNow } from "date-fns";
import {
  FiUsers,
  FiAward,
  FiClock,
  FiUserCheck,
  FiCheckCircle,
} from "react-icons/fi";

const ActiveElection = () => {
  const [elections, setElections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - replace with real API call later
    const mockElections = [
      {
        id: "elec-1",
        name: "Student Council 2023",
        positions: ["President", "Vice President", "Treasurer"],
        status: "voting",
        deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
        candidatesCount: 8,
      },
      {
        id: "elec-2",
        name: "Class Representatives",
        positions: ["Science Rep", "Arts Rep"],
        status: "registration",
        deadline: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days from now
        candidatesCount: 3,
      },
      {
        id: "elec-3",
        name: "Sports Committee",
        positions: ["Captain", "Manager"],
        status: "results",
        deadline: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
        candidatesCount: 5,
      },
    ];

    // Simulate API loading delay
    const timer = setTimeout(() => {
      setElections(
        mockElections.map((election) => ({
          ...election,
          formattedDate: format(new Date(election.deadline), "MMM do, yyyy"),
          timeRemaining: formatDistanceToNow(new Date(election.deadline)),
        }))
      );
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleViewCandidates = (electionId) => {
    alert(`Would navigate to candidates for election ${electionId}`);
    // In a real app: navigate(`/elections/${electionId}/candidates`);
  };

  const handleCastVote = (electionId) => {
    alert(`Would navigate to voting for election ${electionId}`);
    // In a real app: navigate(`/elections/${electionId}/vote`);
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PageHeader
          title="Active Elections"
          subtitle="Participate in ongoing democratic processes"
        />

        <div className="mt-8">
          {elections.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {elections.map((election) => (
                <ElectionCard
                  key={election.id}
                  election={election}
                  onViewCandidates={handleViewCandidates}
                  onCastVote={handleCastVote}
                />
              ))}
            </div>
          ) : (
            <EmptyElectionsState />
          )}
        </div>
      </div>
    </div>
  );
};

// Sub-components
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
  </div>
);

const PageHeader = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h1>
    <p className="mt-3 text-xl text-gray-600">{subtitle}</p>
  </div>
);

const ElectionCard = ({ election, onViewCandidates, onCastVote }) => {
  const statusConfig = {
    registration: {
      color: "bg-blue-100 text-blue-800",
      label: "Registration Open",
    },
    voting: {
      color: "bg-green-100 text-green-800",
      label: "Voting Active",
    },
    results: {
      color: "bg-purple-100 text-purple-800",
      label: "Results Available",
    },
  };

  const status = statusConfig[election.status] || {
    color: "bg-gray-100 text-gray-800",
    label: "Election",
  };

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-200">
      {/* Card Header */}
      <div className={`px-4 py-3 ${status.color}`}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            {election.name}
          </h3>
          <span className="px-2 py-1 text-xs font-semibold rounded-full">
            {status.label}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="px-4 py-5">
        <div className="mb-4">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <FiClock className="mr-2 text-gray-500" />
            <span>Deadline: {election.formattedDate}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <FiUsers className="mr-2 text-gray-500" />
            <span>{election.candidatesCount} candidates registered</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Available Positions
          </h4>
          <div className="flex flex-wrap gap-2">
            {election.positions.map((position) => (
              <span
                key={position}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700"
              >
                {position}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons - Same for all cards */}
        <div className="space-y-2">
          <button
            onClick={() => onViewCandidates(election.id)}
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <FiUserCheck className="mr-2" />
            View Candidates
          </button>

          <button
            onClick={() => onCastVote(election.id)}
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
          >
            <FiCheckCircle className="mr-2" />
            Cast Your Vote
          </button>
        </div>
      </div>
    </div>
  );
};

const EmptyElectionsState = () => (
  <div className="text-center bg-white py-12 px-6 rounded-lg shadow-sm border border-gray-200 max-w-md mx-auto">
    <FiAward className="mx-auto h-12 w-12 text-gray-400" />
    <h3 className="mt-4 text-lg font-medium text-gray-900">
      No active elections
    </h3>
    <p className="mt-2 text-sm text-gray-600">
      There are currently no elections available for participation.
    </p>
  </div>
);

export default ActiveElection;
