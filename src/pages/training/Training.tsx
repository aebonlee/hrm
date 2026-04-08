import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'needs', icon: 'fa-magnifying-glass', ko: '교육 니즈 분석', en: 'Training Needs Analysis' },
  { id: 'design', icon: 'fa-pencil-ruler', ko: '교육 설계', en: 'Training Design' },
  { id: 'methods', icon: 'fa-chalkboard-user', ko: '교육 방법론', en: 'Training Methods' },
  { id: 'career', icon: 'fa-route', ko: '경력 개발', en: 'Career Development' },
  { id: 'ojt', icon: 'fa-person-chalkboard', ko: 'OJT와 코칭', en: 'OJT & Coaching' },
  { id: 'evaluation', icon: 'fa-chart-line', ko: '교육 평가', en: 'Training Evaluation' },
];

export default function Training(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('needs');
  const isKo = language === 'ko';
  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);

  const handlePrev = () => { if (currentIndex > 0) { setActiveSection(SECTIONS[currentIndex - 1].id); window.scrollTo({ top: 0, behavior: 'smooth' }); } };
  const handleNext = () => { if (currentIndex < SECTIONS.length - 1) { setActiveSection(SECTIONS[currentIndex + 1].id); window.scrollTo({ top: 0, behavior: 'smooth' }); } };

  return (
    <>
      <SEOHead title={isKo ? '교육과 개발' : 'Training & Development'} description={isKo ? '체계적인 교육 설계, 다양한 교육 방법론, 경력 개발 전략을 학습합니다.' : 'Learn systematic training design, various methodologies, and career development strategies.'} />
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
            {activeSection === 'needs' && <NeedsSection isKo={isKo} />}
            {activeSection === 'design' && <DesignSection isKo={isKo} />}
            {activeSection === 'methods' && <MethodsSection isKo={isKo} />}
            {activeSection === 'career' && <CareerSection isKo={isKo} />}
            {activeSection === 'ojt' && <OjtSection isKo={isKo} />}
            {activeSection === 'evaluation' && <EvaluationSection isKo={isKo} />}
            <div className="guide-references" style={{ marginTop: '48px', padding: '24px', background: 'var(--bg-light-gray)', borderRadius: '12px', fontSize: '14px', lineHeight: '1.8' }}>
              <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 700 }}>{isKo ? '참고문헌' : 'References'}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)' }}>
                <li>Goldstein, I.L. & Ford, J.K. (2002). <em>Training in Organizations</em> (4th ed.). Wadsworth.</li>
                <li>Kirkpatrick, D.L. & Kirkpatrick, J.D. (2006). <em>Evaluating Training Programs: The Four Levels</em> (3rd ed.). Berrett-Koehler.</li>
                <li>Knowles, M.S., Holton, E.F., & Swanson, R.A. (2015). <em>The Adult Learner</em> (8th ed.). Routledge.</li>
                <li>Kolb, D.A. (1984). <em>Experiential Learning: Experience as the Source of Learning and Development</em>. Prentice-Hall.</li>
                <li>Noe, R.A. (2020). <em>Employee Training & Development</em> (8th ed.). McGraw-Hill.</li>
                <li>Phillips, J.J. (2003). <em>Return on Investment in Training and Performance Improvement Programs</em>. Butterworth-Heinemann.</li>
                <li>Senge, P.M. (1990). <em>The Fifth Discipline: The Art and Practice of the Learning Organization</em>. Doubleday.</li>
                <li>Super, D.E. (1980). A Life-Span, Life-Space Approach to Career Development. <em>Journal of Vocational Behavior</em>, 16(3), 282-298.</li>
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

function NeedsSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '교육 니즈 분석' : 'Training Needs Analysis'}</h1>
        <p>{isKo ? '효과적인 교육 프로그램의 출발점인 체계적 니즈 분석 방법을 학습합니다.' : 'Learn systematic needs analysis methods, the starting point for effective training programs.'}</p>
      </div>
      <h2>{isKo ? '니즈 분석의 3단계 모델' : 'Three-Level Needs Analysis Model'}</h2>
      <p>{isKo ? 'Goldstein & Ford(2002)에 따르면, 교육 니즈 분석은 조직 분석, 과업 분석, 개인 분석의 3단계로 구성됩니다.' : 'According to Goldstein & Ford (2002), training needs analysis consists of three levels: organizational analysis, task analysis, and person analysis.'}</p>
      <ol>
        <li><strong>{isKo ? '조직 분석 (Organization Analysis)' : 'Organization Analysis'}</strong> - {isKo ? '조직의 전략, 목표, 자원, 문화를 분석하여 교육이 조직 목표 달성에 기여할 수 있는 영역을 파악합니다.' : 'Analyze organizational strategy, goals, resources, and culture to identify areas where training can contribute to goal achievement.'}</li>
        <li><strong>{isKo ? '과업 분석 (Task Analysis)' : 'Task Analysis'}</strong> - {isKo ? '각 직무에서 요구되는 지식, 기술, 능력(KSA: Knowledge, Skills, Abilities)을 분석합니다.' : 'Analyze the knowledge, skills, and abilities (KSAs) required for each job.'}</li>
        <li><strong>{isKo ? '개인 분석 (Person Analysis)' : 'Person Analysis'}</strong> - {isKo ? '개별 구성원의 현재 역량 수준과 요구 수준 간의 갭을 파악합니다.' : 'Identify the gap between individual employees\' current competency levels and required levels.'}</li>
      </ol>
      <TipBox type="important">{isKo ? '니즈 분석 없이 진행되는 교육은 시간과 비용의 낭비로 이어질 수 있습니다. "어떤 교육이 필요한가?"보다 "왜 이 교육이 필요한가?"를 먼저 질문해야 합니다.' : 'Training conducted without needs analysis can lead to wasted time and money. Ask "Why is this training needed?" before "What training is needed?"'}</TipBox>
    </div>
  );
}

function DesignSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '교육 설계' : 'Training Design'}</h1>
        <p>{isKo ? '학습 이론에 기반한 효과적인 교육 프로그램 설계 원칙을 알아봅니다.' : 'Explore principles for designing effective training programs based on learning theories.'}</p>
      </div>
      <h2>{isKo ? '성인 학습 이론' : 'Adult Learning Theory'}</h2>
      <p>{isKo ? 'Knowles(2015)의 성인 학습 이론(Andragogy)에 따르면, 성인 학습자는 아동과 다른 특성을 지닙니다.' : 'According to Knowles\' (2015) adult learning theory (Andragogy), adult learners have different characteristics from children.'}</p>
      <ul>
        <li><strong>{isKo ? '자기 주도성' : 'Self-directedness'}</strong> - {isKo ? '성인은 스스로 학습 과정을 통제하고 싶어합니다.' : 'Adults want to control their own learning process.'}</li>
        <li><strong>{isKo ? '경험 활용' : 'Experience-based'}</strong> - {isKo ? '풍부한 실무 경험을 학습 자원으로 활용합니다.' : 'Rich practical experience is used as a learning resource.'}</li>
        <li><strong>{isKo ? '실용성' : 'Practicality'}</strong> - {isKo ? '즉시 적용 가능한 실무 지식을 선호합니다.' : 'Prefer practical knowledge that can be immediately applied.'}</li>
        <li><strong>{isKo ? '문제 중심' : 'Problem-centered'}</strong> - {isKo ? '주제 중심보다 문제 해결 중심의 학습을 선호합니다.' : 'Prefer problem-solving centered learning over subject-centered learning.'}</li>
      </ul>
      <h2>{isKo ? 'Kolb의 경험학습 모델' : 'Kolb\'s Experiential Learning Model'}</h2>
      <p>{isKo ? 'Kolb(1984)는 학습이 4단계의 순환 과정을 통해 이루어진다고 제안했습니다: 구체적 경험(CE) → 반성적 관찰(RO) → 추상적 개념화(AC) → 능동적 실험(AE). 교육 설계 시 이 4단계를 모두 포함하면 학습 효과가 극대화됩니다.' : 'Kolb (1984) proposed that learning occurs through a four-stage cycle: Concrete Experience (CE) → Reflective Observation (RO) → Abstract Conceptualization (AC) → Active Experimentation (AE). Including all four stages in training design maximizes learning effectiveness.'}</p>
      <TipBox type="tip">{isKo ? 'ADDIE 모델(분석-설계-개발-실행-평가)은 교육 설계의 가장 기본적인 프레임워크입니다. 각 단계를 체계적으로 진행하되, 최근에는 애자일 방식으로 빠르게 프로토타입을 만들고 반복 개선하는 SAM(Successive Approximation Model) 모델도 주목받고 있습니다.' : 'The ADDIE model (Analyze-Design-Develop-Implement-Evaluate) is the most fundamental framework for training design. While proceeding systematically through each stage, the SAM (Successive Approximation Model), which rapidly creates prototypes and iteratively improves, has also gained attention.'}</TipBox>
    </div>
  );
}

function MethodsSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '교육 방법론' : 'Training Methods'}</h1>
        <p>{isKo ? '다양한 교육 방법의 특성과 적합한 활용 상황을 이해합니다.' : 'Understand the characteristics of various training methods and appropriate usage situations.'}</p>
      </div>
      <h2>{isKo ? '전통적 교육 방법' : 'Traditional Training Methods'}</h2>
      <ul>
        <li><strong>{isKo ? '강의식 교육 (Lecture)' : 'Lecture'}</strong> - {isKo ? '지식 전달에 효율적이나 참여도가 낮을 수 있습니다. 대규모 인원에 적합합니다.' : 'Efficient for knowledge transfer but may have low engagement. Suitable for large groups.'}</li>
        <li><strong>{isKo ? '사례 연구 (Case Study)' : 'Case Study'}</strong> - {isKo ? '실제 또는 가상의 사례를 분석하여 의사결정 능력을 개발합니다.' : 'Develops decision-making skills by analyzing real or hypothetical cases.'}</li>
        <li><strong>{isKo ? '역할 연기 (Role Play)' : 'Role Play'}</strong> - {isKo ? '특정 상황을 연기하며 대인관계 기술을 개발합니다.' : 'Develops interpersonal skills by acting out specific situations.'}</li>
        <li><strong>{isKo ? '시뮬레이션 (Simulation)' : 'Simulation'}</strong> - {isKo ? '실제 업무 환경을 모사하여 안전하게 기술을 연습합니다.' : 'Safely practice skills by simulating the actual work environment.'}</li>
        <li><strong>{isKo ? '액션 러닝 (Action Learning)' : 'Action Learning'}</strong> - {isKo ? 'Reg Revans가 창시한 방법으로, 실제 문제를 팀으로 해결하며 학습합니다.' : 'Created by Reg Revans, teams learn by solving real problems together.'}</li>
      </ul>
      <h2>{isKo ? '디지털 교육 방법' : 'Digital Training Methods'}</h2>
      <ul>
        <li><strong>{isKo ? 'e-러닝' : 'e-Learning'}</strong> - {isKo ? '온라인을 통한 자기 주도 학습으로, 시간과 장소의 제약이 없습니다.' : 'Self-directed learning online, free from time and location constraints.'}</li>
        <li><strong>{isKo ? '마이크로 러닝 (Microlearning)' : 'Microlearning'}</strong> - {isKo ? '5~10분의 짧은 콘텐츠로 학습합니다. 밀레니얼·Z세대에 효과적입니다.' : 'Learn through short 5-10 minute content. Effective for Millennials and Gen Z.'}</li>
        <li><strong>{isKo ? '블렌디드 러닝 (Blended Learning)' : 'Blended Learning'}</strong> - {isKo ? '온·오프라인을 결합하여 각 방식의 장점을 극대화합니다.' : 'Combines online and offline to maximize the advantages of each approach.'}</li>
        <li><strong>{isKo ? 'VR/AR 교육' : 'VR/AR Training'}</strong> - {isKo ? '가상·증강현실을 활용한 몰입형 교육입니다. 위험한 작업 환경의 안전 교육에 특히 효과적입니다.' : 'Immersive training using virtual/augmented reality. Especially effective for safety training in hazardous environments.'}</li>
      </ul>
      <TipBox type="tip">{isKo ? 'Noe(2020)에 따르면, "70-20-10" 법칙이 널리 적용됩니다: 학습의 70%는 업무 경험에서, 20%는 타인과의 관계(멘토링, 코칭)에서, 10%는 공식적 교육에서 이루어집니다.' : 'According to Noe (2020), the "70-20-10" rule is widely applied: 70% of learning comes from job experience, 20% from relationships (mentoring, coaching), and 10% from formal training.'}</TipBox>
    </div>
  );
}

function CareerSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '경력 개발' : 'Career Development'}</h1>
        <p>{isKo ? '조직과 개인의 성장을 동시에 달성하는 경력 개발 시스템을 알아봅니다.' : 'Explore career development systems that simultaneously achieve organizational and individual growth.'}</p>
      </div>
      <h2>{isKo ? '경력 개발의 이론적 기반' : 'Theoretical Foundations of Career Development'}</h2>
      <p>{isKo ? 'Super(1980)의 생애-공간 경력 발달 이론은 경력을 생애 전반에 걸친 발달 과정으로 봅니다. 그는 경력 발달을 성장기(~14세), 탐색기(15~24세), 확립기(25~44세), 유지기(45~64세), 쇠퇴기(65세~)의 5단계로 구분했습니다.' : 'Super\'s (1980) Life-Span, Life-Space career development theory views career as a developmental process across the entire lifespan. He divided career development into five stages: Growth (~14), Exploration (15-24), Establishment (25-44), Maintenance (45-64), and Decline (65+).'}</p>
      <h3>{isKo ? '조직의 경력 개발 제도' : 'Organizational Career Development Systems'}</h3>
      <ul>
        <li><strong>{isKo ? '경력 경로 (Career Path)' : 'Career Path'}</strong> - {isKo ? '조직 내 직무 이동의 경로를 체계적으로 설계합니다.' : 'Systematically design routes for job movement within the organization.'}</li>
        <li><strong>{isKo ? '후계자 계획 (Succession Planning)' : 'Succession Planning'}</strong> - {isKo ? '핵심 직위의 후계자를 사전에 발굴하고 육성합니다.' : 'Identify and develop successors for key positions in advance.'}</li>
        <li><strong>{isKo ? '경력 상담 (Career Counseling)' : 'Career Counseling'}</strong> - {isKo ? '전문 상담사나 HR 담당자가 직원의 경력 목표 설정과 계획을 지원합니다.' : 'Professional counselors or HR staff support employees in setting career goals and plans.'}</li>
        <li><strong>{isKo ? 'CDP (Career Development Program)' : 'CDP (Career Development Program)'}</strong> - {isKo ? '개인의 역량과 조직의 니즈를 매칭하는 종합적 프로그램입니다.' : 'A comprehensive program that matches individual competencies with organizational needs.'}</li>
      </ul>
      <TipBox type="warning">{isKo ? '현대의 경력 패러다임은 "조직 주도"에서 "개인 주도"로 전환되고 있습니다. 프로티언 경력(Protean Career)과 무경계 경력(Boundaryless Career) 개념에 따라 조직은 경력 소유권보다 경력 지원에 초점을 맞추어야 합니다.' : 'The modern career paradigm is shifting from "organization-driven" to "individual-driven." According to Protean Career and Boundaryless Career concepts, organizations should focus on career support rather than career ownership.'}</TipBox>
    </div>
  );
}

function OjtSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? 'OJT와 코칭' : 'OJT & Coaching'}</h1>
        <p>{isKo ? '현장 중심의 교육 방법인 OJT와 코칭의 효과적인 운영 방법을 학습합니다.' : 'Learn effective operation methods for OJT and coaching, workplace-centered training methods.'}</p>
      </div>
      <h2>{isKo ? 'OJT (On-the-Job Training)' : 'On-the-Job Training (OJT)'}</h2>
      <p>{isKo ? 'OJT는 실제 업무 현장에서 직무를 수행하면서 학습하는 교육 방법입니다. Noe(2020)에 따르면, 기업 교육의 가장 큰 비중을 차지하며 실무 역량 개발에 가장 직접적인 방법입니다.' : 'OJT is a training method where employees learn while performing actual job tasks. According to Noe (2020), it accounts for the largest portion of corporate training and is the most direct method for developing practical competencies.'}</p>
      <h3>{isKo ? 'OJT의 4단계' : 'Four Steps of OJT'}</h3>
      <ol>
        <li><strong>{isKo ? '준비 (Prepare)' : 'Prepare'}</strong> - {isKo ? '학습자의 현재 수준을 파악하고 학습 목표를 설정합니다.' : 'Assess the learner\'s current level and set learning objectives.'}</li>
        <li><strong>{isKo ? '제시 (Present)' : 'Present'}</strong> - {isKo ? '숙련자가 작업을 시범으로 보여주며 핵심 포인트를 설명합니다.' : 'An expert demonstrates the work while explaining key points.'}</li>
        <li><strong>{isKo ? '실습 (Practice)' : 'Practice'}</strong> - {isKo ? '학습자가 직접 수행하며, 숙련자가 관찰하고 피드백합니다.' : 'The learner performs the task while the expert observes and provides feedback.'}</li>
        <li><strong>{isKo ? '확인 (Follow-up)' : 'Follow-up'}</strong> - {isKo ? '학습 성과를 점검하고 추가 지원 여부를 결정합니다.' : 'Check learning outcomes and determine the need for additional support.'}</li>
      </ol>
      <h2>{isKo ? '코칭 (Coaching)' : 'Coaching'}</h2>
      <p>{isKo ? '코칭은 관리자나 전문 코치가 개인의 성과 향상과 성장을 지원하는 대화 기반의 개발 방법입니다. OJT가 기술 전수에 초점을 맞춘다면, 코칭은 자기 인식과 문제 해결 능력 향상에 중점을 둡니다.' : 'Coaching is a dialogue-based development method where a manager or professional coach supports individual performance improvement and growth. While OJT focuses on skill transfer, coaching emphasizes self-awareness and problem-solving capability improvement.'}</p>
      <h3>{isKo ? 'GROW 모델' : 'GROW Model'}</h3>
      <ul>
        <li><strong>Goal ({isKo ? '목표' : 'Goal'})</strong> - {isKo ? '달성하고자 하는 목표를 명확히 합니다.' : 'Clarify the goal to be achieved.'}</li>
        <li><strong>Reality ({isKo ? '현실' : 'Reality'})</strong> - {isKo ? '현재 상황과 장애 요인을 파악합니다.' : 'Identify the current situation and obstacles.'}</li>
        <li><strong>Options ({isKo ? '대안' : 'Options'})</strong> - {isKo ? '가능한 해결 방안을 탐색합니다.' : 'Explore possible solutions.'}</li>
        <li><strong>Will ({isKo ? '의지' : 'Will'})</strong> - {isKo ? '구체적 실행 계획과 의지를 확인합니다.' : 'Confirm specific action plans and commitment.'}</li>
      </ul>
      <TipBox type="tip">{isKo ? '멘토링과 코칭은 다릅니다. 멘토링은 경험 많은 선배가 조언과 지식을 공유하는 것이고, 코칭은 질문과 경청을 통해 피코치 스스로 답을 찾도록 돕는 것입니다. 두 방법 모두 인재 개발에 효과적이지만, 목적에 따라 적절히 활용해야 합니다.' : 'Mentoring and coaching are different. Mentoring involves an experienced senior sharing advice and knowledge, while coaching helps the coachee find answers through questions and listening. Both are effective for talent development, but should be used appropriately based on the purpose.'}</TipBox>
    </div>
  );
}

function EvaluationSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '교육 평가' : 'Training Evaluation'}</h1>
        <p>{isKo ? '교육 프로그램의 효과를 체계적으로 측정하고 개선하는 방법을 학습합니다.' : 'Learn how to systematically measure and improve the effectiveness of training programs.'}</p>
      </div>
      <h2>{isKo ? 'Kirkpatrick의 4단계 평가 모델' : 'Kirkpatrick\'s Four-Level Evaluation Model'}</h2>
      <p>{isKo ? 'Kirkpatrick(2006)의 4단계 평가 모델은 교육 평가의 가장 널리 사용되는 프레임워크입니다.' : 'Kirkpatrick\'s (2006) four-level evaluation model is the most widely used framework for training evaluation.'}</p>
      <ol>
        <li><strong>Level 1: {isKo ? '반응 (Reaction)' : 'Reaction'}</strong> - {isKo ? '학습자가 교육에 대해 어떻게 느꼈는가? 만족도 조사, 피드백 양식으로 측정합니다.' : 'How did learners feel about the training? Measured through satisfaction surveys and feedback forms.'}</li>
        <li><strong>Level 2: {isKo ? '학습 (Learning)' : 'Learning'}</strong> - {isKo ? '학습자가 무엇을 배웠는가? 사전-사후 테스트, 기술 평가로 측정합니다.' : 'What did learners learn? Measured through pre-post tests and skill assessments.'}</li>
        <li><strong>Level 3: {isKo ? '행동 (Behavior)' : 'Behavior'}</strong> - {isKo ? '학습한 내용을 업무에 적용하는가? 상사 관찰, 360도 피드백으로 측정합니다.' : 'Are learners applying what they learned? Measured through supervisor observation and 360-degree feedback.'}</li>
        <li><strong>Level 4: {isKo ? '결과 (Results)' : 'Results'}</strong> - {isKo ? '교육이 조직 성과에 미친 영향은? 생산성, 품질, 이직률 등 비즈니스 지표로 측정합니다.' : 'What impact did training have on organizational performance? Measured through business metrics like productivity, quality, and turnover rates.'}</li>
      </ol>
      <h2>{isKo ? 'Phillips의 ROI 모델 (5단계)' : 'Phillips\' ROI Model (Level 5)'}</h2>
      <p>{isKo ? 'Phillips(2003)는 Kirkpatrick 모델에 5단계를 추가했습니다: 교육 투자 수익률(ROI)을 계산하여 교육의 경제적 가치를 증명합니다. ROI = (교육으로 인한 이익 - 교육 비용) / 교육 비용 × 100%' : 'Phillips (2003) added a fifth level to Kirkpatrick\'s model: calculating the Return on Investment (ROI) of training to demonstrate its economic value. ROI = (Benefits from training - Training costs) / Training costs × 100%'}</p>
      <TipBox type="warning">{isKo ? '대부분의 기업은 Level 1(만족도)까지만 평가하고 Level 3, 4로 갈수록 평가율이 급격히 떨어집니다. 교육의 진정한 가치를 입증하기 위해서는 최소 Level 3까지의 평가가 필요하며, 이를 위해 교육 설계 단계부터 평가 계획을 수립해야 합니다.' : 'Most companies only evaluate up to Level 1 (satisfaction), and the evaluation rate drops sharply at Levels 3 and 4. To demonstrate the true value of training, at least Level 3 evaluation is needed, which requires establishing an evaluation plan from the training design stage.'}</TipBox>
    </div>
  );
}
