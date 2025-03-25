import React, { useState } from "react";
import ElectionResults from "../../Components/ElectionResults";
import CandidateSideNav from "../../Components/navigation/CandidateSideNav";

const Results = () => {
  const [elections, setElections] = useState([
    {
      id: "elec-1",
      name: "Student Council Election",
      isPublished: true,
      positions: [
        {
          name: "President",
          candidates: [
            {
              id: 1,
              name: "John Doe",
              photo: "",
              votes: 653,
              percentage: 45,
              color: "#3B82F6",
            },
            {
              id: 2,
              name: "Sarah Lee",
              photo: "",
              votes: 587,
              percentage: 40,
              color: "#10B981",
            },
            {
              id: 3,
              name: "Mike Chen",
              photo: "",
              votes: 212,
              percentage: 15,
              color: "#F59E0B",
            },
          ],
        },
      ],
      totalVotes: 1452,
      turnout: 72,
    },
  ]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Fixed Side Navigation */}
      <div className="fixed left-0 top-0 bottom-0 z-10">
        <CandidateSideNav />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 min-h-screen p-6 md:p-8 overflow-y-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-indigo-600">
            Election Results
          </h1>
          <p className="text-gray-600 mt-1">View current election results</p>
        </header>

        {/* Results List */}
        {elections.length > 0 ? (
          <div className="space-y-6">
            {elections.map((election) => (
              <div
                key={election.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <ElectionResults
                  election={election}
                  showControls={false}
                  showDetails={true}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center border border-gray-200">
            <div className="mx-auto w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <p className="text-gray-500 mb-2">
              No election results available yet
            </p>
            <p className="text-sm text-gray-400">
              Results will appear here once published by the election
              administrator
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Results;
