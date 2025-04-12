import React from "react";
import RachelSiegelImage from "../../public/images/profile/SuccessStory1.png"; // Adjust the path accordingly
import Image from "next/image";
export default function SuccessStory1() {
  return (
    <section id="success-story" className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h2 className="display-4">
              Os Primeiros Dias do Bitcoin no Brasil
            </h2>
            <h3 className="mb-2">
              De Professora a Influenciadora de Criptomoedas – Rachel Siegel
            </h3>
            {/* Image visible only on small screens */}
            <div className="mb-4">
              <Image
                src={RachelSiegelImage}
                alt="Rachel Siegel"
                className="img-fluid w-100"
              />
            </div>

            <p className="lead">
              O caminho de Rachel Siegel para a fama no mundo cripto é um
              clássico exemplo de como pequenos passos podem levar a grandes
              conquistas. Antes de se tornar uma influenciadora de criptomoedas,
              Siegel trabalhava como professora substituta na cidade de Nova
              York, lidando com uma renda modesta e pouco conhecimento sobre
              cripto. Com formação em teatro e experiência em produção, ela não
              tinha nenhum conhecimento técnico sobre blockchain ou moedas
              digitais.
            </p>
            <p>
              A virada aconteceu em 2017, quando ela recebeu um convite
              inesperado para uma festa pós-conferência sobre criptomoedas, o
              que despertou seu interesse. A partir daí, ela começou a investir
              apenas 25 dólares por semana — o que sobrava de seus salários.
              Pouco a pouco, seus investimentos começaram a crescer, e logo ela
              percebeu o verdadeiro potencial do mercado.
            </p>
            <p>
              Hoje, Rachel Siegel deixou o emprego como professora para trás.
              Como fundadora de sua plataforma, Crypto Finally, ela se tornou
              uma defensora popular da adoção em massa das criptomoedas, criando
              conteúdos divertidos e acessíveis para alcançar a Geração Z. Com
              mais de 85.000 seguidores ao redor do mundo e milhões de dólares
              em ganhos, Rachel provou que, mesmo com um começo pequeno, é
              possível alcançar um grande sucesso com persistência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
