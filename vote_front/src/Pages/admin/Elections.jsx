import { useState } from "react";
import { format } from "date-fns";
import AdminSideNav from "../../Components/navigation/AdminSideNav";

const AdminElections = () => {
  // User data would normally come from your auth system
  const adminUser = {
    name: "Admin User",
    email: "admin@example.com",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [elections, setElections] = useState([
    {
      id: "elec-1",
      name: "Student Council",
      positions: ["President", "Secretary"],
      deadline: "2023-12-31T23:59",
      isActive: true,
    },
    {
      id: "elec-2",
      name: "Class Representative",
      positions: ["Class Rep"],
      deadline: "2023-11-15T23:59",
      isActive: false,
    },
  ]);

  const [newElection, setNewElection] = useState({
    name: "",
    positions: [],
    positionInput: "",
    deadline: "",
    isActive: false,
  });

  const handleAddPosition = () => {
    if (
      newElection.positionInput &&
      !newElection.positions.includes(newElection.positionInput)
    ) {
      setNewElection({
        ...newElection,
        positions: [...newElection.positions, newElection.positionInput],
        positionInput: "",
      });
    }
  };

  const handleCreateElection = () => {
    const newId = `elec-${Date.now()}`;
    setElections([
      ...elections,
      {
        ...newElection,
        id: newId,
      },
    ]);
    setNewElection({
      name: "",
      positions: [],
      positionInput: "",
      deadline: "",
      isActive: false,
    });
    setIsModalOpen(false);
  };

  const toggleElectionStatus = (id) => {
    setElections(
      elections.map((election) =>
        election.id === id
          ? { ...election, isActive: !election.isActive }
          : election
      )
    );
  };

  const handleDeleteElection = (id) => {
    setElections(elections.filter((election) => election.id !== id));
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
              Election Management
            </h1>
            <p className="text-gray-600">Create and manage all elections</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <span>+</span> Create Election
          </button>
        </div>

        {/* Create Election Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">New Election</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block mb-1">Election Name</label>
                  <input
                    type="text"
                    value={newElection.name}
                    onChange={(e) =>
                      setNewElection({ ...newElection, name: e.target.value })
                    }
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Student Council"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-1">Positions</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newElection.positionInput}
                      onChange={(e) =>
                        setNewElection({
                          ...newElection,
                          positionInput: e.target.value,
                        })
                      }
                      className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., President"
                      onKeyDown={(e) =>
                        e.key === "Enter" && handleAddPosition()
                      }
                    />
                    <button
                      type="button"
                      onClick={handleAddPosition}
                      className="px-4 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      Add
                    </button>
                  </div>

                  {newElection.positions.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {newElection.positions.map((position, index) => (
                        <div
                          key={index}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm flex items-center"
                        >
                          {position}
                          <button
                            onClick={() =>
                              setNewElection({
                                ...newElection,
                                positions: newElection.positions.filter(
                                  (p) => p !== position
                                ),
                              })
                            }
                            className="ml-1 text-blue-600 hover:text-blue-800"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block mb-1">Deadline</label>
                  <input
                    type="datetime-local"
                    value={newElection.deadline}
                    onChange={(e) =>
                      setNewElection({
                        ...newElection,
                        deadline: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="active-election"
                    checked={newElection.isActive}
                    onChange={(e) =>
                      setNewElection({
                        ...newElection,
                        isActive: e.target.checked,
                      })
                    }
                    className="mr-2 h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="active-election">Active Election</label>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border rounded hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateElection}
                  disabled={
                    !newElection.name ||
                    newElection.positions.length === 0 ||
                    !newElection.deadline
                  }
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Elections List */}
        {elections.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {elections.map((election) => (
              <div
                key={election.id}
                className="bg-white p-4 rounded-lg shadow border hover:shadow-md transition"
              >
                <div className="flex justify-between">
                  <h3 className="font-bold text-lg">{election.name}</h3>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      election.isActive
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {election.isActive ? "Active" : "Inactive"}
                  </span>
                </div>

                <div className="mt-3 space-y-2">
                  <p>
                    <span className="font-medium">ID:</span> {election.id}
                  </p>
                  <p>
                    <span className="font-medium">Deadline:</span>{" "}
                    {format(
                      new Date(election.deadline),
                      "MMM dd, yyyy hh:mm a"
                    )}
                  </p>
                  <p>
                    <span className="font-medium">Positions:</span>{" "}
                    {election.positions.join(", ")}
                  </p>
                </div>

                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => toggleElectionStatus(election.id)}
                    className={`px-3 py-1 text-sm rounded ${
                      election.isActive
                        ? "bg-gray-200 hover:bg-gray-300"
                        : "bg-blue-200 hover:bg-blue-300"
                    } transition`}
                  >
                    {election.isActive ? "Deactivate" : "Activate"}
                  </button>
                  <div className="flex gap-2">
                    <button className="p-1 text-gray-500 hover:text-blue-600 transition">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteElection(election.id)}
                      className="p-1 text-gray-500 hover:text-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <p className="text-gray-500 mb-4">No elections created yet</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Create Your First Election
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminElections;
