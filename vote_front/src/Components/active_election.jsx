import { useState, useEffect } from "react";
import { format, formatDistanceToNow } from "date-fns";
import {
  FiUsers,
  FiAward,
  FiClock,
  FiUserCheck,
  FiCheckCircle,
  FiCalendar,
} from "react-icons/fi";

const ActiveElection = () => {
  const [elections, setElections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data with consistent structure
    const mockElections = [
      {
        id: "elec-1",
        name: "Student Council 2023",
        positions: ["President", "Vice President", "Treasurer"],
        status: "voting",
        deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        candidatesCount: 8,
      },
      {
        id: "elec-2",
        name: "Class Representatives Election",
        positions: ["Science Rep", "Arts Rep"],
        status: "registration",
        deadline: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
        candidatesCount: 3,
      },
      {
        id: "elec-3",
        name: "Sports Committee Selection",
        positions: ["Captain", "Manager", "Coordinator"],
        status: "results",
        deadline: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        candidatesCount: 5,
      },
    ];

    const timer = setTimeout(() => {
      setElections(
        mockElections.map((election) => ({
          ...election,
          formattedDate: format(new Date(election.deadline), "MMM do, yyyy"),
          timeRemaining: formatDistanceToNow(new Date(election.deadline)),
          // Ensure consistent position count for layout
          displayedPositions: election.positions.slice(0, 3), // Show max 3 positions
        }))
      );
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleViewCandidates = (electionId) => {
    alert(`Would navigate to candidates for election ${electionId}`);
  };

  const handleCastVote = (electionId) => {
    alert(`Would navigate to voting for election ${electionId}`);
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
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      actionText: "Register Now",
      actionClass: "bg-blue-600 hover:bg-blue-700",
    },
    voting: {
      color: "bg-green-100 text-green-800",
      label: "Voting Active",
      actionText: "Cast Your Vote",
      actionClass: "bg-green-600 hover:bg-green-700",
    },
    results: {
      color: "bg-purple-100 text-purple-800",
      label: "Results Available",
      actionText: "View Results",
      actionClass: "bg-purple-600 hover:bg-purple-700",
    },
  };

  const status = statusConfig[election.status] || {
    color: "bg-gray-100 text-gray-800",
    label: "Election",
    actionText: "View Details",
    actionClass: "bg-gray-600 hover:bg-gray-700",
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-200">
      {/* Card Header */}
      <div className={`px-4 py-3 ${status.color}`}>
        <div className="flex items-center justify-between">
          <h3
            className="text-lg font-semibold line-clamp-1"
            title={election.name}
          >
            {election.name}
          </h3>
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-white/90">
            {status.label}
          </span>
        </div>
      </div>

      {/* Card Body - Flex-grow makes this section take remaining space */}
      <div className="flex-grow px-4 py-5 flex flex-col">
        {/* Info Section */}
        <div className="mb-4 space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <FiClock className="mr-2 flex-shrink-0 text-gray-500" />
            <span className="line-clamp-1">
              <span className="font-medium">Deadline:</span>{" "}
              {election.formattedDate}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <FiUsers className="mr-2 flex-shrink-0 text-gray-500" />
            <span>
              <span className="font-medium">{election.candidatesCount}</span>{" "}
              candidates
            </span>
          </div>
        </div>

        {/* Positions Section - Fixed height with overflow */}
        <div className="mb-4 flex-grow-0">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Available Positions
          </h4>
          <div className="flex flex-wrap gap-2 max-h-20 overflow-y-auto py-1">
            {election.displayedPositions.map((position) => (
              <span
                key={position}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700"
              >
                {position}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons - Fixed at bottom */}
        <div className="mt-auto pt-4 space-y-2">
          <button
            onClick={() => onViewCandidates(election.id)}
            className="w-full flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <FiUserCheck className="mr-2" />
            View Candidates
          </button>

          <button
            onClick={() => onCastVote(election.id)}
            className={`w-full flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium text-white ${status.actionClass}`}
          >
            <FiCheckCircle className="mr-2" />
            {status.actionText}
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
