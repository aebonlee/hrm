import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'understanding', icon: 'fa-building', ko: '조직문화의 이해', en: 'Understanding Org Culture' },
  { id: 'types', icon: 'fa-layer-group', ko: '조직문화 유형', en: 'Culture Types' },
  { id: 'diagnosis', icon: 'fa-stethoscope', ko: '조직문화 진단', en: 'Culture Diagnosis' },
  { id: 'change', icon: 'fa-arrows-rotate', ko: '조직문화 변혁', en: 'Culture Change' },
  { id: 'leadership', icon: 'fa-crown', ko: '리더십', en: 'Leadership' },
  { id: 'team', icon: 'fa-users', ko: '팀 빌딩과 협업', en: 'Team Building & Collaboration' },
];

export default function OrgCulture(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('understanding');
  const isKo = language === 'ko';
  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);

  const handlePrev = () => { if (currentIndex > 0) { setActiveSection(SECTIONS[currentIndex - 1].id); window.scrollTo({ top: 0, behavior: 'smooth' }); } };
  const handleNext = () => { if (currentIndex < SECTIONS.length - 1) { setActiveSection(SECTIONS[currentIndex + 1].id); window.scrollTo({ top: 0, behavior: 'smooth' }); } };

  return (
    <>
      <SEOHead title={isKo ? '조직문화와 리더십' : 'Organizational Culture & Leadership'} description={isKo ? '조직문화의 유형, 진단, 변혁 전략과 리더십 이론을 학습합니다.' : 'Learn culture types, diagnosis, change strategies, and leadership theories.'} />
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
            {activeSection === 'understanding' && <UnderstandingSection isKo={isKo} />}
            {activeSection === 'types' && <TypesSection isKo={isKo} />}
            {activeSection === 'diagnosis' && <DiagnosisSection isKo={isKo} />}
            {activeSection === 'change' && <ChangeSection isKo={isKo} />}
            {activeSection === 'leadership' && <LeadershipSection isKo={isKo} />}
            {activeSection === 'team' && <TeamSection isKo={isKo} />}
            <div className="guide-references" style={{ marginTop: '48px', padding: '24px', background: 'var(--bg-light-gray)', borderRadius: '12px', fontSize: '14px', lineHeight: '1.8' }}>
              <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 700 }}>{isKo ? '참고문헌' : 'References'}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)' }}>
                <li>Bass, B.M. & Riggio, R.E. (2006). <em>Transformational Leadership</em> (2nd ed.). Lawrence Erlbaum.</li>
                <li>Cameron, K.S. & Quinn, R.E. (2011). <em>Diagnosing and Changing Organizational Culture</em> (3rd ed.). Jossey-Bass.</li>
                <li>Edmondson, A.C. (2019). <em>The Fearless Organization: Creating Psychological Safety in the Workplace</em>. Wiley.</li>
                <li>Greenleaf, R.K. (1977). <em>Servant Leadership</em>. Paulist Press.</li>
                <li>Hofstede, G. (2001). <em>Culture's Consequences</em> (2nd ed.). Sage.</li>
                <li>Kotter, J.P. (1996). <em>Leading Change</em>. Harvard Business School Press.</li>
                <li>Lencioni, P. (2002). <em>The Five Dysfunctions of a Team</em>. Jossey-Bass.</li>
                <li>Schein, E.H. (2010). <em>Organizational Culture and Leadership</em> (4th ed.). Jossey-Bass.</li>
                <li>Tuckman, B.W. (1965). Developmental Sequence in Small Groups. <em>Psychological Bulletin</em>, 63(6), 384-399.</li>
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

function UnderstandingSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '조직문화의 이해' : 'Understanding Organizational Culture'}</h1>
        <p>{isKo ? '조직문화의 개념, 구성 요소, 중요성을 학습합니다.' : 'Learn the concept, components, and importance of organizational culture.'}</p>
      </div>
      <h2>{isKo ? '조직문화란?' : 'What is Organizational Culture?'}</h2>
      <p>{isKo ? 'Schein(2010)은 조직문화를 "조직이 외부 적응과 내부 통합의 문제를 해결하는 과정에서 학습한 공유된 기본 가정의 패턴"이라고 정의했습니다. 이는 조직의 "우리는 이렇게 일한다"를 결정짓는 보이지 않는 힘입니다.' : 'Schein (2010) defined organizational culture as "a pattern of shared basic assumptions learned by a group as it solved its problems of external adaptation and internal integration." It is the invisible force that determines "how we do things here."'}</p>
      <h3>{isKo ? 'Schein의 문화 3단계 모델' : 'Schein\'s Three Levels of Culture'}</h3>
      <ol>
        <li><strong>{isKo ? '인공물 (Artifacts)' : 'Artifacts'}</strong> - {isKo ? '눈에 보이는 조직 구조, 사무실 환경, 복장 규정, 의식, 언어 등입니다. 관찰은 쉽지만 의미 해석은 어렵습니다.' : 'Visible organizational structures, office environment, dress code, ceremonies, language, etc. Easy to observe but difficult to interpret.'}</li>
        <li><strong>{isKo ? '표방하는 가치 (Espoused Values)' : 'Espoused Values'}</strong> - {isKo ? '조직이 명시적으로 선언하는 전략, 목표, 철학입니다. 미션문, 비전, 핵심가치 등이 여기에 해당합니다.' : 'Explicitly stated strategies, goals, and philosophies. Mission statements, vision, and core values belong here.'}</li>
        <li><strong>{isKo ? '기본 가정 (Basic Assumptions)' : 'Basic Assumptions'}</strong> - {isKo ? '무의식적으로 공유되는 믿음과 인식입니다. 문화의 가장 깊은 층으로, 변화시키기 가장 어렵습니다.' : 'Unconsciously shared beliefs and perceptions. The deepest layer of culture and most difficult to change.'}</li>
      </ol>
      <TipBox type="important">{isKo ? 'Schein(2010)은 "문화는 리더십의 산물이며, 동시에 리더십은 문화에 의해 형성된다"고 강조했습니다. 조직문화를 이해하고 변화시키는 것은 리더의 가장 중요한 역할 중 하나입니다.' : 'Schein (2010) emphasized that "culture is the product of leadership, and at the same time, leadership is shaped by culture." Understanding and changing organizational culture is one of the most important roles of a leader.'}</TipBox>
    </div>
  );
}

function TypesSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '조직문화 유형' : 'Culture Types'}</h1>
        <p>{isKo ? '다양한 조직문화 유형 분류 모델을 이해합니다.' : 'Understand various organizational culture type classification models.'}</p>
      </div>
      <h2>{isKo ? '경쟁가치 프레임워크 (CVF)' : 'Competing Values Framework (CVF)'}</h2>
      <p>{isKo ? 'Cameron & Quinn(2011)의 경쟁가치 프레임워크는 조직문화를 유연성-통제와 내부-외부의 두 축으로 4가지 유형으로 분류합니다.' : 'Cameron & Quinn\'s (2011) Competing Values Framework classifies organizational culture into four types along two axes: flexibility-control and internal-external.'}</p>
      <ol>
        <li><strong>{isKo ? '협력 문화 (Clan Culture)' : 'Clan Culture'}</strong> - {isKo ? '유연성 + 내부 지향. 가족적 분위기, 참여, 팀워크, 멘토링을 강조합니다. 구성원의 몰입과 사기가 높습니다.' : 'Flexibility + Internal focus. Emphasizes family-like atmosphere, participation, teamwork, and mentoring. High employee engagement and morale.'}</li>
        <li><strong>{isKo ? '혁신 문화 (Adhocracy Culture)' : 'Adhocracy Culture'}</strong> - {isKo ? '유연성 + 외부 지향. 혁신, 창의성, 위험 감수, 기업가 정신을 강조합니다. 스타트업에서 많이 보입니다.' : 'Flexibility + External focus. Emphasizes innovation, creativity, risk-taking, and entrepreneurship. Common in startups.'}</li>
        <li><strong>{isKo ? '시장 문화 (Market Culture)' : 'Market Culture'}</strong> - {isKo ? '통제 + 외부 지향. 경쟁, 성과, 목표 달성, 시장 점유율을 강조합니다.' : 'Control + External focus. Emphasizes competition, results, goal achievement, and market share.'}</li>
        <li><strong>{isKo ? '위계 문화 (Hierarchy Culture)' : 'Hierarchy Culture'}</strong> - {isKo ? '통제 + 내부 지향. 규칙, 절차, 안정성, 효율성을 강조합니다. 정부 기관, 대기업에서 흔합니다.' : 'Control + Internal focus. Emphasizes rules, procedures, stability, and efficiency. Common in government agencies and large corporations.'}</li>
      </ol>
      <h2>{isKo ? 'Hofstede의 문화 차원 이론' : 'Hofstede\'s Cultural Dimensions'}</h2>
      <p>{isKo ? 'Hofstede(2001)는 국가 문화가 조직 문화에 미치는 영향을 연구하여 6가지 문화 차원을 제시했습니다: 권력 거리, 개인주의-집단주의, 남성성-여성성, 불확실성 회피, 장기-단기 지향, 자유-자제. 한국은 높은 권력 거리, 집단주의, 장기 지향성을 보입니다.' : 'Hofstede (2001) studied the impact of national culture on organizational culture and identified six cultural dimensions: Power Distance, Individualism-Collectivism, Masculinity-Femininity, Uncertainty Avoidance, Long-term vs Short-term Orientation, and Indulgence-Restraint. Korea shows high power distance, collectivism, and long-term orientation.'}</p>
      <TipBox type="tip">{isKo ? '조직문화에는 "정답"이 없습니다. 중요한 것은 조직의 전략과 환경에 적합한 문화를 갖추는 것입니다. 혁신이 필요한 조직은 혁신 문화를, 안정적 운영이 핵심인 조직은 위계 문화가 적합할 수 있습니다.' : 'There is no "right answer" for organizational culture. What matters is having a culture that fits the organization\'s strategy and environment. An organization needing innovation may suit adhocracy culture, while one focused on stable operations may suit hierarchy culture.'}</TipBox>
    </div>
  );
}

function DiagnosisSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '조직문화 진단' : 'Culture Diagnosis'}</h1>
        <p>{isKo ? '조직문화의 현재 상태를 체계적으로 진단하는 방법을 알아봅니다.' : 'Learn systematic methods for diagnosing the current state of organizational culture.'}</p>
      </div>
      <h2>{isKo ? '정량적 진단 도구' : 'Quantitative Diagnosis Tools'}</h2>
      <ul>
        <li><strong>{isKo ? 'OCAI (Organizational Culture Assessment Instrument)' : 'OCAI'}</strong> - {isKo ? 'Cameron & Quinn(2011)이 개발한 도구로, 경쟁가치 프레임워크에 기반하여 현재 문화와 바람직한 문화를 동시에 측정합니다. 6개 영역(조직 특성, 리더십 스타일, 직원 관리, 조직 응집력, 전략적 강조점, 성공 기준)을 평가합니다.' : 'Developed by Cameron & Quinn (2011), based on the CVF, it simultaneously measures current and preferred culture across six dimensions (organizational characteristics, leadership style, employee management, organizational glue, strategic emphasis, and success criteria).'}</li>
        <li><strong>{isKo ? '직원 설문조사' : 'Employee Surveys'}</strong> - {isKo ? '몰입도 조사(Engagement Survey), 조직 분위기 조사(Climate Survey), 맥박 조사(Pulse Survey) 등이 있습니다.' : 'Includes Engagement Survey, Climate Survey, Pulse Survey, etc.'}</li>
      </ul>
      <h2>{isKo ? '정성적 진단 방법' : 'Qualitative Diagnosis Methods'}</h2>
      <ul>
        <li><strong>{isKo ? '심층 면접' : 'In-depth Interviews'}</strong> - {isKo ? '리더와 구성원의 인식을 심층적으로 탐구합니다.' : 'Deeply explore the perceptions of leaders and employees.'}</li>
        <li><strong>{isKo ? '참여 관찰' : 'Participant Observation'}</strong> - {isKo ? '회의, 의사결정 과정, 비공식 상호작용을 직접 관찰합니다.' : 'Directly observe meetings, decision-making processes, and informal interactions.'}</li>
        <li><strong>{isKo ? '문서 분석' : 'Document Analysis'}</strong> - {isKo ? '조직의 공식 문서, 이메일, 게시판 등을 분석합니다.' : 'Analyze organizational documents, emails, bulletin boards, etc.'}</li>
      </ul>
      <TipBox type="important">{isKo ? '문화 진단의 핵심은 "표방하는 가치"와 "실제 행동" 사이의 갭을 파악하는 것입니다. 벽에 걸린 미션문과 실제 의사결정이 일치하지 않는 경우가 많으며, 이 갭이 구성원의 냉소와 불신의 원인이 됩니다.' : 'The key to culture diagnosis is identifying the gap between "espoused values" and "actual behavior." The mission statement on the wall often doesn\'t match actual decision-making, and this gap causes employee cynicism and distrust.'}</TipBox>
    </div>
  );
}

function ChangeSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '조직문화 변혁' : 'Culture Change'}</h1>
        <p>{isKo ? '조직문화를 전략적으로 변화시키는 방법과 변화 관리 기법을 학습합니다.' : 'Learn methods for strategically changing organizational culture and change management techniques.'}</p>
      </div>
      <h2>{isKo ? 'Kotter의 8단계 변화 모델' : 'Kotter\'s 8-Step Change Model'}</h2>
      <p>{isKo ? 'Kotter(1996)는 성공적인 조직 변화를 위한 8단계 모델을 제시했습니다.' : 'Kotter (1996) proposed an 8-step model for successful organizational change.'}</p>
      <ol>
        <li><strong>{isKo ? '위기감 조성 (Create Urgency)' : 'Create Urgency'}</strong> - {isKo ? '변화의 필요성을 인식시킵니다.' : 'Create awareness of the need for change.'}</li>
        <li><strong>{isKo ? '변화 연합 구축 (Build Coalition)' : 'Build a Guiding Coalition'}</strong> - {isKo ? '변화를 주도할 핵심 인력을 모읍니다.' : 'Assemble key people to lead the change.'}</li>
        <li><strong>{isKo ? '비전과 전략 수립 (Create Vision)' : 'Create a Vision'}</strong> - {isKo ? '변화의 방향과 전략을 명확히 합니다.' : 'Clarify the direction and strategy of change.'}</li>
        <li><strong>{isKo ? '비전 소통 (Communicate Vision)' : 'Communicate the Vision'}</strong> - {isKo ? '모든 구성원에게 비전을 지속적으로 전달합니다.' : 'Continuously communicate the vision to all members.'}</li>
        <li><strong>{isKo ? '장애 요인 제거 (Remove Obstacles)' : 'Remove Obstacles'}</strong> - {isKo ? '변화를 방해하는 구조, 시스템, 사람을 제거합니다.' : 'Remove structures, systems, and people that hinder change.'}</li>
        <li><strong>{isKo ? '단기 성과 창출 (Create Short-term Wins)' : 'Create Short-term Wins'}</strong> - {isKo ? '가시적 성과를 빨리 만들어 모멘텀을 유지합니다.' : 'Quickly create visible wins to maintain momentum.'}</li>
        <li><strong>{isKo ? '성과 통합 (Consolidate Gains)' : 'Consolidate Gains'}</strong> - {isKo ? '초기 성과를 기반으로 더 큰 변화를 추진합니다.' : 'Build on early wins to drive bigger changes.'}</li>
        <li><strong>{isKo ? '문화에 정착 (Anchor in Culture)' : 'Anchor in Culture'}</strong> - {isKo ? '새로운 행동 방식을 조직 문화로 내재화합니다.' : 'Internalize new behaviors into organizational culture.'}</li>
      </ol>
      <TipBox type="warning">{isKo ? 'Kotter에 따르면 변화 노력의 70%가 실패합니다. 가장 흔한 실패 원인은 1단계(위기감 부족)와 8단계(문화 정착 실패)입니다. 변화는 시작하기 어렵고, 유지하기는 더 어렵습니다.' : 'According to Kotter, 70% of change efforts fail. The most common failure causes are Step 1 (insufficient urgency) and Step 8 (failure to anchor in culture). Change is difficult to start and even harder to sustain.'}</TipBox>
    </div>
  );
}

function LeadershipSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '리더십' : 'Leadership'}</h1>
        <p>{isKo ? '주요 리더십 이론과 현대 조직에 적합한 리더십 스타일을 학습합니다.' : 'Learn major leadership theories and leadership styles suitable for modern organizations.'}</p>
      </div>
      <h2>{isKo ? '리더십 이론의 발전' : 'Evolution of Leadership Theory'}</h2>
      <h3>{isKo ? '변혁적 리더십 (Transformational Leadership)' : 'Transformational Leadership'}</h3>
      <p>{isKo ? 'Bass & Riggio(2006)에 따르면, 변혁적 리더십은 4가지 구성 요소(4I)를 포함합니다.' : 'According to Bass & Riggio (2006), transformational leadership includes four components (4I\'s).'}</p>
      <ul>
        <li><strong>{isKo ? '이상적 영향 (Idealized Influence)' : 'Idealized Influence'}</strong> - {isKo ? '리더가 롤모델이 되어 구성원의 존경과 신뢰를 얻습니다.' : 'The leader serves as a role model, earning respect and trust from followers.'}</li>
        <li><strong>{isKo ? '영감적 동기부여 (Inspirational Motivation)' : 'Inspirational Motivation'}</strong> - {isKo ? '매력적인 비전을 제시하고 높은 기대를 전달합니다.' : 'Communicates an attractive vision and high expectations.'}</li>
        <li><strong>{isKo ? '지적 자극 (Intellectual Stimulation)' : 'Intellectual Stimulation'}</strong> - {isKo ? '기존 가정에 도전하고 창의적 사고를 장려합니다.' : 'Challenges existing assumptions and encourages creative thinking.'}</li>
        <li><strong>{isKo ? '개별적 배려 (Individualized Consideration)' : 'Individualized Consideration'}</strong> - {isKo ? '각 구성원의 니즈와 성장을 개별적으로 지원합니다.' : 'Individually supports each member\'s needs and growth.'}</li>
      </ul>
      <h3>{isKo ? '서번트 리더십 (Servant Leadership)' : 'Servant Leadership'}</h3>
      <p>{isKo ? 'Greenleaf(1977)이 제안한 서번트 리더십은 "리더는 먼저 섬기는 사람"이라는 철학에 기반합니다. 구성원의 성장과 웰빙을 최우선으로 하며, 이를 통해 조직 전체의 성과가 향상된다고 봅니다.' : 'Servant leadership, proposed by Greenleaf (1977), is based on the philosophy that "a leader is first a servant." It prioritizes employee growth and well-being, believing this improves overall organizational performance.'}</p>
      <h3>{isKo ? '진성 리더십 (Authentic Leadership)' : 'Authentic Leadership'}</h3>
      <p>{isKo ? '자기 인식, 관계 투명성, 균형 잡힌 정보 처리, 내재화된 도덕적 관점을 핵심으로 합니다. 리더의 진정성과 일관성이 구성원의 신뢰와 몰입을 이끌어냅니다.' : 'Core elements include self-awareness, relational transparency, balanced processing, and internalized moral perspective. A leader\'s authenticity and consistency drive employee trust and engagement.'}</p>
      <TipBox type="tip">{isKo ? '최근 연구에 따르면, 하나의 리더십 스타일이 모든 상황에 최적인 것은 아닙니다. 상황적 리더십(Situational Leadership)의 관점에서 구성원의 성숙도, 과업의 특성, 조직의 상황에 따라 리더십 스타일을 유연하게 조절하는 것이 효과적입니다.' : 'Recent research shows that no single leadership style is optimal for all situations. From a Situational Leadership perspective, flexibly adjusting leadership style based on follower maturity, task characteristics, and organizational context is most effective.'}</TipBox>
    </div>
  );
}

function TeamSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '팀 빌딩과 협업' : 'Team Building & Collaboration'}</h1>
        <p>{isKo ? '고성과 팀을 구축하고 효과적인 협업 문화를 만드는 방법을 학습합니다.' : 'Learn how to build high-performing teams and create an effective collaboration culture.'}</p>
      </div>
      <h2>{isKo ? 'Tuckman의 팀 발달 단계' : 'Tuckman\'s Stages of Team Development'}</h2>
      <p>{isKo ? 'Tuckman(1965)은 팀이 5단계를 거쳐 발달한다고 제안했습니다.' : 'Tuckman (1965) proposed that teams develop through five stages.'}</p>
      <ol>
        <li><strong>Forming ({isKo ? '형성기' : 'Forming'})</strong> - {isKo ? '팀원들이 모이는 초기 단계. 탐색적이고 예의 바르며, 역할이 불명확합니다.' : 'Initial stage where team members come together. Exploratory and polite, with unclear roles.'}</li>
        <li><strong>Storming ({isKo ? '격동기' : 'Storming'})</strong> - {isKo ? '의견 충돌과 갈등이 발생합니다. 많은 팀이 이 단계에서 실패합니다.' : 'Conflicts and disagreements arise. Many teams fail at this stage.'}</li>
        <li><strong>Norming ({isKo ? '규범기' : 'Norming'})</strong> - {isKo ? '합의와 규범이 형성되고, 협력이 시작됩니다.' : 'Agreements and norms are established, and cooperation begins.'}</li>
        <li><strong>Performing ({isKo ? '성과기' : 'Performing'})</strong> - {isKo ? '팀이 높은 성과를 내는 단계. 자율성과 상호 의존성이 높습니다.' : 'The team achieves high performance. High autonomy and interdependence.'}</li>
        <li><strong>Adjourning ({isKo ? '해산기' : 'Adjourning'})</strong> - {isKo ? '프로젝트 완료 후 팀이 해산하는 단계입니다.' : 'The team disbands after project completion.'}</li>
      </ol>
      <h2>{isKo ? '심리적 안전감과 팀 성과' : 'Psychological Safety & Team Performance'}</h2>
      <p>{isKo ? 'Edmondson(2019)의 연구에 따르면, 심리적 안전감(Psychological Safety)은 고성과 팀의 가장 중요한 특성입니다. 구글의 "프로젝트 아리스토텔레스"도 심리적 안전감이 팀 효과성의 가장 큰 예측 변수임을 확인했습니다.' : 'According to Edmondson (2019), Psychological Safety is the most important characteristic of high-performing teams. Google\'s "Project Aristotle" also confirmed that psychological safety is the strongest predictor of team effectiveness.'}</p>
      <h2>{isKo ? 'Lencioni의 팀 기능 장애 5단계' : 'Lencioni\'s Five Dysfunctions of a Team'}</h2>
      <p>{isKo ? 'Lencioni(2002)는 팀의 기능 장애를 피라미드 모델로 제시했습니다.' : 'Lencioni (2002) presented team dysfunctions in a pyramid model.'}</p>
      <ol>
        <li><strong>{isKo ? '신뢰 부족' : 'Absence of Trust'}</strong> - {isKo ? '취약함을 드러내지 못하는 것이 근본 원인입니다.' : 'The root cause is inability to show vulnerability.'}</li>
        <li><strong>{isKo ? '갈등 회피' : 'Fear of Conflict'}</strong> - {isKo ? '건설적 토론을 피하여 표면적 화합만 유지합니다.' : 'Avoiding constructive debate leads to only superficial harmony.'}</li>
        <li><strong>{isKo ? '몰입 부족' : 'Lack of Commitment'}</strong> - {isKo ? '의사결정에 충분한 참여가 없어 헌신이 부족합니다.' : 'Insufficient participation in decisions leads to lack of commitment.'}</li>
        <li><strong>{isKo ? '책임 회피' : 'Avoidance of Accountability'}</strong> - {isKo ? '동료의 행동에 대한 상호 책임을 지지 않습니다.' : 'Not holding peers accountable for their behavior.'}</li>
        <li><strong>{isKo ? '결과 무관심' : 'Inattention to Results'}</strong> - {isKo ? '팀 목표보다 개인적 이익을 우선시합니다.' : 'Prioritizing individual interests over team goals.'}</li>
      </ol>
      <TipBox type="important">{isKo ? '고성과 팀의 핵심은 "갈등 없음"이 아니라 "건설적 갈등"입니다. 서로의 아이디어에 도전하면서도 인간적 존중을 유지하는 것, 이것이 심리적 안전감의 본질입니다.' : 'The key to high-performing teams is not "absence of conflict" but "constructive conflict." Challenging each other\'s ideas while maintaining personal respect is the essence of psychological safety.'}</TipBox>
    </div>
  );
}
