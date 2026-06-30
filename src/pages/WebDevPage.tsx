import { useEffect, useRef } from 'react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import {
  Code2,
  Smartphone,
  ShoppingBag,
  Settings,
  Layers,
  Globe,
  Zap,
  Database,
  Cpu,
  Layout,
  ArrowRight,
  Plus,
  CheckCircle2
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DemoModal from '../components/DemoModal';
import PricingSection from '../sections/PricingSection';
import { useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Custom Website Development",
    description: "Bespoke solutions built from scratch. We focus on unique design and clean code, moving away from generic templates to give your brand a distinct identity.",
    icon: <Code2 className="w-6 h-6" />
  },
  {
    title: "E-commerce Website Development",
    description: "Robust online stores with secure payment gateways, inventory management, and seamless shipping integrations to drive your sales.",
    icon: <ShoppingBag className="w-6 h-6" />
  },
  {
    title: "Responsive Web Development",
    description: "A mobile-first approach ensuring your website looks and performs flawlessly on desktops, tablets, and smartphones.",
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    title: "CMS Website Development",
    description: "Easy-to-manage platforms like WordPress and Shopify, allowing you to update your content without any technical hurdles.",
    icon: <Settings className="w-6 h-6" />
  },
  {
    title: "Landing Page Development",
    description: "High-converting single pages optimized for marketing campaigns, product launches, and lead generation.",
    icon: <Layers className="w-6 h-6" />
  },
  {
    title: "Web Application Development",
    description: "Complex web apps like SaaS products, interactive dashboards, and advanced booking systems tailored to your logic.",
    icon: <Zap className="w-6 h-6" />
  }
];

const technologies = [
  { category: "Frontend", techs: ["HTML5", "CSS3", "JavaScript", "React", "Angular", "Vue.js", "Next.js"], icon: <Layers className="w-5 h-5" /> },
  { category: "Backend", techs: ["Node.js", "PHP", "Python", "Django", "Laravel", "Express.js"], icon: <Cpu className="w-5 h-5" /> },
  { category: "Databases", techs: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"], icon: <Database className="w-5 h-5" /> },
  { category: "CMS & E-commerce", techs: ["WordPress", "Shopify", "WooCommerce", "Magento"], icon: <ShoppingBag className="w-5 h-5" /> }
];

const faqs = [
  { q: "How long does it take to develop a website in Durgapur or Kolkata?", a: "Development time depends on complexity. Basic websites take 2-3 weeks, business websites 4-6 weeks, and e-commerce sites 6-8 weeks. We serve clients across Durgapur, Kolkata, Asansol, Bardhaman, and all of West Bengal with the same fast turnaround." },
  { q: "Do you provide domain and hosting for businesses in West Bengal?", a: "Yes, we help businesses in Durgapur, Kolkata, and across West Bengal with domain registration and reliable hosting setup. We also offer ongoing maintenance and support services." },
  { q: "Will my website be mobile-friendly?", a: "Absolutely! All our websites are fully responsive and tested across all devices — desktops, tablets, and smartphones. This is critical for local businesses in Durgapur and Kolkata where over 80% of users browse on mobile." },
  { q: "Can I update my website content myself?", a: "Yes! We provide easy-to-use CMS (Content Management System) that allows you to update text, images, and more without any technical knowledge. Perfect for small business owners in Durgapur and Kolkata who want full control." },
  { q: "Do you offer SEO services along with website development?", a: "Yes, all our websites come with basic on-page SEO optimization including local SEO for Durgapur and Kolkata. We also offer advanced SEO packages to help your website rank higher in Google search results for West Bengal and pan-India searches." },
  { q: "What is the cost of website development in Durgapur?", a: "Our website development packages start from affordable rates tailored for startups and small businesses in Durgapur and Kolkata. Contact us for a free quote — we offer the best value for professional web development in West Bengal." },
  { q: "Why should I choose NEXVORA over other web development companies in Kolkata?", a: "NEXVORA combines Kolkata and Durgapur-based local expertise with cutting-edge technology. We've delivered 500+ projects, offer dedicated support, use the latest tech stacks like React and Next.js, and provide end-to-end digital solutions — from design to SEO to app development." }
];

export default function WebDevPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleModal = () => {
    if (isModalOpen) setSelectedPlan(undefined);
    setIsModalOpen(!isModalOpen);
  };

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  useEffect(() => {
    // SEO: Set page title and meta description for Durgapur & Kolkata targeting
    document.title = "Best Website Development Company in Durgapur & Kolkata | Custom Web Design & Development | NEXVORA";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'NEXVORA is the #1 website development company in Durgapur & Kolkata, West Bengal. We offer custom web design, e-commerce development, responsive websites, CMS solutions & SEO-optimized websites. 500+ projects delivered. Call +91 7811089216.');
    }

    // SEO: Inject Service JSON-LD structured data
    const serviceSchema = document.createElement('script');
    serviceSchema.type = 'application/ld+json';
    serviceSchema.id = 'webdev-service-schema';
    serviceSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Website Development",
      "provider": {
        "@type": "ProfessionalService",
        "name": "NEXVORA",
        "url": "https://www.nexvoraweb.in",
        "telephone": "+917811089216",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Durgapur",
          "addressRegion": "West Bengal",
          "postalCode": "713214",
          "addressCountry": "IN"
        }
      },
      "areaServed": [
        { "@type": "City", "name": "Durgapur" },
        { "@type": "City", "name": "Kolkata" },
        { "@type": "City", "name": "Asansol" },
        { "@type": "City", "name": "Bardhaman" },
        { "@type": "State", "name": "West Bengal" }
      ],
      "description": "Professional website development services in Durgapur and Kolkata. Custom web design, e-commerce development, responsive websites, CMS solutions, and landing page development for businesses in West Bengal.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      }
    });
    // Only inject if not already present
    if (!document.getElementById('webdev-service-schema')) {
      document.head.appendChild(serviceSchema);
    }

    // SEO: Inject FAQ JSON-LD structured data
    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.id = 'webdev-faq-schema';
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    });
    if (!document.getElementById('webdev-faq-schema')) {
      document.head.appendChild(faqSchema);
    }

    const ctx = gsap.context(() => {
      // Reveal animation for text
      gsap.from('.reveal-text', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => {
      ctx.revert();
      // Cleanup injected schemas
      document.getElementById('webdev-service-schema')?.remove();
      document.getElementById('webdev-faq-schema')?.remove();
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <Navbar onDemoClick={toggleModal} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#F65235] rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="reveal-text inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-[#F65235] text-sm font-bold mb-6">
            <Globe className="w-4 h-4" />
            <span>#1 Website Development Company in Durgapur &amp; Kolkata</span>
          </div>
          <h1 className="reveal-text text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
            Professional Website <br />
            <span className="text-[#F65235]">Development Services</span> in Durgapur &amp; Kolkata
          </h1>
          <h2 className="reveal-text text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 font-medium">
            Transform your business with expert web development in Durgapur &amp; Kolkata, West Bengal.
            Custom web design, responsive development, e-commerce solutions &amp; SEO-optimized websites.
          </h2>
          <div className="reveal-text flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={toggleModal}
              className="bg-[#F65235] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-orange-600/20"
            >
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => window.open('/demo/E-commerce.html', '_blank')}
              className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-colors"
            >
              View Our Work
            </button>
          </div>

          <div className="reveal-text flex flex-wrap justify-center gap-8 md:gap-16 border-t border-slate-200 pt-12">
            <div className="text-center">
              <div className="text-4xl font-black text-slate-900 mb-1">500+</div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-[#F65235] mb-1">98%</div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-slate-900 mb-1">5+</div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal-card">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight">
                Why Businesses in Durgapur &amp; Kolkata Need a <br />
                <span className="text-[#F65235]">Professionally Developed Website</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600">
                <p className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Your 24/7 Salesperson:</strong> Your website never sleeps. It's always online, educating customers and generating leads while you rest.</span>
                </p>
                <p className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>First Impressions Matter:</strong> 75% of users judge a business's credibility based on its website design. Don't lose trust with an outdated look.</span>
                </p>
                <p className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Digital Competition:</strong> If you're not online, you're invisible. Your competitors are already capturing your potential market.</span>
                </p>
                <p className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Mobile-First World:</strong> With mobile traffic surpassing desktop, a responsive website is no longer an option—it's mandatory.</span>
                </p>
              </div>
            </div>
            <div className="reveal-card relative">
              <div className="aspect-square bg-slate-100 rounded-[40px] overflow-hidden">
                <img src="images/makeup-demo.png" alt="Website Development Company in Durgapur and Kolkata - NEXVORA" className="w-full h-full object-cover grayscale-0 group-hover:grayscale hover:scale-105 transition-all duration-700" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-[280px]">
                <p className="text-4xl font-black text-[#F65235] mb-2">500+</p>
                <p className="font-bold text-slate-900 leading-tight">Successful Projects Delivered Across Durgapur, Kolkata &amp; India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What is Web Dev */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Understanding <span className="text-[#F65235]">Website Development</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Website development is more than just code. It's the foundation of your online success, combining art and engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-10 rounded-[32px] hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-[#F65235] rounded-2xl flex items-center justify-center mb-8">
                <Layout className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Front-end Development</h3>
              <p className="text-slate-400 leading-relaxed">
                Everything your users see and interact with. Using HTML, CSS, and JavaScript, we build stunning, interactive interfaces that captivate.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-[32px] hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Back-end Development</h3>
              <p className="text-slate-400 leading-relaxed">
                The engine under the hood. We build robust server-side logic, database architectures, and APIs that power your platform's features.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-[32px] hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center mb-8">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Full-stack Solutions</h3>
              <p className="text-slate-400 leading-relaxed">
                Comprehensive development covering both ends. Whether it's a static site, a dynamic app, or a CMS like WordPress, we've got you covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Services */}
      <section className="py-24 px-6 bg-white" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">
                Our <span className="text-[#F65235]">Expertise</span>
              </h2>
              <p className="text-slate-600 text-lg">Comprehensive web development solutions for businesses in Durgapur, Kolkata &amp; across West Bengal</p>
            </div>
            <button
              onClick={toggleModal}
              className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-black transition-colors"
            >
              Explore All Services
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="group p-8 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-[#F65235] transition-all duration-500">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-8 text-[#F65235] group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 group-hover:text-white/80 leading-relaxed transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Technologies */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Cutting-Edge Technologies</h2>
            <p className="text-slate-600">High-performance tech stacks for modern digital solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-6 text-[#F65235]">
                  {item.icon}
                  <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider">{item.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.techs.map((tech, j) => (
                    <span key={j} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Development Process */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16 text-center">
            Our Proven <span className="text-[#F65235]">Development Process</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 relative">
            {[
              { num: "01", title: "Discovery & Research", text: "Understanding your business, target audience, and project goals to build a solid foundation." },
              { num: "02", title: "Planning & Strategy", text: "Sitemap creation, wireframing, and technology stack selection to define the project roadmap." },
              { num: "03", title: "UI/UX Design", text: "Crafting beautiful mockups and prototypes with a focus on user experience and mobile-first logic." },
              { num: "04", title: "Development", text: "Turning designs into code. Functionality building, CMS integration, and database setup." },
              { num: "05", title: "Testing & QA", text: "Rigorous cross-browser, mobile, and speed optimization checks to ensure a bug-free launch." },
              { num: "06", title: "Launch & Deploy", text: "Going live! DNS setup, server deployment, and continuous post-launch support." }
            ].map((step, i) => (
              <div key={i} className="reveal-card flex gap-6 relative group">
                <div className="text-6xl font-black text-slate-100 group-hover:text-orange-100 transition-colors absolute -top-10 -left-4 z-0">{step.num}</div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Who is this for */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Website Development for Every Industry in Durgapur &amp; Kolkata</h2>
            <p className="text-slate-600">Tailored web solutions for businesses of all shapes and sizes in West Bengal</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Startups", "SMEs", "E-commerce", "Healthcare", "Real Estate",
              "Education", "Restaurants", "Travel", "Finance", "Legal",
              "Manufacturing", "NGOs"
            ].map((industry, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 text-center hover:border-[#F65235] hover:shadow-md transition-all cursor-default">
                <span className="font-bold text-slate-800">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Benefits */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-card">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                Why Choose <span className="text-[#F65235]">Professional</span> <br /> Website Development?
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Custom Brand Identity", "Scalability & Growth",
                  "Better SEO Performance", "Enhanced Security",
                  "Blazing Load Speeds", "Mobile-Responsive",
                  "CRM Integration", "Long-term Cost Savings",
                  "Full Control & Ownership", "Professional Support"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 p-12 rounded-[40px] text-white">
              <div className="text-3xl font-black mb-6">Ready to grow your business in Durgapur &amp; Kolkata?</div>
              <p className="text-slate-400 mb-8 leading-relaxed">Join 500+ businesses across Durgapur, Kolkata &amp; West Bengal that have transformed their operations with NEXVORA's custom web development.</p>
              <button onClick={toggleModal} className="w-full bg-[#F65235] py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform">Get Started Today</button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Pricing */}
      <PricingSection onPlanSelect={handlePlanSelect} />

      {/* Section 9: FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Website Development FAQs — Durgapur &amp; Kolkata</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full p-8 text-left bg-slate-50 hover:bg-slate-100 transition-colors flex justify-between items-center group"
                >
                  <span className="text-lg font-bold text-slate-900">{faq.q}</span>
                  <Plus className={`w-5 h-5 text-[#F65235] transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-8 pt-0 text-slate-600 bg-slate-50 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F65235]/10 blur-[120px] -rotate-45 translate-x-1/2" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Ready to Build Your <br /> <span className="text-[#F65235]">Dream Website</span> in Durgapur &amp; Kolkata?
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Get a free consultation from West Bengal's top web development company. We respond within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={toggleModal}
              className="bg-[#F65235] hover:bg-[#E5432A] text-white px-10 py-5 rounded-2xl font-black text-xl transition-all hover:scale-110 shadow-xl shadow-orange-600/20"
            >
              Start Your Project
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all border border-white/10">
              Contact WhatsApp
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <DemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}
