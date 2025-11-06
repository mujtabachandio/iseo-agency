
// using public assets from /exprience-icon
// use external placeholders for blog images and avatars to avoid missing asset issues


type PersonalDataType = {
  name: string
  experience: string
  image: string
}

export type ServicesType = {
  icon: string
  title: string
  variant: string
  description: string
}

export type WorkDataType = {
  image: string
  variant: string
  title: string
  link: string
  language: string[]
  category?: string[]
}

export type BlogsType = {
  image: string
  title: string
  name: string
  date: string
  userImg: string
}


export const personalData: PersonalDataType[] = [
  {
    name: 'SEO',
    experience: '10 Year',
    image: '/exprience-icon/seo.mp4'
  },
  {
    name: 'Pay Per Click - PPC',
    experience: '6 Year',
    image: '/exprience-icon/pay-per-click.mp4'
  },
  {
    name: 'Social Media Marketing',
    experience: '4 Year',
    image: '/exprience-icon/Social-Media-Marketing.mp4'
  },
  {
    name: 'Google My Business - GMB',
    experience: '7 Year',
    image: '/exprience-icon/GMB.png'
  },
  {
    name: 'On-Page & Technical SEO',
    experience: '9 Year',
    image: '/exprience-icon/On-Page-Technical-SEO.mp4'
  },
  {
    name: 'Off-Page SEO',
    experience: '10 Year',
    image: '/exprience-icon/Off-Page-SEO.mp4'
  },
  {
    name: 'Content Writing',
    experience: '3 Year',
    image: '/exprience-icon/Content-Writing.mp4'
  },
  {
    name: 'Banner/Logo Designing',
    experience: '3 Year',
    image: '/exprience-icon/Banner-Logo-Designing.mp4'
  },
]

export const servicesData: ServicesType[] = [
  {
    icon: 'mdi:search-web',
    variant: 'soft-alt-orange',
    title: 'Search Engine Optimization (SEO)',
    description: 'The process of increasing your website\'s organic visibility to drive targeted, high-quality traffic from search engines like Google. We implement long-term strategies to improve your site\'s authority and rankings.'
  },
  {
    icon: 'mdi:clipboard-text-outline',
    variant: 'soft-alt-info',
    title: 'SEO Audit',
    description: 'A deep, diagnostic analysis of your website\'s performance, health, and current rankings, highlighting all technical and content issues. We provide an actionable report detailing immediate steps needed for improvement and growth.'
  },
  {
    icon: 'mdi:google-ads',
    variant: 'soft-alt-success',
    title: 'Pay Per Click (PPC)',
    description: 'Creating and managing targeted advertising campaigns on platforms like Google Ads to generate instant, measurable traffic and conversions. We optimize bidding and ad copy to ensure maximum return on your advertising spend (ROI).'
  },
  {
    icon: 'mdi:account-group-outline',
    variant: 'soft-alt-warning',
    title: 'Social Media Marketing (SMM)',
    description: 'Developing and executing strategies across platforms (e.g., Facebook, Instagram) to build brand awareness, engage audiences, and drive traffic. We handle content creation, scheduling, and community management.'
  },
  {
    icon: 'mdi:google-my-business',
    variant: 'soft-alt-purple',
    title: 'Google My Business (GMB)',
    description: 'Optimizing your Google Business Profile to boost visibility in local searches and on Google Maps. This service drives local traffic, calls, and customer reviews to your physical business.'
  },
  {
    icon: 'mdi:cog-outline',
    variant: 'soft-alt-orange',
    title: 'On-Page & Technical SEO',
    description: 'Optimizing all elements on your web pages, including content, internal links, headers, and meta tags, for search engine relevance. We also fix site speed, crawl errors, and mobile usability for optimal technical health.'
  },
  {
    icon: 'mdi:link-variant',
    variant: 'soft-alt-info',
    title: 'Off-Page SEO',
    description: 'Building high-authority backlinks and managing brand mentions across external websites to increase your website\'s domain authority. This essential process establishes your site as a trusted, credible source.'
  },
  {
    icon: 'mdi:pencil-outline',
    variant: 'soft-alt-success',
    title: 'Content Writing',
    description: 'Creating high-quality, SEO-optimized content, including blog posts, landing pages, and website copy, focused on search intent. Our content is designed not only to rank but also to engage and convert your target audience.'
  },
  {
    icon: 'mdi:image-outline',
    variant: 'soft-alt-warning',
    title: 'Banner Designing',
    description: 'Professional creation of visually appealing digital banners for your website, social media, and Pay Per Click campaigns. We design attention-grabbing creatives optimized for various ad platform specifications.'
  },
  {
    icon: 'mdi:pen-nib',
    variant: 'soft-alt-purple',
    title: 'Logo Designing',
    description: 'Crafting a unique, professional, and memorable brand identity through the design of a distinctive business logo. We ensure your logo reflects your agency\'s mission and resonates with your target market.'
  },
]

export const workData: WorkDataType[] = [
  {
    image: '/logo-removebg-preview.png',
    variant: 'soft-alt-orange',
    title: 'E-commerce SEO Optimization',
    link: 'https://example-client.com',
    language: ['SEO', 'Technical SEO', 'Content Strategy'],
    category: ['seo', 'ecommerce']
  },
  {
    image: '/logo-removebg-preview.png',
    variant: 'soft-alt-info',
    title: 'Local Business GMB Optimization',
    link: 'https://example-client.com',
    language: ['GMB', 'Local SEO', 'Google Maps'],
    category: ['local']
  },
  {
    image: '/logo-removebg-preview.png',
    variant: 'soft-alt-success',
    title: 'SaaS Platform Link Building',
    link: 'https://example-client.com',
    language: ['Off-Page SEO', 'Link Building', 'Content Marketing'],
    category: ['seo', 'linkbuilding']
  },
  {
    image: '/logo-removebg-preview.png',
    variant: 'soft-alt-warning',
    title: 'Healthcare PPC Campaign',
    link: 'https://example-client.com',
    language: ['PPC', 'Google Ads', 'Conversion Optimization'],
    category: ['ppc']
  },
  {
    image: '/logo-removebg-preview.png',
    variant: 'soft-alt-purple',
    title: 'B2B Content Marketing Strategy',
    link: 'https://example-client.com',
    language: ['Content Writing', 'SEO Content', 'Blog Strategy'],
    category: ['content']
  },
]

export const blogsData: BlogsType[] = [
  {
    image: 'https://images.unsplash.com/photo-1529336953121-a0fc1f02177d?auto=format&fit=crop&w=800&q=60',
    title: 'How to Dominate Search Results with White-Hat SEO Strategies',
    name: 'Sarah Johnson',
    date: '14 Feb 2024',
    userImg: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=80&q=60',
  },
  {
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60',
    title: 'Measurable SEO Success: Tracking Your Organic Growth',
    name: 'Michael Chen',
    date: '12 Jan 2024',
    userImg: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=80&q=60',
  },
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=60',
    title: 'The Complete Guide to On-Page & Technical SEO Optimization',
    name: 'Emily Rodriguez',
    date: '28 Dec 2023',
    userImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=60',
  },
]