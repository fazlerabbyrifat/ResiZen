"use client";
import { useFormik } from "formik";
import React from "react";
import signUpSchema from "../schemas";
import Link from "next/link";

const Register = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
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
    </div>
  );
};

export default Register;
