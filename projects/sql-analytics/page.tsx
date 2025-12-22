
import { useNavigate } from 'react-router-dom';

export default function SqlAnalyticsProject() {
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
            End-to-End Ad Hoc Analytics using SQL
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Comprehensive SQL-based analytics solution for business intelligence and data-driven decision making across enterprise environments.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['SQL', 'Database Design', 'Business Intelligence', 'Data Analytics', 'ETL Pipelines'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-yellow-400 text-black rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button 
              onClick={scrollToCaseStudy}
              className="px-8 py-3 bg-yellow-400 text-black rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap hover:bg-yellow-300">
              View Case Study
            </button>
            <button 
              onClick={scrollToBusinessSolutions}
              className="px-8 py-3 bg-yellow-400 text-black rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap hover:bg-yellow-300">
              Business Solutions and Queries
            </button>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Project Overview</h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Explore the comprehensive SQL analytics solution that powers data-driven decision making.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 border border-yellow-400">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-4">
              <h3 className="text-xl font-bold text-black">Live Project Overview</h3>
              <p className="text-black font-semibold">Interactive demonstration of the SQL analytics solution</p>
            </div>
            <div className="p-2">
              <iframe
                src="https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/bcac682c5a91c9376431a1b9f9b05048/f3ada6b3-5377-4f61-8992-d1a2326ea030/index.html"
                className="w-full border-0 rounded-lg"
                style={{ height: 'clamp(600px, 80vh, 1200px)' }}
                title="SQL Analytics Project Overview"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study View Section */}
      <section id="case-study" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Case Study View</h2>
            <p className="text-lg text-black font-semibold">Detailed analysis and implementation insights</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 border border-yellow-400">
            <div className="bg-gradient-to-r from-black to-gray-900 px-6 py-4">
              <h3 className="text-xl font-bold text-yellow-400">Case Study View</h3>
              <p className="text-white">Detailed analysis and implementation insights</p>
            </div>
            <div className="p-2">
              <iframe
                src="https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/bfb9890aa4e4d630f8079a70090b230f/633e351d-45f7-43ab-bb59-4d2cf4299eb7/index.html"
                className="w-full border-0 rounded-lg"
                style={{ height: 'clamp(600px, 80vh, 1200px)' }}
                title="SQL Analytics Case Study"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions and Queries Section */}
      <section id="business-solutions" className="py-16 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Business Solutions and Queries</h2>
            <p className="text-lg text-white">Advanced SQL solutions for business challenges</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 border border-yellow-400">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-4">
              <h3 className="text-xl font-bold text-black">Business Solutions and Queries</h3>
              <p className="text-black font-semibold">Advanced SQL solutions for business challenges</p>
            </div>
            <div className="p-2">
              <iframe
                src="https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/5136e83f48c29450b8106f7260f9926e/9c58bcc5-f63c-4734-9694-0fc1e245ef67/index.html"
                className="w-full border-0 rounded-lg"
                style={{ height: 'clamp(800px, 90vh, 1400px)', minHeight: '800px' }}
                title="SQL Business Solutions and Queries"
                scrolling="yes"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Link */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <a
            href="https://github.com/Kaushik075/End-to-End-Ad-Hoc-Analytics-using-SQL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-black to-gray-900 text-yellow-400 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap border border-yellow-400"
          >
            <i className="ri-github-fill text-xl"></i>
            <span>View on GitHub</span>
            <i className="ri-external-link-line text-lg"></i>
          </a>
        </div>
      </section>
    </div>
  );
}
