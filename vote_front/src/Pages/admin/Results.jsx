import React, { useState } from "react";
import AdminSideNav from "../../Components/navigation/AdminSideNav";
import ElectionResults from "../../Components/ElectionResults";

const AdminResults = () => {
  // User data would normally come from your auth system
  const adminUser = {
    name: "Admin User",
    email: "admin@example.com",
  };

  // Sample election data with results
  const [elections, setElections] = useState([
    {
      id: "elec-1",
      name: "Student Council Election",
      isPublished: false,
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

  const togglePublish = (electionId) => {
    setElections(
      elections.map((election) =>
        election.id === electionId
          ? { ...election, isPublished: !election.isPublished }
          : election
      )
    );
  };

  const handleExport = (format) => {
    // Actual export implementation would go here
    console.log(`Exporting results as ${format.toUpperCase()}`);
    alert(`Exporting results as ${format.toUpperCase()}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Side Navigation */}
      <AdminSideNav userData={adminUser} />

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Election Results
            </h1>
            <p className="text-gray-600">View and manage election results</p>
          </div>
        </div>

        {/* Results List */}
        {elections.length > 0 ? (
          <div className="space-y-6">
            {elections.map((election) => (
              <div
                key={election.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <ElectionResults
                  election={election}
                  onPublishToggle={() => togglePublish(election.id)}
                  onExport={handleExport}
                  showControls={true}
                  showDetails={true}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg text-center">
            <p className="text-gray-500 mb-4">No election results available</p>
            <p className="text-sm text-gray-400">
              Results will appear here once elections are completed
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminResults;
