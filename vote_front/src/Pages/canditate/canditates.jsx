import { useState } from "react";
import { FiPlus, FiSearch } from "react-icons/fi";
import CandidateCard from "../../Components/CandidateCard";

const Candidates = () => {
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: "John Doe",
      position: "President",
      bio: "2nd year Computer Science student with leadership experience",
      photo: null,
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Secretary",
      bio: "3rd year Political Science major with event planning background",
      photo: null,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newCandidate, setNewCandidate] = useState({
    name: "",
    position: "",
    bio: "",
    photo: null,
  });

  const positions = ["President", "Vice President", "Secretary", "Treasurer"];

  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddCandidate = () => {
    const newId =
      candidates.length > 0 ? Math.max(...candidates.map((c) => c.id)) + 1 : 1;

    setCandidates([...candidates, { ...newCandidate, id: newId }]);
    setNewCandidate({ name: "", position: "", bio: "", photo: null });
    setIsFormOpen(false);
  };

  const handleDeleteCandidate = (id) => {
    setCandidates(candidates.filter((candidate) => candidate.id !== id));
  };

  return (
    <div className="p-6">
      {/* Header and Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Candidates</h1>
          <p className="text-gray-600">Manage election candidates</p>
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search candidates..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <FiPlus /> Add New
          </button>
        </div>
      </div>

      {/* Candidates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCandidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
            onEdit={() => {
              setNewCandidate(candidate);
              setIsFormOpen(true);
            }}
            onDelete={handleDeleteCandidate}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredCandidates.length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <FiSearch className="text-gray-400 text-2xl" />
          </div>
          <h3 className="text-lg font-medium text-gray-800">
            {searchTerm ? "No matching candidates" : "No candidates yet"}
          </h3>
          <p className="text-gray-500 mt-1">
            {searchTerm
              ? "Try a different search term"
              : "Add your first candidate to get started"}
          </p>
        </div>
      )}

      {/* Add Candidate Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {newCandidate.id ? "Edit Candidate" : "Add New Candidate"}
              </h2>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-gray-500"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={newCandidate.name}
                  onChange={(e) =>
                    setNewCandidate({ ...newCandidate, name: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Position
                </label>
                <select
                  value={newCandidate.position}
                  onChange={(e) =>
                    setNewCandidate({
                      ...newCandidate,
                      position: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="">Select position</option>
                  {positions.map((pos) => (
                    <option key={pos} value={pos}>
                      {pos}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Bio</label>
                <textarea
                  value={newCandidate.bio}
                  onChange={(e) =>
                    setNewCandidate({ ...newCandidate, bio: e.target.value })
                  }
                  rows={3}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddCandidate}
                  disabled={!newCandidate.name || !newCandidate.position}
                  className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
                >
                  {newCandidate.id ? "Update" : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Candidates;
