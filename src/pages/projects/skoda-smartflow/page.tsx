import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function SkodaSmartFlowPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
            >
              <i className="ri-arrow-left-line text-xl"></i>
              <span className="font-semibold">Back to Portfolio</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-black mb-4">
              Skoda SmartFlow
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-black font-semibold">
              Internal Insights Sales Automation App Prototype
            </p>
          </div>

          {/* Project Type Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 bg-black rounded-full">
              <i className="ri-briefcase-line text-yellow-400 text-xl"></i>
              <span className="text-yellow-400 font-semibold text-sm sm:text-base">Consulting Prototype & Technical Documentation</span>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="text-base sm:text-lg text-black font-medium">
              Built as an interview assessment for Mahavir Group (Skoda Division)
            </p>
          </div>

          {/* Main Dashboard Image */}
          <div className="mb-12">
            <div className="bg-black rounded-2xl p-4 shadow-2xl border-4 border-yellow-400">
              <img
                src="https://static.readdy.ai/image/162de1f448c1631ca23ab745508fcce7/c027ea9f7e0f0cb0ab5bcc459cb3d2b1.png"
                alt="Skoda SmartFlow Dashboard"
                className="w-full h-auto rounded-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-black rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border-4 border-yellow-400">
            
            {/* Executive Summary */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <i className="ri-file-text-line text-2xl sm:text-3xl text-yellow-400"></i>
                <h2 className="text-2xl sm:text-3xl font-black text-yellow-400">Executive Summary</h2>
              </div>
              <div className="space-y-4 text-white text-base sm:text-lg leading-relaxed">
                <p>
                  Skoda SmartFlow is an internal insights application and prototype end-to-end data warehouse and automation system, built with Readdy AI designed for Mahavir Skoda's CEO, IT Head, and leadership team. With one-click refresh, the app delivers instant, real-time business insights, enabling management to make decisions with full operational transparency.
                </p>
                <p>
                  Built as a consulting demonstration, SmartFlow empowers sales and marketing teams to capture, process, and manage all dealership leads digitally—with minimal manual effort and a secure backend database. The system streamlines lead qualification, interactions, and reporting, helping reduce turnaround time and operational errors.
                </p>
              </div>
            </div>

            {/* Business Use Case */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <i className="ri-lightbulb-line text-2xl sm:text-3xl text-yellow-400"></i>
                <h2 className="text-2xl sm:text-3xl font-black text-yellow-400">Business Use Case & Problem Statement</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8">
                <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl p-4 sm:p-6 border-2 border-red-500/50">
                  <h3 className="text-lg sm:text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                    <i className="ri-error-warning-line"></i>
                    Legacy Problems
                  </h3>
                  <ul className="space-y-3 text-white text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <i className="ri-close-circle-line text-red-400 mt-1 flex-shrink-0"></i>
                      <span>24+ hour delays for sales and performance reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-close-circle-line text-red-400 mt-1 flex-shrink-0"></i>
                      <span>High data entry errors and risk-prone manual tasks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-close-circle-line text-red-400 mt-1 flex-shrink-0"></i>
                      <span>No unified, real-time view for leadership or teams</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-xl p-4 sm:p-6 border-2 border-green-500/50">
                  <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                    <i className="ri-checkbox-circle-line"></i>
                    SmartFlow Solution
                  </h3>
                  <ul className="space-y-3 text-white text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <i className="ri-check-line text-green-400 mt-1 flex-shrink-0"></i>
                      <span><strong>Leadership Dashboard:</strong> CEOs/IT Heads access instant KPIs and funnel insights with a single refresh</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-check-line text-green-400 mt-1 flex-shrink-0"></i>
                      <span><strong>Sales/Marketing Workflow Automation:</strong> Teams track and manage all leads digitally; eliminated manual data entry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-check-line text-green-400 mt-1 flex-shrink-0"></i>
                      <span><strong>Security:</strong> Single, centralized, and protected MySQL database</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-check-line text-green-400 mt-1 flex-shrink-0"></i>
                      <span><strong>Scalability:</strong> Blueprint for extension across multiple brands and branches</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Core Deliverables */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <i className="ri-stack-line text-2xl sm:text-3xl text-yellow-400"></i>
                <h2 className="text-2xl sm:text-3xl font-black text-yellow-400">Core Deliverables</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-2 border-yellow-400/50">
                  <i className="ri-database-2-line text-2xl sm:text-3xl text-yellow-400 mb-3"></i>
                  <h3 className="text-base sm:text-lg font-bold text-yellow-400 mb-2">System Architecture</h3>
                  <p className="text-white text-sm">3-layer MySQL data warehouse (Bronze/Silver/Gold) with modular ETL</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-2 border-yellow-400/50">
                  <i className="ri-robot-line text-2xl sm:text-3xl text-yellow-400 mb-3"></i>
                  <h3 className="text-base sm:text-lg font-bold text-yellow-400 mb-2">Full Automation</h3>
                  <p className="text-white text-sm">n8n & OpenAI-driven lead management, calendar sync, and workflow alerts</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-2 border-yellow-400/50">
                  <i className="ri-dashboard-line text-2xl sm:text-3xl text-yellow-400 mb-3"></i>
                  <h3 className="text-base sm:text-lg font-bold text-yellow-400 mb-2">Dashboards</h3>
                  <p className="text-white text-sm">Power BI templates for live KPIs</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-2 border-yellow-400/50">
                  <i className="ri-file-list-3-line text-2xl sm:text-3xl text-yellow-400 mb-3"></i>
                  <h3 className="text-base sm:text-lg font-bold text-yellow-400 mb-2">Documentation</h3>
                  <p className="text-white text-sm">Implementation playbook, process mapping, technical designs</p>
                </div>
              </div>
            </div>

            {/* Key Impacts */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <i className="ri-line-chart-line text-2xl sm:text-3xl text-yellow-400"></i>
                <h2 className="text-2xl sm:text-3xl font-black text-yellow-400">Key Impacts</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl p-4 sm:p-6 text-center">
                  <div className="text-3xl sm:text-4xl font-black text-black mb-2">&lt;1 Hour</div>
                  <div className="text-sm font-semibold text-black">Reporting Delay</div>
                  <div className="text-xs text-black/70 mt-1">(from 24 hours)</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl p-4 sm:p-6 text-center">
                  <div className="text-3xl sm:text-4xl font-black text-black mb-2">16-24h</div>
                  <div className="text-sm font-semibold text-black">Manual Hours Saved</div>
                  <div className="text-xs text-black/70 mt-1">Daily across teams</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl p-4 sm:p-6 text-center">
                  <div className="text-3xl sm:text-4xl font-black text-black mb-2">90%</div>
                  <div className="text-sm font-semibold text-black">Error Reduction</div>
                  <div className="text-xs text-black/70 mt-1">In data entry</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl p-4 sm:p-6 text-center">
                  <div className="text-3xl sm:text-4xl font-black text-black mb-2">Instant</div>
                  <div className="text-sm font-semibold text-black">Leadership Visibility</div>
                  <div className="text-xs text-black/70 mt-1">Insights on demand</div>
                </div>
              </div>
            </div>

            {/* Repo Guide */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <i className="ri-folder-line text-2xl sm:text-3xl text-yellow-400"></i>
                <h2 className="text-2xl sm:text-3xl font-black text-yellow-400">Repo Guide</h2>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 sm:p-6 border-2 border-yellow-400/30">
                <ul className="space-y-3 text-white text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <i className="ri-folder-3-line text-yellow-400 mt-1 flex-shrink-0"></i>
                    <div>
                      <span className="font-bold text-yellow-400">docs/</span>
                      <span className="text-white/80"> – Full technical/consulting documentation (PDFs)</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-folder-3-line text-yellow-400 mt-1 flex-shrink-0"></i>
                    <div>
                      <span className="font-bold text-yellow-400">sql/</span>
                      <span className="text-white/80"> – Core schema & ETL scripts</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-folder-3-line text-yellow-400 mt-1 flex-shrink-0"></i>
                    <div>
                      <span className="font-bold text-yellow-400">python/</span>
                      <span className="text-white/80"> – Sample automation and data handling</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-folder-3-line text-yellow-400 mt-1 flex-shrink-0"></i>
                    <div>
                      <span className="font-bold text-yellow-400">powerbi/</span>
                      <span className="text-white/80"> – Dashboard assets/screenshots</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-folder-3-line text-yellow-400 mt-1 flex-shrink-0"></i>
                    <div>
                      <span className="font-bold text-yellow-400">assets/</span>
                      <span className="text-white/80"> – Architecture diagrams</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Why This Project Matters */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <i className="ri-star-line text-2xl sm:text-3xl text-yellow-400"></i>
                <h2 className="text-2xl sm:text-3xl font-black text-yellow-400">Why This Project Matters</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-l-4 border-yellow-400">
                  <p className="text-white text-base sm:text-lg">
                    <i className="ri-check-double-line text-yellow-400 mr-2"></i>
                    Designed for real business leadership visibility—one dashboard, zero wait.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-l-4 border-yellow-400">
                  <p className="text-white text-base sm:text-lg">
                    <i className="ri-check-double-line text-yellow-400 mr-2"></i>
                    Delivers actionable insights to sales and marketing while making data handling effortless and secure.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-l-4 border-yellow-400">
                  <p className="text-white text-base sm:text-lg">
                    <i className="ri-check-double-line text-yellow-400 mr-2"></i>
                    Consulting-style engagement: documentation and code prove end-to-end delivery, not just concepts.
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Documentation */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <i className="ri-file-code-line text-2xl sm:text-3xl text-yellow-400"></i>
                <h2 className="text-2xl sm:text-3xl font-black text-yellow-400">Interactive Documentation</h2>
              </div>
              <div className="bg-white rounded-xl overflow-hidden border-4 border-yellow-400 shadow-2xl">
                <iframe
                  src="https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/1a7c14984bbe2befca905b27316cd847/c6f2ac25-55ed-4ebd-ab13-38e5f400e81d/index.html#documentation"
                  className="w-full"
                  style={{ height: '800px', minHeight: '600px' }}
                  title="Skoda SmartFlow Documentation"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black py-8 border-t-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <a
            href="https://github.com/Kaushik075/Skoda-SmartFlow-Internal-Insights-Sales-Automation-App"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-yellow-400 text-black rounded-lg font-bold hover:bg-yellow-300 transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-github-fill text-xl"></i>
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
