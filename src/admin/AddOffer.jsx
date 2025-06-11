import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddOffer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    const formatted = {
      title: data.title,
      description: data.description,
      course: data.course,
      discount: Number(data.discount),
      startDate: data.startDate,
      endDate: data.endDate,
    };

    try {
      await axios.post('/api/offers', formatted);
      toast.success("Offer added successfully!");
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to add offer.");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Offer</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Offer Title */}
        <div>
          <label className="block font-medium mb-1">Offer Title</label>
          <input
            type="text"
            {...register("title", { required: "Offer title is required" })}
            className="w-full border p-2 rounded"
            placeholder="e.g., Early Bird Discount"
          />
          {errors.title && <p className="text-red-600 text-sm">{errors.title.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            className="w-full border p-2 rounded"
            rows="3"
            placeholder="Brief details about the offer"
          />
          {errors.description && <p className="text-red-600 text-sm">{errors.description.message}</p>}
        </div>

        {/* Course Selection */}
        <div>
          <label className="block font-medium mb-1">Applicable Course</label>
          <select
            {...register("course", { required: "Please select a course" })}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Course</option>
            <option value="NEET">NEET</option>
            <option value="JEE">JEE</option>
            <option value="UPSC">UPSC</option>
          </select>
          {errors.course && <p className="text-red-600 text-sm">{errors.course.message}</p>}
        </div>

        {/* Discount Percentage */}
        <div>
          <label className="block font-medium mb-1">Discount (%)</label>
          <input
            type="number"
            min="0"
            max="100"
            {...register("discount", {
              required: "Discount is required",
              min: { value: 0, message: "Minimum is 0%" },
              max: { value: 100, message: "Maximum is 100%" }
            })}
            className="w-full border p-2 rounded"
          />
          {errors.discount && <p className="text-red-600 text-sm">{errors.discount.message}</p>}
        </div>

        {/* Start Date */}
        <div>
          <label className="block font-medium mb-1">Start Date</label>
          <input
            type="date"
            {...register("startDate", { required: "Start date is required" })}
            className="w-full border p-2 rounded"
          />
          {errors.startDate && <p className="text-red-600 text-sm">{errors.startDate.message}</p>}
        </div>

        {/* End Date */}
        <div>
          <label className="block font-medium mb-1">End Date</label>
          <input
            type="date"
            {...register("endDate", { required: "End date is required" })}
            className="w-full border p-2 rounded"
          />
          {errors.endDate && <p className="text-red-600 text-sm">{errors.endDate.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="text-center mt-4">
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
          >
            Add Offer
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOffer;
