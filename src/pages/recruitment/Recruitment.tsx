import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'planning', icon: 'fa-clipboard-list', ko: '인력계획', en: 'Workforce Planning' },
  { id: 'sourcing', icon: 'fa-bullhorn', ko: '모집 전략', en: 'Sourcing Strategies' },
  { id: 'selection', icon: 'fa-filter', ko: '선발 도구와 기법', en: 'Selection Tools & Methods' },
  { id: 'interview', icon: 'fa-comments', ko: '면접과 평가', en: 'Interviews & Assessment' },
  { id: 'branding', icon: 'fa-star', ko: '고용 브랜딩', en: 'Employer Branding' },
  { id: 'onboarding', icon: 'fa-handshake', ko: '온보딩', en: 'Onboarding' },
];

export default function Recruitment(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('planning');
  const isKo = language === 'ko';
  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);

  const handlePrev = () => { if (currentIndex > 0) { setActiveSection(SECTIONS[currentIndex - 1].id); window.scrollTo({ top: 0, behavior: 'smooth' }); } };
  const handleNext = () => { if (currentIndex < SECTIONS.length - 1) { setActiveSection(SECTIONS[currentIndex + 1].id); window.scrollTo({ top: 0, behavior: 'smooth' }); } };

  return (
    <>
      <SEOHead title={isKo ? '채용과 선발' : 'Recruitment & Selection'} description={isKo ? '효과적인 인력계획, 모집, 선발, 온보딩 전략을 학습합니다.' : 'Learn effective workforce planning, recruitment, selection, and onboarding strategies.'} />
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
            {activeSection === 'planning' && <PlanningSection isKo={isKo} />}
            {activeSection === 'sourcing' && <SourcingSection isKo={isKo} />}
            {activeSection === 'selection' && <SelectionSection isKo={isKo} />}
            {activeSection === 'interview' && <InterviewSection isKo={isKo} />}
            {activeSection === 'branding' && <BrandingSection isKo={isKo} />}
            {activeSection === 'onboarding' && <OnboardingSection isKo={isKo} />}
            <div className="guide-references" style={{ marginTop: '48px', padding: '24px', background: 'var(--bg-light-gray)', borderRadius: '12px', fontSize: '14px', lineHeight: '1.8' }}>
              <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 700 }}>{isKo ? '참고문헌' : 'References'}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)' }}>
                <li>Ambler, T. & Barrow, S. (1996). The Employer Brand. <em>Journal of Brand Management</em>, 4(3), 185-206.</li>
                <li>Barber, A.E. (1998). <em>Recruiting Employees: Individual and Organizational Perspectives</em>. Sage.</li>
                <li>Bauer, T.N. (2010). <em>Onboarding New Employees: Maximizing Success</em>. SHRM Foundation.</li>
                <li>Breaugh, J.A. (2008). Employee Recruitment: Current Knowledge and Important Areas for Future Research. <em>Human Resource Management Review</em>, 18(3), 103-118.</li>
                <li>Campion, M.A., Palmer, D.K., & Campion, J.E. (1997). A Review of Structure in the Selection Interview. <em>Personnel Psychology</em>, 50(3), 655-702.</li>
                <li>Lievens, F. & Chapman, D.S. (2019). Recruitment and Selection. In A. Wilkinson et al. (Eds.), <em>The SAGE Handbook of Human Resource Management</em>. Sage.</li>
                <li>Ployhart, R.E. (2006). Staffing in the 21st Century. <em>Journal of Management</em>, 32(6), 868-897.</li>
                <li>Schmidt, F.L. & Hunter, J.E. (1998). The Validity and Utility of Selection Methods in Personnel Psychology. <em>Psychological Bulletin</em>, 124(2), 262-274.</li>
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

function PlanningSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '인력계획' : 'Workforce Planning'}</h1>
        <p>{isKo ? '조직의 전략 목표 달성을 위한 체계적인 인력 수급 계획을 수립하는 방법을 알아봅니다.' : 'Learn how to establish systematic workforce supply and demand plans to achieve organizational strategic goals.'}</p>
      </div>
      <h2>{isKo ? '인력계획의 개념' : 'Concept of Workforce Planning'}</h2>
      <p>{isKo ? '인력계획(Workforce Planning)이란 조직의 전략적 목표를 달성하기 위해 필요한 인력의 수, 유형, 시기를 예측하고, 이를 충족하기 위한 계획을 수립하는 과정입니다. Ployhart(2006)에 따르면, 효과적인 인력계획은 조직의 경쟁력을 좌우하는 핵심 활동입니다.' : 'Workforce Planning is the process of forecasting the number, type, and timing of personnel needed to achieve organizational strategic goals, and establishing plans to meet these needs. According to Ployhart (2006), effective workforce planning is a core activity that determines organizational competitiveness.'}</p>
      <h3>{isKo ? '인력 수요 예측 기법' : 'Demand Forecasting Techniques'}</h3>
      <ul>
        <li><strong>{isKo ? '정량적 기법' : 'Quantitative Methods'}</strong> - {isKo ? '추세 분석, 회귀 분석, 비율 분석 등 과거 데이터를 기반으로 미래 인력 수요를 예측합니다.' : 'Predict future workforce demand based on historical data through trend analysis, regression analysis, and ratio analysis.'}</li>
        <li><strong>{isKo ? '정성적 기법' : 'Qualitative Methods'}</strong> - {isKo ? '델파이 기법, 관리자 판단, 시나리오 분석 등 전문가의 판단을 활용하여 예측합니다.' : 'Use expert judgment through Delphi technique, managerial judgment, and scenario analysis.'}</li>
      </ul>
      <h3>{isKo ? '인력 공급 예측' : 'Supply Forecasting'}</h3>
      <ul>
        <li><strong>{isKo ? '내부 공급' : 'Internal Supply'}</strong> - {isKo ? '기술 목록(Skills Inventory), 후계자 계획(Succession Planning), 마코프 분석(Markov Analysis)을 활용합니다.' : 'Utilize Skills Inventory, Succession Planning, and Markov Analysis.'}</li>
        <li><strong>{isKo ? '외부 공급' : 'External Supply'}</strong> - {isKo ? '노동 시장 분석, 인구 통계 동향, 교육 기관 졸업자 현황 등을 파악합니다.' : 'Analyze labor market conditions, demographic trends, and educational institution graduate data.'}</li>
      </ul>
      <TipBox type="important">{isKo ? '인력계획은 일회성 활동이 아니라 지속적인 프로세스입니다. 조직 전략이 변경되거나 외부 환경이 변화할 때마다 인력계획을 재검토하고 수정해야 합니다.' : 'Workforce planning is not a one-time activity but a continuous process. The plan should be reviewed and revised whenever organizational strategy changes or the external environment shifts.'}</TipBox>
    </div>
  );
}

function SourcingSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '모집 전략' : 'Sourcing Strategies'}</h1>
        <p>{isKo ? '우수 인재를 효과적으로 확보하기 위한 다양한 모집 경로와 전략을 살펴봅니다.' : 'Explore various sourcing channels and strategies for effectively attracting top talent.'}</p>
      </div>
      <h2>{isKo ? '내부 모집과 외부 모집' : 'Internal vs External Recruitment'}</h2>
      <p>{isKo ? 'Barber(1998)에 따르면, 모집 전략은 크게 내부 모집과 외부 모집으로 구분됩니다. 각각의 장단점을 이해하고 상황에 맞게 활용해야 합니다.' : 'According to Barber (1998), recruitment strategies are broadly divided into internal and external recruitment. Understanding the advantages and disadvantages of each is essential for situational application.'}</p>
      <h3>{isKo ? '내부 모집' : 'Internal Recruitment'}</h3>
      <ul>
        <li><strong>{isKo ? '승진 (Promotion)' : 'Promotion'}</strong> - {isKo ? '현재 직원을 상위 직위로 이동시킵니다. 동기부여와 유지에 효과적입니다.' : 'Move current employees to higher positions. Effective for motivation and retention.'}</li>
        <li><strong>{isKo ? '전보/배치전환 (Transfer)' : 'Transfer'}</strong> - {isKo ? '동일 수준의 다른 직무로 이동시켜 다양한 경험을 제공합니다.' : 'Move to different positions at the same level to provide diverse experience.'}</li>
        <li><strong>{isKo ? '사내 공모 (Job Posting)' : 'Job Posting'}</strong> - {isKo ? '빈 직위를 사내에 공개하여 자발적 지원을 받습니다.' : 'Post open positions internally for voluntary applications.'}</li>
      </ul>
      <h3>{isKo ? '외부 모집' : 'External Recruitment'}</h3>
      <ul>
        <li><strong>{isKo ? '채용 공고' : 'Job Advertisements'}</strong> - {isKo ? '채용 포털, SNS, 회사 홈페이지 등을 통한 공개 모집입니다.' : 'Open recruitment through job portals, social media, and company websites.'}</li>
        <li><strong>{isKo ? '헤드헌팅' : 'Executive Search'}</strong> - {isKo ? '전문 서치펌을 통해 핵심 인재를 직접 탐색합니다.' : 'Directly search for key talent through professional search firms.'}</li>
        <li><strong>{isKo ? '캠퍼스 리크루팅' : 'Campus Recruiting'}</strong> - {isKo ? '대학교를 방문하여 신입 인재를 확보합니다.' : 'Visit universities to recruit new graduates.'}</li>
        <li><strong>{isKo ? '직원 추천제 (Employee Referral)' : 'Employee Referral'}</strong> - {isKo ? '현 직원의 네트워크를 활용한 모집으로, 연구에 따르면 적합도와 정착률이 높습니다 (Breaugh, 2008).' : 'Recruitment through current employees\' networks. Research shows higher fit and retention rates (Breaugh, 2008).'}</li>
      </ul>
      <TipBox type="tip">{isKo ? '다채널 모집 전략(Multi-Channel Sourcing)이 가장 효과적입니다. 직무의 특성, 시급성, 예산에 따라 적절한 모집 경로를 조합하여 사용하세요.' : 'A multi-channel sourcing strategy is most effective. Combine appropriate recruitment channels based on job characteristics, urgency, and budget.'}</TipBox>
    </div>
  );
}

function SelectionSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '선발 도구와 기법' : 'Selection Tools & Methods'}</h1>
        <p>{isKo ? '과학적이고 타당한 선발 도구와 기법을 통해 적합한 인재를 선발하는 방법을 학습합니다.' : 'Learn how to select suitable talent through scientific and valid selection tools and techniques.'}</p>
      </div>
      <h2>{isKo ? '선발의 핵심 원칙' : 'Core Principles of Selection'}</h2>
      <p>{isKo ? 'Schmidt와 Hunter(1998)의 메타분석 연구는 선발 도구의 타당도를 체계적으로 비교한 가장 영향력 있는 연구입니다. 이 연구에 따르면, 선발 도구의 효과는 직무 성과와의 상관관계(예측 타당도)로 측정됩니다.' : 'Schmidt and Hunter\'s (1998) meta-analysis is the most influential study systematically comparing the validity of selection tools. According to this research, the effectiveness of selection tools is measured by their correlation with job performance (predictive validity).'}</p>
      <h3>{isKo ? '주요 선발 도구의 타당도' : 'Validity of Major Selection Tools'}</h3>
      <ol>
        <li><strong>{isKo ? '작업 표본 검사 (Work Sample Test)' : 'Work Sample Test'}</strong> - {isKo ? '예측 타당도 .54. 실제 직무와 유사한 과제를 수행하게 하여 평가합니다.' : 'Predictive validity .54. Evaluates by having candidates perform tasks similar to actual job duties.'}</li>
        <li><strong>{isKo ? '일반 정신능력 검사 (GMA Test)' : 'General Mental Ability Test'}</strong> - {isKo ? '예측 타당도 .51. 인지 능력을 측정하는 검사로, 거의 모든 직무에서 유효합니다.' : 'Predictive validity .51. Measures cognitive ability and is valid for nearly all jobs.'}</li>
        <li><strong>{isKo ? '구조화 면접 (Structured Interview)' : 'Structured Interview'}</strong> - {isKo ? '예측 타당도 .51. 사전에 설계된 질문과 평가 기준으로 일관성을 확보합니다.' : 'Predictive validity .51. Ensures consistency with pre-designed questions and evaluation criteria.'}</li>
        <li><strong>{isKo ? '성실성 검사 (Integrity Test)' : 'Integrity Test'}</strong> - {isKo ? '예측 타당도 .41. 정직성, 신뢰성을 측정합니다.' : 'Predictive validity .41. Measures honesty and reliability.'}</li>
        <li><strong>{isKo ? '비구조화 면접 (Unstructured Interview)' : 'Unstructured Interview'}</strong> - {isKo ? '예측 타당도 .38. 구조화 면접보다 타당도가 낮습니다.' : 'Predictive validity .38. Lower validity than structured interviews.'}</li>
      </ol>
      <TipBox type="warning">{isKo ? '이력서 검토, 학력, 경력 연수만으로는 직무 성과를 정확히 예측하기 어렵습니다. 복수의 선발 도구를 조합하여 사용하는 "다중 허들(Multiple Hurdle)" 또는 "종합 점수(Compensatory)" 방식이 권장됩니다.' : 'It is difficult to accurately predict job performance from resume review, education, and years of experience alone. A "Multiple Hurdle" or "Compensatory" approach combining multiple selection tools is recommended.'}</TipBox>
    </div>
  );
}

function InterviewSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '면접과 평가' : 'Interviews & Assessment'}</h1>
        <p>{isKo ? '효과적인 면접 기법과 평가 센터 운영 방법을 알아봅니다.' : 'Explore effective interview techniques and assessment center operations.'}</p>
      </div>
      <h2>{isKo ? '구조화 면접 설계' : 'Designing Structured Interviews'}</h2>
      <p>{isKo ? 'Campion, Palmer, & Campion(1997)의 연구에 따르면, 면접의 구조화 수준이 높을수록 예측 타당도와 신뢰도가 향상됩니다. 구조화 면접의 핵심 요소는 다음과 같습니다.' : 'According to Campion, Palmer, & Campion (1997), higher levels of interview structure improve predictive validity and reliability. The key elements of structured interviews are as follows.'}</p>
      <ul>
        <li><strong>{isKo ? '직무 분석 기반 질문' : 'Job Analysis-Based Questions'}</strong> - {isKo ? '직무 분석 결과를 바탕으로 질문을 개발합니다.' : 'Develop questions based on job analysis results.'}</li>
        <li><strong>{isKo ? '행동 기반 질문 (BBI)' : 'Behavioral-Based Interview (BBI)'}</strong> - {isKo ? '"과거에 ~한 경험을 말씀해 주세요" 형태로 과거 행동을 통해 미래 성과를 예측합니다.' : '"Tell me about a time when..." format predicts future performance through past behavior.'}</li>
        <li><strong>{isKo ? '상황 면접 (SI)' : 'Situational Interview (SI)'}</strong> - {isKo ? '"~한 상황이라면 어떻게 하시겠습니까?" 형태로 가상 상황에서의 대응을 평가합니다.' : '"What would you do if..." format evaluates responses in hypothetical situations.'}</li>
        <li><strong>{isKo ? '평가 척도 (Rating Scale)' : 'Rating Scale'}</strong> - {isKo ? 'BARS(행동기준 평가척도) 등 구체적 평가 기준을 사전에 수립합니다.' : 'Establish specific evaluation criteria in advance, such as BARS (Behaviorally Anchored Rating Scales).'}</li>
      </ul>
      <h2>{isKo ? '평가 센터 (Assessment Center)' : 'Assessment Center'}</h2>
      <p>{isKo ? '평가 센터는 다양한 모의 상황을 통해 후보자의 역량을 종합적으로 평가하는 방법입니다. 주로 관리직 선발과 승진에 사용됩니다.' : 'An assessment center comprehensively evaluates candidates\' competencies through various simulated situations. It is primarily used for managerial selection and promotion.'}</p>
      <ul>
        <li><strong>{isKo ? '인바스켓 (In-Basket)' : 'In-Basket Exercise'}</strong> - {isKo ? '업무 서류를 처리하는 과제로 의사결정, 우선순위 설정 능력을 평가합니다.' : 'Evaluates decision-making and prioritization through document processing tasks.'}</li>
        <li><strong>{isKo ? '그룹 토론 (Group Discussion)' : 'Group Discussion'}</strong> - {isKo ? '리더십, 의사소통, 협업 능력을 관찰합니다.' : 'Observes leadership, communication, and collaboration abilities.'}</li>
        <li><strong>{isKo ? '역할 연기 (Role Play)' : 'Role Play'}</strong> - {isKo ? '대인관계, 갈등 해결, 설득 능력을 평가합니다.' : 'Evaluates interpersonal, conflict resolution, and persuasion skills.'}</li>
        <li><strong>{isKo ? '프레젠테이션' : 'Presentation'}</strong> - {isKo ? '분석력, 논리력, 표현력을 종합 평가합니다.' : 'Comprehensively evaluates analytical, logical, and presentation skills.'}</li>
      </ul>
      <TipBox type="tip">{isKo ? '면접관 교육은 선발의 질을 결정짓는 핵심 요소입니다. 면접관의 무의식적 편향(확인 편향, 후광 효과, 유사성 편향 등)을 인지하고 통제하는 훈련이 반드시 필요합니다.' : 'Interviewer training is a critical factor that determines selection quality. Training to recognize and control unconscious biases (confirmation bias, halo effect, similarity bias, etc.) is essential.'}</TipBox>
    </div>
  );
}

function BrandingSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '고용 브랜딩' : 'Employer Branding'}</h1>
        <p>{isKo ? '매력적인 고용주로서의 브랜드를 구축하여 우수 인재를 유치하는 전략을 학습합니다.' : 'Learn strategies to attract top talent by building an attractive employer brand.'}</p>
      </div>
      <h2>{isKo ? '고용 브랜드의 개념' : 'The Concept of Employer Brand'}</h2>
      <p>{isKo ? 'Ambler와 Barrow(1996)가 처음 제안한 고용 브랜드(Employer Brand)는 "고용을 통해 제공되는 기능적, 경제적, 심리적 혜택의 총체"입니다. 강력한 고용 브랜드는 우수 인재의 지원율을 높이고 채용 비용을 절감하며, 직원의 몰입과 유지에도 긍정적 영향을 미칩니다.' : 'The Employer Brand, first proposed by Ambler and Barrow (1996), is "the total package of functional, economic, and psychological benefits provided through employment." A strong employer brand increases application rates from top talent, reduces recruitment costs, and positively affects employee engagement and retention.'}</p>
      <h3>{isKo ? 'EVP (Employee Value Proposition)' : 'Employee Value Proposition (EVP)'}</h3>
      <p>{isKo ? 'EVP는 조직이 직원에게 제공하는 가치 제안으로, 고용 브랜드의 핵심입니다.' : 'EVP is the value proposition an organization offers to employees, forming the core of the employer brand.'}</p>
      <ul>
        <li><strong>{isKo ? '보상과 복리후생' : 'Compensation & Benefits'}</strong> - {isKo ? '경쟁력 있는 급여, 인센티브, 복지 프로그램' : 'Competitive salary, incentives, welfare programs'}</li>
        <li><strong>{isKo ? '경력 성장 기회' : 'Career Growth Opportunities'}</strong> - {isKo ? '교육, 승진, 글로벌 경험 기회' : 'Training, promotion, global experience opportunities'}</li>
        <li><strong>{isKo ? '조직 문화와 환경' : 'Culture & Environment'}</strong> - {isKo ? '근무 환경, 조직 분위기, 리더십 스타일' : 'Work environment, organizational atmosphere, leadership style'}</li>
        <li><strong>{isKo ? '사회적 가치' : 'Social Value'}</strong> - {isKo ? 'CSR, ESG 활동, 사회적 영향력' : 'CSR, ESG activities, social impact'}</li>
      </ul>
      <TipBox type="important">{isKo ? '고용 브랜드는 외부 메시지뿐 아니라 내부 직원의 실제 경험과 일치해야 합니다. 현직 직원들이 느끼는 경험과 외부에 전달하는 이미지 사이의 간극이 크면 오히려 신뢰를 잃게 됩니다.' : 'The employer brand must align with the actual experience of internal employees, not just external messaging. A large gap between what current employees experience and the image communicated externally will erode trust.'}</TipBox>
    </div>
  );
}

function OnboardingSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '온보딩' : 'Onboarding'}</h1>
        <p>{isKo ? '신규 입사자의 조직 적응을 돕는 체계적인 온보딩 프로그램을 설계합니다.' : 'Design systematic onboarding programs to help new hires adapt to the organization.'}</p>
      </div>
      <h2>{isKo ? '온보딩의 중요성' : 'Importance of Onboarding'}</h2>
      <p>{isKo ? 'Bauer(2010)의 연구에 따르면, 체계적인 온보딩 프로그램은 신규 입사자의 조기 이직률을 50% 이상 감소시키고, 생산성 도달 시간을 크게 단축시킵니다. 온보딩은 단순한 오리엔테이션을 넘어, 조직 사회화(Organizational Socialization)의 핵심 프로세스입니다.' : 'According to Bauer (2010), systematic onboarding programs reduce early turnover by over 50% and significantly shorten time-to-productivity. Onboarding goes beyond simple orientation and is a core process of organizational socialization.'}</p>
      <h3>{isKo ? 'Bauer의 온보딩 4C 모델' : 'Bauer\'s 4C Onboarding Model'}</h3>
      <ol>
        <li><strong>Compliance ({isKo ? '준수' : 'Compliance'})</strong> - {isKo ? '조직의 규정, 정책, 절차를 이해시킵니다.' : 'Help new hires understand organizational rules, policies, and procedures.'}</li>
        <li><strong>Clarification ({isKo ? '명확화' : 'Clarification'})</strong> - {isKo ? '직무 역할, 기대사항, 성과 기준을 명확히 합니다.' : 'Clarify job roles, expectations, and performance standards.'}</li>
        <li><strong>Culture ({isKo ? '문화' : 'Culture'})</strong> - {isKo ? '조직 문화, 가치관, 비공식적 규범을 전달합니다.' : 'Communicate organizational culture, values, and informal norms.'}</li>
        <li><strong>Connection ({isKo ? '연결' : 'Connection'})</strong> - {isKo ? '동료, 상사, 멘토와의 관계를 형성합니다.' : 'Build relationships with colleagues, supervisors, and mentors.'}</li>
      </ol>
      <h3>{isKo ? '효과적인 온보딩 실행 전략' : 'Effective Onboarding Strategies'}</h3>
      <ul>
        <li><strong>{isKo ? '프리보딩 (Pre-boarding)' : 'Pre-boarding'}</strong> - {isKo ? '입사 전부터 소통을 시작하여 소속감을 형성합니다.' : 'Start communication before the start date to build a sense of belonging.'}</li>
        <li><strong>{isKo ? '멘토링 프로그램' : 'Mentoring Program'}</strong> - {isKo ? '경험 많은 선배 직원을 멘토로 배정합니다.' : 'Assign experienced senior employees as mentors.'}</li>
        <li><strong>{isKo ? '30-60-90일 계획' : '30-60-90 Day Plan'}</strong> - {isKo ? '단계별 목표를 설정하여 성장을 관리합니다.' : 'Set phased goals to manage growth.'}</li>
        <li><strong>{isKo ? '정기 체크인' : 'Regular Check-ins'}</strong> - {isKo ? '주간/월간 면담으로 적응 상태를 점검합니다.' : 'Monitor adaptation through weekly/monthly meetings.'}</li>
      </ul>
      <TipBox type="tip">{isKo ? '온보딩은 첫 주가 아니라 최소 90일에서 1년간 지속되어야 합니다. 입사 첫 6개월이 이직 의사 결정에 가장 큰 영향을 미치므로, 장기적 관점의 프로그램 설계가 중요합니다.' : 'Onboarding should last at least 90 days to one year, not just the first week. Since the first 6 months have the greatest impact on turnover decisions, a long-term program design is crucial.'}</TipBox>
    </div>
  );
}
