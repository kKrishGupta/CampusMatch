import React from 'react';
import { Review } from '@/types/review';
import { Rating } from '@/components/ui/Rating';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle2, Edit3 } from 'lucide-react';
import { getInitials } from '@/lib/utils';

export interface ReviewCardProps {
  review: Review;
  onEdit?: (review: Review) => void;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review, onEdit }) => {
  return (
    <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3">
      {/* User Info Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm shrink-0">
            {getInitials(review.userName)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-slate-900 text-sm">{review.userName}</h4>
              {review.isVerifiedStudent && (
                <Badge variant="success" size="sm" icon={<CheckCircle2 className="w-3 h-3" />}>
                  Verified
                </Badge>
              )}
            </div>
            <p className="text-xs text-slate-500">
              {review.userCourse || 'Student'} • Class of {review.passoutYear || '2025'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-medium">{review.createdAt}</span>
          {onEdit && (
            <button
              type="button"
              onClick={() => onEdit(review)}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg border border-indigo-200/80 transition-colors"
              title="Edit Review"
            >
              <Edit3 className="w-3 h-3" /> Edit
            </button>
          )}
        </div>
      </div>

      {/* Rating & Title */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <Rating value={review.rating} showValue={false} size="sm" />
          <h5 className="font-bold text-slate-900 text-sm">{review.title}</h5>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">{review.comment}</p>
      </div>

      {/* Pros & Cons */}
      {((review.pros && review.pros.length > 0) || (review.cons && review.cons.length > 0)) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
          {review.pros && review.pros.length > 0 && (
            <div className="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100">
              <span className="font-semibold text-emerald-800 block mb-1">PROS</span>
              <ul className="list-disc list-inside space-y-0.5 text-emerald-700">
                {review.pros.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          )}

          {review.cons && review.cons.length > 0 && (
            <div className="p-2.5 rounded-lg bg-rose-50/60 border border-rose-100">
              <span className="font-semibold text-rose-800 block mb-1">CONS</span>
              <ul className="list-disc list-inside space-y-0.5 text-rose-700">
                {review.cons.map((c, idx) => (
                  <li key={idx}>{c}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
