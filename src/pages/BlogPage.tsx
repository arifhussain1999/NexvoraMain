import { useEffect, useState } from 'react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';

const blogPosts = [
  {
    id: 1,
    title: 'The Digital Shift: How Durgapur & Asansol Businesses Are Dominating Online Markets',
    excerpt: 'From heavy engineering industrial hubs to digital commerce leaders, discover why local startups, SME manufacturers, and local retail brands in Paschim Bardhaman are investing in custom website development to scale beyond local boundaries.',
    category: 'Business Growth',
    author: 'NEXVORA Research',
    date: 'June 30, 2026',
    image: 'images/build-brand.jpg',
    content: (
      <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
        <p className="font-semibold text-slate-900 text-xl">
          Paschim Bardhaman—traditionally known for its coal mines, iron and steel plants, and heavy engineering industries—is undergoing a quiet but massive digital transformation.
        </p>
        <p>
          Local entrepreneurs, retail brands, and service businesses in the twin cities of <strong>Durgapur and Asansol</strong> are rapidly shifting online. With rising internet penetration and mobile-first consumer habits, businesses are realizing that local offline reach is no longer enough to sustain long-term growth.
        </p>
        
        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. The Rise of the Local Digital Economy</h3>
        <p>
          Historically, a business in Durgapur or Asansol relied heavily on traditional foot traffic at market centers like Benachity, City Centre, or Asansol GT Road. Today, local search queries such as <em>"best sweet shop in Durgapur"</em> or <em>"top school in Asansol"</em> have surged by over 140% year-on-year. Businesses with a professional, search-optimized website are capturing up to 80% of these high-intent local queries.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Moving From Static Pages to Custom High-Performance Web Apps</h3>
        <p>
          Initially, businesses chose simple, free template-based builders. However, these websites suffered from slow load times, poor security, and near-zero customization options.
        </p>
        <p>
          Modern startups and established manufacturing units in the industrial zones of Raniganj and Durgapur are switching to custom JavaScript frameworks (React, Next.js). A high-performance website ensures:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Instant Load Speeds:</strong> Less than 2 seconds, preventing visitors from abandoning the site.</li>
          <li><strong>Superior Local SEO:</strong> Enhanced visibility on Google Maps and search results.</li>
          <li><strong>Interactive Integrations:</strong> Features like WhatsApp-integrated ordering, custom product estimators for manufacturers, and inquiry managers.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Localized SEO: The Competitive Advantage</h3>
        <p>
          For local companies, competing with national brands is difficult. However, Local SEO levels the playing field. By targeting localized keywords (e.g., <em>"Industrial equipment manufacturer in Durgapur"</em> or <em>"Real estate developer in Asansol"</em>) and maintaining a robust Google Business Profile linked to a fast website, local brands are securing top search rankings and converting local traffic into paying clients.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Conclusion</h3>
        <p>
          The digital marketplace in Durgapur and Asansol is ripe with opportunity. Establishing a professional, custom-coded web presence today ensures your business is positioned for the future. NEXVORA is proud to be the trusted technology partner helping local brands navigate this exciting digital journey.
        </p>
      </div>
    )
  },
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  useEffect(() => {
    document.title = "NEXVORA Blog | Insights on Website Development & SEO in Durgapur & Kolkata";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Read research-based articles by NEXVORA on website development, e-commerce growth, educational technology, and SEO strategies for businesses in Durgapur, Asansol, and Kolkata.');
    }
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Header */}
        <div className="max-w-[1200px] mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-black text-black mb-6">
                Insights & <span className="text-[#F65235]">Stories</span>
              </h1>
              <p className="text-xl text-gray-600">
                Explore the latest trends in the creator economy, digital marketing, and web technology.
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search articles..."
                className="w-full pl-12 pr-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:outline-none focus:border-[#F65235] focus:bg-white transition-all"
              />
            </div>
          </div>
        </div>

        {/* Featured Post (Optional first post) */}
        <div className="max-w-[1200px] mx-auto px-6 mb-20">
           <div className="group relative rounded-[32px] md:rounded-[40px] overflow-hidden bg-gray-900 aspect-[4/3] md:aspect-[21/9] flex items-end p-6 md:p-16">
              <img 
                src={blogPosts[0].image} 
                alt="Featured post" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="relative z-10 max-w-2xl">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#F65235] text-white text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4">
                  Featured
                </span>
                <h2 className="text-2xl md:text-5xl font-black text-white mb-4 leading-tight">
                  {blogPosts[0].title}
                </h2>
                <p className="text-white/80 text-base md:text-lg mb-6 md:mb-8 line-clamp-2 hidden sm:block">
                  {blogPosts[0].excerpt}
                </p>
                <button 
                  onClick={() => setSelectedPost(blogPosts[0])}
                  className="flex items-center gap-2 text-white font-bold group/btn text-sm md:text-base cursor-pointer"
                >
                  Read Article <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
           </div>
        </div>

        {/* Blog Grid */}
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="group cursor-pointer" onClick={() => setSelectedPost(post)}>
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-black text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-medium">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    {post.author}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-black mb-4 leading-tight group-hover:text-[#F65235] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-black font-black text-sm group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4 text-[#F65235]" />
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Placeholder */}
          {blogPosts.length > 3 && (
            <div className="mt-24 pt-12 border-t border-gray-100 flex items-center justify-center">
               <button className="px-8 py-4 rounded-2xl border border-gray-200 font-bold text-black hover:border-black transition-colors">
                 Load More Articles
               </button>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Reading Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-3xl max-h-[85vh] rounded-[32px] overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="flex justify-between items-center px-8 py-6 border-b border-gray-100">
              <span className="px-3.5 py-1.5 rounded-full bg-orange-100 text-[#F65235] text-xs font-bold uppercase tracking-wider">
                {selectedPost.category}
              </span>
              <button 
                onClick={() => setSelectedPost(null)}
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-black hover:bg-gray-100 transition-colors font-bold text-lg"
              >
                ✕
              </button>
            </div>
            
            {/* Scrollable Content */}
            <div className="overflow-y-auto p-8 md:p-12 space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-black leading-tight">
                {selectedPost.title}
              </h2>
              <div className="flex items-center gap-6 text-sm text-gray-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" /> {selectedPost.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" /> {selectedPost.author}
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-gray-100">
                <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
              </div>
              <div className="pt-4">
                {selectedPost.content}
              </div>
            </div>
            
            {/* Footer */}
            <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 flex justify-end">
              <button 
                onClick={() => setSelectedPost(null)}
                className="px-6 py-3 bg-[#F65235] text-white font-bold rounded-xl hover:bg-[#d4432a] transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
