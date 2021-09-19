export interface ImgProps {
  className?: string;
}

export const ImgTitle: React.FC<ImgProps> = (props) => {
  return (
    <div {...props}>
      <div>
        <div className="my-10">
          <div className="my-10 flex justify-between">
            <div className="w-6/12">
              <h1 className="font-bold  text-5xl my-5">Your title here</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="w-6/12 bg-gray-600 mx-6">
              <div>Your Img</div>
            </div>
          </div>
        </div>
        <div className="my-10">
          <div className="my-60 flex justify-between">
            <div className="w-6/12 bg-gray-600 ">
              <div>Your Img</div>
            </div>
            <div className="w-6/12 mx-6">
              <h1 className="font-bold  text-5xl my-5">Your title here</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="my-60">
          <div className="my-10 flex justify-between">
            <div className="w-6/12">
              <h1 className="font-bold  text-5xl my-5">Your title here</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="w-6/12 bg-gray-600 mx-6">
              <div>Your Img</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
