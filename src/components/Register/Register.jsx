"use client";
import { useFormik } from "formik";
import React from "react";
import signUpSchema from "../schemas";
import Link from "next/link";
import axios from "axios";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { Toaster, toast } from "react-hot-toast";

const queryClient = new QueryClient();

const fetchUsers = async () => {
  const response = await axios.get("https://64e3355abac46e480e786405.mockapi.io/users");
  return response.data;
};

const Register = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const checkEmailAvailability = async (email) => {
    const response = await axios.get(
      `https://64e3355abac46e480e786405.mockapi.io/users?email=${email}`
    );
    return response.data.length === 0;
  };
  const emailAvailabilityQuery = useQuery(
    ["emailAvailability"],
    () => checkEmailAvailability(values.email),
    {
      enabled: false,
    }
  );

  const usersQuery = useQuery(["users"], fetchUsers);

  const createUserMutation = useMutation(
    (newUser) =>
      axios.post("https://64e3355abac46e480e786405.mockapi.io/users", newUser),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
        toast.success("Registration successful!");
      },
      onError: (error) => {
        toast.error("Registration failed. Please try again.");
      },
    }
  );

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: () => {
        emailAvailabilityQuery.refetch().then(() => {
          if (emailAvailabilityQuery.data) {
            const newUser = {
              firstName: values.firstName,
              lastName: values.lastName,
              mobile: values.mobile,
              email: values.email,
              password: values.password,
              confirm_password: values.confirm_password,
            };
            createUserMutation.mutate(newUser);
          } else {
            toast.error(
              "Email is already registered. Please use a different email."
            );
          }
        });
      },
    });

  return (
    <div>
      <form onSubmit={handleSubmit} className="mx-auto">
        <div className="my-2">
          <label
            className="block text-[#235784] font-medium mb-1"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your first name"
            autoComplete="off"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstName && touched.firstName ? (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          ) : null}
        </div>
        <div className="my-2">
          <label
            className="block text-[#235784] font-medium mb-1"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your last name"
            autoComplete="off"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastName && touched.lastName ? (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          ) : null}
        </div>
        <div className="my-2">
          <label
            className="block text-[#235784] font-medium mb-1"
            htmlFor="mobile"
          >
            Mobile
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your mobile number"
            autoComplete="off"
            value={values.mobile}
            onChange={handleChange}
            onBlur={handleBlur}
            inputMode="numeric"
          />
          {errors.mobile && touched.mobile ? (
            <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
          ) : null}
        </div>
        <div className="my-2">
          <label
            className="block text-[#235784] font-medium mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your email address"
            autoComplete="off"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          ) : null}
        </div>
        <div className="my-2">
          <label
            className="block text-[#235784] font-medium mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your password"
            autoComplete="off"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          ) : null}
        </div>
        <div className="my-2">
          <label
            className="block text-[#235784] font-medium mb-1"
            htmlFor="confirm_password"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Please re-type your password"
            autoComplete="off"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirm_password}
            </p>
          ) : null}
        </div>
        <input
          className="w-full bg-[#235784] text-white py-2 px-4 rounded-md hover:bg-white hover:text-[#235784] transition ease-in-out duration-150 mt-3"
          type="submit"
          value="Register"
        />
      </form>
      <p className="text-sm font-medium mt-2">
        Already registered user?{" "}
        <span className="text-[#235784]">
          <Link href="/login">Please Login</Link>
        </span>
      </p>
      <Toaster />
    </div>
  );
};

export default Register;
