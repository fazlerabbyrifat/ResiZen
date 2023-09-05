"use client";
import { useFormik } from "formik";
import React, { useState } from "react";
import signUpSchema from "../schemas";
import Link from "next/link";
import axios from "axios";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { Toaster, toast } from "react-hot-toast";
import Image from "next/image";


const queryClient = new QueryClient();
const img_hosting_token = process.env.NEXT_PUBLIC_Image_Upload_Token;

const fetchUsers = async () => {
  const response = await axios.get("https://64e3355abac46e480e786405.mockapi.io/users");
  return response.data;
};

const Register = () => {
  const [imageFile, setImageFile] = useState(null);
  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    setImageFile(file);
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
        resetForm();
      },
      onError: (error) => {
        toast.error("Registration failed. Please try again.");
      },
    }
  );

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, resetForm } =
    useFormik({
      initialValues,
      signUpSchema,
      onSubmit: (values) => {
        if (imageFile) {
          const formData = new FormData();
          formData.append("image", imageFile);

          axios
            .post(`https://api.imgbb.com/1/upload?key=${img_hosting_token}`, formData)
            .then((response) => {
              const imageUrl = response.data.data.url;

              const newUser = {
                firstName: values.firstName,
                lastName: values.lastName,
                phone: values.phone,
                email: values.email,
                password: values.password,
                confirm_password: values.confirm_password,
                imageUrl,
              };

              createUserMutation.mutate(newUser);
            })
            .catch((error) => {
              toast.error("Image upload failed. Please try again.");
            });
        } else {
          toast.error("Please select an image to upload.");
        }
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
            htmlFor="Phone"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your mobile number"
            autoComplete="off"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            inputMode="numeric"
          />
          {errors.phone && touched.phone ? (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          ) : null}
        </div>
        <div className="my-2">
          <label className="block text-[#235784] font-medium mb-1" htmlFor="image">
            Profile Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {imageFile && (
            <Image
              src={URL.createObjectURL(imageFile)}
              alt="Selected Image"
              width={40}
              height={40}
              className="mt-2 max-w-[200px]"
            />
          )}
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
