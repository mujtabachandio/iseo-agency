// Using external images to avoid missing asset issues



export type BlogsType = {
  image: string
  title: string
  name: string
  date: string
  userImg: string
}


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
  {
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=60',
    title: 'Building High-Authority Backlinks: Off-Page SEO Best Practices',
    name: 'David Williams',
    date: '15 Dec 2023',
    userImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=60',
  },
  {
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=60',
    title: 'Content Writing for SEO: Engaging Your Target Audience',
    name: 'Jessica Martinez',
    date: '5 Dec 2023',
    userImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=60',
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60',
    title: 'Google My Business Optimization: Driving Local Traffic',
    name: 'Robert Taylor',
    date: '22 Nov 2023',
    userImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=60',
  },
]