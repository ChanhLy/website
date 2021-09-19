export interface TitleContentProps {
  className?: string;
}

export const TitleContent: React.FC<TitleContentProps> = (props) => {
  return (
    <div className="" {...props}>
      <div className="pt-16 pb-8">
        <div className="	 text-gray-900 flex justify-between">
          {/* {AppConfig.title} */}
          <div className="block text-center">
            <button className="rounded-full	bg-gray-300">IMG</button>
            <h1 className="font-bold my-5">Your title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="block text-center">
            <button className="rounded-full	bg-gray-300">IMG</button>
            <h1 className="font-bold my-5">Your title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="block text-center">
            <button className="rounded-full	bg-gray-300">IMG</button>
            <h1 className="font-bold my-5">Your title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        {/* <div className="text-xl">{AppConfig.description}</div> */}
      </div>
      <div className="block text-center my-9">
        <h1 className="font-bold text-blue-500">Features</h1>
        <h1 className="font-bold  text-5xl my-5">Your title here</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};
