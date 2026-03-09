export interface MidtermEssay {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  course: string;
  date: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  works_cited: string[];
}

export const midterm: MidtermEssay = {
  slug: 'spatial-commerce',
  title: 'SPATIAL COMMERCE',
  subtitle: 'Why the Product Page Is Already Dead',
  author: 'Jose Peon',
  course: 'Fashion Analysis - Parsons School of Design',
  date: 'March 2026',
  sections: [
    {
      heading: '',
      paragraphs: [
        'Here is something I think about constantly: every major fashion brand in the world is still selling clothes through a flat grid of thumbnails on a white background. The same layout Zappos used in 2004. We have photorealistic real-time 3D engines, spatial computing headsets, AI agents that can hold conversations and take actions. Yet the primary way someone buys a $3,200 Bottega Veneta bag is by scrolling through a carousel of JPEGs and clicking "Add to Cart." That gap between what technology can do and what retail actually does is the macro trend I want to examine. I think spatial commerce, the integration of shopping into navigable, immersive, three-dimensional environments, is not a future trend. It is happening now, and it will fundamentally restructure how fashion is discovered, experienced, and purchased within the next decade.',
      ],
    },
    {
      heading: 'WHAT SPATIAL COMMERCE ACTUALLY IS',
      paragraphs: [
        'First, definitions. Spatial commerce is not virtual reality shopping. It is not putting on a headset and walking through a digital mall. That framing killed the conversation prematurely because it sounds ridiculous, and honestly, it kind of is. What spatial commerce actually means is embedding transactional capability (browse, select, purchase, confirm) inside three-dimensional environments that people already spend time in. Game engines, virtual worlds, AR overlays, mixed reality spaces. The key distinction is between "building a store in VR" (which almost nobody wants) and "making existing spatial experiences shoppable" (which changes everything).',
        'McKinsey estimated in 2022 that the metaverse could generate up to $5 trillion in value by 2030, with e-commerce as one of the largest segments (McKinsey & Company, 2022). Morgan Stanley projected a similar figure, estimating the metaverse TAM at $8 trillion, with luxury and fashion as key verticals given their dependence on aspiration and experience (Morgan Stanley, 2022). Those numbers get cited a lot, and I honestly do not know if they are accurate. What I do know is that the underlying behavior shift is real: consumers under 25 already spend more time in spatial digital environments (games, social worlds, AR platforms) than on traditional websites. According to Newzoo, 3.2 billion people played video games in 2023, and the time they spend in those environments keeps increasing (Newzoo, 2023). The question is not whether shopping will follow attention. Shopping always follows attention. The question is how.',
      ],
    },
    {
      heading: 'A BRIEF HISTORY OF RETAIL FORMATS',
      paragraphs: [
        'Retail formats have always tracked the dominant media of their era. The Sears catalog (1888) was a product of the postal system and railroad logistics. Department stores like Le Bon Marche (1852) were products of urbanization and plate glass manufacturing. Television gave us QVC and the Home Shopping Network. The internet gave us e-commerce, which Statista reports reached $5.8 trillion globally in 2023 (Statista, 2024). Social media gave us Instagram shopping and TikTok Shop.',
        'The pattern is always the same: a new medium reaches mass adoption, people spend increasing amounts of time in it, and commerce migrates to meet them there. The current dominant spatial medium is the game engine. Unreal Engine and Unity are not just for games anymore; they now power architectural visualization, film production (The Mandalorian\'s virtual sets), automotive configurators, and virtual fashion shows. Epic Games reported that Unreal Engine was downloaded over 30 million times in 2023 alone (Epic Games, 2024). That is not a niche technology. That is infrastructure.',
        'Meanwhile, the luxury market itself has never been bigger. Bain and Altagamma reported that the global personal luxury goods market reached 362 billion euros in 2023, even as brands struggled with declining foot traffic and rising digital acquisition costs (Bain & Company, 2024). The Business of Fashion noted that digital channels now influence over 80% of luxury purchases, even when the final transaction happens in store (BoF, 2024). The implication is clear: the digital experience is not supplementary anymore. It is primary. And the question is whether that primary experience will remain a flat webpage or evolve into something with depth. Literally.',
      ],
    },
    {
      heading: 'WHO IS DOING IT NOW',
      paragraphs: [
        'The luxury industry, despite its reputation for conservatism, has been the most aggressive early mover. Gucci Town launched in Roblox in 2022 and generated significant engagement. Roblox reported that the Gucci Garden experience attracted 19.9 million visits in its first two weeks (Roblox Corporation, 2022). Burberry partnered with Mythical Games to create a blockchain-based game with purchasable digital goods. Balenciaga built an entire video game, Afterworld: The Age of Tomorrow, as their Fall 2021 collection debut. Nike acquired RTFKT Studios and launched .SWOOSH, a platform for digital sneakers that bridge to physical products.',
        'But these early experiments share a common limitation: they treat the spatial environment as a marketing activation rather than a sales channel. You visit Gucci Town in Roblox and you buy virtual Gucci items for your avatar, but you do not buy a real Gucci bag that ships to your house. The transaction stays inside the game economy. The breakthrough that has not fully happened yet is connecting spatial experiences to real commerce infrastructure: real inventory, real payment processing, real fulfillment. As the Business of Fashion put it, "the gap between brand experimentation and commercial infrastructure remains the central challenge" (BoF, 2024).',
        'This is what I am working on. Through OH, we built a proof of concept that runs a full Shopify-synced purchase flow inside Unreal Engine. You walk through a spatial environment, you interact with products from an actual fashion brand (Nooon), you add items to a cart, you check out with real payment, and that order routes through existing logistics. Browse, cart, checkout, confirmation, all inside the engine. No browser redirect, no external checkout page. The spatial environment is not a billboard for the store. It is the store.',
      ],
    },
    {
      heading: 'THE TECHNOLOGY STACK',
      paragraphs: [
        'What makes spatial commerce viable now, when it was not five years ago, is the convergence of several technology layers. First, game engines have reached photorealistic quality at commodity hardware performance. Unreal Engine 5\'s Nanite and Lumen systems can render film-quality environments in real time on a mid-range GPU. Clothing can look real (fabric drape, material texture, lighting response) in a way that was impossible at interactive frame rates before 2022.',
        'Second, commerce APIs have matured. Shopify\'s Storefront API and Hydrogen framework allow developers to build custom shopping experiences that plug into Shopify\'s payment, inventory, and fulfillment systems without using Shopify\'s front end at all. That is the critical unlock: you can build any interface you want, including a 3D environment, and connect it to the same commerce backend that powers hundreds of thousands of stores. Stripe, Square, and other payment processors offer similar flexibility.',
        'Third, AI agents add a layer that flat e-commerce never had. Inside a spatial environment, an AI character can greet you, understand what you are looking for through natural conversation, pull up relevant items, explain materials and sizing, and walk you through checkout. This is not a chatbot in a corner of a webpage. This is a present, voiced, spatially aware character that moves through the environment with you. We built this with O-OH, an AI agent that operates inside spatial experiences, powered by a large language model with real tool access (add to cart, process payment, check inventory). The agent is not decorative. It transacts.',
      ],
    },
    {
      heading: 'WHY FASHION SPECIFICALLY',
      paragraphs: [
        'Fashion has a problem that spatial commerce solves better than any other medium. The fundamental challenge of online fashion retail is that you cannot touch fabric, see drape, or understand scale from a photograph. This is why return rates in online fashion average 30% according to the National Retail Federation, compared to 8-10% for in-store purchases (NRF, 2023). That gap costs the industry billions annually in reverse logistics alone.',
        'Spatial environments do not eliminate this problem entirely, but they significantly reduce it by adding dimensionality to the product experience. You can see a garment on a body in motion, walk around it, examine it from angles that a product photographer never shot, see how it interacts with light. AR try-on is already demonstrating this: Google reported that products with 3D/AR models see a 94% higher conversion rate than products without them (Google, 2023). Shopify independently found that products with 3D models had a 40% reduction in returns (Shopify, 2023). Snap reported that over 300 million users engage with AR features daily in 2023, and that branded AR try-on lenses drove 2.4x higher purchase intent compared to non-AR ads (Snap Inc., 2023). These are not small numbers. They represent a fundamental shift in how consumers evaluate products before purchasing.',
        'But the bigger reason spatial commerce matters for fashion specifically is brand world-building. Fashion has always been about selling a world, not just a garment. Ralph Lauren sells the Hamptons. Dior sells Parisian elegance. Supreme sells downtown New York scarcity culture. A product page cannot communicate a world. A spatial environment can. When you walk through a brand\'s world (its architecture, its lighting, its soundscape, its characters) and then you can purchase the garments that exist within that world, the purchase decision is fundamentally different from scrolling through a grid of product shots. You are not buying a jacket. You are buying membership in an aesthetic universe.',
      ],
    },
    {
      heading: 'THE HOT TAKE',
      paragraphs: [
        'Here is my actual position, and I think it is defensible: within ten years, the traditional product detail page (hero image, size selector, add-to-cart button) will feel as dated as a mail-order catalog does today. It will not disappear entirely, just as catalogs still exist, but it will no longer be the primary way people engage with fashion brands digitally.',
        'The shift will not happen through VR headsets. It will happen through game engines rendering directly in the browser (via WebGPU and streaming), through AR on phones that is actually good (Apple\'s ARKit and Google\'s ARCore improve every year), and through AI agents that make spatial environments navigable without a learning curve. The bottleneck right now is not technology; it is organizational. Fashion brands have entire teams built around managing product photography, writing product copy, and optimizing flat e-commerce conversion funnels. Spatial commerce requires 3D artists, technical artists, engine programmers, and interaction designers that most fashion companies do not have. That hiring gap is the real barrier, and it is temporary.',
        'The brands that figure this out first will own a format advantage similar to what early Instagram adopters had in 2013. Everyone eventually got on Instagram, but the brands that understood the medium earliest built audiences that latecomers never caught. The same dynamic will play out with spatial commerce. The question is not if but when, and my bet (literally, since this is what I spend my days building) is that the "when" is already happening.',
      ],
    },
  ],
  works_cited: [
    'Bain & Company. (2024). "Altagamma-Bain Luxury Market Monitor 2023." Bain & Company and Fondazione Altagamma.',
    'Business of Fashion. (2024). "The State of Fashion 2024." BoF and McKinsey & Company.',
    'Epic Games. (2024). "Unreal Engine Year in Review 2023." Epic Games Newsroom.',
    'Google. (2023). "AR and 3D in Google Search: Driving conversion through immersive product experiences." Think with Google.',
    'McKinsey & Company. (2022). "Value creation in the metaverse: The real business of the virtual world." McKinsey Digital.',
    'Morgan Stanley. (2022). "Metaverse: More Than Just a Place to Play." Morgan Stanley Research.',
    'National Retail Federation. (2023). "2023 Consumer Returns in the Retail Industry." NRF and Appriss Retail.',
    'Newzoo. (2023). "Global Games Market Report 2023." Newzoo.',
    'Roblox Corporation. (2022). "Gucci Garden Experience Results." Roblox Blog.',
    'Shopify. (2023). "The impact of 3D and AR on ecommerce conversion and returns." Shopify Engineering Blog.',
    'Snap Inc. (2023). "AR Drives Action: The Impact of Augmented Reality on Consumer Behavior." Snap Research.',
    'Statista. (2024). "Retail e-commerce sales worldwide from 2014 to 2027." Statista Research Department.',
  ],
};
