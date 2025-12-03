/**
 * VideoSection Component - Video de presentación
 * 
 * SEO Features:
 * - H2 descriptivo
 * - iframe con title apropiado
 * - Lazy loading del iframe (opcional con Intersection Observer)
 * - Semantic HTML
 * 
 * @param {Object} props
 * @param {Object} props.t - Traducciones del idioma actual
 * @param {string} props.videoUrl - URL del video de YouTube (opcional, usa default)
 */
export default function VideoSection({ t, videoUrl = "https://www.youtube.com/embed/xz3OHTTXa0Y" }) {
  return (
    <section 
      id="video" 
      className="py-12 sm:py-16 lg:py-20 bg-white"
      aria-labelledby="video-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 
            id="video-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4"
          >
            {t.video.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            {t.video.description}
          </p>
        </div>
        
        {/* Video Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl bg-gray-100">
            <iframe
              src={videoUrl}
              title="Travel Maximizers - Presentación"
              className="w-full h-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}