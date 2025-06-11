import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddBatch = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Example POST request (replace with your backend API)
      await axios.post('/api/batches', data);

      toast.success("Batch added successfully!");
      reset();
    } catch (err) {
      toast.error("Failed to add batch. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Batch</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Course Selection */}
        <div>
          <label className="block font-medium mb-1">Course</label>
          <select
            {...register("course", { required: "Course is required" })}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Course</option>
            <option value="NEET">NEET</option>
            <option value="JEE">JEE</option>
            <option value="UPSC">UPSC</option>
          </select>
          {errors.course && (
            <p className="text-red-600 text-sm mt-1">{errors.course.message}</p>
          )}
        </div>

        {/* Start Date */}
        <div>
          <label className="block font-medium mb-1">Batch Start Date</label>
          <input
            type="date"
            {...register("startDate", { required: "Start date is required" })}
            className="w-full border p-2 rounded"
          />
          {errors.startDate && (
            <p className="text-red-600 text-sm mt-1">{errors.startDate.message}</p>
          )}
        </div>

        {/* Offer Deadline */}
        <div>
          <label className="block font-medium mb-1">Offer Valid Until</label>
          <input
            type="date"
            {...register("offerEnd", { required: "Offer end date is required" })}
            className="w-full border p-2 rounded"
          />
          {errors.offerEnd && (
            <p className="text-red-600 text-sm mt-1">{errors.offerEnd.message}</p>
          )}
        </div>

        {/* Discount */}
        <div>
          <label className="block font-medium mb-1">Discount (%)</label>
          <input
            type="number"
            min="0"
            max="100"
            {...register("discount", {
              required: "Discount is required",
              min: { value: 0, message: "Min value is 0" },
              max: { value: 100, message: "Max value is 100" }
            })}
            className="w-full border p-2 rounded"
          />
          {errors.discount && (
            <p className="text-red-600 text-sm mt-1">{errors.discount.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Add Batch
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBatch;
