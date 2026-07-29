import { Layout } from "@components";
import { Hero, Intro, Solution, Portfolio, VC } from "./components";

const sectionClass =
  "flex min-h-screen items-center justify-center bg-transparent bg-no-repeat px-6";

const Home = () => (
  <Layout className="home-page__container text-base">
    <main>
      <section className={`${sectionClass} pt-6`} aria-labelledby="hero-title">
        <Hero />
      </section>
      <section className={`${sectionClass} pt-6`} aria-labelledby="intro-title">
        <Intro />
      </section>
      <section
        className={`${sectionClass} pt-14 pb-4 min-[1080px]:pt-[120px] min-[1080px]:pb-6`}
        id="solution"
        aria-labelledby="solution-title"
      >
        <Solution />
      </section>
      <section
        className={`${sectionClass} pt-14 pb-4 min-[1080px]:pt-[120px] min-[1080px]:pb-6`}
        id="portfolio"
        aria-labelledby="portfolio-title"
      >
        <Portfolio />
      </section>
      <section
        className={`${sectionClass} pt-14 pb-4 min-[1080px]:pt-[120px] min-[1080px]:pb-6`}
        id="supply"
        aria-labelledby="vc-title"
      >
        <VC />
      </section>
    </main>
  </Layout>
);

export default Home;
