import { useState } from "react";
import { format } from "date-fns";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiToggleLeft,
  FiToggleRight,
  FiCalendar,
  FiAward,
  FiUsers,
} from "react-icons/fi";
import AdminSideNav from "../../Components/navigation/AdminSideNav";

const Elections = () => {
  // State management
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

  // Form handlers
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
    setElections([...elections, { ...newElection, id: newId }]);
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
      {/* Fixed Side Navigation */}
      <div className="fixed left-0 top-0 bottom-0 w-64 z-10">
        <AdminSideNav />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 min-h-screen p-6 md:p-8 overflow-y-auto">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-indigo-600">
            Election Management
          </h1>
          <p className="text-gray-600 mt-1">Create and oversee all elections</p>
        </header>

        {/* Action Bar */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-lg pl-4 pr-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>All Elections</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  className="h-4 w-4 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            <FiPlus /> Create Election
          </button>
        </div>

        {/* Elections Grid */}
        {elections.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {elections.map((election) => (
              <ElectionCard
                key={election.id}
                election={election}
                onToggleStatus={toggleElectionStatus}
                onDelete={handleDeleteElection}
              />
            ))}
          </div>
        ) : (
          <EmptyState onCreate={() => setIsModalOpen(true)} />
        )}

        {/* Create Election Modal */}
        {isModalOpen && (
          <CreateElectionModal
            newElection={newElection}
            setNewElection={setNewElection}
            onAddPosition={handleAddPosition}
            onCreate={handleCreateElection}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </main>
    </div>
  );
};

// Reusable Components
const ElectionCard = ({ election, onToggleStatus, onDelete }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
    {/* Election Header */}
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 border-b border-gray-100">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold text-gray-800">{election.name}</h3>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            election.isActive
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {election.isActive ? "Active" : "Inactive"}
        </span>
      </div>
      <p className="text-sm text-gray-500 mt-1">ID: {election.id}</p>
    </div>

    {/* Election Details */}
    <div className="p-4">
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-500 mb-1 flex items-center">
          <FiCalendar className="mr-2" /> Deadline
        </h4>
        <p className="text-gray-700">
          {format(new Date(election.deadline), "MMM dd, yyyy hh:mm a")}
        </p>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-500 mb-1 flex items-center">
          <FiUsers className="mr-2" /> Positions
        </h4>
        <div className="flex flex-wrap gap-2">
          {election.positions.map((position, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
            >
              {position}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center border-t border-gray-100 pt-4">
        <button
          onClick={() => onToggleStatus(election.id)}
          className="flex items-center gap-2 text-sm hover:bg-gray-50 px-3 py-1 rounded-lg"
        >
          {election.isActive ? (
            <FiToggleLeft className="text-green-600" size={20} />
          ) : (
            <FiToggleRight className="text-gray-400" size={20} />
          )}
          <span>{election.isActive ? "Deactivate" : "Activate"}</span>
        </button>
        <div className="flex gap-2">
          <button className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-full">
            <FiEdit2 size={18} />
          </button>
          <button
            onClick={() => onDelete(election.id)}
            className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-full"
          >
            <FiTrash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

const EmptyState = ({ onCreate }) => (
  <div className="bg-white rounded-xl shadow-sm p-12 text-center">
    <div className="mx-auto w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-4">
      <FiAward size={28} />
    </div>
    <h3 className="text-xl font-medium text-gray-800 mb-2">
      No elections created
    </h3>
    <p className="text-gray-500 mb-6">
      Get started by creating your first election
    </p>
    <button
      onClick={onCreate}
      className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-lg shadow hover:shadow-md transition-all"
    >
      Create Election
    </button>
  </div>
);

const CreateElectionModal = ({
  newElection,
  setNewElection,
  onAddPosition,
  onCreate,
  onClose,
}) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
      <div className="border-b p-6 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">New Election</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 text-2xl"
        >
          &times;
        </button>
      </div>

      <div className="p-6">
        <form className="space-y-5">
          {/* Election Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Election Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={newElection.name}
              onChange={(e) =>
                setNewElection({ ...newElection, name: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., Student Council"
              required
            />
          </div>

          {/* Positions */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Positions <span className="text-red-500">*</span>
            </label>
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
                onKeyDown={(e) => e.key === "Enter" && onAddPosition()}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., President"
              />
              <button
                type="button"
                onClick={onAddPosition}
                className="px-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Add
              </button>
            </div>

            {/* Added Positions */}
            {newElection.positions.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {newElection.positions.map((position, index) => (
                  <div
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center"
                  >
                    {position}
                    <button
                      type="button"
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

          {/* Deadline */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Deadline <span className="text-red-500">*</span>
            </label>
            <input
              type="datetime-local"
              value={newElection.deadline}
              onChange={(e) =>
                setNewElection({
                  ...newElection,
                  deadline: e.target.value,
                })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Active Status */}
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
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="active-election"
              className="ml-2 block text-sm text-gray-700"
            >
              Active Election
            </label>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={onCreate}
              disabled={
                !newElection.name ||
                newElection.positions.length === 0 ||
                !newElection.deadline
              }
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Create Election
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Elections;
