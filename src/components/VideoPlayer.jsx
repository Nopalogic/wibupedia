"use client";

export default function VideoPlayer({ videoUrl }) {
  return (
    <div className="aspect-video md:aspect-auto md:h-full">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${videoUrl}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
