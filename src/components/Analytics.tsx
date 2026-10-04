import Script from "next/script";

export default function Analytics() {
  const scriptUrl = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL;
  if (!scriptUrl?.startsWith("https://plausible.io/js/pa-")) return null;
  return <Script id="plausible-init" strategy="afterInteractive">{`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init();var script=document.createElement('script');script.async=true;script.src=${JSON.stringify(scriptUrl)};document.head.appendChild(script);`}</Script>;
}
