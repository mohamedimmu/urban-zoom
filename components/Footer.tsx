import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        {/* Footer Logo */}
        <div className="flex flex-co justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="Urban Zoom Logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Urban Zoom <br /> All rights reserved &copy;
          </p>
        </div>

        {/* Footer Logo */}
        <div className="footer__links ">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title} className="footer__link">
              <h3 className="font-bold">{footerLink.title}</h3>
              {footerLink.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Rights Reserved  */}
      <div className="flex items-center justify-between flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 w-full">
        <p>@2023 Urban Zoom. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
