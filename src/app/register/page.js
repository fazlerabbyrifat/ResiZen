import Register from "@/components/Register/Register";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-5">
      <div className="bg-white p-8 shadow-md rounded-md w-full max-w-screen-md">
        <h1 className="text-2xl font-semibold text-center text-[#235784] uppercase mb-5 p-5">Please Register a new account</h1>
        <Register></Register>
      </div>
    </div>
  );
};

export default RegisterPage;
