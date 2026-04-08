import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import type { ReactElement } from 'react';

export default function NotFound(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="not-found-code">404</div>
        <h1 className="not-found-title">
          {isKo ? '페이지를 찾을 수 없습니다' : 'Page Not Found'}
        </h1>
        <p className="not-found-desc">
          {isKo
            ? '요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.'
            : 'The page you requested may not exist or may have been moved.'}
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            {isKo ? '홈으로 돌아가기' : 'Back to Home'}
          </Link>
        </div>
      </div>
    </div>
  );
}
