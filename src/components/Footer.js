import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 text-sm">
      <p>
        &copy; 2025 Investimentos em Criptomoedas. Todos os direitos reservados.
      </p>
      <p className="mt-2">
        Este site coleta dados pessoais para melhorar sua experiência. Ao
        continuar, você concorda com nossa{" "}
        <Link href="/privacypolicy" legacyBehavior>
          <a
            className="text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de Privacidade
          </a>
        </Link>
        .
        {/* <a
          href="/privacy-policy"
          className="text-blue-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Política de Privacidade
        </a> */}
        .
      </p>
    </footer>
  );
}
