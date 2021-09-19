import React from 'react';

import { Footer } from '../Footer/Footer';
import { ImgTitle } from './ImgTitle';
import { Testimonials } from './Testimonials';
import { TitleContent } from './TitleContent';

export interface HomeProps {
  className?: string;
}

export const Home: React.FC<HomeProps> = (_props) => {
  return (
    <div>
      <div className="block text-center my-7">
        <h1 className="text-5xl font-bold">The modern landing page for</h1>
        <h1 className="text-3xl my-7 font-bold">React developer</h1>
        <p className="my-7">
          The easiest way to build React landing page in seconds
        </p>
        <button className="bg-blue-400 text-xl p-5 text-white font-bold rounded-md">
          Start your 14-day Free Trial
        </button>
      </div>
      <div className="antialiased w-full text-gray-700">
        <div className="max-w-screen-md mx-auto">
          <TitleContent />
          <ImgTitle />
          <div className="block text-center my-9">
            <h1 className="font-bold text-blue-500">Testimonials</h1>
            <h1 className="font-bold  text-5xl my-5">Customers Review</h1>
          </div>

          <Testimonials />

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
              <h1 className="font-bold text-blue-500  text-3xl my-5">
                PREMIUM
              </h1>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
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
      <Footer />
    </div>
  );
};
