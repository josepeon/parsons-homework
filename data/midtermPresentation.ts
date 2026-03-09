import { Homework } from '@/types/homework';

export const midtermPresentation: Homework = {
  id: 'midterm-presentation',
  title: 'SPATIAL COMMERCE',
  week: 'MIDTERM PRESENTATION',
  slug: 'midterm-presentation',
  prompts: [
    {
      label: 'THE PROBLEM',
      question: 'Why is fashion retail still stuck in a flat, 2D product-page paradigm when the technology for immersive spatial shopping already exists?',
      slides: [
        {
          title: 'THE GAP',
          content: 'Every major fashion brand sells through a flat grid of thumbnails on a white background, the same layout Zappos used in 2004. We have photorealistic 3D engines, spatial computing headsets, and AI agents that hold conversations, yet a $3,200 Bottega Veneta bag is still sold through a JPEG carousel and an "Add to Cart" button. Spatial commerce, shopping embedded in navigable 3D environments, is not a future trend. It is happening now.',
          video: '/images/midterm-presentation/slide-1.mp4',
          aspectRatio: 16 / 9,
        },
        {
          title: 'DEFINING SPATIAL COMMERCE',
          content: 'Spatial commerce is not VR shopping. It is not putting on a headset and walking through a digital mall. It means embedding real transactional capability (browse, select, purchase, confirm) inside three-dimensional environments people already spend time in: game engines, virtual worlds, AR overlays, mixed reality. The distinction matters: "building a store in VR" is a gimmick. "Making existing spatial experiences shoppable" changes everything. McKinsey estimated up to $5 trillion in metaverse value by 2030, with e-commerce as a leading segment.',
          image: '/images/midterm-presentation/slide-2.jpg',
          aspectRatio: 1000 / 666,
        },
        {
          title: 'RETAIL FOLLOWS MEDIA',
          content: 'Retail formats have always tracked the dominant medium. Sears catalogs followed the postal system. Department stores followed urbanization. TV gave us QVC. The internet gave us e-commerce ($5.8 trillion globally by 2023). Social media gave us Instagram shopping and TikTok Shop. The pattern repeats: a medium reaches mass adoption, attention migrates, and commerce follows. Today the dominant spatial medium is the game engine. Unreal Engine was downloaded over 30 million times in 2023. That is not niche. That is infrastructure.',
          image: '/images/midterm-presentation/slide-3.jpg',
          aspectRatio: 1000 / 562,
        },
      ],
    },
    {
      label: 'THE LANDSCAPE',
      question: 'Who is building spatial commerce today, and what technologies enable it?',
      slides: [
        {
          title: 'LUXURY GOES SPATIAL',
          content: 'Luxury has been the most aggressive early mover. Gucci Town in Roblox attracted 19.9 million visits in two weeks. Balenciaga debuted Fall 2021 as a video game. Nike acquired RTFKT Studios and launched .SWOOSH for digital sneakers. But these experiments share a limitation: they treat the spatial environment as marketing, not as a sales channel. You buy virtual Gucci items for your avatar, but you do not buy a real bag that ships to your house. The transaction stays inside the game economy.',
          image: '/images/midterm-presentation/slide-4.jpg',
          aspectRatio: 1080 / 1349,
        },
        {
          title: 'OH AND NOOON',
          content: 'Through OH, we built a proof of concept that runs a full Shopify-synced purchase flow inside Unreal Engine. You walk through a spatial environment, interact with products from a real fashion brand (Nooon), add items to a cart, check out with real payment, and the order routes through existing logistics. Browse, cart, checkout, confirmation, all inside the engine. No browser redirect. The environment is not a billboard for the store. It is the store. O-OH, our AI agent, operates inside the space with voice, tool access, and real transactional capability.',
          video: '/images/midterm-presentation/slide-5.mp4',
          aspectRatio: 16 / 9,
        },
        {
          title: 'THE TECHNOLOGY STACK',
          content: 'Three converging layers make this viable now. First, game engines deliver photorealistic quality at interactive frame rates; UE5\'s Nanite and Lumen make clothing look real: drape, texture, lighting. Second, commerce APIs have matured: Shopify\'s Storefront API lets you build any front end and plug into real payment, inventory, and fulfillment. Third, AI agents add a layer flat e-commerce never had: a voiced, spatially aware character that greets you, understands what you want, pulls up items, and walks you through checkout.',
          image: '/images/midterm-presentation/slide-6.svg',
          aspectRatio: 1,
        },
      ],
    },
    {
      label: 'THE THESIS',
      question: 'Why does spatial commerce matter specifically for fashion, and what is the future?',
      slides: [
        {
          title: 'WHY FASHION',
          content: 'Fashion has a problem spatial commerce solves better than any other medium. Online return rates average 30% (vs. 8-10% in-store) because you cannot touch fabric, see drape, or understand scale from a photo. Products with 3D/AR models see 94% higher conversion and 40% fewer returns. But the bigger reason is brand world-building. Fashion sells worlds, not just garments. Ralph Lauren sells the Hamptons. Supreme sells downtown scarcity culture. A product page cannot communicate a world. A spatial environment can.',
          video: '/images/midterm-presentation/slide-7.mp4',
          aspectRatio: 16 / 9,
        },
        {
          title: 'THE HOT TAKE',
          content: 'Within ten years, the traditional product detail page (hero image, size selector, add-to-cart button) will feel as dated as a mail-order catalog does today. The shift will not happen through VR headsets. It will happen through game engines rendering in the browser via WebGPU, AR on phones that actually works, and AI agents that make spatial environments navigable without a learning curve. The bottleneck is not technology; it is organizational. Fashion brands lack 3D artists, engine programmers, and interaction designers. That hiring gap is the real barrier, and it is temporary.',
          image: '/images/midterm-presentation/slide-8.jpg',
          aspectRatio: 474 / 592,
        },
        {
          title: 'FIRST MOVER ADVANTAGE',
          content: 'The brands that figure this out first will own a format advantage similar to what early Instagram adopters had in 2013. Everyone eventually got on Instagram, but brands that understood the medium earliest built audiences latecomers never caught. The same dynamic will play out with spatial commerce. Shopping always follows attention, and attention has already moved into spatial environments. 3.2 billion people played video games in 2023. The question is not if but when. My bet (literally, since this is what I spend my days building) is that the "when" is already happening.',
          image: '/images/midterm-presentation/slide-9.jpg',
          aspectRatio: 474 / 592,
        },
      ],
    },
  ],
};
