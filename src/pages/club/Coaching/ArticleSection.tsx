const ArticleSection = () => {
  const articles = [
    {
      date: "Aug 15, 2023",
      category: "Training",
      title: "HOW TO TRAIN SMARTER. NOT HARDER",
      article:
        "Discover effective training techniques to maximize your performance and avoid burnout. Learn how to balance intensity and recovery for optimal results.",
    },
    {
      date: "Aug 25, 2023",
      category: "Cricket",
      title: "CRICKET FOR KIDS",
      article:
        "Engaging cricket training programs designed specifically for kids. Foster a love for the game while developing essential skills.",
    },
    {
      date: "Sep 10, 2023",
      category: "Squash",
      title: "SQUASH COACHING",
      article:
        "Expert squash coaching to enhance your skills and performance on the court. Join our programs for personalized training and guidance.",
    },
  ];
  return (
    <section className="relative text-white mt-20">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <img
          src="https://images.unsplash.com/photo-1625401586060-f12be3d7cc57?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Color Shadow Overlay */}
      <div className="absolute inset-0 gradient-secondary"></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-24 pb-20">
        <p className="text-white font-bold font-sans uppercase text-sm tracking-widest mb-4">
          From the blog
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold mb-7">
          Latest articles
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 px-20">
          {articles.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between group h-[360px] bg-white text-black text-start md:px-10 md:py-12 overflow-hidden"
            >
              <div>
                <div className="flex justify-between items-center font-sans mb-4">
                  <p className="text-lg font-semibold">{item.category}</p>
                  <p className="text-gray-500">{item.date}</p>
                </div>

                <h2 className="text-2xl font-semibold my-4">{item.title}</h2>
                <p className="line-clamp-3 text-lg font-sans text-gray-500">
                  {item.article}
                </p>
              </div>
              <div>
                <button className="flex items-center gap-2 py-2  rounded-full overflow-hidden">
                  {/* Hidden text, slides in on hover*/}
                  <span className="max-w-0 overflow-hidden text-lg font-sans font-semibold whitespace-nowrap transition-all duration-800 ease-in-out group-hover:max-w-xs">
                    Read More
                  </span>
                  {/* Arrow (always visible) */}
                  <span className="text-2xl transition-transform duration-800 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
