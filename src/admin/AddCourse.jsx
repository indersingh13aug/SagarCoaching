import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';

const subjectOptions = [
  'Biology', 'Mathematics', 'Physics', 'Chemistry',
  'History', 'Geography', 'Polity', 'Economy',
  'Environment', 'Science & Technology'
];

const AddCourse = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm();

  // Safe mode selection (ensures it's always an array)
  const selectedModesRaw = watch("mode", []);
  const selectedModes = Array.isArray(selectedModesRaw)
    ? selectedModesRaw
    : selectedModesRaw ? [selectedModesRaw] : [];

  const onSubmit = async (data) => {
    const formatted = {
      title: data.title,
      mode: selectedModes,
      fee: {
        online: data.onlineFee ? Number(data.onlineFee) : null,
        offline: data.offlineFee ? Number(data.offlineFee) : null,
      },
      subjects: data.subjects || [],
    };

    try {
      await axios.post('/api/courses', formatted);
      toast.success("✅ Course added successfully!");
      reset();
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to add course.");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Course</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Course Title */}
        <div>
          <label className="block font-medium mb-1">Course Title</label>
          <input
            type="text"
            placeholder="e.g., NEET, JEE, UPSC"
            {...register("title", { required: "Course title is required" })}
            className="w-full border p-2 rounded"
          />
          {errors.title && <p className="text-red-600 text-sm">{errors.title.message}</p>}
        </div>

        {/* Course Mode */}
        <div>
          <label className="block font-medium mb-1">Mode</label>
          <div className="flex gap-4">
            <label><input type="checkbox" value="Online" {...register("mode")} /> Online</label>
            <label><input type="checkbox" value="Offline" {...register("mode")} /> Offline</label>
          </div>
        </div>

        {/* Online Fee */}
        {selectedModes.includes("Online") && (
          <div>
            <label className="block font-medium mb-1">Online Fee (₹)</label>
            <input
              type="number"
              {...register("onlineFee", { required: "Online fee required" })}
              className="w-full border p-2 rounded"
            />
            {errors.onlineFee && <p className="text-red-600 text-sm">{errors.onlineFee.message}</p>}
          </div>
        )}

        {/* Offline Fee */}
        {selectedModes.includes("Offline") && (
          <div>
            <label className="block font-medium mb-1">Offline Fee (₹)</label>
            <input
              type="number"
              {...register("offlineFee", { required: "Offline fee required" })}
              className="w-full border p-2 rounded"
            />
            {errors.offlineFee && <p className="text-red-600 text-sm">{errors.offlineFee.message}</p>}
          </div>
        )}

        {/* Subjects */}
        <div>
          <label className="block font-medium mb-1">Subjects</label>
          <div className="grid grid-cols-2 gap-2">
            {subjectOptions.map((subject) => (
              <label key={subject}>
                <input type="checkbox" value={subject} {...register("subjects")} /> {subject}
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-4">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
