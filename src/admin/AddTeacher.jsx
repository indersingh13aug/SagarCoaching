import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';

const subjectOptions = [
  'Biology', 'Mathematics', 'Physics', 'Chemistry',
  'History', 'Geography', 'Polity', 'Economy',
  'Environment', 'Science & Technology'
];

const courseOptions = ['NEET', 'JEE', 'UPSC'];

const AddTeacher = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    const formatted = {
      name: data.name,
      subject: data.subject,
      experience: Number(data.experience),
      courses: data.courses || [],
    };

    try {
      await axios.post('/api/teachers', formatted);
      toast.success("Teacher added successfully!");
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to add teacher.");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Teacher</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Teacher Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full border p-2 rounded"
            placeholder="e.g., Dr. Ramesh Verma"
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
        </div>

        {/* Subject */}
        <div>
          <label className="block font-medium mb-1">Subject</label>
          <select
            {...register("subject", { required: "Subject is required" })}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Subject</option>
            {subjectOptions.map((subject) => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
          {errors.subject && <p className="text-red-600 text-sm">{errors.subject.message}</p>}
        </div>

        {/* Experience */}
        <div>
          <label className="block font-medium mb-1">Experience (in years)</label>
          <input
            type="number"
            min="0"
            {...register("experience", {
              required: "Experience is required",
              min: { value: 0, message: "Minimum is 0" }
            })}
            className="w-full border p-2 rounded"
          />
          {errors.experience && <p className="text-red-600 text-sm">{errors.experience.message}</p>}
        </div>

        {/* Courses */}
        <div>
          <label className="block font-medium mb-1">Associated Courses</label>
          <div className="flex gap-4">
            {courseOptions.map(course => (
              <label key={course}>
                <input type="checkbox" value={course} {...register("courses")} /> {course}
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-4">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
          >
            Add Teacher
          </button>
        </div>

      </form>
    </div>
  );
};

export default AddTeacher;
