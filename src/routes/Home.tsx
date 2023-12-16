export default function Home() {
  return (
    <>
      <section className="flex flex-wrap gap-5 justify-between items-center flex-col lg:flex-row">
        <div className="w-full lg:w-2/5">
          <h1 className="text-5xl text-rrc-red-light mb-4">What is AoTTG?</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            iaculis, ante id posuere posuere, ex mauris faucibus arcu, eget
            rhoncus ex arcu at mauris. Ut nec tristique tortor. Quisque accumsan
            felis eget eros venenatis pulvinar. Maecenas viverra est nec diam
            ultricies, eu dapibus est viverra. Phasellus lobortis id justo ut
            eleifend. Suspendisse neque elit, semper eu sollicitudin in, laoreet
            vitae orci. Aliquam mollis, leo non posuere rutrum, diam enim
            venenatis nisl, eget dapibus mauris diam eget sem. Nulla suscipit
            mauris sed elit luctus, sed dapibus velit congue. Curabitur tempor
            rhoncus cursus. Nulla molestie velit dui. Integer hendrerit sapien
            et laoreet convallis. Pellentesque urna sem, ultrices at urna at,
            egestas volutpat est. Donec scelerisque viverra justo, nec ultricies
            libero hendrerit nec. In sed eros nibh. Pellentesque aliquet, nibh
            eu lacinia tristique, nisi felis molestie sem, non aliquam lacus
            arcu sed purus.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/eDSy9_K11lg?si=_Kn4J-MAHb0PcCAj"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <hr className="my-10 border-slate-600" />

      <section className="flex flex-wrap gap-5 justify-between items-center flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/NS-amoLvsDs?si=2iq-yOh-JzF6eKhS"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full lg:w-2/5">
          <h1 className="text-5xl text-rrc-blue-lighter mb-4 text-right">
            What is the Ranking Community?
          </h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            iaculis, ante id posuere posuere, ex mauris faucibus arcu, eget
            rhoncus ex arcu at mauris. Ut nec tristique tortor. Quisque accumsan
            felis eget eros venenatis pulvinar. Maecenas viverra est nec diam
            ultricies, eu dapibus est viverra. Phasellus lobortis id justo ut
            eleifend. Suspendisse neque elit, semper eu sollicitudin in, laoreet
            vitae orci. Aliquam mollis, leo non posuere rutrum, diam enim
            venenatis nisl, eget dapibus mauris diam eget sem. Nulla suscipit
            mauris sed elit luctus, sed dapibus velit congue. Curabitur tempor
            rhoncus cursus. Nulla molestie velit dui. Integer hendrerit sapien
            et laoreet convallis. Pellentesque urna sem, ultrices at urna at,
            egestas volutpat est. Donec scelerisque viverra justo, nec ultricies
            libero hendrerit nec. In sed eros nibh. Pellentesque aliquet, nibh
            eu lacinia tristique, nisi felis molestie sem, non aliquam lacus
            arcu sed purus.
          </p>
        </div>
      </section>
    </>
  );
}
