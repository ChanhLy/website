import { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <>
    <div className="antialiased w-full text-gray-700">
      {props.meta}
      <div className="max-w-screen-md mx-auto">
        <div className="">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
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
        <div className="block text-center my-9">
          <h1 className="font-bold text-blue-500">Testimonials</h1>
          <h1 className="font-bold  text-5xl my-5">Customers Review</h1>
        </div>
        <div className="bg-blue-50">
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

        <div className="block text-center my-28">
          <h1 className="font-bold text-blue-500">Pricing</h1>
          <h1 className="font-bold  text-5xl my-5">Flexible Plans</h1>
        </div>

        <div className="flex justify-around">
          <div className="block text-center w-2/6	border-dotted border-4">
            <h1 className="font-bold text-blue-500  text-3xl my-5">FREE</h1>
            <h2 className="font-bold text-xl">$0/mo</h2>
            <div className="block text-justify my-5 mx-5">
              <p>1 Team Members</p>
              <p>1 Website</p>
              <p>1 GB Storage</p>
              <p>1 TB Transfer</p>
              <p> Email Support</p>
            </div>
            <button className="bg-gray-300 w-9/12 text-black text-2xl my-3">
              Get Started
            </button>
          </div>

          <div className="block text-center w-2/6 mx-5 border-dotted border-4	">
            <h1 className="font-bold text-blue-500  text-3xl my-5">PREMIUM</h1>
            <h2 className="font-bold text-xl">$19/mo</h2>
            <div className="block text-justify my-5 mx-5">
              <p>5 Team Members</p>
              <p>5 Website</p>
              <p>5 GB Storage</p>
              <p>5 TB Transfer</p>
              <p> Email Support</p>
            </div>
            <button className="bg-gray-300 w-9/12 text-black text-2xl my-3">
              Get Started
            </button>
          </div>

          <div className="block text-center w-2/6 border-dotted border-4	">
            <h1 className="font-bold text-blue-500  text-3xl my-5">
              ENTERPRISE
            </h1>
            <h2 className="font-bold text-xl">$99/mo</h2>
            <div className="block text-justify my-5 mx-5">
              <p>30 Team Members</p>
              <p>30 Website</p>
              <p>30 GB Storage</p>
              <p>30 TB Transfer</p>
              <p>Email Support</p>
            </div>
            <button className="bg-gray-300 w-9/12 text-black text-2xl my-3">
              Get Started
            </button>
          </div>
        </div>
        <div className="block text-center my-28">
          <h1 className="font-bold text-blue-500">FAQ</h1>
          <h1 className="font-bold  text-5xl my-5">You have Question ?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
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

        <div className=" flex justify-between my-7 bg-blue-200 rounded-md">
          <div className="m-9">
            <h1>lorem ipsum dolor sit amet , consectetur adpicing elit</h1>
            <h1>Start your Free Trial.</h1>
          </div>
          <div className="m-9 bg-blue-500 rounded-lg">
            <button className="text-blue-50 text-3xl">Get Started</button>
          </div>
        </div>

        <div className=" text-center py-8 text-sm">
          {/* © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{" "} */}
        </div>
      </div>
    </div>
    <div className=" bg-gray-300 w-full	h-56 text-center ">
      <div className="flex justify-around p-8	">
        <div>
          <h1 className="rounded-2xl">LOGO</h1>
        </div>
        <div>
          <ul>
            <li className="font-bold">Products</li>
            <li>1 link</li>
            <li>2 link</li>
            <li>3 link</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-bold">Resources</li>
            <li>1 link</li>
            <li>2 link</li>
            <li>3 link</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-bold">Contact</li>
            <li>1 link</li>
            <li>2 link</li>
            <li>3 link</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-bold">Legal</li>
            <li>1 link</li>
            <li>2 link</li>
            <li>3 link</li>
          </ul>
        </div>
      </div>
      <div className="my-7">
        © Copyright {new Date().getFullYear()} . Powered with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
        by <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
        {/*
         * PLEASE READ THIS SECTION
         * We'll really appreciate if you could have a link to our website
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * Thank you for your support it'll mean a lot for us.
         */}
      </div>
    </div>
  </>
);

export { Main };
