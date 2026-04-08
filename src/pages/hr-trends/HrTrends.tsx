import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'digital', icon: 'fa-microchip', ko: '디지털 트랜스포메이션', en: 'Digital Transformation' },
  { id: 'ai', icon: 'fa-robot', ko: 'AI와 HR', en: 'AI in HR' },
  { id: 'remote', icon: 'fa-house-laptop', ko: '원격근무와 하이브리드', en: 'Remote & Hybrid Work' },
  { id: 'esg', icon: 'fa-leaf', ko: 'ESG와 DEI', en: 'ESG & DEI' },
  { id: 'analytics', icon: 'fa-chart-pie', ko: 'HR 애널리틱스', en: 'HR Analytics' },
  { id: 'future', icon: 'fa-rocket', ko: 'HR의 미래', en: 'Future of HR' },
];

export default function HrTrends(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('digital');
  const isKo = language === 'ko';
  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);

  const handlePrev = () => { if (currentIndex > 0) { setActiveSection(SECTIONS[currentIndex - 1].id); window.scrollTo({ top: 0, behavior: 'smooth' }); } };
  const handleNext = () => { if (currentIndex < SECTIONS.length - 1) { setActiveSection(SECTIONS[currentIndex + 1].id); window.scrollTo({ top: 0, behavior: 'smooth' }); } };

  return (
    <>
      <SEOHead title={isKo ? 'HR 트렌드와 미래' : 'HR Trends & Future'} description={isKo ? 'AI, 원격근무, ESG, HR 애널리틱스 등 최신 HR 트렌드와 미래 방향을 학습합니다.' : 'Learn about AI, remote work, ESG, HR analytics, and other latest HR trends and future directions.'} />
      <div className="guide-page">
        <div className="guide-layout">
          <aside className="guide-sidebar">
            <div className="guide-sidebar-title">{isKo ? '목차' : 'Contents'}</div>
            <ul className="guide-nav">
              {SECTIONS.map((section) => (
                <li key={section.id} className="guide-nav-item">
                  <button className={`guide-nav-link ${activeSection === section.id ? 'active' : ''}`} onClick={() => { setActiveSection(section.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                    <i className={`fa-solid ${section.icon}`} />
                    <span>{isKo ? section.ko : section.en}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>
          <main className="guide-content">
            {activeSection === 'digital' && <DigitalSection isKo={isKo} />}
            {activeSection === 'ai' && <AiSection isKo={isKo} />}
            {activeSection === 'remote' && <RemoteSection isKo={isKo} />}
            {activeSection === 'esg' && <EsgSection isKo={isKo} />}
            {activeSection === 'analytics' && <AnalyticsSection isKo={isKo} />}
            {activeSection === 'future' && <FutureSection isKo={isKo} />}
            <div className="guide-references" style={{ marginTop: '48px', padding: '24px', background: 'var(--bg-light-gray)', borderRadius: '12px', fontSize: '14px', lineHeight: '1.8' }}>
              <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 700 }}>{isKo ? '참고문헌' : 'References'}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)' }}>
                <li>Bersin, J. (2019). <em>HR Technology Disruptions for 2019</em>. Josh Bersin Academy.</li>
                <li>Bloom, N. (2020). How Working from Home Works Out. <em>Stanford Institute for Economic Policy Research</em>.</li>
                <li>Davenport, T.H., Harris, J., & Shapiro, J. (2010). Competing on Talent Analytics. <em>Harvard Business Review</em>, 88(10), 52-58.</li>
                <li>Frey, C.B. & Osborne, M.A. (2017). The Future of Employment: How Susceptible Are Jobs to Computerisation? <em>Technological Forecasting and Social Change</em>, 114, 254-280.</li>
                <li>Gratton, L. (2021). <em>Redesigning Work: How to Transform Your Organisation and Make Hybrid Work for Everyone</em>. MIT Press.</li>
                <li>Marr, B. (2018). <em>Data-Driven HR: How to Use Analytics and Metrics to Drive Performance</em>. Kogan Page.</li>
                <li>Schwab, K. (2016). <em>The Fourth Industrial Revolution</em>. World Economic Forum.</li>
                <li>World Economic Forum (2023). <em>The Future of Jobs Report 2023</em>. WEF.</li>
              </ul>
            </div>
            <div className="guide-section-nav">
              <button className="guide-nav-btn prev" onClick={handlePrev} disabled={currentIndex === 0}>
                <i className="fa-solid fa-arrow-left" />
                <span>{currentIndex > 0 ? (isKo ? SECTIONS[currentIndex - 1].ko : SECTIONS[currentIndex - 1].en) : (isKo ? '이전' : 'Previous')}</span>
              </button>
              <button className="guide-nav-btn next" onClick={handleNext} disabled={currentIndex === SECTIONS.length - 1}>
                <span>{currentIndex < SECTIONS.length - 1 ? (isKo ? SECTIONS[currentIndex + 1].ko : SECTIONS[currentIndex + 1].en) : (isKo ? '다음' : 'Next')}</span>
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

function DigitalSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '디지털 트랜스포메이션' : 'Digital Transformation'}</h1>
        <p>{isKo ? 'HR 영역의 디지털 전환 동향과 전략을 알아봅니다.' : 'Explore digital transformation trends and strategies in the HR domain.'}</p>
      </div>
      <h2>{isKo ? 'HR 디지털 전환의 배경' : 'Background of HR Digital Transformation'}</h2>
      <p>{isKo ? 'Schwab(2016)이 제시한 4차 산업혁명은 AI, 빅데이터, 클라우드, IoT 등의 기술이 일하는 방식을 근본적으로 변화시키고 있습니다. HR은 이 변화의 대상이자 주도자입니다.' : 'The Fourth Industrial Revolution presented by Schwab (2016) fundamentally changes how we work through AI, big data, cloud, and IoT technologies. HR is both the subject and driver of this change.'}</p>
      <h3>{isKo ? 'HR 테크놀로지 스택' : 'HR Technology Stack'}</h3>
      <ul>
        <li><strong>{isKo ? 'HRIS/HCM 시스템' : 'HRIS/HCM Systems'}</strong> - {isKo ? '인적자원 정보의 통합 관리 시스템입니다. SAP SuccessFactors, Workday, Oracle HCM 등이 대표적입니다.' : 'Integrated human resource information management systems. SAP SuccessFactors, Workday, and Oracle HCM are representative.'}</li>
        <li><strong>{isKo ? 'ATS (Applicant Tracking System)' : 'ATS (Applicant Tracking System)'}</strong> - {isKo ? '채용 프로세스를 자동화하고 추적합니다.' : 'Automates and tracks the recruitment process.'}</li>
        <li><strong>{isKo ? 'LMS (Learning Management System)' : 'LMS (Learning Management System)'}</strong> - {isKo ? '교육 콘텐츠 관리와 학습 추적을 지원합니다.' : 'Supports training content management and learning tracking.'}</li>
        <li><strong>{isKo ? '직원 경험 플랫폼 (EXP)' : 'Employee Experience Platform (EXP)'}</strong> - {isKo ? '직원의 전체 라이프사이클을 통합 관리합니다.' : 'Integrates the entire employee lifecycle management.'}</li>
      </ul>
      <TipBox type="important">{isKo ? 'Bersin(2019)에 따르면, HR 디지털 전환의 핵심은 기술 도입 자체가 아니라 "직원 경험(Employee Experience)"의 향상입니다. 기술은 수단이지 목적이 아닙니다.' : 'According to Bersin (2019), the key to HR digital transformation is not technology adoption itself but improving "Employee Experience." Technology is a means, not an end.'}</TipBox>
    </div>
  );
}

function AiSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? 'AI와 HR' : 'AI in HR'}</h1>
        <p>{isKo ? '인공지능이 HR 기능에 미치는 영향과 활용 방안을 학습합니다.' : 'Learn about the impact and applications of artificial intelligence in HR functions.'}</p>
      </div>
      <h2>{isKo ? 'AI의 HR 활용 영역' : 'AI Applications in HR'}</h2>
      <ul>
        <li><strong>{isKo ? 'AI 채용' : 'AI Recruitment'}</strong> - {isKo ? '이력서 스크리닝, 직무 적합도 예측, 챗봇 기반 초기 면접. 그러나 AI 편향(Bias) 문제에 대한 주의가 필요합니다.' : 'Resume screening, job fit prediction, chatbot-based initial interviews. However, caution about AI Bias is needed.'}</li>
        <li><strong>{isKo ? 'AI 교육' : 'AI Learning'}</strong> - {isKo ? '개인화된 학습 경로 추천, 적응형 학습(Adaptive Learning), AI 튜터링' : 'Personalized learning path recommendations, Adaptive Learning, AI tutoring'}</li>
        <li><strong>{isKo ? '예측 분석' : 'Predictive Analytics'}</strong> - {isKo ? '이직 예측, 성과 예측, 인력 수요 예측에 머신러닝을 활용합니다.' : 'Uses machine learning for turnover prediction, performance prediction, and workforce demand forecasting.'}</li>
        <li><strong>{isKo ? 'AI 챗봇/가상 어시스턴트' : 'AI Chatbots/Virtual Assistants'}</strong> - {isKo ? 'HR 문의 자동 응대, 급여 조회, 휴가 신청 등 반복적 업무를 자동화합니다.' : 'Automates repetitive tasks like HR inquiries, payroll queries, and leave requests.'}</li>
      </ul>
      <h2>{isKo ? 'AI 윤리와 공정성' : 'AI Ethics & Fairness'}</h2>
      <p>{isKo ? 'AI 시스템의 편향은 채용, 평가, 승진에서 차별을 강화할 수 있습니다. Amazon의 AI 채용 도구가 여성 차별적 결과를 보여 폐기된 사례가 대표적입니다. HR은 AI 도입 시 공정성, 투명성, 설명 가능성(Explainability)을 반드시 확보해야 합니다.' : 'AI system bias can reinforce discrimination in hiring, evaluation, and promotion. Amazon\'s AI hiring tool being scrapped for gender-biased results is a prime example. HR must ensure fairness, transparency, and explainability when adopting AI.'}</p>
      <TipBox type="warning">{isKo ? 'Frey & Osborne(2017)의 연구에 따르면, 향후 10~20년 내에 현재 일자리의 47%가 자동화 위험에 처해 있습니다. HR은 직원들의 리스킬링(Reskilling)과 업스킬링(Upskilling)을 전략적으로 지원해야 합니다.' : 'According to Frey & Osborne (2017), 47% of current jobs are at risk of automation within the next 10-20 years. HR must strategically support employee Reskilling and Upskilling.'}</TipBox>
    </div>
  );
}

function RemoteSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '원격근무와 하이브리드' : 'Remote & Hybrid Work'}</h1>
        <p>{isKo ? '포스트 코로나 시대의 근무 방식 변화와 관리 전략을 알아봅니다.' : 'Explore changes in work patterns and management strategies in the post-COVID era.'}</p>
      </div>
      <h2>{isKo ? '하이브리드 근무의 부상' : 'Rise of Hybrid Work'}</h2>
      <p>{isKo ? 'Bloom(2020)의 스탠포드 대학 연구에 따르면, 재택근무는 생산성을 13% 향상시키고 이직률을 50% 감소시켰습니다. 코로나19 이후 원격근무는 일시적 대안이 아닌 "뉴노멀"로 자리잡았습니다.' : 'According to Bloom\'s (2020) Stanford University study, remote work increased productivity by 13% and reduced turnover by 50%. After COVID-19, remote work has become the "new normal" rather than a temporary alternative.'}</p>
      <h3>{isKo ? '하이브리드 근무 모델' : 'Hybrid Work Models'}</h3>
      <p>{isKo ? 'Gratton(2021)은 다양한 하이브리드 모델을 제시했습니다.' : 'Gratton (2021) presented various hybrid models.'}</p>
      <ul>
        <li><strong>{isKo ? '고정형 (Fixed Hybrid)' : 'Fixed Hybrid'}</strong> - {isKo ? '사무실 출근일과 재택일을 고정합니다. 예: 월·수·금 사무실, 화·목 재택.' : 'Fix office and remote days. E.g., Mon/Wed/Fri office, Tue/Thu remote.'}</li>
        <li><strong>{isKo ? '유연형 (Flexible Hybrid)' : 'Flexible Hybrid'}</strong> - {isKo ? '최소 출근일만 정하고 나머지는 개인이 선택합니다.' : 'Set minimum office days and let individuals choose the rest.'}</li>
        <li><strong>{isKo ? '리모트 퍼스트 (Remote-First)' : 'Remote-First'}</strong> - {isKo ? '원격이 기본이며, 필요시에만 사무실에 모입니다.' : 'Remote is the default, gathering at the office only when needed.'}</li>
      </ul>
      <h2>{isKo ? '원격 환경의 HR 과제' : 'HR Challenges in Remote Environment'}</h2>
      <ul>
        <li><strong>{isKo ? '성과 관리' : 'Performance Management'}</strong> - {isKo ? '프로세스가 아닌 결과(Output) 중심의 평가로 전환해야 합니다.' : 'Must shift to output-based evaluation rather than process-based.'}</li>
        <li><strong>{isKo ? '조직 문화 유지' : 'Culture Maintenance'}</strong> - {isKo ? '물리적 공간 없이 소속감과 문화를 유지하는 것이 과제입니다.' : 'Maintaining belonging and culture without physical space is a challenge.'}</li>
        <li><strong>{isKo ? '직원 웰빙' : 'Employee Well-being'}</strong> - {isKo ? '번아웃, 고립감, 일과 생활의 경계 모호화에 대응해야 합니다.' : 'Must address burnout, isolation, and blurred work-life boundaries.'}</li>
      </ul>
      <TipBox type="tip">{isKo ? '하이브리드 근무의 성공 핵심은 "공평한 경험(Equitable Experience)"입니다. 사무실 근무자와 원격 근무자 간의 정보 격차, 기회 격차, 평가 편향을 최소화해야 합니다.' : 'The key to hybrid work success is "Equitable Experience." Minimize information gaps, opportunity gaps, and evaluation biases between office and remote workers.'}</TipBox>
    </div>
  );
}

function EsgSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? 'ESG와 DEI' : 'ESG & DEI'}</h1>
        <p>{isKo ? 'ESG 경영과 다양성·형평성·포용성(DEI)이 HR에 미치는 영향을 학습합니다.' : 'Learn about the impact of ESG management and Diversity, Equity & Inclusion (DEI) on HR.'}</p>
      </div>
      <h2>{isKo ? 'ESG와 HR의 역할' : 'ESG and the Role of HR'}</h2>
      <p>{isKo ? 'ESG(환경·사회·지배구조)에서 HR은 특히 "S(Social)" 영역의 핵심 주체입니다.' : 'In ESG (Environmental, Social, Governance), HR is a key player especially in the "S (Social)" domain.'}</p>
      <ul>
        <li><strong>{isKo ? '인권과 노동' : 'Human Rights & Labor'}</strong> - {isKo ? '공급망 인권 실사, 아동 노동 방지, 공정 노동 관행' : 'Supply chain human rights due diligence, child labor prevention, fair labor practices'}</li>
        <li><strong>{isKo ? '직원 안전과 건강' : 'Employee Safety & Health'}</strong> - {isKo ? '산업 안전, 정신 건강, 웰빙 프로그램' : 'Occupational safety, mental health, well-being programs'}</li>
        <li><strong>{isKo ? '다양성과 포용성' : 'Diversity & Inclusion'}</strong> - {isKo ? '채용, 승진, 보상에서의 공정성 확보' : 'Ensuring fairness in hiring, promotion, and compensation'}</li>
        <li><strong>{isKo ? '지역사회 공헌' : 'Community Contribution'}</strong> - {isKo ? '사회 공헌 활동, 봉사 프로그램' : 'Social contribution activities, volunteer programs'}</li>
      </ul>
      <h2>{isKo ? 'DEI (다양성·형평성·포용성)' : 'DEI (Diversity, Equity & Inclusion)'}</h2>
      <ul>
        <li><strong>{isKo ? '다양성 (Diversity)' : 'Diversity'}</strong> - {isKo ? '성별, 인종, 나이, 장애, 성적 지향 등 다양한 배경의 구성원이 존재하는 것입니다.' : 'Having members from diverse backgrounds in gender, race, age, disability, sexual orientation, etc.'}</li>
        <li><strong>{isKo ? '형평성 (Equity)' : 'Equity'}</strong> - {isKo ? '동등한 기회가 아닌, 각자의 상황에 맞는 공정한 지원을 제공하는 것입니다.' : 'Providing fair support according to individual situations, not just equal opportunity.'}</li>
        <li><strong>{isKo ? '포용성 (Inclusion)' : 'Inclusion'}</strong> - {isKo ? '모든 구성원이 가치 있고 존중받으며 참여할 수 있는 환경을 만드는 것입니다.' : 'Creating an environment where all members feel valued, respected, and able to participate.'}</li>
      </ul>
      <TipBox type="important">{isKo ? 'DEI는 단순한 "좋은 일"이 아니라 비즈니스 성과와 직결됩니다. McKinsey의 연구에 따르면, 인종·민족 다양성 상위 25% 기업은 하위 25% 대비 수익률이 36% 더 높았습니다.' : 'DEI is not just "doing good" but directly connected to business performance. McKinsey\'s research shows that companies in the top 25% for racial/ethnic diversity had 36% higher profitability than the bottom 25%.'}</TipBox>
    </div>
  );
}

function AnalyticsSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? 'HR 애널리틱스' : 'HR Analytics'}</h1>
        <p>{isKo ? '데이터 기반 HR 의사결정을 위한 분석 기법과 활용 사례를 학습합니다.' : 'Learn analytical techniques and use cases for data-driven HR decision-making.'}</p>
      </div>
      <h2>{isKo ? 'HR 애널리틱스의 성숙도 모델' : 'HR Analytics Maturity Model'}</h2>
      <p>{isKo ? 'Marr(2018)에 따르면, HR 애널리틱스는 4단계 성숙도를 거쳐 발전합니다.' : 'According to Marr (2018), HR analytics develops through four maturity levels.'}</p>
      <ol>
        <li><strong>{isKo ? '기술적 분석 (Descriptive)' : 'Descriptive Analytics'}</strong> - {isKo ? '"무슨 일이 일어났는가?" 이직률, 결근율 등 과거 데이터를 보고합니다.' : '"What happened?" Reports historical data like turnover and absenteeism rates.'}</li>
        <li><strong>{isKo ? '진단적 분석 (Diagnostic)' : 'Diagnostic Analytics'}</strong> - {isKo ? '"왜 일어났는가?" 이직의 원인, 성과 차이의 요인을 분석합니다.' : '"Why did it happen?" Analyzes causes of turnover and factors in performance differences.'}</li>
        <li><strong>{isKo ? '예측적 분석 (Predictive)' : 'Predictive Analytics'}</strong> - {isKo ? '"앞으로 무슨 일이 일어날 것인가?" 머신러닝으로 이직 위험자를 예측합니다.' : '"What will happen?" Uses machine learning to predict turnover risks.'}</li>
        <li><strong>{isKo ? '처방적 분석 (Prescriptive)' : 'Prescriptive Analytics'}</strong> - {isKo ? '"어떻게 해야 하는가?" 최적의 HR 개입 방안을 추천합니다.' : '"What should we do?" Recommends optimal HR interventions.'}</li>
      </ol>
      <h2>{isKo ? '주요 HR 지표 (KPI)' : 'Key HR Metrics (KPIs)'}</h2>
      <p>{isKo ? 'Davenport et al.(2010)이 강조한 핵심 HR 분석 지표:' : 'Key HR analytics metrics emphasized by Davenport et al. (2010):'}</p>
      <ul>
        <li><strong>{isKo ? '이직률 (Turnover Rate)' : 'Turnover Rate'}</strong> - {isKo ? '자발적/비자발적 이직률, 핵심 인재 이직률' : 'Voluntary/involuntary turnover rate, key talent turnover rate'}</li>
        <li><strong>{isKo ? '채용 효율성' : 'Recruitment Efficiency'}</strong> - {isKo ? '채용 소요 기간(Time-to-Fill), 채용 비용(Cost-per-Hire), 채용 품질(Quality of Hire)' : 'Time-to-Fill, Cost-per-Hire, Quality of Hire'}</li>
        <li><strong>{isKo ? '교육 ROI' : 'Training ROI'}</strong> - {isKo ? '교육 투자 대비 성과 향상 효과' : 'Performance improvement effect relative to training investment'}</li>
        <li><strong>{isKo ? '직원 몰입도 (Engagement Score)' : 'Engagement Score'}</strong> - {isKo ? '몰입도 조사 결과와 추이' : 'Engagement survey results and trends'}</li>
        <li><strong>{isKo ? '인적자본 ROI (Human Capital ROI)' : 'Human Capital ROI'}</strong> - {isKo ? '(매출 - 영업비용 + 인건비) / 인건비' : '(Revenue - Operating Expenses + Employee Costs) / Employee Costs'}</li>
      </ul>
      <TipBox type="tip">{isKo ? 'HR 애널리틱스의 가장 큰 장벽은 기술이 아니라 "데이터 리터러시"입니다. HR 전문가들이 데이터를 읽고, 해석하고, 의사결정에 활용할 수 있는 역량을 갖추는 것이 핵심입니다. 또한 데이터 프라이버시와 윤리적 사용에 항상 주의해야 합니다.' : 'The biggest barrier to HR analytics is not technology but "data literacy." The key is for HR professionals to develop the capability to read, interpret, and use data in decision-making. Always be cautious about data privacy and ethical use.'}</TipBox>
    </div>
  );
}

function FutureSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? 'HR의 미래' : 'Future of HR'}</h1>
        <p>{isKo ? '미래 일의 세계와 HR의 진화 방향을 전망합니다.' : 'Envision the future world of work and the evolution of HR.'}</p>
      </div>
      <h2>{isKo ? '미래 일의 세계' : 'Future World of Work'}</h2>
      <p>{isKo ? 'World Economic Forum(2023)의 미래 일자리 보고서에 따르면, 2027년까지 현재 일자리의 23%가 변화하며, 새로운 일자리가 6,900만개 창출되고 8,300만개가 사라질 것으로 예측됩니다.' : 'According to the World Economic Forum\'s (2023) Future of Jobs Report, by 2027, 23% of current jobs will change, with 69 million new jobs created and 83 million eliminated.'}</p>
      <h3>{isKo ? '미래 핵심 역량' : 'Future Core Competencies'}</h3>
      <ul>
        <li><strong>{isKo ? '분석적 사고' : 'Analytical Thinking'}</strong> - {isKo ? '데이터를 해석하고 인사이트를 도출하는 능력' : 'Ability to interpret data and derive insights'}</li>
        <li><strong>{isKo ? '창의적 사고' : 'Creative Thinking'}</strong> - {isKo ? '새로운 솔루션을 상상하고 설계하는 능력' : 'Ability to imagine and design new solutions'}</li>
        <li><strong>{isKo ? 'AI/빅데이터 리터러시' : 'AI/Big Data Literacy'}</strong> - {isKo ? 'AI 도구를 활용하고 데이터를 이해하는 능력' : 'Ability to utilize AI tools and understand data'}</li>
        <li><strong>{isKo ? '리더십과 사회적 영향력' : 'Leadership & Social Influence'}</strong> - {isKo ? '사람을 이끌고 변화를 주도하는 능력' : 'Ability to lead people and drive change'}</li>
        <li><strong>{isKo ? '호기심과 평생학습' : 'Curiosity & Lifelong Learning'}</strong> - {isKo ? '지속적으로 학습하고 적응하는 자세' : 'Continuous learning and adaptive mindset'}</li>
      </ul>
      <h2>{isKo ? 'HR의 진화 방향' : 'Evolution Direction of HR'}</h2>
      <ul>
        <li><strong>{isKo ? 'HR에서 People로' : 'From HR to People'}</strong> - {isKo ? '"인적자원 관리"에서 "사람 중심 경험 설계"로의 전환. CHRO에서 CPO(Chief People Officer)로의 변화.' : 'Transition from "Human Resource Management" to "People-centered Experience Design." Change from CHRO to CPO (Chief People Officer).'}</li>
        <li><strong>{isKo ? '데이터 기반 HR' : 'Data-Driven HR'}</strong> - {isKo ? '직관이 아닌 데이터와 증거에 기반한 의사결정이 표준이 됩니다.' : 'Decision-making based on data and evidence, not intuition, becomes the standard.'}</li>
        <li><strong>{isKo ? '플랫폼 HR' : 'Platform HR'}</strong> - {isKo ? '기존 고용 관계를 넘어 긱 워커, 프리랜서, AI 에이전트까지 포함하는 인력 생태계를 관리합니다.' : 'Managing a workforce ecosystem that goes beyond traditional employment to include gig workers, freelancers, and AI agents.'}</li>
        <li><strong>{isKo ? '지속 가능한 HR' : 'Sustainable HR'}</strong> - {isKo ? '단기 성과뿐 아니라 직원, 사회, 환경의 장기적 가치를 함께 추구합니다.' : 'Pursuing long-term value for employees, society, and the environment, not just short-term results.'}</li>
      </ul>
      <TipBox type="important">{isKo ? '미래 HR의 핵심 역할은 "인간만이 할 수 있는 일"을 정의하고 지원하는 것입니다. AI가 발전할수록 공감, 창의성, 윤리적 판단, 관계 구축 등 인간 고유의 역량이 더 중요해집니다. HR은 이러한 역량을 개발하고 발휘할 수 있는 환경을 만드는 데 집중해야 합니다.' : 'The core role of future HR is defining and supporting "what only humans can do." As AI advances, uniquely human capabilities like empathy, creativity, ethical judgment, and relationship building become more important. HR should focus on creating environments where these capabilities can be developed and exercised.'}</TipBox>
    </div>
  );
}
