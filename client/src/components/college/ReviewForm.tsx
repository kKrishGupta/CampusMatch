'use client';

import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Review, ReviewFormData } from '@/types/review';
import { ReviewService } from '@/services/review.service';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/components/ui/Toast';
import { useAuth } from '@/hooks/useAuth';

export interface ReviewFormProps {
  collegeId: string;
  collegeName: string;
  initialData?: Review | null;
  onSuccess: () => void;
  onCancel: () => void;
}

export const ReviewForm: React.FC<ReviewFormProps> = ({
  collegeId,
  collegeName,
  initialData,
  onSuccess,
  onCancel,
}) => {
  const { user } = useAuth();
  const { showToast } = useToast();

  const [rating, setRating] = useState<number>(initialData?.rating || 5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [title, setTitle] = useState<string>(initialData?.title || '');
  const [comment, setComment] = useState<string>(initialData?.comment || '');
  const [pros, setPros] = useState<string>(initialData?.pros?.join(', ') || '');
  const [cons, setCons] = useState<string>(initialData?.cons?.join(', ') || '');
  const [course, setCourse] = useState<string>(initialData?.userCourse || user?.targetCourse || 'B.Tech Student');

  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (rating < 1) {
      setError('Please select a star rating.');
      return;
    }

    if (!comment || comment.trim().length < 10) {
      setError('Please provide a review comment of at least 10 characters.');
      return;
    }

    setIsSubmitting(true);
    try {
      const formData: ReviewFormData = {
        rating,
        title: title || 'Campus Review',
        comment,
        pros,
        cons,
        course,
        passoutYear: initialData?.passoutYear || new Date().getFullYear(),
      };

      if (initialData) {
        await ReviewService.updateReview(initialData.id, formData);
        showToast('Your review has been updated successfully!', 'success');
      } else {
        await ReviewService.createReview(collegeId, formData, user?.name || 'Verified Student');
        showToast('Thank you! Your review has been published.', 'success');
      }
      onSuccess();
    } catch (err: any) {
      setError(err.message || 'Failed to submit review.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <h4 className="font-bold text-slate-900 text-base">
          {initialData ? `Update Review for ${collegeName}` : `Write a Review for ${collegeName}`}
        </h4>
        <p className="text-xs text-slate-500">Share your honest campus experience to help aspiring students.</p>
      </div>

      {error && (
        <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
          {error}
        </div>
      )}

      {/* Star Rating selection */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 block">
          Your Rating *
        </label>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => {
            const isFilled = (hoverRating || rating) >= star;
            return (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="p-1 focus:outline-none transition-transform hover:scale-110"
              >
                <Star
                  className={`w-7 h-7 ${
                    isFilled ? 'fill-amber-400 text-amber-400' : 'text-slate-300'
                  }`}
                />
              </button>
            );
          })}
          <span className="ml-2 text-sm font-bold text-slate-800">{rating} / 5 Stars</span>
        </div>
      </div>

      <Input
        label="Review Title"
        placeholder="e.g. Great faculty and top notch placement records"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        label="Your Course / Branch"
        placeholder="e.g. B.Tech Computer Science"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <div className="space-y-1.5">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 block">
          Detailed Review *
        </label>
        <textarea
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Describe your overall experience regarding academics, campus life, hostels, and placement opportunities..."
          className="w-full bg-white border border-slate-300 rounded-lg text-slate-900 text-sm p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input
          label="Pros (Comma separated)"
          placeholder="e.g. High placements, Great labs"
          value={pros}
          onChange={(e) => setPros(e.target.value)}
        />
        <Input
          label="Cons (Comma separated)"
          placeholder="e.g. High academic workload"
          value={cons}
          onChange={(e) => setCons(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
        <Button type="button" variant="outline" onClick={onCancel} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button type="submit" variant="primary" isLoading={isSubmitting}>
          {initialData ? 'Update Review' : 'Submit Review'}
        </Button>
      </div>
    </form>
  );
};
