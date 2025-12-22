import { useState } from 'react';

interface ProjectModalProps {
  project: string;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState('case-study');

  const projectData = {
    'sql-analytics': {
      title: 'End-to-End Ad Hoc Analytics using SQL',
      description: 'Comprehensive SQL-based analytics solution for business intelligence and data-driven decision making.',
      caseStudy: `
        # SQL Analytics Case Study
        
        ## Project Overview
        This project demonstrates comprehensive SQL analytics capabilities for business intelligence applications.
        
        ## Key Achievements
        - Developed complex SQL queries for multi-dimensional analysis
        - Created automated reporting pipelines
        - Implemented data validation and quality checks
        - Optimized query performance for large datasets
        
        ## Technical Implementation
        - Advanced SQL techniques including window functions, CTEs, and stored procedures  
        - Database optimization and indexing strategies
        - ETL pipeline development for data integration
        - Real-time analytics dashboard creation
        
        ## Business Impact
        - Reduced reporting time by 75%
        - Improved data accuracy by 95%
        - Enabled real-time decision making for stakeholders
        - Created scalable analytics infrastructure
      `
    },
    'techflow-saas': {
      title: 'TechFlow SaaS Analytics Platform',
      description: 'End-to-end business insights platform providing comprehensive analytics for SaaS companies.',
      caseStudy: `
        # TechFlow SaaS Analytics Platform
        
        ## Executive Summary
        Comprehensive analytics platform designed specifically for SaaS businesses to track key metrics and drive growth.
        
        ## Key Features
        - Customer lifecycle analytics and retention analysis
        - Revenue forecasting and churn prediction models
        - Product usage analytics and feature adoption tracking
        - Automated executive reporting and KPI dashboards
        
        ## Implementation Approach
        - Integrated multiple data sources including CRM, billing, and product usage
        - Built real-time analytics pipeline using modern data stack
        - Created interactive dashboards for different stakeholder groups
        - Implemented advanced segmentation and cohort analysis
        
        ## Results Achieved
        - Increased customer retention by 25%
        - Improved revenue forecasting accuracy by 40%
        - Reduced churn rate by 15% through predictive analytics
        - Enabled data-driven product development decisions
      `
    },
    'enterprise-budget': {
      title: 'Enterprise Intelligence: Budget Analytics Dashboard',
      description: 'Comprehensive budget analysis and forecasting dashboard for enterprise-level financial planning.',
      caseStudy: `
        # Enterprise Budget Analytics Dashboard
        
        ## Business Challenge
        Large enterprise needed comprehensive budget tracking and forecasting solution to improve financial planning accuracy.
        
        ## Solution Architecture
        - Integrated financial data from multiple ERP systems
        - Built automated budget vs. actual variance reporting
        - Created predictive models for budget forecasting
        - Implemented department-level budget tracking and approval workflows
        
        ## Key Deliverables
        - Executive budget overview dashboard
        - Department-specific budget management interfaces  
        - Automated variance analysis and alerts
        - Historical trend analysis and forecasting models
        
        ## Business Outcomes
        - Improved budget accuracy by 30%
        - Reduced budget preparation time by 50%
        - Enhanced visibility into departmental spending
        - Enabled proactive budget management and cost control
      `,
      dashboards: [
        {
          title: 'Executive Overview Dashboard',
          description: 'High-level budget performance metrics and KPIs for C-level executives.',
          image: 'https://readdy.ai/api/search-image?query=Executive%20budget%20dashboard%20with%20financial%20KPIs%2C%20revenue%20charts%2C%20expense%20breakdowns%2C%20professional%20corporate%20interface%2C%20clean%20business%20design%20with%20charts%20and%20graphs&width=600&height=400&seq=exec-dash-1&orientation=landscape'
        },
        {
          title: 'Department Budget Tracking',
          description: 'Detailed department-level budget vs actual performance analysis.',
          image: 'https://readdy.ai/api/search-image?query=Department%20budget%20tracking%20dashboard%20with%20detailed%20expense%20categories%2C%20budget%20variance%20charts%2C%20departmental%20spending%20analysis%2C%20professional%20financial%20interface&width=600&height=400&seq=dept-dash-2&orientation=landscape'
        },
        {
          title: 'Variance Analysis Dashboard',
          description: 'Automated variance detection and analysis for budget deviations.',
          image: 'https://readdy.ai/api/search-image?query=Budget%20variance%20analysis%20dashboard%20with%20deviation%20charts%2C%20alert%20notifications%2C%20financial%20variance%20tracking%2C%20professional%20analytics%20interface%20with%20red%20and%20green%20indicators&width=600&height=400&seq=var-dash-3&orientation=landscape'
        },
        {
          title: 'Forecasting Models',
          description: 'Predictive analytics for budget forecasting and planning.',
          image: 'https://readdy.ai/api/search-image?query=Budget%20forecasting%20dashboard%20with%20predictive%20charts%2C%20trend%20analysis%2C%20financial%20modeling%20interface%2C%20futuristic%20analytics%20design%20with%20projection%20graphs&width=600&height=400&seq=forecast-dash-4&orientation=landscape'
        }
      ]
    },
    'logistics-dashboard': {
      title: 'Regional Market Performance Analytics',
      description: 'Unified market intelligence dashboard providing comprehensive real-time visibility into regional business performance and revenue optimization opportunities.',
      caseStudy: `
        # Regional Market Performance Analytics
        
        ## Project Scope
        Comprehensive market intelligence solution for multi-region business operations.
        
        ## Key Components
        - Real-time regional revenue performance tracking (₹3.4bn)
        - Geographic market penetration with heat map visualization
        - Customer acquisition and retention analytics by geography
        - Product category revenue contribution analysis
        
        ## Technical Architecture
        - Integrated data from transaction database, customer master, and product catalog
        - Built real-time monitoring dashboards
        - Implemented predictive analytics for market forecasting
        - Created automated reporting for regional teams
        
        ## Measurable Results
        - Reduced reporting time from 5-7 days to real-time
        - Improved strategic visibility across all regions
        - Enhanced operational efficiency through unified dashboard
        - Established single source of truth for all stakeholders
      `
    },
    'convertflow-ai': {
      title: 'ConvertFlow — AI-Powered Product Analytics & A/B Testing Platform',
      description: 'Advanced AI-powered analytics platform for product optimization and A/B testing (In Progress).',
      isInProgress: true,
      plannedFeatures: [
        'AI-powered user behavior analysis',
        'Automated A/B testing optimization',
        'Real-time conversion tracking',
        'Machine learning-based recommendations',
        'AWS QuickSight integration',
        'Advanced statistical analysis'
      ]
    }
  };

  const currentProject = projectData[project as keyof typeof projectData];

  if (!currentProject) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">{currentProject.title}</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <i className="ri-close-line text-gray-600 text-xl"></i>
          </button>
        </div>

        {currentProject.isInProgress ? (
          <div className="p-8 text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-rocket-line text-3xl text-white"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                This exciting AI-powered analytics platform is currently in development. 
                Stay tuned for cutting-edge features and capabilities.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Planned Features</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {currentProject.plannedFeatures?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            {project === 'enterprise-budget' && (
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('case-study')}
                  className={`px-6 py-3 font-semibold transition-colors duration-200 ${
                    activeTab === 'case-study'
                      ? 'text-emerald-600 border-b-2 border-emerald-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Case Study
                </button>
                <button
                  onClick={() => setActiveTab('dashboards')}
                  className={`px-6 py-3 font-semibold transition-colors duration-200 ${
                    activeTab === 'dashboards'
                      ? 'text-emerald-600 border-b-2 border-emerald-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Dashboard Analysis
                </button>
              </div>
            )}

            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {activeTab === 'case-study' ? (
                <div className="prose prose-lg max-w-none">
                  <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                    {currentProject.caseStudy}
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {currentProject.dashboards?.map((dashboard, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-4">
                      <img
                        src={dashboard.image}
                        alt={dashboard.title}
                        className="w-full h-48 object-cover object-top rounded-lg mb-4"
                      />
                      <h4 className="font-semibold text-gray-900 mb-2">{dashboard.title}</h4>
                      <p className="text-gray-600 text-sm">{dashboard.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
