import skaermdaaser from '../assets/original/skaermdaaser.png';
import ahorn from '../assets/original/ahorn.png';
import bladfjedre from '../assets/original/bladfjedre.png';
import shims from '../assets/original/shims.png';
import shield from '../assets/original/shield.png';
import type { ImageMetadata } from 'astro';

export const base = import.meta.env.BASE_URL;

export const company = {
  name: 'Etch A/S',
  phone: '+45 27 11 65 59',
  phoneHref: 'tel:+4527116559',
  phone2: '+45 44 95 65 66',
  email: 'info@etch.dk',
  emailHref: 'mailto:info@etch.dk',
  street: 'Bygmarken 3',
  zip: '3520 Farum',
  hours: '08.00–16.00',
  logo: undefined as unknown as ImageMetadata,
};

export type Product = {
  slug: string;
  name: string;
  fact: string;
  image: ImageMetadata;
  field: 'field-red' | 'field-ink' | 'field-grey' | 'field-brass';
};

export const products: Product[] = [
  {
    slug: 'bladfjedre',
    name: 'Bladfjedre',
    fact: 'Kontaktfjedre ætset i stedet for stanset – ingen grater, fra dag til dag.',
    image: bladfjedre,
    field: 'field-red',
  },
  {
    slug: 'shims-og-spacere',
    name: 'Shims og spacere',
    fact: 'Afstandsskiver efter dine tegninger i tykkelser til dit behov.',
    image: shims,
    field: 'field-ink',
  },
  {
    slug: 'emc-skaermdaaser',
    name: 'EMC skærmdåser',
    fact: 'Cans, rammer og låg i nysølv eller fortinnet plade. Levering i Tape & Reel.',
    image: skaermdaaser,
    field: 'field-grey',
  },
  {
    slug: 'emc-pakninger',
    name: 'EMC pakninger',
    fact: 'RF-gaskets skræddersyet til dit printkort – én komponent i stedet for flere.',
    image: shield,
    field: 'field-brass',
  },
  {
    slug: 'dekorative-emner',
    name: 'Dekorative emner',
    fact: 'Detaljeret ætsning i bronze, messing eller rustfrit stål ned til under 0,1 mm.',
    image: ahorn,
    field: 'field-red',
  },
];

export const processSteps = [
  { n: 1, t: 'Panel klippes i optimal størrelse og renses kemisk for overfladesnavs og fedt.' },
  { n: 2, t: 'Panelet lamineres med fotosensitiv ætseresist på begge sider.' },
  { n: 3, t: 'Fotoresisten belyses gennem master på begge sider.' },
  { n: 4, t: 'Den belyste resist hærdes; den ikke belyste forbliver uhærdet.' },
  { n: 5, t: 'Den ikke hærdede ætseresist fjernes i fremkaldelsen.' },
  { n: 6, t: 'Materialet ætses bort i den ønskede dybde.' },
  { n: 7, t: 'Den hærdede ætseresist fjernes (strippes).' },
];

export function orgJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Etch A/S',
    description: 'Industrielle løsninger i metallisk tyndplade via faconætsning – EMC-afskærmning, bladfjedre, gaskets, shims og dekorative emner.',
    telephone: company.phone,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.street,
      postalCode: '3520',
      addressLocality: 'Farum',
      addressCountry: 'DK',
    },
    openingHours: 'Mo-Fr 08:00-16:00',
    foundingDate: '2007-04-02',
    url: 'https://etch.dk/',
  };
}

export function breadcrumb(items: { name: string; path: string }[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: 'https://etch.dk' + it.path,
    })),
  };
}
