export default function BentoGrid() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-dark text-white min-h-screen">
        {/* Intro Section */}
        <div className="col-span-2 bg-neutral-800 p-6 rounded-2xl">
          <h1 className="text-3xl font-bold">Hi, I'm [Your Name]</h1>
          <p className="mt-2 text-lg">Creative software engineer passionate about NLP & expressive design.</p>
        </div>
  
        {/* Profile Image */}
        <div className="bg-neutral-700 rounded-2xl overflow-hidden">
          <img src="/me.jpg" className="object-cover h-full w-full" alt="Profile" />
        </div>
  
        {/* Featured Project */}
        <div className="bg-neutral-700 p-4 rounded-2xl">
          <h2 className="font-semibold text-xl">Featured Project</h2>
          <p className="mt-1">Real-time sentiment analyzer using HuggingFace & Streamlit.</p>
        </div>
  
        {/* Contact Block */}
        <div className="col-span-2 bg-neutral-800 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold">Get in touch</h2>
          <p className="mt-1">I’d love to collaborate or chat about LLMs & creative code.</p>
          <div className="mt-4 space-x-4">
            <a href="https://twitter.com/yourhandle" className="text-accent">Twitter</a>
            <a href="https://github.com/yourhandle" className="text-accent">GitHub</a>
            <a href="mailto:your@email.com" className="text-accent">Email</a>
          </div>
        </div>
      </div>
    )
  }