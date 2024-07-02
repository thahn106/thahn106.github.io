const ABOUT_TEXT = `
Hello!
I'm Thomas, and welcome to my page!
I'm a developer with a focus in data analysis and machine learning.
While my main interest is in data science, I also have experience in web development and software engineering.
`;

const About = () => {
  return (
    <section id="about" className="bg-black text-white">
      <div className="mx-auto max-w-2xl px-8 py-8 lg:py-36">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">About</h1>
          {ABOUT_TEXT.split("\n").map((text) => (
            <p className="mt-6 text-lg leading-4 lg:leading:8 text-gray-300">{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
