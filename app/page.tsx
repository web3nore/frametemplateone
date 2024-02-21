import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"  //Starting button text. Edit future buttons in api/frame/route.ts file
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${process.env.PIN_CID}/0.jpg`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'CTA Carousel Frame Template',   //Title shows if someone shares online
  description: 'ggs Web3 No Re',  //Description if someone shares online
  openGraph: {
    title: 'CTA Carousel Frame Template', //Title as seen on FC, like you'd see on a Twitter link
    description: 'ggs Web3 No Re',  //Description as seen on FC, same as above
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}`]
  },
  other: {
    ...frameMetadata,
  },
};

//change text in header tag to show a different message when opened in browser
//need something there, but can be basic since web dev isn't really the point
export default function Page() {
  return (
    <>
      <h1>This works a lot better in a frame :)</h1>
    </>
  );
}