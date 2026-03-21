import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const API_KEY = import.meta.env.VITE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;

const Videos = () => {
  const [latestVideos, setLatestVideos] = useState([]);
  const [liveStreams, setLiveStreams] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // ✅ Reusable fetch function
  const fetchYouTubeData = async (eventType = "") => {
    try {
      let url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6&type=video`;

      if (eventType) {
        url += `&eventType=${eventType}`;
      }

      const res = await fetch(url);
      const data = await res.json();

      if (data.error) {
        console.error("YouTube API Error:", data.error.message);
        setError(true);
        return [];
      }

      return data.items || [];
    } catch (err) {
      console.error("Fetch Error:", err);
      setError(true);
      return [];
    }
  };

  useEffect(() => {
    // 🔥 Check ENV first
    if (!API_KEY || !CHANNEL_ID) {
      console.error("Missing API KEY or CHANNEL ID");
      setError(true);
      setLoading(false);
      return;
    }

    const loadData = async () => {
      setLoading(true);

      const latest = await fetchYouTubeData();
      const live = await fetchYouTubeData("completed"); // past live streams

      setLatestVideos(latest);
      setLiveStreams(live);
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <div className="w-full bg-white">
      {/* HEADER */}
      <section className="bg-[#28535B] py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-15">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">
            YouTube Insights & Resources
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pt-16 md:pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-[#28535B] mb-6">
            Explore Our YouTube Insights & Resources
          </h2>

          <p className="text-gray-500 max-w-5xl mx-auto text-base leading-relaxed">
            Explore our YouTube channel for expert migration advice,
            step-by-step guides, and inspiring success stories.
          </p>

          {/* Loading */}
          {loading && (
            <p className="mt-6 text-gray-500">Loading videos...</p>
          )}

          {/* Error */}
          {error && !loading && (
            <p className="mt-6 text-red-500">
              Failed to load videos. Please try again later.
            </p>
          )}
        </div>
      </section>

      {/* LATEST VIDEOS */}
      {!loading && !error && latestVideos.length > 0 && (
        <section className="pb-16 px-6 md:px-16 max-w-7xl mx-auto">
          <h3 className="text-2xl font-semibold text-[#28535B] mb-8 border-l-4 border-[#28535B] pl-4">
            Latest Uploads
          </h3>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {latestVideos.map((video) => (
              <SwiperSlide key={video.id.videoId}>
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-md transition">
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id.videoId}`}
                      title={video.snippet.title}
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-gray-800 line-clamp-2">
                      {video.snippet.title}
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      {/* LIVE STREAMS */}
      {!loading && !error && liveStreams.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <h3 className="text-2xl font-semibold text-[#28535B] mb-8 border-l-4 border-red-600 pl-4">
              Past Live Sessions
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {liveStreams.map((stream) => (
                <div key={stream.id.videoId}>
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${stream.id.videoId}`}
                      title={stream.snippet.title}
                      allowFullScreen
                    />
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
                      LIVE
                    </span>
                  </div>

                  <h5 className="mt-4 font-semibold text-gray-700">
                    {stream.snippet.title}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Videos;