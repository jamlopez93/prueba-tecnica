import Image from "next/image";
import me from "/public/me.jpg";

export default function page() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Image
          placeholder="blur"
          src={me}
          alt="Imagen del autor"
          height={500}
          width={500}
          className="rounded-md"
        />
        <h1 className="text-4xl font-bold text-[#041840] mt-5">
          Mauricio López
        </h1>
        <p className=" text-gray-500 text-base">Desarrollador Frontend</p>
        <h2 className="text-xl my-5">Acerca de mí</h2>
        <div className="max-w-screen-lg mx-auto p-4">
          <p className="my-5">
            Soy una persona apasionada por el aprendizaje y la exploración
            constante. Mi interés innato por adquirir nuevos conocimientos y
            profundizar en lo que me apasiona me ha llevado a seguir una carrera
            como desarrollador tecnológico. Desde que era pequeño, he tenido una
            fascinación por crear cosas, y esta pasión me ha impulsado a
            dedicarme al mundo de la tecnología, donde tengo la oportunidad de
            convertir mis ideas en soluciones concretas.{" "}
          </p>
          <p className="my-5">
            Una de las cosas que más valoro de mi trabajo es la oportunidad
            constante de aprender y crecer. La tecnología es un campo en
            constante evolución, y estar al día con las últimas tendencias y
            herramientas es fundamental para ofrecer soluciones efectivas. Me
            siento motivado por el desafío de resolver problemas de manera
            creativa y encontrar las soluciones más eficientes.
          </p>
          <p className="my-5">
            Cuando no estoy inmerso en el mundo de la tecnología, disfruto de
            actividades que alimentan mi creatividad y bienestar. Pintar
            miniaturas es una de mis pasiones, donde puedo dar rienda suelta a
            mi imaginación y trabajar en proyectos artísticos. Además, soy un
            apasionado del fitness y dedico tiempo a mi bienestar físico en el
            gimnasio.
          </p>
          <p className="my-5">
            Mi habilidad para trabajar en equipo y analizar problemas de manera
            crítica es algo que valoro profundamente. Me encanta colaborar con
            colegas para abordar desafíos complejos y encontrar soluciones
            efectivas que beneficien a todos. Creo que la combinación de mi amor
            por el aprendizaje constante, mi pasión por la tecnología y mis
            habilidades de trabajo en equipo me convierten en un profesional
            versátil y comprometido.
          </p>
          <p className="my-5">
            En resumen, soy una persona curiosa y apasionada que disfruta de la
            tecnología, la creatividad y el trabajo en equipo. Siempre estoy
            dispuesto a asumir nuevos desafíos y seguir aprendiendo para crecer
            tanto personal como profesionalmente.
          </p>
        </div>
      </div>
    </section>
  );
}
