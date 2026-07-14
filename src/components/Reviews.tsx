"use client";
import { useState, useEffect } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([
    { name: "Ahmed Khan", text: "Best dental experience in Multan!", rating: 5 },
    { name: "Sara Ali", text: "Loved the results! Dr. Alizay is amazing.", rating: 5 }
  ]);
  
  const [isMounted, setIsMounted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2); // Shuru mein sirf 2 reviews dikhenge
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("my-reviews");
    if (saved) setReviews(JSON.parse(saved));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return alert("Please select a star rating!");
    
    const newReview = { name, text, rating };
    const updated = [...reviews, newReview];
    setReviews(updated);
    localStorage.setItem("my-reviews", JSON.stringify(updated));
    
    setName("");
    setText("");
    setRating(0);
  };

  if (!isMounted) return null;

  return (
    <section id="reviews" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-black text-black text-center mb-12">Patient Reviews</h2>

        {/* Review List */}
        <div className="grid gap-6 mb-8">
          {reviews.slice(0, visibleCount).map((r, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <div className="flex text-yellow-400 mb-3 text-xl">{"★".repeat(r.rating)}</div>
              <p className="text-slate-800 text-lg mb-4 italic font-medium">"{r.text}"</p>
              <h4 className="font-black text-black text-lg">— {r.name}</h4>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < reviews.length && (
          <button 
            onClick={() => setVisibleCount(reviews.length)}
            className="w-full py-4 border-2 border-slate-900 text-slate-900 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition-all mb-16"
          >
            View More Reviews
          </button>
        )}

        {/* Add Review Form */}
        <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-3xl shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Leave a Review</h3>
          
          <input required placeholder="Your Name" className="w-full p-4 mb-4 rounded-xl text-black bg-white outline-none" onChange={(e) => setName(e.target.value)} value={name} />
          <textarea required placeholder="Your Feedback" className="w-full p-4 mb-4 rounded-xl text-black bg-white outline-none h-32" onChange={(e) => setText(e.target.value)} value={text} />
          
          <div className="flex gap-2 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className={`text-3xl transition-colors ${star <= (hover || rating) ? "text-yellow-400" : "text-slate-600"}`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              >
                ★
              </button>
            ))}
          </div>

          <button type="submit" className="w-full py-4 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-600 transition-all">
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
}