import { Homework } from '@/types/homework';

export const finalProjectPresentation: Homework = {
  id: 'final-project-presentation',
  title: 'SYSTEM UPDATE',
  week: 'FINAL PROJECT',
  slug: 'final-project-presentation',
  prompts: [
    {
      label: 'MOOD & THE DIGITAL SHIFT',
      question: 'What is the mood and story of this trend? Where did the convergence between fashion and technology begin to accelerate?',
      slides: [
        {
          title: 'WIRED. PHYSICAL. ENCODED.',
          content: 'Three words define the mood of this trend. Wired: everything carries signal now, from the NFC chip in a Nooon jacket to the avatar skin in a game lobby. Physical: despite the digital layer, the object still matters. The garment, the event, the collab are all real things that exist in space. Encoded: meaning, ownership, and identity are increasingly embedded in the product itself rather than communicated by the label alone. The aesthetic register of this convergence is not clean tech optimism and not dystopian surveillance. It is something more specific. Fashion that knows what it is and can prove it.',
          image: '/images/final-project/slide-1.jpg',
          aspectRatio: 1920 / 2560,
        },
        {
          title: 'THE DIGITAL WARDROBE',
          content: 'In 2023, the global gaming fashion market, which includes digital skins, avatar items, and in-game purchases, was estimated at $40 billion, which exceeds the global men\'s luxury market. Balenciaga debuted a collection as a playable video game. Louis Vuitton designed skins for League of Legends. Nike acquired RTFKT Studios and launched digital sneakers that correspond to physical products. The consumer who buys a Balenciaga skin in Fortnite and a Balenciaga hoodie is the same person. The digital wardrobe is not a substitute for the physical one. It is a parallel market that reinforces brand desirability across contexts, and it is already larger than most physical fashion categories.',
          image: '/images/final-project/slide-2.jpg',
          aspectRatio: 1920 / 2560,
        },
        {
          title: 'THE EMBEDDED OBJECT',
          content: 'NFC chips and digital product passports are turning garments into documents. LVMH, Prada, and Richemont launched the Aura Blockchain Consortium in 2021; by 2023 it had processed over 35 million luxury product records. The EU mandated digital product passports for textiles by 2030. This is regulatory infrastructure now, not brand experimentation. Nooon embedded NFC tags across its REBOOT collection for digital authentication and storytelling. A garment with a chip carries verifiable origin, ownership history, material composition, and repair log. The chip does not change how it looks or feels. It changes what it is. The object remembers.',
          image: '/images/final-project/slide-3.jpg',
          aspectRatio: 2749 / 3024,
        },
      ],
    },
    {
      label: 'COLOR, MATERIAL & SILHOUETTE',
      question: 'What does this trend look like? What is the palette, what are the materials, and what silhouettes does it generate?',
      slides: [
        {
          title: 'THE PALETTE',
          content: 'Six colors define the visual language of the tech-fashion convergence. Algorithm Blue: electric, loading-state blue, the color of an active data stream. Hardware Grey: anodized aluminum at rest, machined precision. Default White: factory-fresh and unboxed, the surface before anything is written on it. Tactical Sand: functional beige with military origin, warmth drained of decoration. Signal Red: limited drop, notification, alert, urgency without noise. Terminal Green: system active, data confirmed, the color of a process completing. Not the clean minimalism of Scandinavian design, but something colder and more specific, with the visual logic of a user interface applied to physical objects.',
          video: '/images/final-project/slide-4.mp4',
          aspectRatio: 1080 / 1348,
        },
        {
          title: 'TEXTILES & CONSTRUCTION',
          content: 'The materials of this trend are defined by functional specificity: Gore-Tex Pro (waterproof, breathable, seam-taped), Dyneema Composite Fabric (fifteen times stronger than steel at the same weight, thinner than paper), waxed raw-edge canvas (structural, self-finishing, waterproof by application), felted merino at high weight (holds silhouette without boning or interlining), phase-change thermoregulating textiles (absorb body heat, release it when ambient temperature drops). The construction method is the statement: ultrasonic welding instead of stitching, laser-cut edges with no seam allowance, robotic seam-taping. No exposed thread. No raw edge unless intended. The process is the design argument.',
          image: '/images/final-project/slide-5.jpg',
          aspectRatio: 2149 / 2865,
        },
        {
          title: 'THE CONSTRUCTED SILHOUETTE',
          content: 'The silhouette of this convergence is architectural and self-supporting: garments that hold their shape without a body inside them, objects before they are clothing. The oversized shell jacket with articulated patterning, seams placed for range of motion rather than aesthetics. The wide-leg utility trouser in bonded technical fabric with no visible fly hardware, internal waistband, clean ankle break. The layering system as a designed wardrobe: base, mid, and shell with intentional interaction between layers, exposed zip pulls in contrasting finish, magnetic closures that seal flat. In Nooon\'s GRDT collection, the Circle Top is padded into a round sculptural shape that holds itself away from the body. The Extrusion Pants use vertical padded channels as structural ribbing. The garment stands on its own.',
          image: '/images/final-project/slide-6.jpg',
          aspectRatio: 1800 / 2250,
        },
      ],
    },
    {
      label: 'COLLABS, NOOON & FORECAST',
      question: 'Which brands are leading this convergence? How do collaborations function within it? Where is this trend going?',
      slides: [
        {
          title: 'COLLABS AS CREDIBILITY TRANSFER',
          content: 'The brand collaboration has evolved from celebrity adjacency to audience and credibility exchange. Arc\'teryx x Palace: material and technical legitimacy moves to a downtown streetwear audience; cultural credibility moves back. New Balance x Salehe Bembury: a craft-focused design sensibility applied to athletic product development. Nike x Fragment Design: a collector-focused collab built around technical detail and production specificity. Nooon x Converse started at the IMMRSV SHWRM event in February 2026, where the brand connected with Jason Thome, Entertainment and Influencer Marketing Director at Converse. Eighteen pairs arrived in two batches on May 1. The collaboration involves styling Converse into GRDT and Parsons Runway campaign looks, and developing custom Nooon shoes on Converse bases: paint, material, hardware, graphics. The shoot is May 16, photographed by Alan Padilla, styled by Ocean Savage.',
          image: '/images/final-project/slide-7.jpg',
          aspectRatio: 1 / 1,
        },
        {
          title: '',
          content: '',
          images: [
            '/images/final-project/converse-1.jpg',
            '/images/final-project/converse-2.jpg',
            '/images/final-project/converse-3.jpg',
            '/images/final-project/converse-4.jpg',
            '/images/final-project/converse-5.jpg',
            '/images/final-project/converse-6.jpg',
          ],
        },
        {
          title: 'NOOON: THE FULL STACK',
          content: 'Nooon is a fashion brand built from the start to operate across digital and physical contexts simultaneously. The REBOOT collection embedded NFC tags for digital authentication. The clothing uses technical materials, bonded fabrics, taped seams, modular construction (embedded objects and technical clothing). The OH virtual showroom, built in Unreal Engine and connected to live Shopify inventory, released February 4, 2026. The IMMRSV SHWRM event in New York City on February 16 brought the spatial experience to a physical audience (event as product). The Converse collaboration is an active creative exchange started at that same event (collabs as credibility transfer). Results from the campaign period: $20,929 revenue, 116 orders, 82 unique customers, $180 average order value. Highsnobiety covered it. People bought things inside a game.',
          video: '/images/final-project/nooon-sheep.mp4',
          aspectRatio: 1080 / 1348,
        },
        {
          title: 'THE FORECAST',
          content: 'Near term: digital product passports move from voluntary luxury adoption to EU regulatory requirement. Technical clothing consolidates from trend to category default. Medium term: gaming fashion becomes a parallel market equal to physical. The brand without a digital product line feels incomplete. AI voice companions, already deployed at the web level by platforms like OH, move into spatial environments. The brands that do not offer AI-assisted shopping will feel behind the same way brands with no mobile site felt behind in 2013. Long term: spatial commerce becomes the primary sales channel for brands with strong world-building and aesthetic identity. The physical store survives as a material reference library and event space. The flat product page survives the way mail-order catalogs survive. Nooon and OH are the proof of concept that exists right now. The question for everyone else is not whether. It is how fast.',
          image: '/images/final-project/slide-9.jpg',
          aspectRatio: 1887 / 2254,
        },
      ],
    },
  ],
};
