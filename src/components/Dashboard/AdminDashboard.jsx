import React from "react";
import { Header } from "../Other/Header";
import { CreateTask } from "../Other/CreateTask";
import { AllTask } from "../Other/AllTask";

export const AdminDashboard = () => {
  return (
    <div className="p-10  h-screen  font-semibold w-full">
      <Header />
      <CreateTask/>
      <AllTask/>
    </div>
  );
};
