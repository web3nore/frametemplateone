import { NextRequest, NextResponse } from 'next/server';

///////////////////////////////////
//FOR DEPLOYOR: CHANGE THESE VARS//
///////////////////////////////////

const numFrames = 4  //how many images? (default: 4)

//For Carousel Frames
const carBtnTxt = "Next"  //what should button say (default: Next)

//For CTA Frame
const ctaLBtnTxt = "LFG"  //what should left button say (default: LFG)
const ctaRBtnTxt = "WAGMI" //what should right button say (default: WAGMI)

///////////////////////////////////
///////////////////////////////////
///////////////////////////////////

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams
  const id:any = searchParams.get("id")
  const idAsNumber = parseInt(id)

  const nextId = idAsNumber + 1

  if(idAsNumber === numFrames){
      return new NextResponse(`<!DOCTYPE html><html><head>
    <title>Final Frame</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${process.env.PIN_CID}/${id}.jpg" />
    <meta property="fc:frame:button:1" content="${ctaLBtnTxt}" />
    <meta property="fc:frame:button:1:action" content="post_redirect" />
    <meta property="fc:frame:button:2" content="${ctaRBtnTxt}" />
    <meta property="fc:frame:button:2:action" content="post_redirect" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
  </head></html>`);
  } else {
  return new NextResponse(
    `<!DOCTYPE html><html><head>
    <title>Frame ${id}</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${process.env.PIN_CID}/${id}.jpg" />
    <meta property="fc:frame:button:1" content="${carBtnTxt}" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
  </head></html>`);
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
