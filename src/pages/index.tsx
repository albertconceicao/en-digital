import Head from 'next/head';

import bonequinhoComBolsas from '../assets/cliente_w.png';
import Logo from '../assets/logo.svg';
import { Hero } from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Planejamento de Obras | EN Digital!</title>
        <meta name="description" content="Conheça aqui o melhor curso de Planejamento de Obras do Brasil" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <Hero />
        
      </main>
    </div>
  );
}
