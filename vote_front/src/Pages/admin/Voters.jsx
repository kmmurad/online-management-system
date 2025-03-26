import { useState } from "react";
import AdminSideNav from "../../Components/navigation/AdminSideNav";
import {
  FiPlus,
  FiEdit,
  FiTrash2,
  FiUser,
  FiSearch,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";

const AdminVoters = () => {
  const [voters, setVoters] = useState([
    {
      id: 1,
      name: "Alex Johnson",
      studentId: "ST2023001",
      email: "alex.j@university.edu",
      status: "verified", // Changed from boolean to status string
      registrationDate: "2023-09-15",
    },
    {
      id: 2,
      name: "Sam Wilson",
      studentId: "ST2023002",
      email: "sam.w@university.edu",
      status: "pending",
      registrationDate: "2023-10-20",
    },
    {
      id: 3,
      name: "Taylor Swift",
      studentId: "ST2023003",
      email: "taylor.s@university.edu",
      status: "rejected",
      registrationDate: "2023-08-05",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredVoters = voters.filter(
    (voter) =>
      voter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      voter.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      voter.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Status configuration
  const statusConfig = {
    verified: {
      color: "bg-emerald-100 text-emerald-800",
      icon: <FiCheckCircle className="mr-1" />,
      label: "Verified Voter",
    },
    pending: {
      color: "bg-amber-100 text-amber-800",
      icon: <FiClock className="mr-1" />,
      label: "Pending Review",
    },
    rejected: {
      color: "bg-rose-100 text-rose-800",
      icon: <FiUser className="mr-1" />,
      label: "Rejected",
    },
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Side Navigation */}
      <div className="fixed left-0 top-0 bottom-0 w-64 z-10">
        <AdminSideNav />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 min-h-screen p-6 md:p-8 overflow-y-auto">
        {/* Page Header */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-indigo-600">
              Voter Management
            </h1>
            <p className="text-gray-600 mt-1">
              {filteredVoters.length} registered voters
            </p>
          </div>

          {/* Search and Add Button */}
          <div className="flex gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search voters..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition-colors">
              <FiPlus /> Add Voter
            </button>
          </div>
        </div>

        {/* Voters Table Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          {filteredVoters.length > 0 ? (
            <>
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 p-5 bg-indigo-50 border-b font-medium text-indigo-700 uppercase text-sm">
                <div className="col-span-5 md:col-span-3">Voter</div>
                <div className="col-span-3">Student ID</div>
                <div className="col-span-2 hidden md:block">Registered</div>
                <div className="col-span-4 md:col-span-3">Email</div>
                <div className="col-span-2 text-right">Status</div>
              </div>

              {/* Voters List */}
              <div className="divide-y divide-gray-100">
                {filteredVoters.map((voter) => (
                  <div
                    key={voter.id}
                    className="grid grid-cols-12 gap-4 p-5 hover:bg-indigo-50/50 transition-colors"
                  >
                    <div className="col-span-5 md:col-span-3 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
                        <FiUser />
                      </div>
                      <span className="font-medium">{voter.name}</span>
                    </div>
                    <div className="col-span-3 flex items-center text-gray-600">
                      {voter.studentId}
                    </div>
                    <div className="col-span-2 hidden md:flex items-center text-gray-500 text-sm">
                      {new Date(voter.registrationDate).toLocaleDateString()}
                    </div>
                    <div className="col-span-4 md:col-span-3 text-gray-600 truncate">
                      {voter.email}
                    </div>
                    <div className="col-span-2 flex justify-end">
                      <span
                        className={`px-3 py-1 rounded-full text-sm flex items-center ${
                          statusConfig[voter.status].color
                        }`}
                      >
                        {statusConfig[voter.status].icon}
                        {statusConfig[voter.status].label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <EmptyState />
          )}
        </div>
      </main>
    </div>
  );
};

// Enhanced Empty State Component
const EmptyState = () => (
  <div className="p-12 text-center">
    <div className="mx-auto w-24 h-24 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 mb-4">
      <FiUser size={32} />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">No Voters Found</h3>
    <p className="text-gray-500 mb-6 max-w-md mx-auto">
      There are currently no voters matching your search criteria. Try adjusting
      your search or add new voters.
    </p>
    <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 mx-auto hover:bg-indigo-700 transition-colors">
      <FiPlus /> Add New Voter
    </button>
  </div>
);

export default AdminVoters;
