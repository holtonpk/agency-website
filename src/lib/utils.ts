import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";
import {Metadata} from "next";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "Whitespace Media",
  description = "We specialize in organic marketing",
  image = `${process.env.NEXT_PUBLIC_SITE_URL}/image/favicon.ico`,
}: {
  title?: string;
  description?: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    icons: {
      icon: `${process.env.NEXT_PUBLIC_SITE_URL}/image/favicon.ico`,
      shortcut: `${process.env.NEXT_PUBLIC_SITE_URL}/image/favicon-16x16.png`,
      apple: `${process.env.NEXT_PUBLIC_SITE_URL}/image/apple-touch-icon.png`,
    },
    metadataBase: new URL("http://whitespace-media.com"),
    themeColor: "#FFF",
  };
}
