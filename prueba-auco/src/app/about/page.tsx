"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import me from "/public/me.jpg";
import React from "react";

export default function page() {
  return (
    <AnimatePresence mode="wait">
      <motion.div>
        <section className="py-20">
          <div className="flex flex-col items-center justify-center min-h-screen">
            <Image
              placeholder="blur"
              src={me}
              alt="Imagen del autor"
              height={500}
              width={500}
              className="rounded-md w-9/12 lg:w-1/3"
            />
            <div className="max-w-screen-lg mx-auto my-10">
              <h1 className="text-4xl font-bold text-[#041840] text-center">
                Mauricio López
              </h1>
              <p className=" text-gray-500 text-base text-center italic font-light">
                Desarrollador Frontend
              </p>
              <h2 className="text-xl mt-5 text-center ">Acerca de mí</h2>
            </div>
            <div className="lg:max-w-screen-lg mx-auto w-9/12">
              <p className="mb-5">
                Hola, soy Mauricio, un entusiasta del aprendizaje y de la
                creación, me gusta mucho aprender nuevas cosas cada día y
                profundizar en lo que me apasiona. Me ha llevado por este camino
                del desarrollo tecnológico. Desde pequeño he tenido una fijación
                por crear cosas, sea el formato que sea, y esta pasión me ha
                impulsado a dedicarme al mundo de la tecnología, donde puedo
                convertir nuevas ideas en soluciones concretas a problemas que
                van surgiendo.
              </p>
              <p className="my-5">
                Una de mis mayores motivaciones en este campo es la oportunidad
                de aprender y crecer constantemente. El mundo del desarrollo es
                uno que te obliga a estar en constante evolución para no
                quedarte atrás, siempre hay nuevos caminos a diferentes
                problemas o te da la oportunidad de revisitar viejos caminos y
                mejorarlos. Esto es algo de lo que más valoro en mi trabajo y
                que deseo seguir incursionando con la oportunidad que me brinda
                Auco, donde espero poder seguir creciendo y aprender de los
                demás compañeros.
              </p>
              <p className="my-5">
                Cuando no estoy trabajando en el mundo de la tecnología, me
                gusta mucho pintar modelos a escala. Principalmente, disfruto
                mucho de pintar miniaturas para diferentes juegos de mesa. Es
                una actividad que me permite crear de una manera más analógica y
                me ayuda a despejar la mente. Además, dedico parte de cada día
                para mejorar mi bienestar físico, ya sea yendo al gimnasio o
                haciendo cardio en casa.
              </p>
              <p className="mt-5 mb-10 pb-10 ">
                Tengo habilidades para trabajar en equipo y analizar problemas
                de manera crítica. Esto lo valoro profundamente y creo que es
                uno de mis mayores atributos. Colaborar con colegas para
                implementar soluciones efectivas que beneficien el bien común o
                la meta final es algo que me mueve bastante y me motiva a seguir
                creciendo y aprendiendo. La combinación de estas habilidades,
                junto con mi facilidad para desempeñarme en campos tecnológicos,
                me convierten en un profesional versátil y comprometido.
              </p>
            </div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/6gO7z1Cp93s?si=ImsE6dcLDqiR073K"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-9/12 lg:w-1/3"
            ></iframe>
          </div>
        </section>
        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
