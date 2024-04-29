import {LucideProps} from "lucide-react";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="relative top-0 h-fit py-4 w-screen flex justify-between items-center px-8 bg-transparent">
      <Link className="flex items-center" href="/">
        <Logo className="fill-primary h-10 mb-1" />
        <h1 className="text-4xl font1 ml-2">Whitespace Media</h1>
      </Link>
      <div className="flex gap-8 ml-auto items-center">
        <Link href="/#stats" className=" capitalize">
          about
        </Link>
        <button className="text-primary capitalize">Our Work</button>

        <Link
          href="/contact"
          className={cn(
            buttonVariants({variant: "outline"}),
            " capitalize rounded-2xl bg-primary text-background hover:bg-primary hover:text-background transition-colors duration-500"
          )}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

function Logo({...props}: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="none"
      viewBox="0 0 751 309"
    >
      <path d="M75.64.9c32.508 3.243 65.735 16.303 92.57 36.297 9.365 6.935 26.023 23.327 33.227 32.514 10.806 13.78 16.659 24.498 49.797 91.597 35.929 72.412 35.749 72.142 47.005 79.708 14.948 9.997 37.37 10.177 52.408.54 4.952-3.152 14.498-12.879 15.308-15.671.36-1.171-4.322-11.619-14.138-31.343a26565.335 26565.335 0 01-36.739-74.214c-12.067-24.498-30.346-61.335-40.522-81.96C264.291 17.833 256.096.721 256.276.45c.181-.27 16.569-.45 36.56-.27 38.721.18 44.484.63 64.925 5.404 36.469 8.376 71.498 30.172 96.801 60.254 14.228 16.842 15.849 19.905 70.598 130.865 14.047 28.551 15.668 31.343 20.981 37.017 9.725 10.268 20.351 14.771 34.668 14.861 16.479 0 31.157-7.295 39.982-19.994l2.431-3.513-15.308-30.983c-8.285-17.022-25.394-51.697-37.91-76.916C535.605 47.645 512.373.54 512.373.27c0-.09 53.669-.27 119.313-.27C697.331 0 751 .36 751 .72s-9.995 20.806-22.152 45.484c-12.246 24.678-27.735 56.201-34.578 70.071-62.403 127.172-64.475 130.865-83.565 149.689-49.526 48.906-129.399 57.101-189.191 19.364-13.867-8.826-33.137-26.749-41.422-38.728-2.161-3.062-4.052-5.584-4.142-5.584-.18 0-2.701 3.332-5.673 7.475-6.123 8.466-20.801 22.967-30.976 30.532-18.73 14.141-44.394 24.768-67.987 28.191-42.862 6.214-82.033-3.783-117.782-30.082-8.195-6.034-24.493-22.877-31.337-32.514-5.853-8.196-25.483-46.654-65.915-129.244-6.033-12.429-21.251-43.141-33.678-68.27C10.175 21.976 0 1.081 0 .63 0-.27 66.275 0 75.64.9z"></path>
      <path d="M75.64.9c32.508 3.243 65.735 16.303 92.57 36.297 9.365 6.935 26.023 23.327 33.227 32.514 10.806 13.78 16.659 24.498 49.797 91.597 35.929 72.412 35.749 72.142 47.005 79.708 14.948 9.997 37.37 10.177 52.408.54 4.952-3.152 14.498-12.879 15.308-15.671.36-1.171-4.322-11.619-14.138-31.343a26565.335 26565.335 0 01-36.739-74.214c-12.067-24.498-30.346-61.335-40.522-81.96C264.291 17.833 256.096.721 256.276.45c.181-.27 16.569-.45 36.56-.27 38.721.18 44.484.63 64.925 5.404 36.469 8.376 71.498 30.172 96.801 60.254 14.228 16.842 15.849 19.905 70.598 130.865 14.047 28.551 15.668 31.343 20.981 37.017 9.725 10.268 20.351 14.771 34.668 14.861 16.479 0 31.157-7.295 39.982-19.994l2.431-3.513-15.308-30.983c-8.285-17.022-25.394-51.697-37.91-76.916C535.605 47.645 512.373.54 512.373.27c0-.09 53.669-.27 119.313-.27C697.331 0 751 .36 751 .72s-9.995 20.806-22.152 45.484c-12.246 24.678-27.735 56.201-34.578 70.071-62.403 127.172-64.475 130.865-83.565 149.689-49.526 48.906-129.399 57.101-189.191 19.364-13.867-8.826-33.137-26.749-41.422-38.728-2.161-3.062-4.052-5.584-4.142-5.584-.18 0-2.701 3.332-5.673 7.475-6.123 8.466-20.801 22.967-30.976 30.532-18.73 14.141-44.394 24.768-67.987 28.191-42.862 6.214-82.033-3.783-117.782-30.082-8.195-6.034-24.493-22.877-31.337-32.514-5.853-8.196-25.483-46.654-65.915-129.244-6.033-12.429-21.251-43.141-33.678-68.27C10.175 21.976 0 1.081 0 .63 0-.27 66.275 0 75.64.9z"></path>
    </svg>
  );
}
