'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { College } from '@/types/college';
import { Review, ReviewRatingStats } from '@/types/review';
import { ReviewService } from '@/services/review.service';
import { Rating } from '@/components/ui/Rating';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { ReviewCard } from './ReviewCard';
import { ReviewForm } from './ReviewForm';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { MessageSquarePlus, Star } from 'lucide-react';
import { Skeleton } from '@/components/ui/Skeleton';

export interface ReviewSectionProps {
  college: College;
}

export const ReviewSection: React.FC<ReviewSectionProps> = ({ college }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  const [reviews, setReviews] = useState<Review[]>([]);
  const [stats, setStats] = useState<ReviewRatingStats | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingReview, setEditingReview] = useState<Review | null>(null);

  const loadReviewsData = useCallback(async () => {
    setIsLoading(true);
    try {
      const [list, ratingStats] = await Promise.all([
        ReviewService.getReviewsByCollegeId(college.id),
        ReviewService.getRatingStats(college.id),
      ]);
      setReviews(list);
      setStats(ratingStats);
    } catch {
      setReviews([]);
    } finally {
      setIsLoading(false);
    }
  }, [college.id]);

  useEffect(() => {
    loadReviewsData();
  }, [loadReviewsData]);

  const handleWriteClick = () => {
    setEditingReview(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (review: Review) => {
    setEditingReview(review);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-8">
      {/* Header & Write Review Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Student Reviews & Ratings</h3>
          <p className="text-xs text-slate-500">Real feedback from verified students and alumni</p>
        </div>
        <Button
          variant="primary"
          onClick={handleWriteClick}
          leftIcon={<MessageSquarePlus className="w-4 h-4" />}
        >
          Write a Review
        </Button>
      </div>

      {/* Breakdown Grid */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-xl bg-slate-50 border border-slate-200/80">
          {/* Average Badge */}
          <div className="flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-slate-200/80 pb-6 md:pb-0 md:pr-6">
            <span className="text-5xl font-black text-slate-900 mb-1">{stats.averageRating.toFixed(1)}</span>
            <Rating value={stats.averageRating} showValue={false} size="lg" className="mb-2" />
            <span className="text-xs font-semibold text-slate-600">
              Based on {stats.totalReviews || college.reviewsCount} reviews
            </span>
          </div>

          {/* Star Progress Bars */}
          <div className="md:col-span-2 space-y-2">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = stats.starCounts[star as 1 | 2 | 3 | 4 | 5] || 0;
              const total = stats.totalReviews || 1;
              const percentage = Math.round((count / total) * 100);

              return (
                <div key={star} className="flex items-center gap-3 text-xs">
                  <span className="w-12 text-slate-600 font-medium flex items-center gap-1">
                    {star} <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  </span>
                  <div className="flex-1 h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="w-10 text-right text-slate-500 font-medium">{percentage}%</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Review List */}
      {isLoading ? (
        <div className="space-y-4">
          <Skeleton variant="rectangular" className="h-32" />
          <Skeleton variant="rectangular" className="h-32" />
        </div>
      ) : reviews.length === 0 ? (
        <div className="text-center py-10 border border-dashed border-slate-200 rounded-xl bg-slate-50">
          <p className="text-slate-600 text-sm mb-3">No reviews submitted for this college yet.</p>
          <Button variant="outline" size="sm" onClick={handleWriteClick}>
            Be the first to write a review
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {reviews.map((rev) => (
            <ReviewCard key={rev.id} review={rev} onEdit={handleEditClick} />
          ))}
        </div>
      )}

      {/* Modal for Review Form */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} maxWidth="lg">
        <ReviewForm
          collegeId={college.id}
          collegeName={college.name}
          initialData={editingReview}
          onSuccess={() => {
            setIsModalOpen(false);
            setEditingReview(null);
            loadReviewsData();
          }}
          onCancel={() => {
            setIsModalOpen(false);
            setEditingReview(null);
          }}
        />
      </Modal>
    </div>
  );
};
