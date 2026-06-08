import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import DemoModal from '../components/DemoModal';
import { useState } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ankit Sharma',
    role: 'Digital Educator',
    content: 'Nexvora transformed my teaching business. The platform they built is seamless and my students love it.',
    rating: 5,
    avatar: 'A'
  },
  {
    name: 'Priya Singh',
    role: 'Content Creator',
    content: 'The custom merchandise store built by Nexvora increased my revenue by 40% in just two months.',
    rating: 5,
    avatar: 'P'
  },
  {
    name: 'Rahul Verma',
    role: 'Tech Blogger',
    content: 'Professional, timely, and innovative. The team at Nexvora really knows how to build for creators.',
    rating: 5,
    avatar: 'R'
  }
];

export default function TestimonialsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white pt-24">
      <Navbar onDemoClick={() => setIsModalOpen(true)} />
      
      {/* Header */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-black mb-6">
            Client <span className="text-[#F65235]">Testimonials</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear what the creators and innovators we work with have to say.
          </p>
        </div>
      </section>

      {/* Video Testimonial */}
      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#F65235] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Video Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-black text-black">
              See What Our <span className="text-[#F65235]">Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-center">
            {/* First Testimonial Video - alkali_metal__ */}
            <div className="relative bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl w-full border border-slate-800">
              <iframe
                src="https://www.instagram.com/reel/DYir4V0Tht2/embed/"
                className="w-full border-0"
                style={{ minHeight: '520px' }}
                allowFullScreen
                scrolling="no"
                title="Client video testimonial 1"
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 right-6 z-10">
                <p className="text-white/80 text-sm font-medium">
                  🚀 Growth & Strategy Feedback
                </p>
              </div>
            </div>

            {/* Second Testimonial Video - debangshu */}
            <div className="relative bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl w-full border border-slate-800">
              <iframe
                src="https://www.instagram.com/reel/DZEtEU-xoO9/embed/"
                className="w-full border-0"
                style={{ minHeight: '520px' }}
                allowFullScreen
                scrolling="no"
                title="Client video testimonial 2"
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 right-6 z-10">
                <p className="text-white/80 text-sm font-medium">
                  🎬 Creator Success Story
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#F65235] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Written Reviews</span>
            <h2 className="text-3xl md:text-4xl font-black text-black">
              What <span className="text-[#F65235]">Creators</span> Are Saying
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 rounded-3xl p-8 relative shadow-sm hover:shadow-md transition-shadow">
              <Quote className="absolute top-6 right-8 w-12 h-12 text-[#F65235]/10" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F65235] text-[#F65235]" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-8 italic">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F65235] text-white flex items-center justify-center font-bold text-xl">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-black">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      <Footer />
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
