import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Review {
  id: string;
  avatar: string;
  name: string;
  comment: string;
  rating: number;
}

interface ReviewSectionProps {
  propertyId: string;
}


const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
     
      const [reviews, setReviews] = useState<Review[]>([]);
      const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get<Review[]>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${propertyId}/reviews`);
        //const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

 
  return (
  <div className="space-y-4">
    {reviews.map((review) => (
      <div key={review.id} className="border p-4 rounded shadow">
        <div className="flex items-center space-x-4">
          <Image src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold">{review.name}</p>
            <p className="text-yellow-500">Rating: {review.rating} ⭐</p>
          </div>
        </div>
        <p className="mt-2 text-gray-700">{review.comment}</p>
      </div>
    ))}
  </div>
);

};

export default ReviewSection;

