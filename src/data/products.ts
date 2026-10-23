import bladfjedre from '../assets/original/bladfjedre.png';
import shims from '../assets/original/shims.png';
import skaermdaaser from '../assets/original/skaermdaaser.png';
import shield from '../assets/original/shield.png';
import gaskets from '../assets/original/gaskets.jpg';
import ahorn from '../assets/original/ahorn.png';
import type { ImageMetadata } from 'astro';

export type ProductPage = {
  slug: string;
  h1: string;
  sub?: string;
  lead: string;
  bullets?: string[];
  body: string[];
  image: ImageMetadata;
  second?: ImageMetadata;
};

export const productPages: ProductPage[] = [
  {
    slug: 'bladfjedre',
    h1: 'Bladfjedre',
    lead: 'Har du brug for bladfjedre/kontaktfjedre, kan Etch producere dem uden høje omkostninger til et stanseværktøj. Faconætsning har en række fordele, som gør det til et økonomisk og teknisk attraktivt alternativ, når det gælder små, præcise metaldele.',
    bullets: [
      'Høj præcision i små geometrier',
      'Prototyper samt masseproduktion fra dag til dag',
      'Ingen grater på de ætsede emner',
      'Kanter fri for stress',
      'Mulighed for at runde alle kanter',
      'Mulighed for levering i strips',
      'Bukning af små emner i lange strips uden brug af dyre værktøjer',
    ],
    body: [
      'Alt efter dine ønsker kan vi levere bladfjedrene i såvel bukket som ubukket tilstand. Har du brug for forgyldning, fortinning eller anden overfladebehandling af din kontaktfjeder, klarer vi også det. Overfladebehandlingen kan eventuelt være partiel, så kun de relevante områder behandles.',
      'Vi producerer op til flere tusinde små emner på ét ark. Overfladebehandling i hele ark sparer dyr håndtering, hvis alternativet ellers er ophængning af enkelt-emner. På den måde holder vi stykprisen nede, når kvantiteten stiger.',
      'Vi forarbejder de fleste metaller – også syrefast stål – i tykkelser fra 0,025 mm til over 1 mm. Send os din tegning, så finder vi den bedste kombination af materiale, tykkelse og overfladebehandling til netop din kontaktfjeder.',
          "Praktisk talt kan du tænke på faconætsning som et alternativ til stansning, der sparer dig for værktøjet og giver dig frihed til at ændre designet undervejs – det er ofte netop det, der giver den samlede økonomiske fordel.",
    ],
    image: bladfjedre,
  },
  {
    slug: 'shims-og-spacere',
    h1: 'Shims og spacere',
    lead: 'Shims og spacere efter dine tegninger i tykkelser til dit behov. Etch har mange års erfaring med faconætsning i metallisk tyndplade. Har du f.eks. brug for afstandsskiver i en bestemt facon og tykkelse, er du kommet til den rette leverandør.',
    body: [
      'Vi kan levere præcise emner efter dine tegninger på ned til 24 timer lige fra 1 stk. til mange tusinde. Specielle tykkelser justerer vi ned til nøjagtigheder på få mikrometer, så shims og spacere passer præcis til det, de er beregnet til.',
      'Kanterne er fri for grater, og vi kan endog runde kanterne i processen. Det giver et rent, sikkert resultat, der kan monteres uden yderligere bearbejdning, og det holder, når emnet sættes i brug igen og igen.',
      'Vi forarbejder de fleste metaller – også syrefast stål – i tykkelser fra 0,025 mm til over 1 mm. Uanset om du skal bruge én afstandsskive til en reparation eller tusindvis til en serie, leverer vi i den rigtige kvalitet og til tiden.',
          "Uanset om shims og spacere skal bruges i elektronik, maskineri eller andre præcisionsanvendelser, sikrer processen en ensartet kvalitet fra første til sidste emne i serien.",
    ],
    image: shims,
  },
  {
    slug: 'emc-skaermdaaser',
    h1: 'EMC skærmdåser',
    sub: 'Cans – eller rammer og låg',
    lead: 'Etch har mange års erfaring i design og produktion af EMC-afskærmning i metallisk tyndplade. Vi tegner og producerer skærmdåser, der lukker effektivt for HF-støj og holder dit elektronik i overensstemmelse med kravene.',
    body: [
      'Send os dit foot-print samt nødvendig højde, og vi tegner og producerer dine skærmdåser – eller rammer og låg – i nysølv eller fortinnet plade. Vi leverer gerne dine emner i Tape & Reel til SMD-montage, så de passer direkte til din linje.',
      'Alternativt til rammer og låg kan vi lave dine skærmdåser med perforeret kant, så låget kan pilles af med en spidstang. Reserve-låg med låse leveres som reservedele, så en service- eller reparation ikke kræver en ny, komplet skærmdåse.',
      'Vi hjælper gerne med design af skærmdåsen, så afskærmningen er optimal i forhold til printlayoutet og de frekvenser, du skal dæmpe. Send os printudlægget, så finder vi den bedste konstruktion.',
          "Skærmdåserne kan leveres med eller uden perforeret kant, og vi hjælper gerne med at vurdere, om en ramme med låg eller en skærmdåse med perforeret kant er den bedste løsning til netop din enhed.",
    ],
    image: skaermdaaser,
    second: gaskets,
  },
  {
    slug: 'emc-pakninger',
    h1: 'EMC pakninger',
    sub: 'RF-gaskets – skræddersyet til dit printkort',
    lead: 'Vil du spare plads på dit print og undgå lodning af flere skærmdåser, integrerer vi gerne afskærmningen på dit printkort med en skræddersyet EMC-fjederpakning. Én komponent i stedet for flere.',
    body: [
      'Med en banebredde ned til 1 mm, en tykkelse på 0,15 mm og meget tætsiddende fjedre på typisk 0,5 mm højde lukker vi effektivt for HF-støj mellem alle rum i dit shield/cover og dit print – med én komponent i stedet for en række skærmdåser.',
      'Du sender printudlægget, og vi skræddersyr EMC-pakningen til netop dit layout. Det giver en tæt, kompakt afskærmning, der er nem at montere og holder på tværs af temperaturendringer og mekanisk belastning i selve enheden.',
      'Vi forarbejder de fleste metaller – også syrefast stål – i tykkelser fra 0,025 mm til over 1 mm, så pakningen kan skræddersyes til både materialet og de frekvenser, du skal afskærme mod.',
          "Resultatet er en kompakt, letmonteret afskærmning, der både sparer plads på printkortet og reducerer antallet af komponenter, der skal loddes i samlingen af enheden.",
    ],
    image: shield,
  },
  {
    slug: 'dekorative-emner',
    h1: 'Dekorative emner',
    sub: 'Detaljeret ætsning i tyndplade metal',
    lead: 'Etch kan levere dekorative emner i eksempelvis bronze, messing eller rustfrit stål. Ved hjælp af faconætsning kan vi meget præcist og detaljeret bearbejde metallisk tyndplade helt ned til under 0,1 mm. Nogle af fordelene ved faconætsning er:',
    bullets: [
      'Meget tætte hulgeometrier uden at bryde materialet',
      'Koniske huller, eller huller på skrå gennem materialet',
      'Fri for grater',
      'Mulighed for at nedætsse detaljerede mønstre, logoer eller tekster fra den ene side',
    ],
    body: [
      'Vi leverer ofte fra dag til dag, så du hurtigt kan se resultatet på et fysisk emne, inden du går i produktion. Det gør det let at justere mønster, logo eller detaljer, mens det stadig er billigt at ændre.',
      'Vi er endvidere behjælpelige med design af dit produkt. Har du ikke en CAD-tegning af produktet, kan du sende en skitse – så hjælper vi dig gerne med at tegne. Har du behov for f.eks. forgyldning og/eller bukning, klarer vi også dette.',
      'Vi bearbejder de fleste metaller i tykkelser fra 0,025 mm til op over 1 mm, så det dekorative emne kan skræddersyes til netop det materiale og den detaljeringsgrad, du ønsker.',
          "Dekorative emner leveres ofte i bronze eller messing med en forgyldt overflade, så de får en flot, detaljeret finish, der holder – et emne, der kan bære et logo eller et mønster helt ned til små detaljer.",
    ],
    image: ahorn,
  },
];
