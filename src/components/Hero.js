import CoverImage from "../../public/images/profile/CoverPhoto.jpeg";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="text-center py-5 background-brazil ">
      <div className="container">
        <h1 className="section-title text-green">
          O que o futuro reserva para o Brasil!
        </h1>
        <p className="text-green">
          Pessoas interessadas em investir em Bitcoin que não conseguiram
          aproveitar durante os estágios iniciais devem determinar se investir
          agora seria eficaz.!
        </p>
        <p className="text-green">
          Entre nesse mercado revolucionário e comece a ganhar dinheiro hoje
          mesmo. Não espere mais!
        </p>
      </div>

      <div className="cover-wrapper">
        <Image
          src={CoverImage}
          alt="CubeCake"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
