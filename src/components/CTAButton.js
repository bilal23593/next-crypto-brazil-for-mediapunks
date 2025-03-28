import { useEffect, useState } from "react";

export default function CTAButton() {
  const [dynamicUrl, setDynamicUrl] = useState("//143.198.219.40/?_lp=1");

  useEffect(() => {
    const params = window.location.search.substring(1); // Get query params
    setDynamicUrl(`//143.198.219.40/?_lp=1&${params}`);
  }, []);

  return (
    <a className="cta-btn-fixed" href={dynamicUrl} target="_blank">
      🚀 Junte-se Agora
    </a>
  );
}
