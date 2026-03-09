import { Homework } from '@/types/homework';

export const homeworks: Homework[] = [
  {
    id: '1',
    title: 'MUSES, CORE CONCEPTS, DESIGN STYLES',
    week: 'WEEK 1',
    slug: 'homework-1',
    prompts: [
      {
        label: 'PROMPT 1 · MUSES',
        question: 'Choose an iconic designer / muse combo and research the history and impact of their dynamic.',
        slides: [
          {
            title: 'THE MEETING',
            content: 'In 1967, Betty Catroux walked into a nightclub in Paris and Yves Saint Laurent saw what he called his "twin." Tall, razor-thin, and androgynous, Catroux embodied everything Saint Laurent wanted to express in fashion - a rejection of conventional femininity and an embrace of cool, gender-fluid elegance. She became his muse that night and remained so for over fifty years, until his death in 2008. Their bond was not romantic but something rarer: a creative mirror. Saint Laurent once said, "Betty is the woman I would have liked to be."',
            image: '/images/homework-1/slide-1.jpg',
            aspectRatio: 380 / 610,
          },
          {
            title: 'LE SMOKING',
            content: 'Catroux\'s influence on Saint Laurent\'s work was direct and transformative. His most iconic creation, Le Smoking - the women\'s tuxedo introduced in 1966 - was essentially Betty\'s wardrobe made into haute couture. She lived in men\'s suits, boots, and leather jackets, and YSL translated that energy into the collections. The safari jacket (1968), the sheer blouse, the pantsuit as evening wear - all reflected Catroux\'s personal style. She didn\'t just wear the clothes; she was the living proof that women could dress with masculine power without losing femininity. Helmut Newton\'s photographs of Le Smoking became defining images of 20th-century fashion.',
            image: '/images/homework-1/slide-2.jpg',
            aspectRatio: 1024 / 1515,
          },
          {
            title: 'THE LEGACY',
            content: 'The YSL-Catroux dynamic redefined the designer-muse relationship. Unlike earlier muses who were passive mannequins, Catroux was an active collaborator - her lifestyle, attitude, and personal style fed directly into the design process. Their partnership helped establish androgyny as a permanent force in fashion, influencing Hedi Slimane, Phoebe Philo, and the entire gender-fluid movement in contemporary design. Catroux remained involved with the YSL brand long after Saint Laurent\'s passing, serving as a creative advisor and guardian of his legacy. Their fifty-year friendship proves that a muse is not just an image - it\'s an ongoing conversation between life and design.',
            image: '/images/homework-1/slide-3.jpg',
            aspectRatio: 564 / 772,
          },
        ],
      },
      {
        label: 'PROMPT 3 · DESIGN STYLES',
        question: 'Choose one design style and research the history and iconic moments. What defines the style? When did it begin? How did it evolve?',
        slides: [
          {
            title: 'ORIGINS & DEFINITION',
            content: 'Avant-garde - literally "advance guard" in French - refers to fashion that pushes beyond commercial or aesthetic norms to challenge how we think about clothing itself. Its roots lie in early 20th-century art movements: Dadaism, Surrealism, and Constructivism all questioned the boundaries of form and function. Elsa Schiaparelli was fashion\'s first true avant-gardist, collaborating with Salvador Dalí on the Lobster Dress (1937) and the Shoe Hat, merging art and garment into a single provocative statement. The avant-garde asks: what if clothing isn\'t meant to flatter, but to provoke?',
            image: '/images/homework-1/slide-4.jpg',
            aspectRatio: 736 / 920,
          },
          {
            title: 'THE DECONSTRUCTIONISTS',
            content: 'The 1980s brought the most radical shift in avant-garde fashion: the Japanese wave. Rei Kawakubo\'s Comme des Garçons debuted in Paris in 1981 with ripped, asymmetric garments that fashion critics called "Hiroshima chic" - a label she rejected. Her work dismantled Western beauty standards, using lumps, bumps, and deliberate imperfection as design elements. Martin Margiela followed in 1988, showing garments made from reclaimed materials, splitting apart existing clothing and reassembling it inside-out. Yohji Yamamoto completed the trio, draping oversized black forms that erased the body underneath. Together, they established deconstruction as fashion\'s most intellectually rigorous design language.',
            image: '/images/homework-1/slide-5.jpg',
            aspectRatio: 474 / 592,
          },
          {
            title: 'THE FUTURE OF FORM',
            content: 'Alexander McQueen brought theatrical spectacle to avant-garde fashion in the 1990s and 2000s - his Spring 1999 show featured robots spray-painting a dress on a spinning model. Today, Iris van Herpen represents the style\'s evolution, using 3D printing, laser cutting, and biomimicry to create garments that look grown rather than sewn. Her collaborations with architects and scientists push fashion into territory where technology and biology merge. The avant-garde has never been more relevant: as AI, sustainability pressures, and digital fashion reshape the industry, designers who think beyond convention are defining what clothing will become.',
            image: '/images/homework-1/slide-6.jpg',
            aspectRatio: 1200 / 1500,
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'FORECASTING FRAMEWORKS',
    week: 'WEEK 2',
    slug: 'homework-2',
    prompts: [
      {
        label: 'PROMPT 3 - DIFFUSION',
        question: 'Select an innovation or trend and study the history of it from when it first popped up to how it became diluted and mass-adopted. Write about this arc and show imagery to support your research.',
        slides: [
          {
            title: 'THE COURT TO THE CURB',
            content: 'The sneaker began as pure athletic equipment. Converse released the All Star in 1917 for basketball courts, and for decades sneakers stayed in the gym. That changed in 1986 when Run-DMC released "My Adidas," turning the Superstar into a cultural symbol. They signed a $1.6 million endorsement deal with Adidas - the first non-athlete sneaker deal in history. Meanwhile, Nike launched the Air Jordan line with Michael Jordan in 1985, and the shoes sold $126 million in their first year. Sneakers crossed from sport to street, carried by hip-hop and basketball culture. By the late 1980s, owning the right pair meant something far beyond athletics - it was identity, status, and belonging.',
            image: '/images/homework-2/slide-1.jpg',
            aspectRatio: 1,
          },
          {
            title: 'THE LUXURY PIVOT',
            content: 'By the 2010s, high fashion had fully embraced the sneaker. Raf Simons collaborated with Adidas on the Ozweego in 2013, blending avant-garde design with sportswear. Kanye West\'s Yeezy Boost 350 launched in 2015 and resold for ten times retail within hours. Then Balenciaga dropped the Triple S in 2017 - a chunky, intentionally ugly sneaker priced at $895 that became the most talked-about shoe in fashion. Suddenly every luxury house needed a sneaker: Dior had the B23, Louis Vuitton had the Trainer, Prada had the Cloudbust. The sneaker had completed an unlikely journey from subcultural signifier to luxury status object, and the resale market grew into a $6 billion industry.',
            image: '/images/homework-2/slide-2.jpg',
            aspectRatio: 1000 / 1334,
          },
          {
            title: 'MASS SATURATION',
            content: 'The sneaker\'s diffusion arc reached its endpoint when every fast-fashion brand offered chunky sneakers for $40. Zara, H&M, and Amazon produced Triple S knockoffs within months of the original. By 2023, the sneaker resale market had cooled significantly - StockX reported declining margins and laid off staff. The cultural energy shifted: loafers, ballet flats, and dress shoes returned to fashion as a counter-reaction. The sneaker didn\'t disappear, but it lost its ability to signal anything specific. This is the textbook diffusion pattern: innovation at the margins, adoption by tastemakers, luxury co-optation, mass production, and finally dilution into the ordinary. The sneaker went from rebellion to retail in about forty years.',
            image: '/images/homework-2/slide-3.jpg',
            aspectRatio: 736 / 920,
          },
        ],
      },
      {
        label: 'PROMPT 4 - THE LIFECYCLE OF A MEME',
        question: 'Choose a meme and study its origins. Where does it come from and what is its original context? How has it been used and what is the shorthand it\'s meant to represent?',
        slides: [
          {
            title: 'THE ORIGIN',
            content: 'Quiet luxury as a concept has always existed - it just didn\'t have a name. Old-money families in Greenwich, the Upper East Side, and European aristocracy dressed in Loro Piana cashmere, Brunello Cucinelli knits, and unbranded leather goods for decades. The Row, founded by Mary-Kate and Ashley Olsen in 2006, built an entire brand on this principle: impeccable materials, zero logos, astronomical prices. The aesthetic valued discretion over display. A $3,000 Loro Piana baseball cap looks identical to a $20 one unless you know what you\'re looking at. This was not a trend but a class marker - dressing to be recognized only by those in the same economic bracket.',
            image: '/images/homework-2/slide-4.jpg',
            aspectRatio: 735 / 948,
          },
          {
            title: 'THE SIGNAL',
            content: 'The meme crystallized in early 2023 through two cultural events. First, HBO\'s Succession entered its final season, and the Roy family wardrobe - Loro Piana vests, anonymous navy suits, unbranded tote bags worth thousands - became the subject of endless TikTok analysis. Second, Sofia Richie Grainge\'s wedding in April 2023, styled entirely in custom Chanel with no visible branding, generated over a billion views across platforms. TikTok creators coined "quiet luxury" and "stealth wealth" as searchable terms, and the algorithm took over. Within weeks, the hashtag had hundreds of millions of views, and fashion publications from Vogue to GQ ran explainers on "how to dress quiet luxury."',
            image: '/images/homework-2/slide-5.jpg',
            aspectRatio: 1,
          },
          {
            title: 'THE SHORTHAND',
            content: 'As a meme, quiet luxury became shorthand for a specific anxiety: the desire to appear wealthy without appearing to try. It represented a backlash against the logo-heavy maximalism of Gucci under Alessandro Michele and the hypebeast era. But the meme contained its own contradiction - once millions of people searched "quiet luxury outfits" on TikTok, the concept was no longer quiet. Fast-fashion brands began marketing "quiet luxury basics" for $30, and the term lost its meaning through mass adoption. By late 2023, the counter-meme had already arrived: "loud budgeting" and "mob wife aesthetic" emerged as deliberate rejections. The lifecycle was complete in under a year - from unspoken class code to viral meme to parodied cliche.',
            image: '/images/homework-2/slide-6.jpg',
            aspectRatio: 736 / 920,
          },
        ],
      },
    ],
  },
  {
    id: '3',
    title: 'FORECASTING THEORIES AND METHODS',
    week: 'WEEK 3',
    slug: 'homework-3',
    prompts: [
      {
        label: 'PROMPT 1 - CONSPICUOUS EXAMPLES',
        question: 'Make a visual dictionary of examples of conspicuous leisure, conspicuous consumption, reverse ostentation, or conspicuous counter-consumption and the other examples of conspicuousness you have learned. Use as a timeline the entire twentieth century or one decade. How will they be expressed in the future? Will one be more dominant than the others?',
        slides: [
          {
            title: 'CONSPICUOUS CONSUMPTION',
            content: 'The 2010s opened with maximalism in full force. Logomania returned through Gucci under Alessandro Michele, who layered double-G prints across every surface starting in 2015. Supreme built a billion-dollar empire on box-logo scarcity, and resellers camped outside stores for days. Virgil Abloh\'s Off-White put quotation marks on everything from shoelaces to handbags, turning branding into ironic commentary that still functioned as status display. The hypebeast era was conspicuous consumption at its most literal: the point was to be seen wearing the thing, to photograph it, to post it. Instagram became the stage, and the outfit was the performance. Thorstein Veblen described this in 1899 - he just didn\'t have a smartphone.',
            image: '/images/homework-3/slide-1.jpg',
          },
          {
            title: 'REVERSE OSTENTATION',
            content: 'By mid-decade, a counter-movement emerged. Normcore - a term coined by the trend forecasting collective K-Hole in 2013 - proposed that the most radical fashion statement was no statement at all. Steve Jobs had already demonstrated this with his black turtleneck uniform, and Mark Zuckerberg followed with grey t-shirts. The Silicon Valley founder aesthetic was anti-fashion as power move: I am too important to think about clothes. This was Veblen\'s "conspicuous leisure" inverted - signaling status not through display but through deliberate absence of display. By 2023, this evolved into "quiet luxury," where a $4,000 Loro Piana polo looks identical to a $30 Uniqlo one. The consumption is still conspicuous - it just requires insider knowledge to decode.',
            image: '/images/homework-3/slide-2.jpg',
          },
          {
            title: 'THE FUTURE OF DISPLAY',
            content: 'Looking ahead, conspicuousness is fracturing across digital and physical worlds simultaneously. Digital fashion - NFT wearables, AR filters, virtual skins in games like Fortnite and Roblox - creates new arenas for conspicuous consumption where the "object" has no material cost. Meanwhile, conspicuous counter-consumption is gaining traction through the degrowth and anti-fast-fashion movements: visible mending, thrift flips, and Patagonia\'s "Don\'t Buy This Jacket" campaign. The most likely dominant mode will be what could be called conspicuous curation - not what you buy but how you assemble, remix, and narrate your consumption across platforms. The display shifts from the object to the taste system around it.',
            image: '/images/homework-3/slide-3.jpg',
          },
        ],
      },
      {
        label: 'PROMPT 2 - CLASSIC PRODUCTS OF THE 21ST CENTURY',
        question: 'Select a long-term trend. Look for one that relates to fashion, interior design, architecture, retail stores, or other consumer culture. Do any research you need to understand the trend and to find connections to other trends. Then write two scenarios - one optimistic about the future of this item in the twenty-first century and one pessimistic. Discuss the plausibility of each scenario in class.',
        slides: [
          {
            title: 'THE TOTE BAG',
            content: 'The cotton tote bag began as the ultimate anti-consumer object. In the mid-2000s, Anya Hindmarch\'s "I\'m Not A Plastic Bag" tote (2007) launched the reusable bag as fashion statement and environmental gesture. NPR, The New Yorker, and museum gift shops followed, turning the tote into a cultural signifier of educated, liberal, urban identity. It cost nothing or next to nothing - you accumulated them by attending events, donating to public radio, or shopping at Whole Foods. The tote bag became a walking billboard for your intellectual and ethical loyalties, and by the 2010s, owning dozens of them had become its own form of overconsumption, undermining the original sustainability message entirely.',
            image: '/images/homework-3/slide-4.jpg',
          },
          {
            title: 'OPTIMISTIC SCENARIO',
            content: 'In the optimistic future, the tote bag evolves into a genuinely sustainable staple. Advances in organic cotton farming and closed-loop textile recycling make production carbon-neutral by 2030. Brands move toward fewer, higher-quality totes designed to last years rather than be given away for free. The tote becomes a canvas for local artisans and independent designers, replacing the mass-produced promotional model with limited, meaningful designs. Its simplicity - a flat bag with handles - makes it the ideal substrate for circular fashion: easy to repair, easy to recycle, impossible to over-engineer. The tote bag fulfills its original promise as the anti-disposable object.',
            image: '/images/homework-3/slide-5.jpg',
          },
          {
            title: 'PESSIMISTIC SCENARIO',
            content: 'In the pessimistic future, the tote bag completes its ironic arc into pure waste. A 2011 UK Environment Agency study found that a cotton tote must be reused 131 times to offset its production footprint versus a single plastic bag. Most totes are used fewer than ten times. By 2030, millions of promotional totes clog landfills and textile waste streams alongside fast fashion. The object that symbolized conscious consumption becomes evidence of performative environmentalism - buying the signifier of sustainability without changing actual behavior. The tote joins the growing category of "green" products whose main function is to make consumers feel virtuous while the systems they participate in remain unchanged.',
            image: '/images/homework-3/slide-6.jpg',
          },
        ],
      },
      {
        label: 'PROMPT 3 - GROUP IDENTITY',
        question: 'Identify a group that embodies the definitions of a new, visible elite or a fast-moving social group with a penchant for differentiation. Use visuals and descriptive words to describe the group\'s current look. What consumer segments are most likely to imitate the group\'s taste? Predict the next stages of fashion change and prepare a presentation to communicate your prediction.',
        slides: [
          {
            title: 'THE TECH FOUNDER AESTHETIC',
            content: 'The Silicon Valley founder class has emerged as one of the twenty-first century\'s most influential style groups, despite - or because of - their apparent rejection of fashion. The uniform is precise: merino wool crew necks (Brunello Cucinelli, $1,200), plain grey or black t-shirts (James Perse, $80), slim chinos or technical pants (Outlier, $200), and minimalist sneakers (Common Projects, $425) or Allbirds ($100). The palette is exclusively neutral: black, grey, navy, white. Watches are either Apple Watches or vintage Rolexes - nothing in between. The look communicates: I solve problems, I don\'t perform. Sam Altman, the Collison brothers at Stripe, and the entire Y Combinator cohort dress this way. It is a uniform disguised as non-fashion.',
            image: '/images/homework-3/slide-7.jpg',
          },
          {
            title: 'WHO IMITATES',
            content: 'The first consumer segment to adopt the tech founder aesthetic was the broader professional-managerial class in coastal cities. Venture capitalists, startup employees, product managers, and consultants adopted the merino-and-chinos uniform by the mid-2010s. Everlane, Uniqlo, and COS became the accessible entry points. The second wave was remote workers during the pandemic, who adopted "Zoom-appropriate minimalism" - clean tops, neutral tones, nothing too branded. The third and current wave is Gen Z professionals entering the workforce, who combine founder aesthetics with thrifted pieces, creating a hybrid that reads as both professional and anti-corporate. The influence flows from a small elite (fewer than 10,000 founders) outward to millions of workers who want to signal competence without flashiness.',
            image: '/images/homework-3/slide-8.jpg',
          },
          {
            title: 'WHAT COMES NEXT',
            content: 'The tech founder aesthetic is approaching its saturation point. When Zuckerberg appeared wearing a gold chain and sheepskin jacket in 2023, it signaled a shift: the billionaire class is beginning to embrace visible luxury again. Prediction: the next stage will split in two directions. One branch moves toward "tech artisan" - founders wearing handmade Japanese denim, Portuguese leather goods, and small-batch ceramics, signaling craft over scale. The other moves toward open maximalism - LVMH-level luxury without apology, as the tech industry\'s cultural confidence grows. The minimalist uniform will trickle down fully into corporate dress codes and lose its association with innovation. Within five years, the founder look will be what khakis and a button-down were in the 1990s: default professional attire, stripped of its original meaning.',
            image: '/images/homework-3/slide-9.jpg',
          },
        ],
      },
    ],
  },
  {
    id: '4',
    title: 'HOMEWORK 4',
    week: 'WEEK 4',
    slug: 'homework-4',
    prompts: [
      {
        label: 'PROMPT A',
        question: 'Add the prompt question here.',
        slides: [
          { title: 'SLIDE 1', content: 'Add slide content here.' },
          { title: 'SLIDE 2', content: 'Add slide content here.' },
          { title: 'SLIDE 3', content: 'Add slide content here.' },
        ],
      },
      {
        label: 'PROMPT B',
        question: 'Add the prompt question here.',
        slides: [
          { title: 'SLIDE 1', content: 'Add slide content here.' },
          { title: 'SLIDE 2', content: 'Add slide content here.' },
          { title: 'SLIDE 3', content: 'Add slide content here.' },
        ],
      },
    ],
  },
];
