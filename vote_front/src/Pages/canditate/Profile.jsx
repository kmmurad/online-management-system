import { useState } from "react";
import { FiUser, FiEdit2, FiSave, FiUpload } from "react-icons/fi";
import CandidateSideNav from "../../Components/navigation/CandidateSideNav";

const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    position: "President",
    bio: "3rd year Computer Science student passionate about student rights",
    photo: null,
    campaignSlogan: "Building a better campus for all students",
    campaignPromises: [
      "Improved student lounge facilities",
      "Extended library hours during exams",
      "More student representation",
      "Free printing credits",
    ],
  });

  const positions = ["President", "Vice President", "Secretary", "Treasurer"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    setProfile({ ...profile, photo: e.target.files[0] });
  };

  const handleSave = () => {
    setIsEditMode(false);
    // Here you would typically send the updated profile to your backend
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Fixed Side Navigation */}
      <div className="fixed left-0 top-0 bottom-0 z-10">
        <CandidateSideNav userData={profile} />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 min-h-screen p-6 md:p-8 overflow-y-auto">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-indigo-600">
              My Profile
            </h1>
            <p className="text-gray-600 mt-1">Manage your candidate profile</p>
          </div>
          {!isEditMode ? (
            <button
              onClick={() => setIsEditMode(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg shadow-md transition flex items-center gap-2"
            >
              <FiEdit2 className="text-lg" />
              Edit Profile
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-md transition flex items-center gap-2"
            >
              <FiSave className="text-lg" />
              Save Changes
            </button>
          )}
        </header>

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Photo Section */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-4xl font-medium mb-4 overflow-hidden">
                    {profile.photo ? (
                      <img
                        src={URL.createObjectURL(profile.photo)}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      profile.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                    )}
                  </div>
                  {isEditMode && (
                    <label className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100">
                      <FiUpload className="text-gray-600" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* Profile Details */}
              <div className="flex-grow">
                {isEditMode ? (
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Position
                      </label>
                      <select
                        name="position"
                        value={profile.position}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        {positions.map((pos) => (
                          <option key={pos} value={pos}>
                            {pos}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Biography
                      </label>
                      <textarea
                        name="bio"
                        value={profile.bio}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        {profile.name}
                      </h2>
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mt-1">
                        {profile.position}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-1">
                        About
                      </h3>
                      <p className="text-gray-600">{profile.bio}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Campaign Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 mt-6">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              My Campaign
            </h2>
            {isEditMode ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Campaign Slogan
                  </label>
                  <input
                    type="text"
                    name="campaignSlogan"
                    value={profile.campaignSlogan}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Campaign Promises
                  </label>
                  <textarea
                    name="campaignPromises"
                    value={profile.campaignPromises.join("\n")}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        campaignPromises: e.target.value.split("\n"),
                      })
                    }
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-1">
                    Campaign Slogan
                  </h3>
                  <p className="text-gray-600 italic">
                    "{profile.campaignSlogan}"
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-1">
                    Key Promises
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {profile.campaignPromises.map((promise, index) => (
                      <li key={index}>{promise}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
