import { useState, type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { resetPassword } from '../utils/auth';
import SEOHead from '../components/SEOHead';

export default function ForgotPassword(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await resetPassword(email);
      setSent(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEOHead title={isKo ? '비밀번호 찾기' : 'Forgot Password'} path="/forgot-password" noindex />
      <div className="auth-fullpage">
        <div className="auth-center-wrapper">
          <div className="auth-card-google">
            <div className="auth-logo-area">
              <span style={{ color: 'var(--primary)' }}>HRM</span>{' '}
              <span style={{ color: 'var(--accent)' }}>Research</span>
            </div>
            <h2 className="auth-heading">{isKo ? '비밀번호 찾기' : 'Reset Password'}</h2>
            <p className="auth-sub">{isKo ? '가입하신 이메일을 입력해주세요.' : 'Enter your registered email address.'}</p>

            {sent ? (
              <div className="auth-message">
                {isKo ? '비밀번호 재설정 이메일을 발송했습니다. 이메일을 확인해주세요.' : 'Password reset email sent. Please check your inbox.'}
              </div>
            ) : (
              <form className="auth-email-form" onSubmit={handleSubmit}>
                <div className="auth-input-group">
                  <input type="email" placeholder={isKo ? '이메일' : 'Email'} value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                {error && <div className="auth-error">{error}</div>}
                <button type="submit" className="auth-next-btn" style={{ width: '100%' }} disabled={loading}>
                  {loading ? '...' : isKo ? '재설정 이메일 보내기' : 'Send Reset Email'}
                </button>
              </form>
            )}

            <div className="auth-bottom-link">
              <Link to="/login">{isKo ? '로그인으로 돌아가기' : 'Back to Login'}</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
