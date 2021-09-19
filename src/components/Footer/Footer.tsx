export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = (props) => {
  return (
    <div className=" bg-gray-300 w-full	h-56 text-center " {...props}>
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
  );
};
