// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { toast } from 'react-toastify';
// import { db } from '../firebase-config';
// import {
//   collection,
//   addDoc,
//   onSnapshot,
//   deleteDoc,
//   doc,
//   updateDoc,
// } from 'firebase/firestore';

// const AddCourse = () => {
//   const [courses, setCourses] = useState([]);
//   const [editingId, setEditingId] = useState(null);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     watch,
//     setValue,
//     formState: { errors },
//   } = useForm();

//   const selectedModesRaw = watch('mode', []);
//   const selectedModes = Array.isArray(selectedModesRaw)
//     ? selectedModesRaw
//     : selectedModesRaw
//     ? [selectedModesRaw]
//     : [];

//   const courseRef = collection(db, 'courses');

//   // 📥 Fetch courses in real time
//   useEffect(() => {
//   const courseRef = collection(db, 'courses'); // moved inside
//   const unsub = onSnapshot(courseRef, (snapshot) => {
//     const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     setCourses(data);
//   });

//   return () => unsub();
// }, []);


//   // ✅ Add or Update
//   const onSubmit = async (data) => {
//     const formatted = {
//       title: data.title,
//       description: data.description,
//       mode: selectedModes,
//       fee: {
//         online: data.onlineFee ? Number(data.onlineFee) : null,
//         offline: data.offlineFee ? Number(data.offlineFee) : null,
//       },
//       createdAt: new Date(),
//     };

//     try {
//       if (editingId) {
//         await updateDoc(doc(db, 'courses', editingId), formatted);
//         toast.success('✅ Course updated!');
//         setEditingId(null);
//       } else {
//         await addDoc(courseRef, formatted);
//         toast.success('✅ Course added!');
//       }
//       reset();
//     } catch (err) {
//       console.error(err);
//       toast.error('❌ Failed to save course.');
//     }
//   };

//   // 🗑 Delete
//  const handleDelete = async (id) => {
//   try {
//     await deleteDoc(doc(db, 'courses', id));
//     toast.success('🗑 Course deleted');

//     // If the deleted course is being edited, reset the form
//     if (editingId === id) {
//       reset();
//       setEditingId(null);
//     }
//   } catch (err) {
//     console.error(err);
//     toast.error('❌ Failed to delete course.');
//   }
// };


//   // ✏️ Edit
//   const handleEdit = (course) => {
//     setEditingId(course.id);
//     setValue('title', course.title);
//     setValue('description', course.description);
//     setValue('mode', course.mode || []);
//     setValue('onlineFee', course.fee?.online);
//     setValue('offlineFee', course.fee?.offline);
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-4 mt-6">
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-2xl font-bold mb-4 text-center">
//           {editingId ? '✏️ Edit Course' : '➕ Add New Course'}
//         </h2>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           {/* Title */}
//           <div>
//             <label className="block font-medium mb-1">Course Title</label>
//             <input
//               type="text"
//               placeholder="e.g., NEET, JEE, UPSC"
//               {...register('title', { required: 'Course title is required' })}
//               className="w-full border p-2 rounded"
//             />
//             {errors.title && <p className="text-red-600 text-sm">{errors.title.message}</p>}
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block font-medium mb-1">Description</label>
//             <textarea
//               {...register('description', { required: 'Description is required' })}
//               className="w-full border p-2 rounded"
//               rows="3"
//               placeholder="Brief details about the course"
//             />
//             {errors.description && <p className="text-red-600 text-sm">{errors.description.message}</p>}
//           </div>

//           {/* Mode */}
//           <div>
//             <label className="block font-medium mb-1">Mode</label>
//             <div className="flex gap-4">
//               <label>
//                 <input type="checkbox" value="Online" {...register('mode')} /> Online
//               </label>
//               <label>
//                 <input type="checkbox" value="Offline" {...register('mode')} /> Offline
//               </label>
//             </div>
//           </div>

//           {/* Online Fee */}
//           {selectedModes.includes('Online') && (
//             <div>
//               <label className="block font-medium mb-1">Online Fee (₹)</label>
//               <input
//                 type="number"
//                 {...register('onlineFee', { required: 'Online fee required' })}
//                 className="w-full border p-2 rounded"
//               />
//               {errors.onlineFee && <p className="text-red-600 text-sm">{errors.onlineFee.message}</p>}
//             </div>
//           )}

//           {/* Offline Fee */}
//           {selectedModes.includes('Offline') && (
//             <div>
//               <label className="block font-medium mb-1">Offline Fee (₹)</label>
//               <input
//                 type="number"
//                 {...register('offlineFee', { required: 'Offline fee required' })}
//                 className="w-full border p-2 rounded"
//               />
//               {errors.offlineFee && <p className="text-red-600 text-sm">{errors.offlineFee.message}</p>}
//             </div>
//           )}

//           {/* Submit */}
//           <div className="text-center mt-4">
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//             >
//               {editingId ? 'Update Course' : 'Add Course'}
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Table of Courses */}
//       <div className="mt-10">
//         <h3 className="text-xl font-bold mb-4">📚 Courses List</h3>
//         <div className="overflow-auto">
//           <table className="min-w-full bg-white border">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="px-4 py-2 border">Title</th>
//                 <th className="px-4 py-2 border">Description</th>
//                 <th className="px-4 py-2 border">Mode</th>
//                 <th className="px-4 py-2 border">Fees</th>
//                 <th className="px-4 py-2 border">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {courses.map((course) => (
//                 <tr key={course.id}>
//                   <td className="border px-4 py-2">{course.title}</td>
//                   <td className="border px-4 py-2">{course.description}</td>
//                   <td className="border px-4 py-2">{course.mode?.join(', ')}</td>
//                   <td className="border px-4 py-2">
//                     {course.fee?.online && `Online: ₹${course.fee.online}`} <br />
//                     {course.fee?.offline && `Offline: ₹${course.fee.offline}`}
//                   </td>
//                   <td className="border px-4 py-2 space-x-2">
//                     <button
//                       className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
//                       onClick={() => handleEdit(course)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
//                       onClick={() => handleDelete(course.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//               {courses.length === 0 && (
//                 <tr>
//                   <td colSpan="5" className="text-center py-4 text-gray-500">
//                     No courses found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddCourse;


import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { db } from '../firebase-config';
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';

const AddCourse = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const [courses, setCourses] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const courseCollection = collection(db, 'courses');

  const fetchCourses = async () => {
    const snapshot = await getDocs(courseCollection);
    const fetched = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setCourses(fetched);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      const snapshot = await getDocs(collection(db, 'courses'));
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setCourses(data);
    };

    fetchCourses();
  }, []); // ✅ No warning now


  const selectedModesRaw = watch("mode", []);
  const selectedModes = Array.isArray(selectedModesRaw)
    ? selectedModesRaw
    : selectedModesRaw ? [selectedModesRaw] : [];

  const onSubmit = async (data) => {
    const formatted = {
      title: data.title,
      description: data.description,
      mode: selectedModes,
      fee: {
        online: data.onlineFee ? Number(data.onlineFee) : null,
        offline: data.offlineFee ? Number(data.offlineFee) : null,
      },
      createdAt: new Date(),
    };

    try {
      if (editingId) {
        await updateDoc(doc(db, 'courses', editingId), formatted);
        toast.success('✅ Course updated!');
        setEditingId(null);
      } else {
        await addDoc(courseCollection, formatted);
        toast.success('✅ Course added!');
      }
      reset();
      fetchCourses();
    } catch (err) {
      console.error(err);
      toast.error('❌ Failed to save course.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this course?')) return;
    try {
      await deleteDoc(doc(db, 'courses', id));
      toast.success('🗑️ Course deleted');
      fetchCourses();
    } catch (err) {
      console.error(err);
      toast.error('❌ Failed to delete');
    }
  };

  const handleEdit = (course) => {
    setEditingId(course.id);
    setValue('title', course.title);
    setValue('description', course.description);
    setValue('mode', course.mode);
    setValue('onlineFee', course.fee.online);
    setValue('offlineFee', course.fee.offline);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {editingId ? 'Edit Course' : 'Add New Course'}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 shadow rounded mb-8 space-y-4">

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

        <div>
          <label className="block font-medium mb-1">Mode</label>
          <div className="flex gap-4">
            <label><input type="checkbox" value="Online" {...register("mode")} /> Online</label>
            <label><input type="checkbox" value="Offline" {...register("mode")} /> Offline</label>
          </div>
        </div>

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

        <div className="text-center">
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            {editingId ? 'Update Course' : 'Add Course'}
          </button>
        </div>
      </form>

      {/* Table */}
      <h2 className="text-xl font-semibold mb-2">📋 All Courses</h2>
      <div className="overflow-auto">
        <table className="w-full table-auto border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-1">Title</th>
              <th className="border px-2 py-1">Mode</th>
              <th className="border px-2 py-1">Fees</th>
              <th className="border px-2 py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td className="border px-2 py-1">{course.title}</td>
                <td className="border px-2 py-1">{course.mode?.join(', ')}</td>
                <td className="border px-2 py-1">
                  Online: ₹{course.fee?.online || 0}<br />
                  Offline: ₹{course.fee?.offline || 0}
                </td>
                <td className="border px-2 py-1 flex gap-2 justify-center">
                  <button
                    onClick={() => handleEdit(course)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(course.id)}
                    className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {courses.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-3">No courses found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddCourse;
