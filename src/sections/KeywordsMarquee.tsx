import { Fade } from "react-awesome-reveal";
import { KeyWords } from "../data/general";

export default function KeywordsMarquee() {
  return (
    <Fade>
      <section className="overflow-hidden  border-sky-400/20 bg-[#0281FC] py-5">
        <div className="marquee">
          <div className="marquee-content ">
            {[...KeyWords, ...KeyWords].map((item, index) => (
              <span key={index} className="mx-6 whitespace-nowrap  font-light  text-slate-200 tracking-wider">
                {item}
                <span className="ml-12  text-sky-400">•</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </Fade>
  );
}