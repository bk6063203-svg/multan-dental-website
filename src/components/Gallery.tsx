// src/components/Gallery.tsx

import Image from "next/image";



export default function Gallery() {

  const galleryItems = [

    { id: 1, src: "/case-dentures.png", alt: "Dentures Case" },

    { id: 2, src: "/case-implants-2.png", alt: "Implants Case" },

    { id: 3, src: "/dr-chair.png", alt: "Dental Chair" },

    { id: 4, src: "/dr-degrees.png", alt: "Doctor Degrees" },

  ];



  return (

    <section id="gallery" className="py-24 px-6 bg-white">

      <div className="container mx-auto max-w-7xl">

        <div className="text-center mb-16 space-y-4">

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900">Our Gallery</h2>

          <p className="text-slate-600 max-w-lg mx-auto text-lg">

            A glimpse into our clinical excellence and patient transformations.

          </p>

        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {galleryItems.map((item) => (

            <div

              key={item.id}

              className="group relative aspect-square overflow-hidden rounded-3xl bg-slate-100 shadow-lg"

            >

              <Image

                src={item.src}

                alt={item.alt}

                fill

                className="object-cover transition-transform duration-700 group-hover:scale-110"

              />

              <div className="absolute inset-0 bg-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

