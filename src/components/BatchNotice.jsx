import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

const BatchNotice = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      course: data.course,
      batchName: data.batchName,
      description: data.description,
      startDate: data.startDate
    };

    try {
      await axios.post('/api/batches', payload);
      toast.success("Batch notice posted successfully!");
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to post batch notice.");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Post New Batch Notice</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Course */}
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
          {errors.course && <p className="text-red-600 text-sm">{errors.course.message}</p>}
        </div>

        {/* Batch Name */}
        <div>
          <label className="block font-medium mb-1">Batch Name</label>
          <input
            type="text"
            {...register("batchName", { required: "Batch name is required" })}
            className="w-full border p-2 rounded"
            placeholder="e.g., Target NEET 2026"
          />
          {errors.batchName && <p className="text-red-600 text-sm">{errors.batchName.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            className="w-full border p-2 rounded"
            rows={3}
            placeholder="Details about this batch (timings, focus, etc.)"
          />
          {errors.description && <p className="text-red-600 text-sm">{errors.description.message}</p>}
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

        {/* Submit */}
        <div className="text-center mt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Post Notice
          </button>
        </div>
      </form>
    </div>
  );
};

export default BatchNotice;
