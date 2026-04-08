import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'philosophy', icon: 'fa-scale-balanced', ko: '보상 철학', en: 'Compensation Philosophy' },
  { id: 'pay-systems', icon: 'fa-money-bill-wave', ko: '임금 체계', en: 'Pay Systems' },
  { id: 'job-eval', icon: 'fa-ranking-star', ko: '직무 평가', en: 'Job Evaluation' },
  { id: 'incentives', icon: 'fa-trophy', ko: '인센티브와 성과급', en: 'Incentives & Pay-for-Performance' },
  { id: 'benefits', icon: 'fa-heart', ko: '복리후생', en: 'Benefits & Welfare' },
  { id: 'trends', icon: 'fa-arrow-trend-up', ko: '보상 트렌드', en: 'Compensation Trends' },
];

export default function Compensation(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('philosophy');
  const isKo = language === 'ko';
  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);

  const handlePrev = () => { if (currentIndex > 0) { setActiveSection(SECTIONS[currentIndex - 1].id); window.scrollTo({ top: 0, behavior: 'smooth' }); } };
  const handleNext = () => { if (currentIndex < SECTIONS.length - 1) { setActiveSection(SECTIONS[currentIndex + 1].id); window.scrollTo({ top: 0, behavior: 'smooth' }); } };

  return (
    <>
      <SEOHead title={isKo ? '보상 관리' : 'Compensation Management'} description={isKo ? '임금 체계, 직무 평가, 인센티브, 복리후생 설계를 학습합니다.' : 'Learn pay systems, job evaluation, incentives, and benefits design.'} />
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
            {activeSection === 'philosophy' && <PhilosophySection isKo={isKo} />}
            {activeSection === 'pay-systems' && <PaySystemsSection isKo={isKo} />}
            {activeSection === 'job-eval' && <JobEvalSection isKo={isKo} />}
            {activeSection === 'incentives' && <IncentivesSection isKo={isKo} />}
            {activeSection === 'benefits' && <BenefitsSection isKo={isKo} />}
            {activeSection === 'trends' && <TrendsSection isKo={isKo} />}
            <div className="guide-references" style={{ marginTop: '48px', padding: '24px', background: 'var(--bg-light-gray)', borderRadius: '12px', fontSize: '14px', lineHeight: '1.8' }}>
              <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 700 }}>{isKo ? '참고문헌' : 'References'}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)' }}>
                <li>Adams, J.S. (1963). Towards an Understanding of Inequity. <em>Journal of Abnormal and Social Psychology</em>, 67(5), 422-436.</li>
                <li>Gerhart, B. & Rynes, S.L. (2003). <em>Compensation: Theory, Evidence, and Strategic Implications</em>. Sage.</li>
                <li>Heneman, R.L. (2002). <em>Strategic Reward Management: Design, Implementation, and Evaluation</em>. Information Age Publishing.</li>
                <li>Kerr, S. (1975). On the Folly of Rewarding A, While Hoping for B. <em>Academy of Management Journal</em>, 18(4), 769-783.</li>
                <li>Lawler, E.E. (1990). <em>Strategic Pay: Aligning Organizational Strategies and Pay Systems</em>. Jossey-Bass.</li>
                <li>Milkovich, G.T., Newman, J.M., & Gerhart, B. (2020). <em>Compensation</em> (13th ed.). McGraw-Hill.</li>
                <li>Vroom, V.H. (1964). <em>Work and Motivation</em>. John Wiley & Sons.</li>
                <li>WorldatWork (2021). <em>Total Rewards Model</em>. WorldatWork Press.</li>
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

function PhilosophySection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '보상 철학' : 'Compensation Philosophy'}</h1>
        <p>{isKo ? '보상의 이론적 기반과 조직의 보상 전략을 수립하는 원칙을 알아봅니다.' : 'Explore the theoretical foundations of compensation and principles for establishing organizational pay strategies.'}</p>
      </div>
      <h2>{isKo ? '보상의 이론적 기반' : 'Theoretical Foundations of Compensation'}</h2>
      <h3>{isKo ? '공정성 이론 (Equity Theory)' : 'Equity Theory'}</h3>
      <p>{isKo ? 'Adams(1963)의 공정성 이론에 따르면, 직원들은 자신의 투입(노력, 능력, 경험)과 산출(급여, 승진, 인정)의 비율을 타인과 비교합니다. 이 비율이 불공정하다고 느끼면 동기가 저하되거나 이직을 고려합니다.' : 'According to Adams\' (1963) equity theory, employees compare their input-output ratio (effort, ability, experience vs. pay, promotion, recognition) with others. If they perceive this ratio as unfair, motivation decreases or they consider leaving.'}</p>
      <h3>{isKo ? '기대 이론 (Expectancy Theory)' : 'Expectancy Theory'}</h3>
      <p>{isKo ? 'Vroom(1964)의 기대 이론은 동기 = 기대(Expectancy) × 수단성(Instrumentality) × 유의성(Valence)으로 설명합니다. 즉, 노력이 성과로 이어지고, 성과가 보상으로 이어지며, 그 보상이 자신에게 가치 있을 때 동기가 극대화됩니다.' : 'Vroom\'s (1964) expectancy theory explains Motivation = Expectancy × Instrumentality × Valence. Motivation is maximized when effort leads to performance, performance leads to rewards, and those rewards are valued by the individual.'}</p>
      <h2>{isKo ? '보상 전략의 3가지 결정' : 'Three Key Compensation Decisions'}</h2>
      <p>{isKo ? 'Milkovich et al.(2020)에 따르면, 보상 전략은 세 가지 핵심 결정으로 구성됩니다.' : 'According to Milkovich et al. (2020), compensation strategy consists of three key decisions.'}</p>
      <ol>
        <li><strong>{isKo ? '외부 경쟁력 (External Competitiveness)' : 'External Competitiveness'}</strong> - {isKo ? '시장 대비 어느 수준으로 보상할 것인가? (선도, 동행, 추종 전략)' : 'What level to pay relative to the market? (Lead, match, lag strategies)'}</li>
        <li><strong>{isKo ? '내부 공정성 (Internal Equity)' : 'Internal Equity'}</strong> - {isKo ? '직무 간 보상 차이가 직무 가치를 공정하게 반영하는가?' : 'Do pay differences between jobs fairly reflect job value?'}</li>
        <li><strong>{isKo ? '개인 공정성 (Individual Equity)' : 'Individual Equity'}</strong> - {isKo ? '동일 직무 내에서 성과와 역량에 따라 차등 보상하는가?' : 'Is pay differentiated by performance and competency within the same job?'}</li>
      </ol>
      <TipBox type="important">{isKo ? '보상 철학은 조직의 가치관과 전략을 반영합니다. "어떤 행동과 성과를 보상하느냐"가 곧 "어떤 행동과 성과를 원하느냐"를 조직 구성원에게 전달하는 강력한 메시지입니다.' : 'Compensation philosophy reflects organizational values and strategy. "What behaviors and performance we reward" is a powerful message to employees about "what behaviors and performance we want."'}</TipBox>
    </div>
  );
}

function PaySystemsSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '임금 체계' : 'Pay Systems'}</h1>
        <p>{isKo ? '다양한 임금 체계의 구조와 특성을 이해합니다.' : 'Understand the structure and characteristics of various pay systems.'}</p>
      </div>
      <h2>{isKo ? '임금의 구성' : 'Pay Structure'}</h2>
      <ul>
        <li><strong>{isKo ? '기본급 (Base Pay)' : 'Base Pay'}</strong> - {isKo ? '직무, 역량, 근속에 따라 결정되는 고정 급여입니다.' : 'Fixed salary determined by job, competency, and tenure.'}</li>
        <li><strong>{isKo ? '수당 (Allowances)' : 'Allowances'}</strong> - {isKo ? '시간외 수당, 직책 수당, 가족 수당 등 부가 급여입니다.' : 'Additional pay such as overtime, position, and family allowances.'}</li>
        <li><strong>{isKo ? '변동급 (Variable Pay)' : 'Variable Pay'}</strong> - {isKo ? '성과에 따라 변동하는 인센티브, 상여금입니다.' : 'Incentives and bonuses that vary with performance.'}</li>
      </ul>
      <h2>{isKo ? '임금 체계의 유형' : 'Types of Pay Systems'}</h2>
      <h3>{isKo ? '연공급 (Seniority-Based Pay)' : 'Seniority-Based Pay'}</h3>
      <p>{isKo ? '근속 연수에 따라 자동으로 급여가 상승하는 체계입니다. 안정성을 제공하지만, 성과와 보상의 연계가 약하고 인건비가 지속적으로 증가하는 단점이 있습니다.' : 'A system where pay automatically increases with years of service. Provides stability but has weak performance-pay linkage and continuously increasing labor costs.'}</p>
      <h3>{isKo ? '직무급 (Job-Based Pay)' : 'Job-Based Pay'}</h3>
      <p>{isKo ? '직무의 상대적 가치에 따라 급여를 결정하는 체계입니다. 미국 기업에서 널리 사용되며, 직무 평가(Job Evaluation)를 통해 직무의 가치를 체계적으로 측정합니다.' : 'A system that determines pay based on the relative value of jobs. Widely used in U.S. companies, it systematically measures job value through Job Evaluation.'}</p>
      <h3>{isKo ? '역량급 (Competency-Based Pay)' : 'Competency-Based Pay'}</h3>
      <p>{isKo ? '보유 역량과 기술 수준에 따라 급여를 결정하는 체계입니다. Lawler(1990)는 역량급이 조직의 유연성과 학습을 촉진한다고 주장했습니다.' : 'A system that determines pay based on competency and skill levels. Lawler (1990) argued that competency-based pay promotes organizational flexibility and learning.'}</p>
      <TipBox type="tip">{isKo ? '한국 기업은 전통적 연공급에서 직무급·역할급으로의 전환이 가속화되고 있습니다. 완전한 전환보다는 연공급 + 직무급 + 성과급을 혼합한 혼합형 임금체계가 현실적인 대안으로 자리잡고 있습니다.' : 'Korean companies are accelerating the transition from traditional seniority-based to job-based and role-based pay. Rather than a complete transition, a hybrid system combining seniority, job, and performance-based pay is becoming a realistic alternative.'}</TipBox>
    </div>
  );
}

function JobEvalSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '직무 평가' : 'Job Evaluation'}</h1>
        <p>{isKo ? '직무의 상대적 가치를 체계적으로 측정하는 방법을 학습합니다.' : 'Learn systematic methods for measuring the relative value of jobs.'}</p>
      </div>
      <h2>{isKo ? '직무 평가의 방법' : 'Job Evaluation Methods'}</h2>
      <p>{isKo ? 'Milkovich et al.(2020)에 따르면, 직무 평가 방법은 크게 비계량적 방법과 계량적 방법으로 구분됩니다.' : 'According to Milkovich et al. (2020), job evaluation methods are broadly divided into non-quantitative and quantitative methods.'}</p>
      <h3>{isKo ? '비계량적 방법' : 'Non-Quantitative Methods'}</h3>
      <ul>
        <li><strong>{isKo ? '서열법 (Ranking)' : 'Ranking'}</strong> - {isKo ? '직무 전체를 비교하여 가치 순서대로 서열화합니다. 간단하지만 직무가 많으면 비효율적입니다.' : 'Rank jobs in order of value by comparing whole jobs. Simple but inefficient with many jobs.'}</li>
        <li><strong>{isKo ? '분류법 (Classification/Grading)' : 'Classification/Grading'}</strong> - {isKo ? '미리 정한 등급 기준에 직무를 배치합니다. 미국 공무원 GS 체계가 대표적입니다.' : 'Place jobs into predetermined grade categories. The U.S. civil service GS system is a prime example.'}</li>
      </ul>
      <h3>{isKo ? '계량적 방법' : 'Quantitative Methods'}</h3>
      <ul>
        <li><strong>{isKo ? '점수법 (Point Factor Method)' : 'Point Factor Method'}</strong> - {isKo ? '직무를 보상 요소(기술, 노력, 책임, 작업 조건)별로 점수화하여 총점으로 가치를 결정합니다. 가장 널리 사용되는 방법입니다.' : 'Score jobs by compensable factors (skill, effort, responsibility, working conditions) and determine value by total points. The most widely used method.'}</li>
        <li><strong>{isKo ? '요소비교법 (Factor Comparison)' : 'Factor Comparison'}</strong> - {isKo ? '기준 직무(Key Job)를 설정하고, 각 보상 요소별로 다른 직무와 비교합니다.' : 'Set benchmark Key Jobs and compare other jobs by each compensable factor.'}</li>
      </ul>
      <TipBox type="important">{isKo ? '직무 평가는 "직무"를 평가하는 것이지 "사람"을 평가하는 것이 아닙니다. 직무 분석이 정확해야 직무 평가도 공정해집니다. 직무 기술서(Job Description)와 직무 명세서(Job Specification)가 직무 평가의 기초 자료입니다.' : 'Job evaluation evaluates "jobs," not "people." Accurate job analysis is essential for fair job evaluation. Job Descriptions and Job Specifications are the foundational documents for job evaluation.'}</TipBox>
    </div>
  );
}

function IncentivesSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '인센티브와 성과급' : 'Incentives & Pay-for-Performance'}</h1>
        <p>{isKo ? '성과와 연계된 보상 체계를 설계하고 운영하는 방법을 학습합니다.' : 'Learn how to design and operate performance-linked compensation systems.'}</p>
      </div>
      <h2>{isKo ? '인센티브의 유형' : 'Types of Incentives'}</h2>
      <h3>{isKo ? '개인 인센티브' : 'Individual Incentives'}</h3>
      <ul>
        <li><strong>{isKo ? '성과 상여금 (Merit Bonus)' : 'Merit Bonus'}</strong> - {isKo ? '개인 성과 평가 결과에 따른 일시불 상여금입니다.' : 'Lump-sum bonus based on individual performance evaluation results.'}</li>
        <li><strong>{isKo ? '커미션 (Commission)' : 'Commission'}</strong> - {isKo ? '판매 실적에 비례한 보상으로, 영업직에 주로 적용됩니다.' : 'Compensation proportional to sales results, mainly applied to sales positions.'}</li>
        <li><strong>{isKo ? '성과급 인상 (Merit Pay)' : 'Merit Pay'}</strong> - {isKo ? '성과에 따라 기본급을 차등 인상합니다.' : 'Differentially increase base pay according to performance.'}</li>
      </ul>
      <h3>{isKo ? '집단 인센티브' : 'Group Incentives'}</h3>
      <ul>
        <li><strong>{isKo ? '이익 분배 (Profit Sharing)' : 'Profit Sharing'}</strong> - {isKo ? '조직 이익의 일부를 구성원에게 배분합니다.' : 'Distribute a portion of organizational profits to employees.'}</li>
        <li><strong>{isKo ? '게인셰어링 (Gainsharing)' : 'Gainsharing'}</strong> - {isKo ? '생산성 향상에 따른 이득을 공유합니다. Scanlon Plan, Rucker Plan 등이 대표적입니다.' : 'Share gains from productivity improvements. Scanlon Plan and Rucker Plan are representative examples.'}</li>
        <li><strong>{isKo ? '스톡옵션 (Stock Option)' : 'Stock Options'}</strong> - {isKo ? '미래 일정 시점에 자사 주식을 약정된 가격으로 매수할 수 있는 권리입니다.' : 'The right to purchase company stock at a predetermined price at a future date.'}</li>
      </ul>
      <TipBox type="warning">{isKo ? 'Kerr(1975)의 고전적 논문 "A를 보상하면서 B를 기대하는 어리석음"은 인센티브 설계의 함정을 경고합니다. 예를 들어, 단기 매출을 보상하면서 장기 고객 관계를 기대하거나, 개인 성과를 보상하면서 팀워크를 기대하는 모순을 피해야 합니다.' : 'Kerr\'s (1975) classic paper "On the Folly of Rewarding A, While Hoping for B" warns of incentive design pitfalls. Avoid contradictions like rewarding short-term sales while expecting long-term customer relationships, or rewarding individual performance while expecting teamwork.'}</TipBox>
    </div>
  );
}

function BenefitsSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '복리후생' : 'Benefits & Welfare'}</h1>
        <p>{isKo ? '경쟁력 있는 복리후생 제도의 설계와 운영을 알아봅니다.' : 'Explore the design and operation of competitive benefits programs.'}</p>
      </div>
      <h2>{isKo ? '복리후생의 구성' : 'Components of Benefits'}</h2>
      <h3>{isKo ? '법정 복리후생' : 'Statutory Benefits'}</h3>
      <ul>
        <li>{isKo ? '국민연금, 건강보험, 고용보험, 산재보험 (4대 사회보험)' : 'National Pension, Health Insurance, Employment Insurance, Workers\' Compensation (Four Major Social Insurance Programs)'}</li>
        <li>{isKo ? '유급휴가, 퇴직급여 등' : 'Paid leave, severance pay, etc.'}</li>
      </ul>
      <h3>{isKo ? '법정외 복리후생' : 'Voluntary Benefits'}</h3>
      <ul>
        <li><strong>{isKo ? '건강 관리' : 'Health & Wellness'}</strong> - {isKo ? '건강검진, 피트니스 지원, 심리 상담(EAP)' : 'Health checkups, fitness support, Employee Assistance Program (EAP)'}</li>
        <li><strong>{isKo ? '생활 지원' : 'Life Support'}</strong> - {isKo ? '주거 지원, 자녀 교육비, 경조금' : 'Housing support, children\'s education costs, congratulatory/condolence funds'}</li>
        <li><strong>{isKo ? '근무 유연성' : 'Work Flexibility'}</strong> - {isKo ? '유연근무제, 재택근무, 안식년' : 'Flexible working, remote work, sabbatical'}</li>
        <li><strong>{isKo ? '자기 계발' : 'Self-Development'}</strong> - {isKo ? '교육비 지원, 자격증 취득 지원, 학위 과정 지원' : 'Education support, certification support, degree program support'}</li>
      </ul>
      <h2>{isKo ? '선택적 복리후생 (Cafeteria Plan)' : 'Flexible Benefits (Cafeteria Plan)'}</h2>
      <p>{isKo ? '일정 포인트 내에서 직원이 자신의 필요에 맞게 복리후생을 선택할 수 있는 제도입니다. Heneman(2002)에 따르면, 선택적 복리후생은 직원 만족도를 높이면서 비용 효율성을 개선합니다.' : 'A system where employees can choose benefits according to their needs within a set point budget. According to Heneman (2002), flexible benefits improve employee satisfaction while enhancing cost efficiency.'}</p>
      <TipBox type="tip">{isKo ? 'WorldatWork(2021)의 Total Rewards 모델은 보상을 금전적 보상(기본급, 변동급, 복리후생)과 비금전적 보상(경력 개발, 일과 삶의 균형, 인정)을 통합적으로 설계할 것을 제안합니다. 특히 MZ세대는 비금전적 보상을 더 중시하는 경향이 있습니다.' : 'WorldatWork\'s (2021) Total Rewards model proposes integrating monetary rewards (base pay, variable pay, benefits) with non-monetary rewards (career development, work-life balance, recognition). Millennials and Gen Z tend to value non-monetary rewards more.'}</TipBox>
    </div>
  );
}

function TrendsSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '보상 트렌드' : 'Compensation Trends'}</h1>
        <p>{isKo ? '최신 보상 트렌드와 미래 방향을 살펴봅니다.' : 'Explore the latest compensation trends and future directions.'}</p>
      </div>
      <h2>{isKo ? '주요 보상 트렌드' : 'Major Compensation Trends'}</h2>
      <ul>
        <li><strong>{isKo ? '보상 투명성 (Pay Transparency)' : 'Pay Transparency'}</strong> - {isKo ? '급여 범위 공개, 보상 기준 투명화가 글로벌 추세입니다. 미국, EU 등에서 급여 공개 법률이 확산되고 있습니다.' : 'Disclosure of pay ranges and transparent compensation criteria are global trends. Pay transparency laws are spreading in the U.S., EU, and beyond.'}</li>
        <li><strong>{isKo ? '보상 형평성 (Pay Equity)' : 'Pay Equity'}</strong> - {isKo ? '성별, 인종 등에 따른 보상 격차를 해소하려는 노력이 강화되고 있습니다. 정기적인 보상 형평성 분석(Pay Equity Audit)이 필수가 되고 있습니다.' : 'Efforts to close pay gaps based on gender, race, etc. are strengthening. Regular Pay Equity Audits are becoming essential.'}</li>
        <li><strong>{isKo ? '개인화된 보상 (Personalized Rewards)' : 'Personalized Rewards'}</strong> - {isKo ? '일률적 보상에서 개인의 선호와 생애 주기에 맞춘 맞춤형 보상으로 진화하고 있습니다.' : 'Evolving from uniform compensation to customized rewards tailored to individual preferences and life stages.'}</li>
        <li><strong>{isKo ? '웰빙 보상 (Well-being Rewards)' : 'Well-being Rewards'}</strong> - {isKo ? '신체적, 정신적, 재정적, 사회적 웰빙을 지원하는 복리후생이 확대되고 있습니다.' : 'Benefits supporting physical, mental, financial, and social well-being are expanding.'}</li>
        <li><strong>{isKo ? '스킬 기반 보상 (Skill-Based Pay)' : 'Skill-Based Pay'}</strong> - {isKo ? '직무가 아닌 보유 스킬에 따라 보상하는 체계로, 디지털 전환 시대에 주목받고 있습니다.' : 'A system that compensates based on skills held rather than job titles, gaining attention in the digital transformation era.'}</li>
      </ul>
      <TipBox type="important">{isKo ? 'Gerhart & Rynes(2003)는 보상 전략이 조직의 인재 확보, 유지, 동기부여에 가장 직접적인 영향을 미친다고 강조합니다. 보상은 단순한 비용이 아니라 조직의 전략적 투자로 인식되어야 합니다.' : 'Gerhart & Rynes (2003) emphasize that compensation strategy has the most direct impact on talent acquisition, retention, and motivation. Compensation should be viewed as a strategic investment, not simply a cost.'}</TipBox>
    </div>
  );
}
