

const Club = () => {
    return (
        <div className="md:flex my-20 w-full">
            <div className="relative">
                <img className="md:w-2/3 mx-auto md:h-screen" src="https://img.freepik.com/premium-photo/close-up-football-action-scene-with-competing-soccer-players-stadium_207634-6522.jpg?w=740" />
                <p className="text-white text-3xl font-semibold bg-lime-950 md:w-2/4 text-center md:py-10 md:absolute bottom-0 right-16">OUR COURTS MAKE <br /> THE WORLDS TOP 10</p>
            </div>
            <div className="md:w-2/4 md:px-10 mx-3 md:mx-auto my-auto mt-6 md:mt-0">
                <h2 className="text-2xl md:text-5xl font-bold mb-8">WE WELCOME YOU AT OUR CLUB</h2>
                <p className="text-lg text-gray-600 mb-4">We are thrilled to have you join us on this exciting journey. Whether you are a seasoned athlete or a sports enthusiast looking to explore new horizons, our club offers a warm and inviting environment for everyone.</p>
                <p className="text-lg text-gray-600 mb-10"> Come, be a part of our family, and lets create unforgettable memories together at our club!</p>
                <button className="btn btn-wide text-white bg-green-400">JOIN OUR CLUB</button>
            </div>
        </div>
    );
};

export default Club;