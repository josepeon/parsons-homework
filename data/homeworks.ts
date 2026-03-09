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
    title: 'HOMEWORK 3',
    week: 'WEEK 3',
    slug: 'homework-3',
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
