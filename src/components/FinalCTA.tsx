import Section from "@/components/Section";
import { SITE } from "@/lib/content";

export default function FinalCTA() {
  return (
    <Section>
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <h2 className="t-h1 text-white leading-none">Let’s Play <br/><span className="italic text-zinc-500 font-light">to Win.</span></h2>
          <p className="t-body mt-12 max-w-xl">15–30 min call · clarity first · no forms — just pick a time that suits your rhythm.</p>
          
          <div className="mt-12 flex gap-6">
            <a href="https://calendly.com/choccc/choc-meeting-room" className="t-button bg-amber-400 text-black px-10 py-5 rounded-full font-bold hover:scale-105 transition">
              Book a Call
            </a>
            <a href="#top" className="t-button border border-zinc-800 px-10 py-5 rounded-full hover:bg-zinc-900 transition">
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}