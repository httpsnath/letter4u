import { letter } from "./letter-content";

export default function LetterContent() {
  return (
    <div className="w-full h-full px-8 py-10 overflow-y-auto">

      <h2 className="
                text-3xl
                font-serif
                italic
                text-rose-900
                text-center
                mb-8
                border-b
                border-rose-200
                pb-4
              ">
        {letter.greeting}
      </h2>

      <div className="
                font-serif
                leading-relaxed
                space-y-5
                
                text-sm
                md:text-base
                text-rose-950/80
                tracking-wide
                text-justify
              ">
        {letter.paragraphs.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}
      </div>

        <p className="pt-8 text-right italic text-rose-900">{letter.closing} <br /> <span className="text-xl mt-2 block font-semibold">{letter.signature}</span></p>


    </div>
  );
}