
import { useNavigate } from 'react-router-dom';

export default function TechflowSaasProject() {
  const navigate = useNavigate();

  const scrollToCaseStudy = () => {
    const caseStudySection = document.getElementById('case-study');
    if (caseStudySection) {
      caseStudySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBusinessSolutions = () => {
    const businessSolutionsSection = document.getElementById('business-solutions');
    if (businessSolutionsSection) {
      businessSolutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500">
      {/* Header */}
      <header className="bg-gradient-to-r from-black to-gray-900 border-b border-yellow-400 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">K</span>
              </div>
              <div>
                <h2 className="font-bold text-yellow-400">Kaushik Yeddanapudi</h2>
                <p className="text-sm text-white">Business Analyst</p>
              </div>
            </div>
            
            <button
              onClick={() => navigate('/')}
              className="px-6 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-colors duration-300 whitespace-nowrap font-semibold"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Back to Portfolio
            </button>
          </div>
        </div>
      </header>

      {/* Project Title Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-6">
            TechFlow SaaS Analytics Platform
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            End-to-end business insights platform providing comprehensive analytics for SaaS companies to drive growth and optimize performance.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={scrollToCaseStudy}
              className="px-6 py-3 bg-yellow-400 text-black rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap hover:bg-yellow-300"
            >
              View Case Study
            </button>
            <button
              onClick={scrollToBusinessSolutions}
              className="px-6 py-3 bg-yellow-400 text-black rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap hover:bg-yellow-300"
            >
              Business Solutions and Queries
            </button>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-400 overflow-hidden">
            <iframe
              src="https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/8aec3850818a6c36ad4f6d41963bf384/5c31333a-d67e-4df2-8781-b1afcdbc7a9b/index.html"
              className="w-full border-0"
              style={{ height: 'clamp(600px, 80vh, 1200px)' }}
              title="TechFlow SaaS Analytics Project Overview"
            />
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case-study" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Case Study View</h2>
            <p className="text-lg text-black font-semibold">Detailed analysis and implementation insights</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-400 overflow-hidden">
            <iframe
              src="https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/be2b59f397d070a4e354318c6a2f4b11/3d4a9e46-dbca-4ee3-9ed8-911a6eb995a0/index.html"
              className="w-full border-0"
              style={{ height: 'clamp(600px, 80vh, 1200px)' }}
              title="TechFlow SaaS Analytics Case Study"
            />
          </div>
        </div>
      </section>

      {/* Business Solutions and Queries Section */}
      <section id="business-solutions" className="py-16 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Business Problems &amp; SQL Solutions (20 Advanced Queries)</h2>
            <p className="text-lg text-white">Advanced SQL solutions for complex business challenges</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-400 overflow-hidden">
            <iframe
              src="https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/d849392e78df9a9344d6c0cea576a685/32745693-b08b-4bf4-ae58-4d6ffb73ab64/index.html"
              className="w-full border-0"
              style={{ height: 'clamp(800px, 90vh, 1400px)', minHeight: '800px' }}
              title="TechFlow SaaS Business Solutions and Queries"
              scrolling="yes"
            />
          </div>
        </div>
      </section>

      {/* GitHub Link */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <a
            href="https://github.com/Kaushik075/TechFlow-SaaS-Analytics-Project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-black to-gray-900 text-yellow-400 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap border border-yellow-400"
          >
            <i className="ri-github-fill text-xl"></i>
            <span>View on GitHub</span>
          </a>
        </div>
      </section>
    </div>
  );
}
