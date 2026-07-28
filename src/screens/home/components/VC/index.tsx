import { CardGrid } from "./components";

const VC = () => (
  <div className="w-full max-w-[1200px]">
    <h1
      id="vc-title"
      className="text-[40px] font-semibold text-white min-[1080px]:text-[80px]"
    >
      We are not only a <strong className="font-bold text-accent">VC</strong>
    </h1>
    <p className="py-6 text-xl font-light text-white min-[1280px]:text-2xl">
      We may not be able to bring you to Sand Hill Road. We may not be able to
      improve your elevator pitch. We may not be able to teach you how to draft
      your termsheet. But we can do what an ordinary VC cannot do. We are
      special in these ways:
    </p>
    <CardGrid />
  </div>
);

export default VC;
