function MainPagina() {
  return (
    <main className="pl-[200px] w-full h-full bg-[#fffcf2]">
      <section className="px-30 py-52 bg-[#fffcf2]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight text-[#eb5e28]">
              INNOVATIVE WEB SOLUTIONS BY JOHN DOE
            </h1>
            <p className="text-[#403d39] max-w-xl">
              As a passionate full-stack developer, I bring ideas to life
              through clean, efficient, and scalable code. With expertise in
              modern web technologies and a keen eye for design, I create
              digital experiences that not only meet but exceed client
              expectations. Let's collaborate to turn your vision into a
              stunning reality.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#eb5e28] text-[#fffcf2] rounded hover:bg-[#403d39] transition-colors font-medium"
            >
              VIEW MY PROJECTS →
            </a>
          </div>
          <div className="relative aspect-square w-[500px] rounded-full overflow-hidden bg-gradient-to-br from-[#eb5e28]/20 to-transparent">
            <img
              src="/placeholder.svg?height=500&width=500"
              width={500}
              height={500}
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </section>
      
    </main>
  );
}

export default MainPagina;
