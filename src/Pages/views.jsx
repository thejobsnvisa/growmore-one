import React, { useEffect, useState } from "react";

export default function TodayViewsDemo() {
  const [totalViews, setTotalViews] = useState(0);
  const [todayViews, setTodayViews] = useState(0);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${import.meta.env.VITE_CHANNEL_ID}&key=${import.meta.env.VITE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.items || data.items.length === 0) return;

        const currentViews = parseInt(
          data.items[0].statistics.viewCount,
          10
        ) || 0;

        setTotalViews(currentViews);

        const todayKey = "views_start_of_day";

        const storedStart = localStorage.getItem(todayKey);

        // ✅ If first visit today → store start value
        if (!storedStart) {
          localStorage.setItem(todayKey, currentViews.toString());
          setTodayViews(0);
        } else {
          const startViews = parseInt(storedStart, 10) || 0;
          const diff = currentViews - startViews;
          setTodayViews(diff > 0 ? diff : 0);
        }

        // ✅ Reset at new day (midnight logic)
        const lastDate = localStorage.getItem("last_saved_date");
        const todayDate = new Date().toDateString();

        if (lastDate !== todayDate) {
          localStorage.setItem("views_start_of_day", currentViews.toString());
          localStorage.setItem("last_saved_date", todayDate);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center w-[320px]">
        <h2 className="text-2xl font-bold mb-6 text-red-500">
          Today Views Tracker
        </h2>

        <div className="space-y-4">
          <p className="text-lg">
            👁️ Total Views: <strong>{totalViews.toLocaleString()}</strong>
          </p>

          <p className="text-lg">
            📅 Today Views: <strong>{todayViews.toLocaleString()}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}