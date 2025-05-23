
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <Link to="/" className="inline-flex items-center text-portfolio-accent hover:text-portfolio-darkBlue mb-6 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Portfolio
          </Link>

          <article className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Blog Header with improved symmetry */}
            <div className="bg-portfolio-darkBlue p-8 flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex-shrink-0 overflow-hidden mb-6 border-4 border-white/20">
                <img 
                  src="/lovable-uploads/84a79e31-dba8-4e43-bd53-b3a5ef40a210.png" 
                  alt="MetaMotives Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">Why Your Website is a Game Changer for Your Business</h1>
              <div className="text-white/80">
                <span>Published on April 5, 2025</span>
                <span className="mx-3">|</span>
                <span>By Om Barot, Founder of MetaMotives</span>
              </div>
            </div>

            {/* Blog Content with improved styling */}
            <div className="p-8 md:p-10">
              <section className="prose prose-slate max-w-none">
                <h2 className="text-center mb-8 text-portfolio-darkBlue">The Digital Storefront: More Than Just a Website</h2>
                <p>
                  In today's digital age, your website is no longer just a luxury or a nice-to-have – it's the cornerstone of your business's online presence. Think of it as your 24/7 digital storefront, constantly representing your brand even when you're not actively working.
                </p>

                <p>
                  At MetaMotives, we understand that a website is more than just a collection of pages and links. It's a powerful tool that can transform your business in ways you might not have considered.
                </p>
                
                <div className="my-8 bg-gray-50 p-6 rounded-lg border-l-4 border-portfolio-accent">
                  <h3 className="text-portfolio-darkBlue mb-3">First Impressions Matter</h3>
                  <p className="mb-0">
                    Did you know that it takes about 0.05 seconds for users to form an opinion about your website? That's right – in less time than a blink of an eye, potential customers decide whether they want to stay or leave. This lightning-fast judgment is based primarily on design and user experience.
                  </p>
                </div>
                
                <p>
                  A professionally designed website instantly communicates credibility and trustworthiness. It tells visitors that you're serious about your business and that you value their experience enough to invest in a quality online presence.
                </p>
                
                <h3 className="text-center text-portfolio-darkBlue mt-10">Expanding Your Reach: Breaking Geographical Boundaries</h3>
                <p>
                  The beauty of a website is that it breaks down geographical barriers. Without a digital presence, your business is limited to local customers who can physically visit you. With a website, however, you're accessible to anyone with an internet connection, anywhere in the world.
                </p>
                
                <p>
                  This global reach isn't just theoretical – it translates into tangible business opportunities. A well-optimized website can attract international customers, partnerships, and possibilities that simply wouldn't be available otherwise.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-portfolio-darkBlue mb-3">The Always-Open Business Model</h3>
                    <p className="mb-0">
                      Unlike a physical store with set operating hours, your website never closes. It works for you around the clock, providing information, capturing leads, and even making sales while you sleep.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-portfolio-darkBlue mb-3">Building Credibility in the Digital Age</h3>
                    <p className="mb-0">
                      In an era where "Google it" has become standard practice, not having a website can seriously damage your credibility. Today's consumers expect to find information about businesses online.
                    </p>
                  </div>
                </div>
                
                <p>
                  A professional website establishes legitimacy. It shows that you're an established business that takes itself seriously. Features like customer testimonials, case studies, and detailed service information can further boost your credibility and help convert visitors into customers.
                </p>
                
                <h3 className="text-center text-portfolio-darkBlue mt-10">Data-Driven Decision Making</h3>
                <p>
                  One of the most powerful aspects of a website is the ability to collect and analyze data about your visitors and their behavior. Tools like Google Analytics provide invaluable insights into who your customers are, what they're looking for, and how they interact with your content.
                </p>
                
                <p>
                  This information allows you to make informed decisions about your business strategy, marketing efforts, and product development. Instead of guessing what your customers want, you can know with certainty and adjust your approach accordingly.
                </p>
                
                <h3 className="text-center text-portfolio-darkBlue mt-10">Cost-Effective Marketing</h3>
                <p>
                  Compared to traditional advertising methods, a website is an incredibly cost-effective marketing tool. Once it's up and running, the ongoing costs are minimal, yet it continues to work for your business day and night.
                </p>
                
                <p>
                  Furthermore, digital marketing strategies like search engine optimization (SEO), content marketing, and social media integration can significantly amplify your website's reach without the high costs associated with print advertising, television spots, or billboards.
                </p>
                
                <div className="my-10 bg-portfolio-darkBlue/10 p-8 rounded-lg text-center">
                  <h3 className="text-portfolio-darkBlue mb-3">Conclusion: The Game-Changing Power of a Website</h3>
                  <p className="mb-0">
                    Your website is more than just a digital brochure – it's a versatile business tool that can transform how you connect with customers, market your products or services, and grow your business. At MetaMotives, we specialize in creating websites that don't just exist but excel – websites that truly become game changers for the businesses they represent.
                  </p>
                </div>
                
                <p className="text-center">
                  Ready to transform your online presence? Visit <a href="https://metamotives.world" className="text-portfolio-accent hover:text-portfolio-darkBlue font-bold" target="_blank" rel="noopener noreferrer">MetaMotives.world</a> to learn more about our services and how we can help your business thrive in the digital landscape.
                </p>
              </section>
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Blog;
