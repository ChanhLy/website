export interface TestimonialsProps {
  className?: string;
}

export const Testimonials: React.FC<TestimonialsProps> = (props) => {
  return (
    <div className="bg-blue-50" {...props}>
      <div className="	 text-gray-900 flex justify-between ">
        {/* {AppConfig.title} */}
        <div className="block text-center my-7">
          <button className="rounded-full	bg-gray-300">IMG</button>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <h1 className="font-bold my-5">Your title</h1>
        </div>

        <div className="block text-center my-7">
          <button className="rounded-full	bg-gray-300">IMG</button>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <h1 className="font-bold my-5">Your title</h1>
        </div>

        <div className="block text-center my-5">
          <button className="rounded-full	bg-gray-300">IMG</button>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <h1 className="font-bold my-5">Your title</h1>
        </div>
      </div>
    </div>
  );
};
