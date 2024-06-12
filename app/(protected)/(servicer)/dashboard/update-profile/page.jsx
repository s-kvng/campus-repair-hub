import React from "react";

const UpdateProfile = () => {
  return (
    <div className="flex flex-1 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Repairer Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Manage Requests Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Manage Requests</h2>
            <ul className="space-y-4">
              {/* Example request items */}
              <li className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <div className="flex justify-between">
                  <span>Request #1</span>
                  <button className="text-blue-500">View Details</button>
                </div>
              </li>
              <li className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <div className="flex justify-between">
                  <span>Request #2</span>
                  <button className="text-blue-500">View Details</button>
                </div>
              </li>
              {/* Add more request items as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
