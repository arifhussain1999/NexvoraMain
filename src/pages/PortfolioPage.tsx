import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import DemoModal from '../components/DemoModal';
import { useState } from 'react';
import { useParams } from 'react-router';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'RD Interior',
    category: 'Live Projects',
    slug: 'live-projects',
    url: 'https://www.rddecors.com/',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    description: 'Luxury interior design and decor solutions.',
  },
  {
    title: 'Sunseatings',
    category: 'Live Projects',
    slug: 'live-projects',
    url: 'https://www.sunseatings.com/',
    image: 'images/sunseatings.png',
    description: 'Premium ergonomic office seating solutions.',
  },
  {
    title: 'Crescent Construction',
    category: 'Live Projects',
    slug: 'live-projects',
    url: 'https://www.crescentconstruction.co.in/',
    image: 'images/crescent-construction.png',
    description: 'Modern infrastructure and residential construction.',
  },
  {
    title: 'Woodnest',
    category: 'Live Projects',
    slug: 'live-projects',
    url: 'https://www.woodnestfurniture.in/',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800',
    description: 'Bespoke wooden furniture and craftsmanship.',
  },
  {
    title: 'Vidhi Interior',
    category: 'Live Projects',
    slug: 'live-projects',
    url: 'https://www.vidhinterio.in/',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
    description: 'Contemporary interior design and prototype solutions.',
  },
  {
    title: 'NestLux Real Estate',
    category: 'Demo Websites',
    slug: 'demo-websites',
    url: '/demo/RealEstate.html',
    image: 'images/real-estate-demo.png',
    description: 'A premium real estate platform showcasing high-value luxury properties with advanced search, interactive maps, and AI integrations.',
  },
  {
    title: 'Spice Garden Café',
    category: 'Demo Websites',
    slug: 'demo-websites',
    url: '/demo/Restaurant.html',
    image: 'images/restaurant-demo.png',
    description: 'An elegant dark-themed culinary showcase with interactive menu filtration, a reservation booking engine, and online ordering.',
  },
  {
    title: 'CHANDRA Resort & Spa',
    category: 'Demo Websites',
    slug: 'demo-websites',
    url: '/demo/Resort.html',
    image: 'images/resort-demo.png',
    description: 'A high-end 5-star tropical resort destination portal featuring immersive villa galleries, package bookings, and wellness service highlights.',
  },
  {
    title: 'ShopHub E-Commerce',
    category: 'Demo Websites',
    slug: 'demo-websites',
    url: '/demo/E-commerce.html',
    image: 'images/ecommerce-demo.png',
    description: 'A modern, high-conversion shopping experience with interactive carts, instant product filtering, and a sleek glassmorphic checkout flow.',
  },
  {
    title: 'CW Academy Edtech',
    category: 'Demo Websites',
    slug: 'demo-websites',
    url: '/demo/Edtech.html',
    image: 'images/edtech-demo.png',
    description: 'Next-generation learning management platform with gamified leaderboards, adaptive test generators, and an interactive AI study tutor.',
  },
  {
    title: 'गृह Vastu Interiors',
    category: 'Demo Websites',
    slug: 'demo-websites',
    url: '/demo/Interior.html',
    image: 'images/interior-demo.png',
    description: 'A sophisticated e-commerce showroom for luxury handcrafted Indian furniture, curated room collections, and Vastu consultancy booking.',
  },
  {
    title: 'Makeup by Ruchika',
    category: 'Live Projects',
    slug: 'live-projects',
    image: 'images/makeup-demo.png',
    description: 'Luxury cosmetics and beauty e-commerce experience.',
  },
  {
    title: 'Aurora Healthcare',
    category: 'Live Projects',
    slug: 'live-projects',
    image: 'images/doctor-demo.png',
    description: 'Premium healthcare and wellness platform for modern clinics.',
  }
];

export default function PortfolioPage() {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = id
    ? projects.filter(p => p.slug === id)
    : projects;

  const title = id === 'live-projects'
    ? 'Live Projects'
    : id === 'demo-websites'
      ? 'Demo Websites'
      : 'Our Portfolio';

  return (
    <div className="min-h-screen bg-white pt-24">
      <Navbar onDemoClick={() => setIsModalOpen(true)} />

      {/* Header */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-black mb-6">
            {id ? (
              <>Our <span className="text-[#F65235]">{title}</span></>
            ) : (
              <>Our <span className="text-[#F65235]">Portfolio</span></>
            )}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {id === 'live-projects'
              ? 'Explore the real-world applications we have built for our clients.'
              : id === 'demo-websites'
                ? 'Browse our collection of sample designs and experimental layouts.'
                : 'From high-converting landing pages to complex web applications, we build digital experiences that matter.'}
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 rounded-[32px] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between"
              onClick={() => project.url && window.open(project.url, '_blank')}
            >
              <div>
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-5 shadow-[0_4px_15px_rgba(0,0,0,0.02)] bg-gray-50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover object-top transition-transform duration-700 ease-out ${project.url ? 'group-hover:scale-105' : ''}`}
                  />
                  {project.url ? (
                    <>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white text-black px-5 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-1.5">
                          View Demo
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 bg-[#F65235] text-white text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-lg">
                        LIVE DEMO
                      </div>
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-[1.5px] flex items-center justify-center">
                      <span className="bg-slate-950/80 backdrop-blur-md border border-white/10 text-white text-xs font-black tracking-widest uppercase px-6 py-3 rounded-full shadow-2xl">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>
                <div className="px-1">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F65235] bg-[#F65235]/8 px-2.5 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-[#F65235] transition-colors flex items-center gap-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
              
              {project.url && (
                <div className="px-1 pt-3 mt-2 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-gray-400 group-hover:text-[#F65235] transition-colors">
                  <span>Explore Template</span>
                  <ArrowRight className="w-4 h-4 transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
              )}
            </div>
          ))}
          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-400 text-xl italic">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-8">Want to see your project here?</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="pill-button-primary px-10 py-4 text-xl"
          >
            Start Your Project Now
            <ArrowRight className="ml-2 w-6 h-6" />
          </button>
        </div>
      </section>

      <Footer />
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
