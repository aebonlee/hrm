import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import type { ReactElement } from 'react';

export default function Footer(): ReactElement {
  const { language, t } = useLanguage();
  const isKo = language === 'ko';

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="brand-study">HRM</span>
              <span className="brand-master"> Research</span>
            </div>
            <p className="footer-description">{t('footer.description')}</p>
            <p className="footer-description" style={{ marginTop: 8, fontSize: 13 }}>{t('footer.descriptionDetail')}</p>
          </div>

          <div className="footer-links">
            <h4>{t('footer.quickLinks')}</h4>
            <ul className="footer-link-list">
              <li><Link to="/hrm-intro">{isKo ? 'HRM 개론' : 'HRM Intro'}</Link></li>
              <li><Link to="/recruitment">{isKo ? '채용과 선발' : 'Recruitment'}</Link></li>
              <li><Link to="/training">{isKo ? '교육과 개발' : 'Training'}</Link></li>
              <li><Link to="/performance">{isKo ? '성과관리' : 'Performance'}</Link></li>
              <li><Link to="/compensation">{isKo ? '보상관리' : 'Compensation'}</Link></li>
              <li><Link to="/labor-relations">{isKo ? '노사관계' : 'Labor Relations'}</Link></li>
              <li><Link to="/org-culture">{isKo ? '조직문화' : 'Org Culture'}</Link></li>
              <li><Link to="/hr-trends">{isKo ? 'HR 트렌드' : 'HR Trends'}</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>{isKo ? '연락처' : 'Contact'}</h4>
            <p className="footer-email">
              <span className="footer-email-icon"><i className="fa-solid fa-envelope" /></span>
              <a href="mailto:aebon@dreamitbiz.com">aebon@dreamitbiz.com</a>
            </p>
            <p>010-3700-0629</p>
            <p>{isKo ? '카카오톡' : 'KakaoTalk'}: aebon</p>
            <p className="business-hours">{isKo ? '평일 09:00 ~ 18:00' : 'Weekdays 09:00 ~ 18:00'}</p>
            <div className="footer-family">
              <select defaultValue="" onChange={(e) => { if (e.target.value) window.open(e.target.value, '_blank'); e.target.value = ''; }}>
                <option value="" disabled>Family Site</option>
                <option value="https://www.dreamitbiz.com">DreamIT Biz</option>
                <option value="https://teaching.dreamitbiz.com">Teaching AI</option>
                <option value="https://chatgpt.dreamitbiz.com">ChatGPT Master</option>
                <option value="https://claude.dreamitbiz.com">Claude Master</option>
              </select>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 DreamIT Biz. All rights reserved.</p>
          <p className="footer-bottom-info">
            Designed by Ph.D Aebon Lee | {isKo ? '대표이사' : 'CEO'}: {isKo ? '이애본' : 'Aebon Lee'}
          </p>
        </div>
      </div>
    </footer>
  );
}
