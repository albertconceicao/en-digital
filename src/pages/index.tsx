import Head from 'next/head';
import { Hero } from '../components/Hero';
import { SubHero } from '../components/SubHero';
import { Potential } from '../components/Potential';
import { Methodology } from '../components/Methodology';
import { FindCourse } from '../components/FindCourse';
import { Market } from '../components/Market';
import { CourseModules } from '../components/CourseModules';
import { JobPosting } from '../components/JobPosting';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Planejamento de Obras | EN Digital!</title>
        <meta
          name="description"
          content="Conheça aqui o melhor curso de Planejamento de Obras do Brasil"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <Hero />
        <SubHero />
        <Potential />
        <Methodology />
        <FindCourse />
        <Market />
        <JobPosting />
        <CourseModules />
      </main>
    </div>
  );
}
