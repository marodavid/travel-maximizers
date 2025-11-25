import Slider from "react-slick";
import { Star } from 'lucide-react';

/**
 * TestimonialsSection Component - Testimonios con slider
 * 
 * SEO Features:
 * - H2 descriptivo
 * - Schema.org Review markup ready
 * - Social proof visible
 * - Stars visualization for rich snippets
 * 
 * @param {Object} props
 * @param {Object} props.t - Traducciones del idioma actual
 */
export default function TestimonialsSection({ t }) {
  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section 
      id="testimonials" 
      className="py-12 sm:py-16 lg:py-20 bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            id="testimonials-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {t.testimonials.title}
          </h2>
        </div>

        {/* Testimonials Slider */}
        <Slider {...sliderSettings}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="px-3">
              <article className="bg-gray-50 rounded-xl p-5 sm:p-6 shadow-sm transition-transform hover:-translate-y-1 h-full flex flex-col justify-between">
                <div>
                  {/* Stars */}
                  <div className="flex mb-3 sm:mb-4" aria-label="5 estrellas">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="text-yellow-400 fill-current"
                        size={18}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    "{t.testimonials[`quote${i}`]}"
                  </p>
                </div>
                {/* Customer Info */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {t.testimonials[`logo${i}`]}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-sm sm:text-base">
                      {t.testimonials[`customer${i}`]}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Cliente satisfecho
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}