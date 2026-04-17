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
            content: 'In 1967, Betty Catroux walked into a nightclub in Paris and Yves Saint Laurent saw what he called his "twin." Tall, razor-thin, and androgynous, Catroux embodied everything Saint Laurent wanted to express in fashion: a rejection of conventional femininity and an embrace of cool, gender-fluid elegance. She became his muse that night and remained so for over fifty years, until his death in 2008. Their bond was not romantic but something rarer: a creative mirror. Saint Laurent once said, "Betty is the woman I would have liked to be."',
            image: '/images/homework-1/slide-1.jpg',
            aspectRatio: 380 / 610,
          },
          {
            title: 'LE SMOKING',
            content: 'Catroux\'s influence on Saint Laurent\'s work was direct and transformative. His most iconic creation, Le Smoking (the women\'s tuxedo introduced in 1966) was essentially Betty\'s wardrobe made into haute couture. She lived in men\'s suits, boots, and leather jackets, and YSL translated that energy into the collections. The safari jacket (1968), the sheer blouse, the pantsuit as evening wear: all reflected Catroux\'s personal style. She didn\'t just wear the clothes; she was the living proof that women could dress with masculine power without losing femininity. Helmut Newton\'s photographs of Le Smoking became defining images of 20th-century fashion.',
            image: '/images/homework-1/slide-2.jpg',
            aspectRatio: 1024 / 1515,
          },
          {
            title: 'THE LEGACY',
            content: 'The YSL-Catroux dynamic redefined the designer-muse relationship. Unlike earlier muses who were passive mannequins, Catroux was an active collaborator whose lifestyle, attitude, and personal style fed directly into the design process. Their partnership helped establish androgyny as a permanent force in fashion, influencing Hedi Slimane, Phoebe Philo, and the entire gender-fluid movement in contemporary design. Catroux remained involved with the YSL brand long after Saint Laurent\'s passing, serving as a creative advisor and guardian of his legacy. Their fifty-year friendship proves that a muse is not just an image; it\'s an ongoing conversation between life and design.',
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
            content: 'Avant-garde, literally "advance guard" in French, refers to fashion that pushes beyond commercial or aesthetic norms to challenge how we think about clothing itself. Its roots lie in early 20th-century art movements: Dadaism, Surrealism, and Constructivism all questioned the boundaries of form and function. Elsa Schiaparelli was fashion\'s first true avant-gardist, collaborating with Salvador Dalí on the Lobster Dress (1937) and the Shoe Hat, merging art and garment into a single provocative statement. The avant-garde asks: what if clothing isn\'t meant to flatter, but to provoke?',
            image: '/images/homework-1/slide-4.jpg',
            aspectRatio: 736 / 920,
          },
          {
            title: 'THE DECONSTRUCTIONISTS',
            content: 'The 1980s brought the most radical shift in avant-garde fashion: the Japanese wave. Rei Kawakubo\'s Comme des Garçons debuted in Paris in 1981 with ripped, asymmetric garments that fashion critics called "Hiroshima chic," a label she rejected. Her work dismantled Western beauty standards, using lumps, bumps, and deliberate imperfection as design elements. Martin Margiela followed in 1988, showing garments made from reclaimed materials, splitting apart existing clothing and reassembling it inside-out. Yohji Yamamoto completed the trio, draping oversized black forms that erased the body underneath. Together, they established deconstruction as fashion\'s most intellectually rigorous design language.',
            image: '/images/homework-1/slide-5.jpg',
            aspectRatio: 474 / 592,
          },
          {
            title: 'THE FUTURE OF FORM',
            content: 'Alexander McQueen brought theatrical spectacle to avant-garde fashion in the 1990s and 2000s. His Spring 1999 show featured robots spray-painting a dress on a spinning model. Today, Iris van Herpen represents the style\'s evolution, using 3D printing, laser cutting, and biomimicry to create garments that look grown rather than sewn. Her collaborations with architects and scientists push fashion into territory where technology and biology merge. The avant-garde has never been more relevant: as AI, sustainability pressures, and digital fashion reshape the industry, designers who think beyond convention are defining what clothing will become.',
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
            content: 'The sneaker began as pure athletic equipment. Converse released the All Star in 1917 for basketball courts, and for decades sneakers stayed in the gym. That changed in 1986 when Run-DMC released "My Adidas," turning the Superstar into a cultural symbol. They signed a $1.6 million endorsement deal with Adidas, the first non-athlete sneaker deal in history. Meanwhile, Nike launched the Air Jordan line with Michael Jordan in 1985, and the shoes sold $126 million in their first year. Sneakers crossed from sport to street, carried by hip-hop and basketball culture. By the late 1980s, owning the right pair meant something far beyond athletics; it was identity, status, and belonging.',
            image: '/images/homework-2/slide-1.jpg',
            aspectRatio: 1,
          },
          {
            title: 'THE LUXURY PIVOT',
            content: 'By the 2010s, high fashion had fully embraced the sneaker. Raf Simons collaborated with Adidas on the Ozweego in 2013, blending avant-garde design with sportswear. Kanye West\'s Yeezy Boost 350 launched in 2015 and resold for ten times retail within hours. Then Balenciaga dropped the Triple S in 2017, a chunky, intentionally ugly sneaker priced at $895 that became the most talked-about shoe in fashion. Suddenly every luxury house needed a sneaker: Dior had the B23, Louis Vuitton had the Trainer, Prada had the Cloudbust. The sneaker had completed an unlikely journey from subcultural signifier to luxury status object, and the resale market grew into a $6 billion industry.',
            image: '/images/homework-2/slide-2.jpg',
            aspectRatio: 1000 / 1334,
          },
          {
            title: 'MASS SATURATION',
            content: 'The sneaker\'s diffusion arc reached its endpoint when every fast-fashion brand offered chunky sneakers for $40. Zara, H&M, and Amazon produced Triple S knockoffs within months of the original. By 2023, the sneaker resale market had cooled significantly. StockX reported declining margins and laid off staff. The cultural energy shifted: loafers, ballet flats, and dress shoes returned to fashion as a counter-reaction. The sneaker didn\'t disappear, but it lost its ability to signal anything specific. This is the textbook diffusion pattern: innovation at the margins, adoption by tastemakers, luxury co-optation, mass production, and finally dilution into the ordinary. The sneaker went from rebellion to retail in about forty years.',
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
            content: 'Quiet luxury as a concept has always existed; it just didn\'t have a name. Old-money families in Greenwich, the Upper East Side, and European aristocracy dressed in Loro Piana cashmere, Brunello Cucinelli knits, and unbranded leather goods for decades. The Row, founded by Mary-Kate and Ashley Olsen in 2006, built an entire brand on this principle: impeccable materials, zero logos, astronomical prices. The aesthetic valued discretion over display. A $3,000 Loro Piana baseball cap looks identical to a $20 one unless you know what you\'re looking at. This was not a trend but a class marker, dressing to be recognized only by those in the same economic bracket.',
            image: '/images/homework-2/slide-4.jpg',
            aspectRatio: 735 / 948,
          },
          {
            title: 'THE SIGNAL',
            content: 'The meme crystallized in early 2023 through two cultural events. First, HBO\'s Succession entered its final season, and the Roy family wardrobe (Loro Piana vests, anonymous navy suits, unbranded tote bags worth thousands) became the subject of endless TikTok analysis. Second, Sofia Richie Grainge\'s wedding in April 2023, styled entirely in custom Chanel with no visible branding, generated over a billion views across platforms. TikTok creators coined "quiet luxury" and "stealth wealth" as searchable terms, and the algorithm took over. Within weeks, the hashtag had hundreds of millions of views, and fashion publications from Vogue to GQ ran explainers on "how to dress quiet luxury."',
            image: '/images/homework-2/slide-5.jpg',
            aspectRatio: 1,
          },
          {
            title: 'THE SHORTHAND',
            content: 'As a meme, quiet luxury became shorthand for a specific anxiety: the desire to appear wealthy without appearing to try. It represented a backlash against the logo-heavy maximalism of Gucci under Alessandro Michele and the hypebeast era. But the meme contained its own contradiction: once millions of people searched "quiet luxury outfits" on TikTok, the concept was no longer quiet. Fast-fashion brands began marketing "quiet luxury basics" for $30, and the term lost its meaning through mass adoption. By late 2023, the counter-meme had already arrived: "loud budgeting" and "mob wife aesthetic" emerged as deliberate rejections. The lifecycle was complete in under a year, from unspoken class code to viral meme to parodied cliche.',
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
            content: 'The 2010s opened with maximalism in full force. Logomania returned through Gucci under Alessandro Michele, who layered double-G prints across every surface starting in 2015. Supreme built a billion-dollar empire on box-logo scarcity, and resellers camped outside stores for days. Virgil Abloh\'s Off-White put quotation marks on everything from shoelaces to handbags, turning branding into ironic commentary that still functioned as status display. The hypebeast era was conspicuous consumption at its most literal: the point was to be seen wearing the thing, to photograph it, to post it. Instagram became the stage, and the outfit was the performance. Thorstein Veblen described this in 1899; he just didn\'t have a smartphone.',
            image: '/images/homework-3/slide-1.jpg',
            aspectRatio: 736 / 1104,
          },
          {
            title: 'REVERSE OSTENTATION',
            content: 'By mid-decade, a counter-movement emerged. Normcore, a term coined by the trend forecasting collective K-Hole in 2013, proposed that the most radical fashion statement was no statement at all. Steve Jobs had already demonstrated this with his black turtleneck uniform, and Mark Zuckerberg followed with grey t-shirts. The Silicon Valley founder aesthetic was anti-fashion as power move: I am too important to think about clothes. This was Veblen\'s "conspicuous leisure" inverted, signaling status not through display but through deliberate absence of display. By 2023, this evolved into "quiet luxury," where a $4,000 Loro Piana polo looks identical to a $30 Uniqlo one. The consumption is still conspicuous; it just requires insider knowledge to decode.',
            image: '/images/homework-3/slide-2.jpg',
            aspectRatio: 828 / 1007,
          },
          {
            title: 'THE FUTURE OF DISPLAY',
            content: 'Looking ahead, conspicuousness is fracturing across digital and physical worlds simultaneously. Digital fashion (NFT wearables, AR filters, virtual skins in games like Fortnite and Roblox) creates new arenas for conspicuous consumption where the "object" has no material cost. Meanwhile, conspicuous counter-consumption is gaining traction through the degrowth and anti-fast-fashion movements: visible mending, thrift flips, and Patagonia\'s "Don\'t Buy This Jacket" campaign. The most likely dominant mode will be what could be called conspicuous curation: not what you buy but how you assemble, remix, and narrate your consumption across platforms. The display shifts from the object to the taste system around it.',
            image: '/images/homework-3/slide-3.jpg',
            aspectRatio: 1200 / 1498,
          },
        ],
      },
      {
        label: 'PROMPT 2 - CLASSIC PRODUCTS OF THE 21ST CENTURY',
        question: 'Select a long-term trend. Look for one that relates to fashion, interior design, architecture, retail stores, or other consumer culture. Do any research you need to understand the trend and to find connections to other trends. Then write two scenarios - one optimistic about the future of this item in the twenty-first century and one pessimistic. Discuss the plausibility of each scenario in class.',
        slides: [
          {
            title: 'THE TOTE BAG',
            content: 'The cotton tote bag began as the ultimate anti-consumer object. In the mid-2000s, Anya Hindmarch\'s "I\'m Not A Plastic Bag" tote (2007) launched the reusable bag as fashion statement and environmental gesture. NPR, The New Yorker, and museum gift shops followed, turning the tote into a cultural signifier of educated, liberal, urban identity. It cost nothing or next to nothing; you accumulated them by attending events, donating to public radio, or shopping at Whole Foods. The tote bag became a walking billboard for your intellectual and ethical loyalties, and by the 2010s, owning dozens of them had become its own form of overconsumption, undermining the original sustainability message entirely.',
            image: '/images/homework-3/slide-4.jpg',
            aspectRatio: 727 / 1164,
          },
          {
            title: 'OPTIMISTIC SCENARIO',
            content: 'In the optimistic future, the tote bag evolves into a genuinely sustainable staple. Advances in organic cotton farming and closed-loop textile recycling make production carbon-neutral by 2030. Brands move toward fewer, higher-quality totes designed to last years rather than be given away for free. The tote becomes a canvas for local artisans and independent designers, replacing the mass-produced promotional model with limited, meaningful designs. Its simplicity (a flat bag with handles) makes it the ideal substrate for circular fashion: easy to repair, easy to recycle, impossible to over-engineer. The tote bag fulfills its original promise as the anti-disposable object.',
            image: '/images/homework-3/slide-5.jpg',
            aspectRatio: 750 / 1000,
          },
          {
            title: 'PESSIMISTIC SCENARIO',
            content: 'In the pessimistic future, the tote bag completes its ironic arc into pure waste. A 2011 UK Environment Agency study found that a cotton tote must be reused 131 times to offset its production footprint versus a single plastic bag. Most totes are used fewer than ten times. By 2030, millions of promotional totes clog landfills and textile waste streams alongside fast fashion. The object that symbolized conscious consumption becomes evidence of performative environmentalism: buying the signifier of sustainability without changing actual behavior. The tote joins the growing category of "green" products whose main function is to make consumers feel virtuous while the systems they participate in remain unchanged.',
            image: '/images/homework-3/slide-6.jpg',
            aspectRatio: 736 / 920,
          },
        ],
      },
      {
        label: 'PROMPT 3 - GROUP IDENTITY',
        question: 'Identify a group that embodies the definitions of a new, visible elite or a fast-moving social group with a penchant for differentiation. Use visuals and descriptive words to describe the group\'s current look. What consumer segments are most likely to imitate the group\'s taste? Predict the next stages of fashion change and prepare a presentation to communicate your prediction.',
        slides: [
          {
            title: 'THE TECH FOUNDER AESTHETIC',
            content: 'The Silicon Valley founder class has emerged as one of the twenty-first century\'s most influential style groups, despite (or because of) their apparent rejection of fashion. The uniform is precise: merino wool crew necks (Brunello Cucinelli, $1,200), plain grey or black t-shirts (James Perse, $80), slim chinos or technical pants (Outlier, $200), and minimalist sneakers (Common Projects, $425) or Allbirds ($100). The palette is exclusively neutral: black, grey, navy, white. Watches are either Apple Watches or vintage Rolexes, nothing in between. The look communicates: I solve problems, I don\'t perform. Sam Altman, the Collison brothers at Stripe, and the entire Y Combinator cohort dress this way. It is a uniform disguised as non-fashion.',
            image: '/images/homework-3/slide-7.jpg',
            aspectRatio: 1200 / 1208,
          },
          {
            title: 'WHO IMITATES',
            content: 'The first consumer segment to adopt the tech founder aesthetic was the broader professional-managerial class in coastal cities. Venture capitalists, startup employees, product managers, and consultants adopted the merino-and-chinos uniform by the mid-2010s. Everlane, Uniqlo, and COS became the accessible entry points. The second wave was remote workers during the pandemic, who adopted "Zoom-appropriate minimalism": clean tops, neutral tones, nothing too branded. The third and current wave is Gen Z professionals entering the workforce, who combine founder aesthetics with thrifted pieces, creating a hybrid that reads as both professional and anti-corporate. The influence flows from a small elite (fewer than 10,000 founders) outward to millions of workers who want to signal competence without flashiness.',
            image: '/images/homework-3/slide-8.jpg',
            aspectRatio: 900 / 1200,
          },
          {
            title: 'WHAT COMES NEXT',
            content: 'The tech founder aesthetic is approaching its saturation point. When Zuckerberg appeared wearing a gold chain and sheepskin jacket in 2023, it signaled a shift: the billionaire class is beginning to embrace visible luxury again. Prediction: the next stage will split in two directions. One branch moves toward "tech artisan," founders wearing handmade Japanese denim, Portuguese leather goods, and small-batch ceramics, signaling craft over scale. The other moves toward open maximalism, LVMH-level luxury without apology, as the tech industry\'s cultural confidence grows. The minimalist uniform will trickle down fully into corporate dress codes and lose its association with innovation. Within five years, the founder look will be what khakis and a button-down were in the 1990s: default professional attire, stripped of its original meaning.',
            image: '/images/homework-3/slide-9.jpg',
            aspectRatio: 1035 / 1280,
          },
        ],
      },
    ],
  },
  {
    id: '4',
    title: 'FASHION ERAS',
    week: 'WEEK 4',
    slug: 'homework-4',
    prompts: [
      {
        label: 'PROMPT 1 - THE SPIRIT OF THE TIMES',
        question: 'Researching the Zeitgeist of the Past. It is difficult to recognize the spirit of the times as you are living through them. To sensitize yourself to this concept, research the Zeitgeist using the categories of dominant events, ideals, social groups, attitude, and technology for the decades from the 1920s to the 1990s. How do these categories define what is remembered at each decade?',
        slides: [
          {
            title: 'THE ROARING TWENTIES TO THE ATOMIC AGE',
            content: 'The 1920s were defined by liberation after World War I: jazz, flappers, the 19th Amendment, and a booming economy that made consumption a national identity. The dominant ideal was youth and freedom; Coco Chanel shortened hemlines, and women bobbed their hair. The 1930s reversed this with the Great Depression, and the zeitgeist shifted to endurance and escapism: Hollywood glamour provided fantasy while breadlines defined reality. The 1940s were consumed by World War II: women entered factories, utility clothing rationed fabric, and patriotic duty replaced individual expression. The 1950s brought postwar prosperity and conformity: suburban homes, nuclear families, Christian Dior\'s New Look restored exaggerated femininity as a reaction to wartime austerity. Television became the dominant technology, homogenizing American culture for the first time.',
            image: '/images/homework-4/slide-1.jpg',
            aspectRatio: 530 / 747,
          },
          {
            title: 'REVOLUTION AND REACTION',
            content: 'The 1960s shattered the conformity of the fifties. The civil rights movement, feminism, Vietnam protests, and the counterculture made rebellion the dominant attitude. Youth culture became the driving social group; for the first time, teenagers and college students dictated fashion through miniskirts, tie-dye, and anti-establishment dress. Technology brought the birth control pill and the moon landing. The 1970s fragmented into multiple competing spirits: disco hedonism, punk nihilism, the oil crisis, and Watergate cynicism all coexisted. The dominant ideal shifted from collective revolution to individual self-expression. The 1980s responded with excess: Reagan-era materialism, Wall Street culture, power dressing, and MTV made wealth, ambition, and visible consumption the defining values. Technology gave us the personal computer and the VCR.',
            image: '/images/homework-4/slide-2.jpg',
            aspectRatio: 527 / 426,
          },
          {
            title: 'THE END OF THE CENTURY',
            content: 'The 1990s are remembered through two competing lenses. The early nineties were defined by grunge, Generation X cynicism, and anti-fashion. Kurt Cobain wore thrift store flannel as a rejection of eighties excess. The dominant attitude was ironic detachment. The late nineties brought the dot-com boom, globalization optimism, and minimalism: Calvin Klein, Helmut Lang, and Jil Sander stripped fashion to clean lines. The internet emerged as the decade\'s defining technology, but its cultural impact wouldn\'t fully register until the 2000s. What connects all these decades is that the zeitgeist is only visible in retrospect. People living through the 1960s didn\'t call it "the sixties"; they were just reacting to material conditions. The spirit of the times is always a story we tell afterward about what mattered and why.',
            image: '/images/homework-4/slide-3.jpg',
            aspectRatio: 800 / 935,
          },
        ],
      },
      {
        label: 'PROMPT 3 - BUSINESS BREAKTHROUGHS AND CLASSIC DESIGNERS',
        question: 'Investigate the design and marketing of fashion by influential designers like Paul Poiret, Jean Patou, Coco Chanel, Elsa Schiaparelli, Pierre Cardin, and Yves Saint Laurent to discover practices that were revolutionary in their time but are now commonplace ways of doing business. What revolutionary ways of doing business today will become accepted practice in the future?',
        slides: [
          {
            title: 'THE FIRST REVOLUTIONARIES',
            content: 'Paul Poiret was fashion\'s first modern businessman. In 1911, he became the first couturier to launch a branded perfume, Parfums de Rosine, understanding that fragrance could democratize a luxury brand without diluting its exclusivity. This model, using accessible products to fund haute couture, became the foundation of the modern fashion business. Jean Patou followed by pioneering sportswear as luxury in the 1920s, dressing tennis champion Suzanne Lenglen and proving that fashion could exist outside the evening gown. Coco Chanel then revolutionized the entire industry: costume jewelry as legitimate fashion (not imitation), jersey fabric elevated from workwear to couture, and the Little Black Dress as democratic elegance. Her No. 5 perfume (1921) remains the most commercially successful fragrance in history, and its licensing model funds Chanel\'s couture house to this day.',
            image: '/images/homework-4/slide-4.jpg',
            aspectRatio: 1,
          },
          {
            title: 'SCALING LUXURY',
            content: 'Elsa Schiaparelli introduced artist collaboration as a business strategy. Her work with Salvador Dali in the 1930s created garments that were simultaneously art objects and wearable fashion, generating press coverage that no advertising budget could match. This blueprint is now standard: Louis Vuitton x Takashi Murakami, Nike x Off-White, Uniqlo x KAWS. Pierre Cardin took the most radical step: in 1959, he was expelled from the Chambre Syndicale for launching a ready-to-wear line at Printemps department store. Couture was supposed to be exclusive. Cardin saw licensing as the future and eventually put his name on over 800 product categories. Yves Saint Laurent refined this with Rive Gauche in 1966, a standalone ready-to-wear boutique that made designer fashion accessible without the couture appointment. Every designer retail store today follows the model YSL invented.',
            image: '/images/homework-4/slide-5.jpg',
            aspectRatio: 1200 / 1800,
          },
          {
            title: 'TODAY\'S BREAKTHROUGHS',
            content: 'The revolutionary practices of today that will become standard tomorrow: direct-to-consumer brands bypassing wholesale entirely (Everlane, Reformation), using social media creators as the primary marketing channel instead of print advertising, on-demand manufacturing that produces garments only after they are ordered (reducing overstock waste), and AI-generated design tools that can iterate hundreds of variations before a single physical sample is cut. Digital fashion (garments that exist only as filters or metaverse wearables) may seem marginal now, just as Cardin\'s ready-to-wear seemed scandalous in 1959. The pattern is consistent: every major fashion business innovation was initially rejected by the establishment before becoming the standard way of operating within a generation.',
            image: '/images/homework-4/slide-6.jpg',
            aspectRatio: 704 / 1412,
          },
        ],
      },
    ],
  },
  {
    id: '6',
    title: 'WORLD CULTURES',
    week: 'WEEK 6',
    slug: 'homework-6',
    prompts: [
      {
        label: 'PROMPT 1 · INFLUENTIAL DESIGNERS AND COUNTRIES',
        question: 'Who are your favorite designers and what country are they from? Do their signature styles reflect the influences that their home countries are known for? Which country\'s signature style is your favorite overall and why?',
        slides: [
          {
            title: 'THE JAPANESE MASTERS',
            content: 'Three designers from Japan redefined what fashion could be, and none of them could have come from anywhere else. Yohji Yamamoto, Rei Kawakubo, and Issey Miyake all arrived in Paris in the late 1970s and early 1980s carrying an entirely different set of cultural references: wabi-sabi (the beauty of imperfection and impermanence), ma (the significance of negative space), and a Buddhist relationship with the body as something to be concealed and revealed rather than displayed. Yamamoto drapes black fabric around the body in ways that erase conventional silhouette. Kawakubo\'s Comme des Garçons creates garments with deliberate asymmetry, lumps, and voids. Miyake\'s Pleats Please line uses pleating techniques derived from Japanese origami and traditional textile folding. The connection between country and designer is not metaphorical. It is structural.',
            image: '/images/homework-6/slide-1.jpg',
            aspectRatio: 474 / 592,
          },
          {
            title: 'THE BELGIAN AVANT-GARDE',
            content: 'In 1986, six graduates of the Royal Academy of Fine Arts in Antwerp drove a rented truck to Paris and hung their collections in a borrowed showroom. The Antwerp Six: Ann Demeulemeester, Dries Van Noten, Walter Van Beirendonck, Dirk Van Saene, Dirk Bikkembergs, and Marina Yee. Belgium sits at the intersection of French elegance and Germanic rigor, filtered through a Flemish painting tradition that valued darkness, texture, and psychological depth over surface beauty. Demeulemeester\'s work is architectural and melancholic, consistently referencing the Belgian landscape\'s flatness and the existentialism embedded in Flemish culture. Van Noten layers print, color, and textile from across the world with the collector\'s obsessiveness of a Flemish still-life painter cataloguing abundance. Martin Margiela, who studied at the same academy, deconstructed fashion\'s logic from the inside out, which is arguably the most Belgian thing anyone has ever done.',
            image: '/images/homework-6/slide-2.jpg',
            aspectRatio: 736 / 1104,
          },
          {
            title: 'WHY JAPAN WINS',
            content: 'If I have to choose one country\'s design philosophy as my favorite, it is Japan, and the reason is the relationship between tradition and radical innovation. Every Japanese designer I admire is simultaneously deeply grounded in historical textile and craft traditions and completely uninterested in nostalgia. Miyake spent years studying traditional Noh theater costume construction before inventing Pleats Please. Yamamoto trained in tailoring under his mother, who ran a dressmaker\'s shop in postwar Tokyo, before dismantling tailoring\'s conventions entirely. The aesthetic commitment is also total: black is not a safe choice in Japanese design, it is a philosophical position. The treatment of the body as a canvas rather than something to be flattered or corrected produces the most intellectually honest fashion in the world. Japanese designers ask what clothing is for, rather than simply assuming they already know.',
            image: '/images/homework-6/slide-3.jpg',
            aspectRatio: 800 / 1067,
          },
        ],
      },
      {
        label: 'PROMPT 2 · CULTURAL DRESS',
        question: 'Pick a country and identify an item of cultural dress specific to that country. Research the history of the style, and trace how it has evolved over time. Find some modern interpretations of the style in a contemporary runway collection. What aspects of the style are the same as the traditional garment, and what has been changed?',
        slides: [
          {
            title: 'THE KIMONO: ORIGINS',
            content: 'The kimono as we recognize it today emerged during Japan\'s Heian period (794–1185 CE), though its roots extend to Chinese-influenced kosode garments introduced centuries earlier. The defining structure is the T-shape: straight-cut panels sewn together without curves, designed to be worn with the body rather than fitted to it. During the Heian court, aristocratic women layered up to twelve robes (juunihitoe) in specific color combinations that communicated season, rank, and emotional state through a precise color language called kasane no irome. The Edo period (1603–1868) standardized the kimono into the form that persists today: a single outer robe tied with an obi sash, with regional variations in dyeing techniques (Kyoto\'s Nishijin weaving, Tokyo\'s Edo komon stencil dyeing, Kyushu\'s Arimatsu shibori) reflecting local craft traditions. The kimono was not merely clothing. It was a text that anyone literate in its visual language could read.',
            image: '/images/homework-6/slide-4.jpg',
            aspectRatio: 736 / 920,
          },
          {
            title: 'EVOLUTION AND WESTERNIZATION',
            content: 'The Meiji Restoration of 1868 introduced Western dress as a marker of modernity and national progress. Government officials were required to wear Western suits; the kimono retreated from public life into ceremony and domestic spaces. By the mid-twentieth century, most Japanese wore Western dress daily and reserved kimono for weddings, funerals, coming-of-age ceremonies (seijin-shiki), and festivals. The yukata, a lightweight cotton version worn at summer festivals and hot spring resorts, became the primary everyday encounter with the form for most people. This shift had a paradoxical effect on the garment\'s cultural weight: by becoming ceremonial rather than quotidian, the kimono became more meaningful even as it became less common. Contemporary kimono culture has splintered: a traditional school insists on orthodox wearing conventions (specific knots, seasonal fabrics, proper undergarments), while a younger movement called kimono shakai promotes personal styling that mixes vintage kimono with sneakers, layered turtlenecks, and Western accessories as a living creative practice.',
            image: '/images/homework-6/slide-5.jpg',
            aspectRatio: 5764 / 3842,
          },
          {
            title: 'THE RUNWAY INHERITANCE',
            content: 'The kimono\'s influence on contemporary fashion operates on two levels. Direct reference: John Galliano\'s Spring 2007 collection for Dior reproduced obi sashes and kimono sleeves in Western silhouettes, an exercise in Japonisme that was visually spectacular and conceptually shallow. Structural inheritance: Yohji Yamamoto and Issey Miyake do not quote the kimono, they think through it. Yamamoto\'s wrapped coats use no buttons or zippers, relying instead on folding and tying, a construction logic borrowed directly from kimono tradition. Miyake\'s A-POC (A Piece of Cloth) collection took the kimono\'s single-cloth philosophy to its geometric extreme, producing entire garments from one continuous piece of fabric with no waste. What stays in the modern interpretations: the T-shaped construction, the wrapping closure, the treatment of fabric as plane rather than pattern piece. What changes: the body underneath, the context of wearing, the material (technical fabrics, pleated polyester, bonded leather), and the gender assumptions embedded in the original garment.',
            image: '/images/homework-6/slide-6.jpg',
            aspectRatio: 564 / 772,
          },
        ],
      },
    ],
  },
  {
    id: '7',
    title: 'SUBCULTURES',
    week: 'WEEK 7',
    slug: 'homework-7',
    prompts: [
      {
        label: 'PROMPT 3 · STYLE TRIBES ACROSS THE WORLD',
        question: 'Like other trends, subcultural styles do not stay contained among their creators, instead they spread among like-minded individuals, and often spring up in other countries. Pick a style tribe such as punk and research how it spread to other countries. What aspects of the group\'s style are universal? Are there any regional differences due to different climate or cultural norms? Compare and contrast the different countries\' interpretations of the style tribe.',
        slides: [
          {
            title: 'PUNK: THE SOURCE CODE',
            content: 'Punk emerged simultaneously in New York (the Ramones at CBGB, 1974) and London (the Sex Pistols, the Clash, 1976), but it was the British version that became the global template. The aesthetic was inseparable from its political context: Thatcher\'s Britain, mass youth unemployment, and post-imperial collapse. Vivienne Westwood and Malcolm McLaren\'s SEX boutique at 430 King\'s Road was the laboratory. The visual language was deliberate provocation: ripped clothing held together with safety pins, mohawks dyed in primary colors, Doc Martens and tartan repurposed from Scottish nationalism, leather jackets covered in hand-painted slogans and studs. The DIY ethic was the core principle: make it yourself, destroy and reassemble, reject the commercial. The look communicated a specific message: this system has failed us, and we reject it entirely. That message, and the aesthetic that carried it, proved exportable.',
            image: '/images/homework-7/slide-1.jpg',
            aspectRatio: 800 / 533,
          },
          {
            title: 'THREE TRANSLATIONS: AMERICA, JAPAN, BRAZIL',
            content: 'American hardcore (Black Flag, Dead Kennedys, Minor Threat, 1979–1985) stripped punk of its theatricality and made it more utilitarian. Work boots replaced platforms, military surplus replaced decorated leather jackets, and shaved heads replaced mohawks. The American version was less about spectacle and more about physicality: the music was faster, the shows were more violent, the look communicated function over performance. Japan\'s encounter with punk produced something entirely different: Visual Kei, which emerged in the mid-1980s through bands like X Japan and Buck-Tick. Japanese punk amplified the theatrical maximalism and gender ambiguity inherent in British punk to operatic levels, fusing it with kabuki makeup traditions, manga aesthetics, and an attention to craft that punk\'s DIY ethos theoretically opposed. In Brazil, punk arrived in São Paulo around 1977 during the military dictatorship and immediately became genuinely political in a way that British punk, for all its rhetoric, never quite was. When you are actually living under authoritarian rule, the music and the look carry a different weight.',
            image: '/images/homework-7/slide-2.jpg',
            aspectRatio: 1000 / 750,
          },
          {
            title: 'WHAT TRAVELS, WHAT STAYS',
            content: 'Across every geographic translation, punk\'s universal elements are consistent: the rejection of mainstream commercial dress, the DIY assembly logic, the use of black as a base palette, and the silhouette (skinny, deconstructed, or deliberately destroyed). These travel because they are philosophical positions, not just aesthetic choices. What changes is what counts as transgressive. In Japan, where gender-normative dress was strictly enforced by corporate culture, wearing a skirt as a man was as radical as any safety pin. In Germany, where Nina Hagen merged punk with opera and electronic music, the transgression was class: mixing high cultural references with underground aesthetics. Climate matters too: Australian punk in the late 1970s adapted toward shorts and work boots suited to the heat, making the look more working-class utilitarian and less gothic. The regional differences reveal which aspects of punk were culturally portable (the attitude, the DIY logic, the anti-commercial stance) and which were contextual (the specific garments, the political targets, the musical tempo).',
            image: '/images/homework-7/slide-3.jpg',
            aspectRatio: 828 / 1007,
          },
        ],
      },
      {
        label: 'PROMPT 4 · NEW STYLE TRIBES',
        question: 'Look online for current style tribes. Are they evolutions or subcategories of established style tribes or are they unique unto themselves? If they are related to an established style tribe, which elements of their look are traditional, and which are new? If they are a style tribe that is associated with a particular style of music, who are the popular artists right now? Which brands do they wear?',
        slides: [
          {
            title: 'GORPCORE: THE OUTDOORS NEVER LEFT',
            content: 'GORP stands for Good Old Raisins and Peanuts — trail mix — and gorpcore refers to outdoor technical gear worn as urban fashion. The silhouette: Arc\'teryx shell jackets, Salomon XT-6 trail runners, Patagonia fleeces, Osprey daypacks, technical pants from brands like Cotopaxi or Norrøna. The palette is functional (muted earth tones, safety orange, technical greys) occasionally interrupted by the neon accents of 1990s outdoor gear. Gorpcore is an evolution of normcore (the studied embrace of unremarkable clothing) taken outdoors and made more technically specific. Where normcore was passive and anti-fashion, gorpcore has enthusiasts: people who genuinely know the difference between Gore-Tex and eVent membranes and who treat gear research like a hobby. Arc\'teryx Veilance serves the luxury tier, Satisfy Running bridges performance and avant-garde, and Stone Island provides the luxury technical crossover that has been there since the 1980s. The style tribe is not associated with music but with a post-pandemic shift toward outdoor activity, remote work aesthetics, and a suspicion of anything that looks like it was designed to impress.',
            image: '/images/homework-7/slide-4.jpg',
            aspectRatio: 1537 / 980,
          },
          {
            title: 'INDIE SLEAZE: THE BLOG ERA RETURNS',
            content: 'Indie sleaze is Gen Z\'s excavation of the 2006–2012 indie rock moment: American Apparel hoodies, skinny jeans, flash photography that bleaches out skin tones, low-rise everything, and the studied casualness of someone who just rolled out of a show at a small venue. It is directly descended from the scene around bands like the Strokes, Yeah Yeah Yeahs, and Vampire Weekend, and the blogs (The Sartorialist, Facehunter) that documented their audiences. The current music connection is explicit: Wet Leg, Beabadoobee, Snail Mail, and Men I Trust have all been styled and photographed within this aesthetic language. What is traditional: the silhouette (skinny, layered, slightly disheveled), the anti-curation ethos, the downtown-New-York-or-London geography. What is new: the self-awareness. In 2008, no one called it indie sleaze; now the aesthetic is named, catalogued, and deliberately reconstructed via vintage sourcing and TikTok tutorials. Brands: vintage American Apparel (the actual original, not the relaunch), New Balance 550, Carhartt WIP, Converse Chuck 70s, and whatever thrift store produces the right faded flannel. The tribe is defined by its relationship to a specific historical moment it mostly experienced through YouTube and Tumblr archives.',
            image: '/images/homework-7/slide-5.jpg',
            aspectRatio: 640 / 480,
          },
          {
            title: 'AFROPUNK: RECLAMATION AS STYLE TRIBE',
            content: 'Afropunk began as a 2003 documentary by James Spooner about Black Americans in predominantly white punk spaces, then became the Afropunk Festival in Brooklyn in 2005. It is not an evolution of punk; it is a reclamation of it. The historical argument is that Black artists, from Chuck Berry to Bad Brains to Living Colour, were foundational to the music and aesthetic that became "punk," and then were systematically erased from its mainstream narrative. The Afropunk aesthetic reclaims that erasure: punk\'s DIY energy and anti-establishment stance fused with Afrocentric elements (natural hair worn as political statement, kente cloth and African print mixed with leather and studs, platform boots with traditional jewelry). The result is something that has no exact parallel in the existing subcultural taxonomy. Artists central to the tribe\'s current visual language include Janelle Monáe (whose android mythology and sharp tailoring define a specific Afrofuturist variant), Steve Lacy, and Willow Smith. Brands: Pyer Moss, whose runway shows function as cultural essays on Black American experience; Telfar, whose shopping bag has become one of the most democratic luxury symbols in recent fashion history; and KidSuper, which brings a similar DIY maximalism from a different angle. Afropunk is unique unto itself precisely because it demands that you know the history it is responding to.',
            image: '/images/homework-7/slide-6.jpg',
            aspectRatio: 1200 / 1498,
          },
        ],
      },
    ],
  },
];
