/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Toaster, toast } from "react-hot-toast";
import Link from "next/link";

const loginPage = () => {
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem("savedEmail");
    const savedPassword = localStorage.getItem("savedPassword");
    if (savedEmail && savedPassword) {
      setRememberMe(true);
      setValues({
        ...values,
        email: savedEmail,
        password: savedPassword,
      });
    }
  }, []);

  const { data: registeredUsers } = useQuery(["registeredUsers"], async () => {
    const response = await fetch(
      "https://64e3355abac46e480e786405.mockapi.io/users"
    );
    const data = await response.json();
    return data;
  });

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const {
    values,
    errors,
    touched,
    resetForm,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const user = registeredUsers?.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );

      if (user) {
        resetForm();
        if (rememberMe) {
          localStorage.setItem("savedEmail", values.email);
          localStorage.setItem("savedPassword", values.password);
        }
        else {
          localStorage.removeItem("savedEmail");
          localStorage.removeItem("savedPassword");
        }

        toast.success("Login successful");
      } else {
        toast.error("Invalid email or password");
      }
    },
  });

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 space-y-4 my-10">
      <h3 className="text-2xl md:text-3xl font-semibold text-center">
        Welcome to ResiZen
      </h3>
      <p className="text-lg font-medium text-center">
        Please Login your account
      </p>
      <div className="max-w-screen-md mx-auto bg-gray-100 py-5 px-5 rounded-lg">
        <form onSubmit={handleSubmit}>
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
          <div className="my-2 flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              className="mr-2"
              onChange={handleRememberMeChange}
              checked={rememberMe}
            />
            <label
              className="block text-[#235784] font-medium"
              htmlFor="rememberMe"
            >
              Remember Me
            </label>
          </div>
          <input
            className="w-full bg-[#235784] text-white py-2 px-4 rounded-md hover:bg-white hover:text-[#235784] transition ease-in-out duration-150 mt-3"
            type="submit"
            value="Login"
          />
        </form>
        <p className="text-sm font-medium mt-2">
          New to the ResiZen?{" "}
          <span className="text-[#235784]">
            <Link href="/register">Please Register</Link>
          </span>
        </p>
        <Toaster />
      </div>
    </div>
  );
};

export default loginPage;
