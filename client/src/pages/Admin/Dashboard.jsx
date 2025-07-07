/*const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p className="mt-4 text-gray-600">Welcome! Use the navbar to manage restaurants, menu, and orders.</p>
    </div>
  );
};

export default Dashboard;*/


import { useEffect, useState } from "react";
import axios from "../../api/axios";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalRestaurants: 0,
    totalOrders: 0,
    totalRevenue: 0,
  });

   useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("/admin/stats", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setStats(res.data);
      } catch (err) {
        console.error("Failed to fetch stats:", err);
      }
    };
    fetchStats();
  }, []);

  
  

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p className="mb-6 text-gray-600">Welcome! Here’s a quick overview of your platform.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <DashboardCard title="Total Users" value={stats.totalUsers} color="bg-blue-100" />
        <DashboardCard title="Restaurants" value={stats.totalRestaurants} color="bg-green-100" />
        <DashboardCard title="Orders" value={stats.totalOrders} color="bg-yellow-100" />
        <DashboardCard title="Revenue" value={`₹${stats.totalRevenue}`} color="bg-purple-100" />
      </div>
    </div>
  );
};

const DashboardCard = ({ title, value, color }) => (
  <div className={`rounded-lg p-4 shadow ${color}`}>
    <h3 className="text-sm font-semibold text-gray-600">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

export default Dashboard;
