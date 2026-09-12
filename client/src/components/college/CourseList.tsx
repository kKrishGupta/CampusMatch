import React from 'react';
import { Course } from '@/types/college';
import { GraduationCap, Clock, Users, BookOpen } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export interface CourseListProps {
  courses: Course[];
}

export const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Offered Programs & Fee Structure</h3>
          <p className="text-xs text-slate-500">Browse official courses, seat capacity, annual fees, and eligibility criteria</p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-full">
          {courses.length} Programs
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-sm transition-all space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200/60">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-600 shrink-0" />
                <h4 className="font-bold text-slate-900 text-base">{course.name}</h4>
              </div>
              <span className="font-extrabold text-indigo-700 text-base">
                {formatCurrency(course.annualFees)}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>Duration: <strong className="text-slate-800">{course.durationYears} Years</strong></span>
              </div>
              {course.seats && (
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-slate-400" />
                  <span>Sanctioned Seats: <strong className="text-slate-800">{course.seats} Seats</strong></span>
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-slate-400" />
                <span>Degree: <strong className="text-slate-800">{course.degree}</strong></span>
              </div>
            </div>

            {course.eligibility && (
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-600">
                <span className="font-semibold text-slate-800">Eligibility Criteria:</span> {course.eligibility}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
