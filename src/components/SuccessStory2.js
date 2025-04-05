import React from "react";
import FernandoMottaImage from "../../public/images/profile/SuccessStory2.png"; // Replace with the correct image path
import Image from "next/image";
export default function SuccessStory2() {
  return (
    <section id="success-story" className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Image
              src={FernandoMottaImage}
              alt="CubeCake"
              style={{ height: "600px" }}
            />
          </div>
          <div className="col-lg-6">
            <h2 className="display-4">
              Empreendedores Brasileiros que Construíram Negócios em Torno do
              Bitcoin
            </h2>
            <h3 className="mb-4">
              Fernando Motta, de São Paulo: De um entusiasta de criptomoedas a
              um multibilionário
            </h3>
            <p className="lead">
              Fernando Motta, de São Paulo, foi um dos primeiros a adotar o
              Bitcoin. Ele descobriu a criptomoeda pela primeira vez em 2012,
              enquanto participava de um fórum de criptografia. Apesar de suas
              dúvidas iniciais, ele decidiu comprar aproximadamente trezentos
              bitcoins, pois o preço estava abaixo de 10 dólares cada.
            </p>
            <p>
              Com o passar dos anos, o valor do Bitcoin aumentou
              exponencialmente, mas Fernando optou por não vender suas
              participações. Ao invés disso, ele manteve seus bitcoins com a
              firme crença no futuro da criptomoeda. Quando o valor do Bitcoin
              ultrapassou a marca de 50.000 dólares, Fernando já havia se
              tornado um multibilionário.
            </p>
            <p>
              Hoje, Fernando Motta dedica seus recursos financeiros ao
              financiamento de startups de blockchain em todo o Brasil. Ele se
              tornou uma figura proeminente no setor cripto, ajudando a
              impulsionar o desenvolvimento e a inovação no Brasil com sua visão
              futurista e investimentos estratégicos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
