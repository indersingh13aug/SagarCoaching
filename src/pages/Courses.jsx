import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; // ✅ import it

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate(); // ✅ move this inside the component

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'courses'));
        const courseList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCourses(courseList);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Our Courses</h1>

      {courses.length === 0 ? (
        <p className="text-gray-600">No courses available currently.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              onClick={() => navigate(`/batches?course=${encodeURIComponent(course.title)}`)}
              className="bg-white border border-indigo-200 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">{course.title}</h2>
              <p className="text-gray-700 mb-3">{course.description}</p>

              <p className="text-gray-800">
                <strong>Fees:</strong>{' '}
                {course.mode?.includes('Online') && course.fee?.online && (
                  <>Online ₹{course.fee.online} </>
                )}
                {course.mode?.includes('Offline') && course.fee?.offline && (
                  <>| Offline ₹{course.fee.offline}</>
                )}
              </p>

              <p className="text-gray-800">
                <strong>Mode:</strong> {course.mode?.join(', ')}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
