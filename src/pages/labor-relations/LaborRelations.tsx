import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'theory', icon: 'fa-book', ko: '노사관계 이론', en: 'Labor Relations Theory' },
  { id: 'labor-law', icon: 'fa-gavel', ko: '노동법의 이해', en: 'Understanding Labor Law' },
  { id: 'bargaining', icon: 'fa-handshake-angle', ko: '단체교섭', en: 'Collective Bargaining' },
  { id: 'dispute', icon: 'fa-scale-unbalanced', ko: '노동 분쟁 해결', en: 'Labor Dispute Resolution' },
  { id: 'conditions', icon: 'fa-shield-halved', ko: '근로 조건과 안전', en: 'Working Conditions & Safety' },
  { id: 'cooperation', icon: 'fa-people-group', ko: '노사 협력', en: 'Labor-Management Cooperation' },
];

export default function LaborRelations(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('theory');
  const isKo = language === 'ko';
  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);

  const handlePrev = () => { if (currentIndex > 0) { setActiveSection(SECTIONS[currentIndex - 1].id); window.scrollTo({ top: 0, behavior: 'smooth' }); } };
  const handleNext = () => { if (currentIndex < SECTIONS.length - 1) { setActiveSection(SECTIONS[currentIndex + 1].id); window.scrollTo({ top: 0, behavior: 'smooth' }); } };

  return (
    <>
      <SEOHead title={isKo ? '노사관계' : 'Labor Relations'} description={isKo ? '노사관계 이론, 노동법, 단체교섭, 분쟁 해결을 체계적으로 학습합니다.' : 'Systematically learn labor relations theory, labor law, collective bargaining, and dispute resolution.'} />
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
            {activeSection === 'theory' && <TheorySection isKo={isKo} />}
            {activeSection === 'labor-law' && <LaborLawSection isKo={isKo} />}
            {activeSection === 'bargaining' && <BargainingSection isKo={isKo} />}
            {activeSection === 'dispute' && <DisputeSection isKo={isKo} />}
            {activeSection === 'conditions' && <ConditionsSection isKo={isKo} />}
            {activeSection === 'cooperation' && <CooperationSection isKo={isKo} />}
            <div className="guide-references" style={{ marginTop: '48px', padding: '24px', background: 'var(--bg-light-gray)', borderRadius: '12px', fontSize: '14px', lineHeight: '1.8' }}>
              <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 700 }}>{isKo ? '참고문헌' : 'References'}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)' }}>
                <li>Budd, J.W. (2013). <em>Labor Relations: Striking a Balance</em> (4th ed.). McGraw-Hill.</li>
                <li>Dunlop, J.T. (1958). <em>Industrial Relations Systems</em>. Harvard Business School Press.</li>
                <li>Fisher, R. & Ury, W. (1981). <em>Getting to Yes: Negotiating Agreement Without Giving In</em>. Penguin Books.</li>
                <li>Freeman, R.B. & Medoff, J.L. (1984). <em>What Do Unions Do?</em> Basic Books.</li>
                <li>Katz, H.C., Kochan, T.A., & Colvin, A.J.S. (2017). <em>An Introduction to U.S. Collective Bargaining and Labor Relations</em> (5th ed.). ILR Press.</li>
                <li>Kochan, T.A., Katz, H.C., & McKersie, R.B. (1986). <em>The Transformation of American Industrial Relations</em>. Basic Books.</li>
                <li>{isKo ? '고용노동부 (2024). 노동관계법 해설.' : 'Ministry of Employment and Labor, Korea (2024). Commentary on Labor Relations Law.'}</li>
                <li>Walton, R.E. & McKersie, R.B. (1965). <em>A Behavioral Theory of Labor Negotiations</em>. McGraw-Hill.</li>
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

function TheorySection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '노사관계 이론' : 'Labor Relations Theory'}</h1>
        <p>{isKo ? '노사관계를 바라보는 주요 이론적 관점을 이해합니다.' : 'Understand the major theoretical perspectives on labor relations.'}</p>
      </div>
      <h2>{isKo ? 'Dunlop의 산업관계 시스템 이론' : 'Dunlop\'s Industrial Relations Systems Theory'}</h2>
      <p>{isKo ? 'Dunlop(1958)은 산업관계(Industrial Relations)를 하나의 시스템으로 보았습니다. 이 시스템은 세 주체(경영자, 근로자/노조, 정부)가 환경적 맥락(기술, 시장, 권력관계) 속에서 상호작용하여 규칙(작업장 규범)을 만들어내는 과정입니다.' : 'Dunlop (1958) viewed Industrial Relations as a system. This system is a process where three actors (management, workers/unions, government) interact within environmental contexts (technology, market, power relations) to create rules (workplace norms).'}</p>
      <h2>{isKo ? '노사관계의 세 관점' : 'Three Perspectives on Labor Relations'}</h2>
      <ul>
        <li><strong>{isKo ? '일원론적 관점 (Unitarist)' : 'Unitarist Perspective'}</strong> - {isKo ? '노사의 이익은 본질적으로 일치합니다. 갈등은 의사소통 실패나 불만 직원에 의한 비정상적 현상입니다. 노조는 불필요합니다.' : 'Employer and employee interests are fundamentally aligned. Conflict is an abnormal phenomenon caused by communication failure or disgruntled employees. Unions are unnecessary.'}</li>
        <li><strong>{isKo ? '다원론적 관점 (Pluralist)' : 'Pluralist Perspective'}</strong> - {isKo ? '노사 간 이해관계의 차이는 불가피합니다. 갈등은 자연스러운 현상이며, 이를 제도적으로 관리하는 것이 중요합니다. 노조는 근로자의 합법적 이익 대변 기구입니다.' : 'Differences in interests between employers and employees are inevitable. Conflict is natural, and institutional management is important. Unions are legitimate representatives of worker interests.'}</li>
        <li><strong>{isKo ? '급진론적 관점 (Radical/Marxist)' : 'Radical/Marxist Perspective'}</strong> - {isKo ? '노사 갈등은 자본주의 구조에 내재된 근본적 모순입니다. 자본과 노동의 관계는 본질적으로 착취적이며, 근본적 사회 구조 변혁이 필요합니다.' : 'Labor-management conflict is a fundamental contradiction inherent in the capitalist structure. The relationship between capital and labor is inherently exploitative, requiring fundamental social structural transformation.'}</li>
      </ul>
      <TipBox type="tip">{isKo ? 'Budd(2013)는 노사관계의 핵심 목표가 효율성(Efficiency), 공정성(Equity), 발언권(Voice)의 균형이라고 강조합니다. 이 세 가치의 균형점을 찾는 것이 건전한 노사관계의 핵심입니다.' : 'Budd (2013) emphasizes that the core goals of labor relations are balancing Efficiency, Equity, and Voice. Finding the balance point of these three values is the key to healthy labor relations.'}</TipBox>
    </div>
  );
}

function LaborLawSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '노동법의 이해' : 'Understanding Labor Law'}</h1>
        <p>{isKo ? 'HR 실무에 필수적인 노동법의 핵심 내용을 학습합니다.' : 'Learn the essential labor law content required for HR practice.'}</p>
      </div>
      <h2>{isKo ? '한국 노동법의 체계' : 'Korean Labor Law Framework'}</h2>
      <p>{isKo ? '한국의 노동법은 크게 개별적 근로관계법과 집단적 노사관계법으로 구분됩니다 (고용노동부, 2024).' : 'Korean labor law is broadly divided into individual employment law and collective labor relations law (Ministry of Employment and Labor, 2024).'}</p>
      <h3>{isKo ? '개별적 근로관계법' : 'Individual Employment Law'}</h3>
      <ul>
        <li><strong>{isKo ? '근로기준법' : 'Labor Standards Act'}</strong> - {isKo ? '근로 조건의 최저 기준을 정합니다. 근로 시간, 임금, 휴가, 해고 제한 등을 규율합니다.' : 'Sets minimum standards for working conditions. Regulates working hours, wages, leave, dismissal restrictions, etc.'}</li>
        <li><strong>{isKo ? '최저임금법' : 'Minimum Wage Act'}</strong> - {isKo ? '최저임금의 결정과 적용에 관한 사항을 규정합니다.' : 'Stipulates matters concerning determination and application of minimum wage.'}</li>
        <li><strong>{isKo ? '남녀고용평등법' : 'Equal Employment Act'}</strong> - {isKo ? '고용에서의 성차별 금지와 일·가정 양립 지원을 규정합니다.' : 'Prohibits gender discrimination in employment and supports work-family balance.'}</li>
      </ul>
      <h3>{isKo ? '집단적 노사관계법' : 'Collective Labor Relations Law'}</h3>
      <ul>
        <li><strong>{isKo ? '노동조합법' : 'Trade Union Act'}</strong> - {isKo ? '노동조합의 설립, 운영, 단체교섭, 단체행동에 관한 사항을 규정합니다. 노동 3권(단결권, 단체교섭권, 단체행동권)의 법적 기반입니다.' : 'Stipulates matters concerning establishment, operation, collective bargaining, and collective action of trade unions. The legal basis for labor\'s three rights (right to organize, bargain collectively, and take collective action).'}</li>
        <li><strong>{isKo ? '근로자참여법' : 'Worker Participation Act'}</strong> - {isKo ? '노사협의회의 설치와 운영에 관한 사항을 규정합니다.' : 'Stipulates matters concerning establishment and operation of labor-management councils.'}</li>
      </ul>
      <TipBox type="warning">{isKo ? 'HR 담당자는 노동법의 최신 개정 사항을 항상 파악하고 있어야 합니다. 노동법 위반은 형사처벌은 물론, 기업 이미지 훼손과 노사관계 악화로 이어질 수 있습니다.' : 'HR professionals must always be aware of the latest labor law amendments. Labor law violations can lead to criminal penalties, as well as damage to corporate image and deterioration of labor-management relations.'}</TipBox>
    </div>
  );
}

function BargainingSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '단체교섭' : 'Collective Bargaining'}</h1>
        <p>{isKo ? '단체교섭의 구조, 전략, 효과적인 교섭 기법을 학습합니다.' : 'Learn the structure, strategies, and effective techniques of collective bargaining.'}</p>
      </div>
      <h2>{isKo ? '단체교섭의 유형' : 'Types of Collective Bargaining'}</h2>
      <p>{isKo ? 'Walton & McKersie(1965)의 고전적 분류에 따르면, 단체교섭에는 4가지 하위 프로세스가 존재합니다.' : 'According to Walton & McKersie\'s (1965) classic classification, there are four sub-processes in collective bargaining.'}</p>
      <ol>
        <li><strong>{isKo ? '분배적 교섭 (Distributive Bargaining)' : 'Distributive Bargaining'}</strong> - {isKo ? '한쪽이 얻으면 다른 쪽이 잃는 제로섬 교섭입니다. 임금 인상 교섭이 대표적입니다.' : 'Zero-sum bargaining where one side\'s gain is the other\'s loss. Wage increase negotiations are typical.'}</li>
        <li><strong>{isKo ? '통합적 교섭 (Integrative Bargaining)' : 'Integrative Bargaining'}</strong> - {isKo ? '양측 모두 이익을 얻는 윈-윈 교섭입니다. 생산성 향상과 보상을 연계하는 경우입니다.' : 'Win-win bargaining where both sides benefit. Linking productivity improvement with compensation is an example.'}</li>
        <li><strong>{isKo ? '태도 구조화 (Attitudinal Structuring)' : 'Attitudinal Structuring'}</strong> - {isKo ? '교섭 과정에서 상호 신뢰와 존중을 형성하는 과정입니다.' : 'The process of building mutual trust and respect during negotiations.'}</li>
        <li><strong>{isKo ? '조직 내 교섭 (Intraorganizational Bargaining)' : 'Intraorganizational Bargaining'}</strong> - {isKo ? '교섭 대표가 자기 측 구성원의 기대를 관리하는 과정입니다.' : 'The process of bargaining representatives managing expectations of their own constituents.'}</li>
      </ol>
      <h2>{isKo ? '효과적 교섭 전략' : 'Effective Bargaining Strategies'}</h2>
      <p>{isKo ? 'Fisher & Ury(1981)의 "원칙에 입각한 교섭(Principled Negotiation)" 원칙:' : 'Fisher & Ury\'s (1981) "Principled Negotiation" principles:'}</p>
      <ul>
        <li>{isKo ? '사람과 문제를 분리하라' : 'Separate people from problems'}</li>
        <li>{isKo ? '입장이 아닌 이익에 초점을 맞추라' : 'Focus on interests, not positions'}</li>
        <li>{isKo ? '상호 이익이 되는 옵션을 창출하라' : 'Generate options for mutual gain'}</li>
        <li>{isKo ? '객관적 기준을 활용하라' : 'Insist on objective criteria'}</li>
      </ul>
      <TipBox type="important">{isKo ? 'Kochan et al.(1986)에 따르면, 전략적 수준에서의 노사관계가 가장 중요합니다. 경영진의 전략적 의사결정(투자, 구조조정, 기술 도입 등)이 노사관계의 근본적 방향을 결정하기 때문입니다.' : 'According to Kochan et al. (1986), labor relations at the strategic level are most important. Management\'s strategic decisions (investment, restructuring, technology adoption, etc.) determine the fundamental direction of labor-management relations.'}</TipBox>
    </div>
  );
}

function DisputeSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '노동 분쟁 해결' : 'Labor Dispute Resolution'}</h1>
        <p>{isKo ? '노동 분쟁의 유형과 해결 절차를 이해합니다.' : 'Understand the types and resolution procedures of labor disputes.'}</p>
      </div>
      <h2>{isKo ? '분쟁 해결 메커니즘' : 'Dispute Resolution Mechanisms'}</h2>
      <h3>{isKo ? '자주적 해결' : 'Autonomous Resolution'}</h3>
      <p>{isKo ? '노사가 직접 대화와 협의를 통해 분쟁을 해결하는 것이 가장 바람직합니다. 고충 처리 제도와 노사협의회가 1차적 해결 채널입니다.' : 'Resolution through direct dialogue and consultation between labor and management is most desirable. Grievance procedures and labor-management councils are the primary resolution channels.'}</p>
      <h3>{isKo ? '제3자 개입' : 'Third-Party Intervention'}</h3>
      <ol>
        <li><strong>{isKo ? '조정 (Mediation)' : 'Mediation'}</strong> - {isKo ? '노동위원회의 조정위원이 양측의 합의를 도출하도록 돕습니다. 조정안에 구속력은 없습니다.' : 'Labor commission mediators help both sides reach an agreement. Mediation proposals are not binding.'}</li>
        <li><strong>{isKo ? '중재 (Arbitration)' : 'Arbitration'}</strong> - {isKo ? '중재위원이 결정을 내리며, 그 결정은 양측을 구속합니다. 필수 공익사업은 강제 중재 대상입니다.' : 'An arbitrator makes a decision that binds both parties. Essential public services are subject to compulsory arbitration.'}</li>
        <li><strong>{isKo ? '긴급 조정' : 'Emergency Mediation'}</strong> - {isKo ? '공익에 중대한 영향을 미치는 분쟁에 대해 고용노동부 장관이 요청합니다.' : 'Requested by the Minister of Employment and Labor for disputes significantly affecting public interest.'}</li>
      </ol>
      <h2>{isKo ? '쟁의 행위' : 'Industrial Action'}</h2>
      <ul>
        <li><strong>{isKo ? '파업 (Strike)' : 'Strike'}</strong> - {isKo ? '근로자들이 집단적으로 근로 제공을 거부하는 행위입니다.' : 'The collective refusal of workers to provide labor.'}</li>
        <li><strong>{isKo ? '직장 폐쇄 (Lockout)' : 'Lockout'}</strong> - {isKo ? '사용자가 근로자의 근로 제공을 거부하는 행위입니다.' : 'The employer\'s refusal to accept workers\' labor.'}</li>
      </ul>
      <TipBox type="warning">{isKo ? '파업은 최후의 수단이어야 합니다. 파업은 양측 모두에게 경제적 손실을 초래하며, 노사 신뢰 관계를 훼손할 수 있습니다. 예방적 노사관계 관리와 효과적인 의사소통이 분쟁 예방의 핵심입니다.' : 'A strike should be a last resort. Strikes cause economic losses for both sides and can damage labor-management trust. Preventive labor relations management and effective communication are key to dispute prevention.'}</TipBox>
    </div>
  );
}

function ConditionsSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '근로 조건과 안전' : 'Working Conditions & Safety'}</h1>
        <p>{isKo ? '근로 조건 관리와 산업 안전·보건의 핵심 사항을 알아봅니다.' : 'Explore key aspects of working conditions management and occupational safety and health.'}</p>
      </div>
      <h2>{isKo ? '근로 시간 관리' : 'Working Hours Management'}</h2>
      <ul>
        <li><strong>{isKo ? '법정 근로 시간' : 'Statutory Working Hours'}</strong> - {isKo ? '주 40시간, 1일 8시간이 법정 기준이며, 연장근로는 주 12시간 이내입니다.' : 'The legal standard is 40 hours per week and 8 hours per day, with overtime limited to 12 hours per week.'}</li>
        <li><strong>{isKo ? '유연근무제' : 'Flexible Work Arrangements'}</strong> - {isKo ? '탄력적 근로시간제, 선택적 근로시간제, 재량 근로시간제, 재택근무 등이 있습니다.' : 'Includes flexible hours, selective working hours, discretionary working hours, and remote work.'}</li>
        <li><strong>{isKo ? '워라밸 (Work-Life Balance)' : 'Work-Life Balance'}</strong> - {isKo ? '주 52시간제 시행, 연차 사용 촉진, 가족돌봄휴가 등 일과 생활의 균형을 지원하는 제도가 확대되고 있습니다.' : 'Systems supporting work-life balance are expanding, including the 52-hour workweek, annual leave promotion, and family care leave.'}</li>
      </ul>
      <h2>{isKo ? '산업 안전 보건' : 'Occupational Safety & Health'}</h2>
      <p>{isKo ? '산업안전보건법은 사업주에게 안전하고 건강한 근무 환경을 제공할 의무를 부과합니다. 중대재해처벌법(2022년 시행)은 경영책임자의 안전 의무를 더욱 강화했습니다.' : 'The Occupational Safety and Health Act imposes an obligation on employers to provide a safe and healthy work environment. The Serious Accidents Punishment Act (effective 2022) further strengthened safety obligations of management.'}</p>
      <ul>
        <li><strong>{isKo ? '물리적 안전' : 'Physical Safety'}</strong> - {isKo ? '사고 예방, 위험성 평가, 안전 교육, 보호 장비 제공' : 'Accident prevention, risk assessment, safety training, protective equipment'}</li>
        <li><strong>{isKo ? '정신 건강' : 'Mental Health'}</strong> - {isKo ? '직장 내 괴롭힘 방지, 스트레스 관리, EAP(근로자 지원 프로그램)' : 'Workplace harassment prevention, stress management, Employee Assistance Program (EAP)'}</li>
      </ul>
      <TipBox type="important">{isKo ? '산업안전은 단순한 법적 의무가 아니라 경영 철학이어야 합니다. 안전한 근무 환경은 생산성 향상, 이직률 감소, 기업 이미지 개선으로 이어지며, 궁극적으로 기업의 지속가능성을 결정합니다.' : 'Occupational safety should not be just a legal obligation but a management philosophy. A safe work environment leads to improved productivity, reduced turnover, and enhanced corporate image, ultimately determining business sustainability.'}</TipBox>
    </div>
  );
}

function CooperationSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '노사 협력' : 'Labor-Management Cooperation'}</h1>
        <p>{isKo ? '갈등을 넘어 협력적 노사관계를 구축하는 전략을 알아봅니다.' : 'Explore strategies for building cooperative labor-management relations beyond conflict.'}</p>
      </div>
      <h2>{isKo ? '협력적 노사관계의 모델' : 'Models of Cooperative Relations'}</h2>
      <p>{isKo ? 'Freeman & Medoff(1984)는 "노조는 무엇을 하는가?"에서 노조의 두 가지 얼굴을 제시했습니다: 독점적 얼굴(임금을 인위적으로 올림)과 집단적 발언 얼굴(경영 효율성을 높임). 건설적 노사관계는 발언 기능을 강화하는 것입니다.' : 'Freeman & Medoff (1984) in "What Do Unions Do?" presented two faces of unions: the monopoly face (artificially raising wages) and the collective voice face (improving management efficiency). Constructive labor relations strengthen the voice function.'}</p>
      <h3>{isKo ? '노사 협력의 제도적 장치' : 'Institutional Mechanisms for Cooperation'}</h3>
      <ul>
        <li><strong>{isKo ? '노사협의회' : 'Labor-Management Council'}</strong> - {isKo ? '30인 이상 사업장에 의무 설치되며, 생산성 향상, 복지 개선, 고충 처리 등을 협의합니다.' : 'Mandatory for workplaces with 30+ employees, consulting on productivity improvement, welfare enhancement, grievance handling, etc.'}</li>
        <li><strong>{isKo ? '경영 참여 (Employee Participation)' : 'Employee Participation'}</strong> - {isKo ? '경영 정보 공유, 의사결정 참여, 이사회 근로자 대표(노동이사제) 등의 방법이 있습니다.' : 'Methods include management information sharing, decision-making participation, and worker representatives on boards (labor director system).'}</li>
        <li><strong>{isKo ? '파트너십 모델' : 'Partnership Model'}</strong> - {isKo ? '노사가 공동의 목표를 설정하고 함께 문제를 해결하는 협력적 관계입니다.' : 'A cooperative relationship where labor and management set shared goals and solve problems together.'}</li>
      </ul>
      <TipBox type="tip">{isKo ? 'Katz et al.(2017)에 따르면, 협력적 노사관계의 핵심은 상호 신뢰(Mutual Trust)입니다. 신뢰는 투명한 정보 공유, 약속 이행, 상대방의 이익에 대한 존중을 통해 구축됩니다. 이는 단기간에 형성되지 않으며, 지속적인 노력이 필요합니다.' : 'According to Katz et al. (2017), the key to cooperative labor-management relations is Mutual Trust. Trust is built through transparent information sharing, keeping promises, and respecting the other party\'s interests. This is not formed overnight and requires continuous effort.'}</TipBox>
    </div>
  );
}
