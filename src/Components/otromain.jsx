function OtroMain(){
    return (
    <main className="w-full h-full bg-[#fffcf2]">
        <section className=" px-4 py-16">
        <h2 className="text-3xl font-bold text-[#eb5e28] mb-12 text-center">What I Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-lg bg-[#ccc5b9]">
            <h3 className="text-xl font-semibold mb-2 text-[#252422]">Full-Stack Expertise</h3>
            <p className="text-[#403d39] text-sm">
              Proficient in both front-end and back-end technologies, I deliver comprehensive solutions 
              that seamlessly integrate all aspects of web development.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-[#ccc5b9]">
            <h3 className="text-xl font-semibold mb-2 text-[#252422]">Responsive Design</h3>
            <p className="text-[#403d39] text-sm">
              I create adaptive and fluid layouts that ensure your website looks and functions 
              flawlessly across all devices and screen sizes.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-[#ccc5b9]">
            <h3 className="text-xl font-semibold mb-2 text-[#252422]">Performance Optimization</h3>
            <p className="text-[#403d39] text-sm">
              I optimize code and assets to ensure fast load times and smooth performance, 
              enhancing user experience and SEO rankings.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-[#ccc5b9]">
            <h3 className="text-xl font-semibold mb-2 text-[#252422]">Modern Frameworks</h3>
            <p className="text-[#403d39] text-sm">
              Leveraging cutting-edge frameworks and libraries like React, Next.js, and Node.js, 
              I build robust and scalable web applications.
            </p>
          </div>
        </div>
      </section>
      </main>
    )
}

export default OtroMain;