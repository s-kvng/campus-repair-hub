import React from "react";
import Head from "next/head";

const Dashboard = () => {
  return (
    <div className="flex flex-1 min-h-screen">
      <Head>
        <title>Repairer Dashboard</title>
      </Head>
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
          {/* Update Profile Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Skills
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="Electrical, Plumbing"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Availability
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="Weekdays, 9am-5pm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Rates
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="$20/hour"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md shadow-sm"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
