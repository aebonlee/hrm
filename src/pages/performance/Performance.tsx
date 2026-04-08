import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'concepts', icon: 'fa-bullseye', ko: '성과관리 개념', en: 'Performance Management Concepts' },
  { id: 'frameworks', icon: 'fa-diagram-project', ko: '성과관리 프레임워크', en: 'Performance Frameworks' },
  { id: 'methods', icon: 'fa-list-check', ko: '평가 방법', en: 'Appraisal Methods' },
  { id: 'errors', icon: 'fa-triangle-exclamation', ko: '평가 오류와 편향', en: 'Appraisal Errors & Biases' },
  { id: 'feedback', icon: 'fa-comment-dots', ko: '피드백과 면담', en: 'Feedback & Interviews' },
  { id: 'improvement', icon: 'fa-arrow-up-right-dots', ko: '성과 개선 전략', en: 'Performance Improvement' },
];

export default function Performance(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('concepts');
  const isKo = language === 'ko';
  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);

  const handlePrev = () => { if (currentIndex > 0) { setActiveSection(SECTIONS[currentIndex - 1].id); window.scrollTo({ top: 0, behavior: 'smooth' }); } };
  const handleNext = () => { if (currentIndex < SECTIONS.length - 1) { setActiveSection(SECTIONS[currentIndex + 1].id); window.scrollTo({ top: 0, behavior: 'smooth' }); } };

  return (
    <>
      <SEOHead title={isKo ? '성과 관리' : 'Performance Management'} description={isKo ? '성과관리 프레임워크, 평가 방법, 피드백 기법을 체계적으로 학습합니다.' : 'Systematically learn performance management frameworks, appraisal methods, and feedback techniques.'} />
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
            {activeSection === 'concepts' && <ConceptsSection isKo={isKo} />}
            {activeSection === 'frameworks' && <FrameworksSection isKo={isKo} />}
            {activeSection === 'methods' && <MethodsSection isKo={isKo} />}
            {activeSection === 'errors' && <ErrorsSection isKo={isKo} />}
            {activeSection === 'feedback' && <FeedbackSection isKo={isKo} />}
            {activeSection === 'improvement' && <ImprovementSection isKo={isKo} />}
            <div className="guide-references" style={{ marginTop: '48px', padding: '24px', background: 'var(--bg-light-gray)', borderRadius: '12px', fontSize: '14px', lineHeight: '1.8' }}>
              <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 700 }}>{isKo ? '참고문헌' : 'References'}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)' }}>
                <li>Aguinis, H. (2019). <em>Performance Management</em> (4th ed.). Chicago Business Press.</li>
                <li>DeNisi, A.S. & Murphy, K.R. (2017). Performance Appraisal and Performance Management: 100 Years of Progress? <em>Journal of Applied Psychology</em>, 102(3), 421-433.</li>
                <li>Kaplan, R.S. & Norton, D.P. (1996). <em>The Balanced Scorecard: Translating Strategy into Action</em>. Harvard Business School Press.</li>
                <li>Locke, E.A. & Latham, G.P. (1990). <em>A Theory of Goal Setting & Task Performance</em>. Prentice-Hall.</li>
                <li>Locke, E.A. & Latham, G.P. (2002). Building a Practically Useful Theory of Goal Setting and Task Motivation. <em>American Psychologist</em>, 57(9), 705-717.</li>
                <li>London, M. (2003). <em>Job Feedback: Giving, Seeking, and Using Feedback for Performance Improvement</em>. Lawrence Erlbaum.</li>
                <li>Murphy, K.R. & Cleveland, J.N. (1995). <em>Understanding Performance Appraisal</em>. Sage.</li>
                <li>Pulakos, E.D. (2009). <em>Performance Management: A New Approach for Driving Business Results</em>. Wiley-Blackwell.</li>
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

function ConceptsSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '성과관리 개념' : 'Performance Management Concepts'}</h1>
        <p>{isKo ? '성과관리의 정의, 목적, 성과 평가와의 차이를 이해합니다.' : 'Understand the definition, purpose of performance management, and how it differs from performance appraisal.'}</p>
      </div>
      <h2>{isKo ? '성과관리 vs 성과평가' : 'Performance Management vs Performance Appraisal'}</h2>
      <p>{isKo ? 'Aguinis(2019)에 따르면, 성과관리(Performance Management)는 개인과 팀의 성과를 조직의 전략적 목표와 연계하여 지속적으로 관리하는 통합적 프로세스입니다. 반면, 성과평가(Performance Appraisal)는 일정 기간의 성과를 측정하고 등급을 부여하는 단편적 활동입니다.' : 'According to Aguinis (2019), Performance Management is an integrated process that continuously manages individual and team performance in alignment with organizational strategic goals. In contrast, Performance Appraisal is a discrete activity that measures and rates performance over a specific period.'}</p>
      <ul>
        <li><strong>{isKo ? '성과관리' : 'Performance Management'}</strong> - {isKo ? '지속적, 미래 지향적, 개발 초점, 전략 연계' : 'Continuous, future-oriented, development-focused, strategy-aligned'}</li>
        <li><strong>{isKo ? '성과평가' : 'Performance Appraisal'}</strong> - {isKo ? '주기적, 과거 회고적, 판단 초점, 보상 연계' : 'Periodic, retrospective, judgment-focused, compensation-linked'}</li>
      </ul>
      <h2>{isKo ? '성과관리의 프로세스' : 'The Performance Management Process'}</h2>
      <p>{isKo ? 'DeNisi & Murphy(2017)의 100년간의 연구 리뷰에 따르면, 효과적인 성과관리 시스템은 계획-실행-평가-피드백의 순환 과정으로 운영됩니다.' : 'According to DeNisi & Murphy\'s (2017) 100-year research review, effective performance management systems operate through a cycle of planning-execution-evaluation-feedback.'}</p>
      <ol>
        <li><strong>{isKo ? '목표 설정' : 'Goal Setting'}</strong> - {isKo ? '조직 목표와 연계된 개인 목표를 합의합니다.' : 'Agree on individual goals aligned with organizational objectives.'}</li>
        <li><strong>{isKo ? '중간 점검' : 'Mid-term Review'}</strong> - {isKo ? '정기적으로 진행 상황을 점검하고 코칭합니다.' : 'Regularly check progress and provide coaching.'}</li>
        <li><strong>{isKo ? '성과 평가' : 'Performance Evaluation'}</strong> - {isKo ? '사전에 합의된 기준으로 성과를 측정합니다.' : 'Measure performance against pre-agreed criteria.'}</li>
        <li><strong>{isKo ? '피드백과 개발' : 'Feedback & Development'}</strong> - {isKo ? '평가 결과를 공유하고 개발 계획을 수립합니다.' : 'Share evaluation results and establish development plans.'}</li>
      </ol>
      <TipBox type="important">{isKo ? '최근 많은 글로벌 기업들(Adobe, Deloitte, GE 등)이 연간 성과등급 부여를 폐지하고, 수시 피드백과 코칭 중심의 성과관리로 전환하고 있습니다. 이를 "Continuous Performance Management"라 합니다.' : 'Many global companies (Adobe, Deloitte, GE, etc.) have recently abolished annual performance ratings and shifted to continuous feedback and coaching-centered performance management, called "Continuous Performance Management."'}</TipBox>
    </div>
  );
}

function FrameworksSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '성과관리 프레임워크' : 'Performance Frameworks'}</h1>
        <p>{isKo ? '조직의 전략을 실행 가능한 성과 지표로 전환하는 주요 프레임워크를 학습합니다.' : 'Learn major frameworks for translating organizational strategy into actionable performance metrics.'}</p>
      </div>
      <h2>{isKo ? 'BSC (Balanced Scorecard)' : 'Balanced Scorecard (BSC)'}</h2>
      <p>{isKo ? 'Kaplan & Norton(1996)이 개발한 BSC는 재무적 관점에 편중되었던 성과 측정을 4가지 균형 잡힌 관점으로 확장했습니다.' : 'The BSC, developed by Kaplan & Norton (1996), expanded performance measurement from a financially-biased view to four balanced perspectives.'}</p>
      <ol>
        <li><strong>{isKo ? '재무적 관점 (Financial)' : 'Financial Perspective'}</strong> - {isKo ? '매출, 이익, ROI 등 재무 성과를 측정합니다.' : 'Measures financial performance such as revenue, profit, and ROI.'}</li>
        <li><strong>{isKo ? '고객 관점 (Customer)' : 'Customer Perspective'}</strong> - {isKo ? '고객 만족도, 시장 점유율, 고객 유지율을 측정합니다.' : 'Measures customer satisfaction, market share, and customer retention.'}</li>
        <li><strong>{isKo ? '내부 프로세스 관점 (Internal Process)' : 'Internal Process Perspective'}</strong> - {isKo ? '핵심 업무 프로세스의 효율성과 품질을 측정합니다.' : 'Measures the efficiency and quality of core business processes.'}</li>
        <li><strong>{isKo ? '학습과 성장 관점 (Learning & Growth)' : 'Learning & Growth Perspective'}</strong> - {isKo ? '인적자원 역량, 조직 역량, 혁신 능력을 측정합니다.' : 'Measures human resource capabilities, organizational capacity, and innovation.'}</li>
      </ol>
      <h2>{isKo ? 'MBO (Management by Objectives)' : 'MBO (Management by Objectives)'}</h2>
      <p>{isKo ? 'Peter Drucker가 제안한 MBO는 상위 목표를 하위 목표로 분해(Cascading)하여 전 구성원이 조직 목표에 정렬하는 방식입니다. 목표는 SMART(구체적, 측정 가능, 달성 가능, 관련성, 시한) 기준을 충족해야 합니다.' : 'MBO, proposed by Peter Drucker, cascades upper-level goals into lower-level goals so all members align with organizational objectives. Goals must meet SMART criteria (Specific, Measurable, Achievable, Relevant, Time-bound).'}</p>
      <h2>{isKo ? 'OKR (Objectives and Key Results)' : 'OKR (Objectives and Key Results)'}</h2>
      <p>{isKo ? 'Intel의 Andy Grove가 창안하고 Google이 채택하여 유명해진 OKR은 도전적 목표(Objectives)와 정량적 핵심 결과(Key Results)를 설정합니다. MBO보다 유연하고, 투명성과 정렬(Alignment)을 강조합니다.' : 'OKR, created by Intel\'s Andy Grove and popularized by Google, sets ambitious Objectives and quantitative Key Results. More flexible than MBO, it emphasizes transparency and alignment.'}</p>
      <TipBox type="tip">{isKo ? 'Locke & Latham(1990, 2002)의 목표 설정 이론에 따르면, 구체적이고 도전적인 목표가 모호하거나 쉬운 목표보다 높은 성과를 이끌어냅니다. 단, 목표에 대한 수용(Commitment)과 피드백이 전제되어야 합니다.' : 'According to Locke & Latham\'s (1990, 2002) goal-setting theory, specific and challenging goals lead to higher performance than vague or easy goals. However, goal commitment and feedback are prerequisites.'}</TipBox>
    </div>
  );
}

function MethodsSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '평가 방법' : 'Appraisal Methods'}</h1>
        <p>{isKo ? '다양한 성과 평가 방법의 특징과 활용법을 이해합니다.' : 'Understand the characteristics and applications of various performance appraisal methods.'}</p>
      </div>
      <h2>{isKo ? '절대 평가 방법' : 'Absolute Rating Methods'}</h2>
      <ul>
        <li><strong>{isKo ? '그래픽 평가 척도 (Graphic Rating Scale)' : 'Graphic Rating Scale'}</strong> - {isKo ? '가장 전통적인 방법으로, 역량별로 1~5점 등 척도로 평가합니다.' : 'The most traditional method, rating competencies on scales like 1-5.'}</li>
        <li><strong>{isKo ? 'BARS (행동기준 평가척도)' : 'BARS (Behaviorally Anchored Rating Scales)'}</strong> - {isKo ? '각 등급에 구체적인 행동 사례를 연결하여 평가의 객관성을 높입니다.' : 'Links specific behavioral examples to each rating level to increase objectivity.'}</li>
        <li><strong>{isKo ? 'BOS (행동관찰 척도)' : 'BOS (Behavioral Observation Scales)'}</strong> - {isKo ? '특정 행동의 빈도를 관찰하여 평가합니다.' : 'Evaluates by observing the frequency of specific behaviors.'}</li>
      </ul>
      <h2>{isKo ? '상대 평가 방법' : 'Relative Rating Methods'}</h2>
      <ul>
        <li><strong>{isKo ? '강제 배분법 (Forced Distribution)' : 'Forced Distribution'}</strong> - {isKo ? '미리 정해진 비율(예: 상위 20%, 중간 70%, 하위 10%)로 등급을 배분합니다. GE의 잭 웰치가 유명하게 만들었으나, 최근 많은 기업이 폐지하고 있습니다.' : 'Distributes ratings according to predetermined ratios (e.g., top 20%, middle 70%, bottom 10%). Made famous by GE\'s Jack Welch, but many companies have recently abandoned it.'}</li>
        <li><strong>{isKo ? '서열법 (Ranking)' : 'Ranking'}</strong> - {isKo ? '구성원을 성과 순서대로 서열화합니다.' : 'Ranks members in order of performance.'}</li>
      </ul>
      <h2>{isKo ? '360도 다면 평가' : '360-Degree Feedback'}</h2>
      <p>{isKo ? '상사, 동료, 부하, 고객, 자기 자신 등 다양한 평가자로부터 피드백을 수집하는 방법입니다. Murphy & Cleveland(1995)에 따르면, 평가의 다면성이 높을수록 공정성 인식이 향상됩니다.' : 'A method that collects feedback from multiple evaluators including supervisors, peers, subordinates, customers, and self. According to Murphy & Cleveland (1995), higher multidimensionality of evaluation improves fairness perception.'}</p>
      <TipBox type="warning">{isKo ? '어떤 평가 방법도 완벽하지 않습니다. 중요한 것은 조직의 문화, 직무 특성, 평가 목적에 맞는 방법을 선택하고, 평가자 교육과 프로세스 공정성을 확보하는 것입니다.' : 'No appraisal method is perfect. What matters is choosing the right method for the organization\'s culture, job characteristics, and evaluation purpose, while ensuring rater training and process fairness.'}</TipBox>
    </div>
  );
}

function ErrorsSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '평가 오류와 편향' : 'Appraisal Errors & Biases'}</h1>
        <p>{isKo ? '성과 평가에서 발생하는 주요 오류와 편향을 이해하고 예방합니다.' : 'Understand and prevent major errors and biases that occur in performance evaluation.'}</p>
      </div>
      <h2>{isKo ? '주요 평가 오류' : 'Major Appraisal Errors'}</h2>
      <p>{isKo ? 'Murphy & Cleveland(1995)는 평가 오류가 평가 시스템의 가장 큰 위협이라고 지적했습니다.' : 'Murphy & Cleveland (1995) noted that rating errors are the greatest threat to appraisal systems.'}</p>
      <ul>
        <li><strong>{isKo ? '후광 효과 (Halo Effect)' : 'Halo Effect'}</strong> - {isKo ? '한 가지 뛰어난 특성이 전체 평가에 긍정적 영향을 미칩니다.' : 'One outstanding characteristic positively influences the overall evaluation.'}</li>
        <li><strong>{isKo ? '뿔 효과 (Horn Effect)' : 'Horn Effect'}</strong> - {isKo ? '한 가지 부정적 특성이 전체 평가에 부정적 영향을 미칩니다.' : 'One negative characteristic negatively influences the overall evaluation.'}</li>
        <li><strong>{isKo ? '관대화 경향 (Leniency Bias)' : 'Leniency Bias'}</strong> - {isKo ? '평가자가 실제보다 높은 점수를 부여하는 경향입니다.' : 'The tendency for raters to give higher scores than warranted.'}</li>
        <li><strong>{isKo ? '엄격화 경향 (Severity Bias)' : 'Severity Bias'}</strong> - {isKo ? '평가자가 실제보다 낮은 점수를 부여하는 경향입니다.' : 'The tendency for raters to give lower scores than warranted.'}</li>
        <li><strong>{isKo ? '중심화 경향 (Central Tendency)' : 'Central Tendency'}</strong> - {isKo ? '극단적 평가를 피하고 중간 점수에 집중하는 경향입니다.' : 'The tendency to avoid extreme ratings and concentrate on middle scores.'}</li>
        <li><strong>{isKo ? '최신 효과 (Recency Effect)' : 'Recency Effect'}</strong> - {isKo ? '평가 직전의 성과가 전체 평가에 과도한 영향을 미칩니다.' : 'Recent performance disproportionately influences the overall evaluation.'}</li>
        <li><strong>{isKo ? '유사성 편향 (Similar-to-Me Effect)' : 'Similar-to-Me Effect'}</strong> - {isKo ? '자신과 유사한 사람에게 높은 점수를 부여하는 경향입니다.' : 'The tendency to give higher scores to people similar to oneself.'}</li>
      </ul>
      <h3>{isKo ? '평가 오류 방지 전략' : 'Strategies to Prevent Rating Errors'}</h3>
      <ol>
        <li><strong>{isKo ? '평가자 교육 (Rater Training)' : 'Rater Training'}</strong> - {isKo ? '평가 오류에 대한 인식을 높이고 정확한 평가 기법을 교육합니다.' : 'Raise awareness of rating errors and train accurate evaluation techniques.'}</li>
        <li><strong>{isKo ? '행동 기반 평가' : 'Behavior-Based Evaluation'}</strong> - {isKo ? '인상이 아닌 구체적 행동과 결과를 기준으로 평가합니다.' : 'Evaluate based on specific behaviors and results, not impressions.'}</li>
        <li><strong>{isKo ? '다면 평가' : 'Multi-Rater Evaluation'}</strong> - {isKo ? '복수의 평가자를 통해 개인적 편향을 상쇄합니다.' : 'Counter individual biases through multiple evaluators.'}</li>
        <li><strong>{isKo ? '평가 기록 유지' : 'Documentation'}</strong> - {isKo ? '평가 기간 동안의 성과 기록을 지속적으로 문서화합니다.' : 'Continuously document performance records throughout the evaluation period.'}</li>
      </ol>
      <TipBox type="important">{isKo ? '평가의 공정성은 절차적 공정성(Procedural Justice)과 분배적 공정성(Distributive Justice) 모두를 포함합니다. 평가 결과뿐 아니라 평가 과정의 투명성과 일관성이 구성원의 수용도를 결정합니다.' : 'Fairness in evaluation includes both Procedural Justice and Distributive Justice. Not just the evaluation results, but the transparency and consistency of the evaluation process determine employee acceptance.'}</TipBox>
    </div>
  );
}

function FeedbackSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '피드백과 면담' : 'Feedback & Interviews'}</h1>
        <p>{isKo ? '효과적인 성과 피드백 제공과 면담 기술을 학습합니다.' : 'Learn effective performance feedback delivery and interview skills.'}</p>
      </div>
      <h2>{isKo ? '효과적인 피드백의 원칙' : 'Principles of Effective Feedback'}</h2>
      <p>{isKo ? 'London(2003)에 따르면, 피드백은 성과관리의 핵심 요소이며, 그 효과는 전달 방식에 크게 좌우됩니다.' : 'According to London (2003), feedback is a core element of performance management, and its effectiveness greatly depends on how it is delivered.'}</p>
      <ul>
        <li><strong>{isKo ? '구체적 (Specific)' : 'Specific'}</strong> - {isKo ? '"잘했어요"보다 "이번 프레젠테이션에서 데이터 분석 부분이 설득력 있었습니다"와 같이 구체적으로 표현합니다.' : 'Rather than "Good job," be specific like "The data analysis section in your presentation was convincing."'}</li>
        <li><strong>{isKo ? '적시적 (Timely)' : 'Timely'}</strong> - {isKo ? '행동 발생 후 가능한 빨리 피드백을 제공합니다.' : 'Provide feedback as soon as possible after the behavior occurs.'}</li>
        <li><strong>{isKo ? '행동 기반 (Behavior-focused)' : 'Behavior-focused'}</strong> - {isKo ? '인격이 아닌 관찰 가능한 행동에 초점을 맞춥니다.' : 'Focus on observable behaviors rather than personality.'}</li>
        <li><strong>{isKo ? '균형적 (Balanced)' : 'Balanced'}</strong> - {isKo ? '강점과 개선 사항을 모두 포함합니다.' : 'Include both strengths and areas for improvement.'}</li>
      </ul>
      <h2>{isKo ? '성과 면담의 구조' : 'Structure of Performance Interviews'}</h2>
      <ol>
        <li><strong>{isKo ? '사전 준비' : 'Preparation'}</strong> - {isKo ? '성과 데이터를 검토하고 면담 의제를 준비합니다.' : 'Review performance data and prepare the meeting agenda.'}</li>
        <li><strong>{isKo ? '분위기 조성' : 'Setting the Tone'}</strong> - {isKo ? '편안한 분위기를 만들고 면담 목적을 공유합니다.' : 'Create a comfortable atmosphere and share the interview purpose.'}</li>
        <li><strong>{isKo ? '자기 평가 공유' : 'Self-Assessment Sharing'}</strong> - {isKo ? '먼저 피평가자의 자기 평가를 경청합니다.' : 'First listen to the employee\'s self-assessment.'}</li>
        <li><strong>{isKo ? '피드백 제공' : 'Delivering Feedback'}</strong> - {isKo ? '구체적 사례와 함께 강점과 개선점을 전달합니다.' : 'Communicate strengths and areas for improvement with specific examples.'}</li>
        <li><strong>{isKo ? '개발 계획 수립' : 'Development Planning'}</strong> - {isKo ? '향후 성장을 위한 구체적 계획을 합의합니다.' : 'Agree on specific plans for future growth.'}</li>
      </ol>
      <TipBox type="tip">{isKo ? 'SBI(Situation-Behavior-Impact) 모델은 피드백의 효과적인 프레임워크입니다. "어떤 상황에서(S), 당신이 이런 행동을 했고(B), 그 결과 이런 영향이 있었습니다(I)"의 구조로 전달하면 피드백이 명확하고 수용 가능하게 됩니다.' : 'The SBI (Situation-Behavior-Impact) model is an effective feedback framework. Delivering feedback in the structure of "In this situation (S), you did this behavior (B), and it had this impact (I)" makes feedback clear and acceptable.'}</TipBox>
    </div>
  );
}

function ImprovementSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '성과 개선 전략' : 'Performance Improvement'}</h1>
        <p>{isKo ? '저성과자 관리와 전반적인 성과 향상 전략을 알아봅니다.' : 'Explore strategies for managing underperformers and overall performance improvement.'}</p>
      </div>
      <h2>{isKo ? 'PIP (Performance Improvement Plan)' : 'Performance Improvement Plan (PIP)'}</h2>
      <p>{isKo ? 'Pulakos(2009)에 따르면, PIP는 저성과자의 성과를 기대 수준으로 끌어올리기 위한 구조화된 프로세스입니다.' : 'According to Pulakos (2009), PIP is a structured process for raising underperformer\'s performance to expected levels.'}</p>
      <ol>
        <li><strong>{isKo ? '성과 갭 진단' : 'Performance Gap Diagnosis'}</strong> - {isKo ? '현재 성과와 기대 성과 간의 구체적 차이를 파악합니다.' : 'Identify specific differences between current and expected performance.'}</li>
        <li><strong>{isKo ? '원인 분석' : 'Root Cause Analysis'}</strong> - {isKo ? '역량 부족인지, 동기 부족인지, 환경적 제약인지를 구분합니다.' : 'Distinguish whether the cause is lack of capability, motivation, or environmental constraints.'}</li>
        <li><strong>{isKo ? '개선 계획 수립' : 'Improvement Plan Development'}</strong> - {isKo ? '구체적 목표, 지원 사항, 기간을 명시합니다.' : 'Specify concrete goals, support measures, and timelines.'}</li>
        <li><strong>{isKo ? '모니터링과 피드백' : 'Monitoring & Feedback'}</strong> - {isKo ? '정기적으로 진행 상황을 점검하고 피드백을 제공합니다.' : 'Regularly check progress and provide feedback.'}</li>
      </ol>
      <h2>{isKo ? '성과 문화 구축' : 'Building a Performance Culture'}</h2>
      <ul>
        <li><strong>{isKo ? '성장 마인드셋 (Growth Mindset)' : 'Growth Mindset'}</strong> - {isKo ? 'Carol Dweck의 연구에 따르면, 능력은 노력으로 개발될 수 있다는 믿음이 성과를 향상시킵니다.' : 'According to Carol Dweck\'s research, the belief that abilities can be developed through effort improves performance.'}</li>
        <li><strong>{isKo ? '심리적 안전감 (Psychological Safety)' : 'Psychological Safety'}</strong> - {isKo ? 'Amy Edmondson의 연구에 따르면, 실패를 두려워하지 않는 환경이 혁신과 학습을 촉진합니다.' : 'According to Amy Edmondson\'s research, an environment where failure is not feared promotes innovation and learning.'}</li>
        <li><strong>{isKo ? '인정과 보상 (Recognition)' : 'Recognition & Rewards'}</strong> - {isKo ? '우수 성과를 즉시 인정하고 보상하는 문화가 지속적 성과를 촉진합니다.' : 'A culture of immediately recognizing and rewarding excellent performance promotes sustained performance.'}</li>
      </ul>
      <TipBox type="warning">{isKo ? 'PIP를 "퇴직 절차"로 악용하는 조직이 있습니다. PIP의 본래 목적은 진정한 성과 개선이며, 공정하고 지원적인 프로세스로 운영되어야 합니다. 그렇지 않으면 조직 신뢰가 훼손되고 우수 인재까지 이탈할 수 있습니다.' : 'Some organizations misuse PIP as a "termination process." The original purpose of PIP is genuine performance improvement, and it should be operated as a fair and supportive process. Otherwise, organizational trust is damaged and even top talent may leave.'}</TipBox>
    </div>
  );
}
