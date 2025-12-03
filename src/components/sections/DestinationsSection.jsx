/**
 * DestinationsSection Component - Destinos sugeridos con flip cards
 * 
 * VERSIÓN: Con imports dinámicos de Vite (para src/assets)
 * 
 * SEO Features:
 * - H2 con keywords de destinos
 * - Alt text descriptivo en imágenes
 * - Lazy loading de imágenes
 * - Structured data ready (Place/TouristDestination)
 * 
 * @param {Object} props
 * @param {Object} props.t - Traducciones del idioma actual
 */
export default function DestinationsSection({ t }) {
  const destinationKeys = [
    "italia",
    "jordania",
    "tailandia",
    "marruecos",
    "colombia",
    "panama",
    "peru",
    "mexico",
    "brasil",
    "croacia",
    "austria",
    "japon",
    "oktoberfest",
  ];

  // ✅ Función helper para obtener imagen de Vite
  const getImageUrl = (key) => {
    return new URL(`../../assets/images/destinations/${key}.jpg`, import.meta.url).href;
  };

  return (
    <section 
      id="suggested-destinations" 
      className="w-full py-12 md:py-24 lg:py-32"
      aria-labelledby="destinations-heading"
    >
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 
              id="destinations-heading"
              className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline"
            >
              {t.suggestedDestinations.title}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t.suggestedDestinations.subtitle}
            </p>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="mx-auto mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-7xl">
          {destinationKeys.map((key) => {
            const dest = t.suggestedDestinations.destinations[key];
            if (!dest) return null;

            // ✅ CORRECCIÓN: Usar new URL para imports dinámicos con Vite
            const imageUrl = getImageUrl(key);

            return (
              <article 
                key={key} 
                className="group h-96 w-full [perspective:1000px]"
              >
                <div className="relative h-full w-full rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                  {/* Front */}
                  <div className="absolute inset-0">
                    <img
                      src={imageUrl}
                      alt={`${dest.name} - Destino de viaje`}
                      loading="lazy"
                      className="h-full w-full rounded-xl object-cover shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/40 p-6">
                      <h3 className="text-2xl font-bold text-white font-headline text-center">
                        {dest.name}
                      </h3>
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 h-full w-full rounded-xl bg-cover bg-center p-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${imageUrl})`,
                    }}
                  >
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <h3 className="text-2xl font-bold font-headline text-white">
                        {dest.name}
                      </h3>
                      <p className="mt-4 text-base text-gray-200">
                        {dest.description}
                      </p>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}