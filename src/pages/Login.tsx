import { useState, type ReactElement } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useToast } from '../contexts/ToastContext';
import { signInWithGoogle, signInWithKakao, signInWithEmail } from '../utils/auth';
import SEOHead from '../components/SEOHead';

export default function Login(): ReactElement {
  const { language } = useLanguage();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const isKo = language === 'ko';

  const [step, setStep] = useState<'methods' | 'email'>('methods');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGoogle = async () => {
    try { await signInWithGoogle(); }
    catch { showToast(isKo ? 'Google 로그인 실패' : 'Google login failed', 'error'); }
  };

  const handleKakao = async () => {
    try { await signInWithKakao(); }
    catch { showToast(isKo ? '카카오 로그인 실패' : 'Kakao login failed', 'error'); }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signInWithEmail(email, password);
      navigate('/');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Login failed';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEOHead title={isKo ? '로그인' : 'Login'} path="/login" noindex />
      <div className="auth-fullpage">
        <div className="auth-center-wrapper">
          <div className="auth-card-google">
            <div className="auth-logo-area">
              <span style={{ color: 'var(--primary)' }}>HRM</span>{' '}
              <span style={{ color: 'var(--accent)' }}>Research</span>
            </div>
            <h2 className="auth-heading">{isKo ? '로그인' : 'Sign In'}</h2>
            <p className="auth-sub">{isKo ? '계정을 선택하거나 이메일로 로그인하세요.' : 'Choose an account or sign in with email.'}</p>

            {step === 'methods' ? (
              <>
                <div className="auth-methods">
                  <button className="auth-method-btn" onClick={handleGoogle}>
                    <svg width="20" height="20" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                    Google {isKo ? '로그인' : 'Sign In'}
                  </button>
                  <button className="auth-method-btn kakao" onClick={handleKakao}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#3C1E1E"><path d="M12 3C6.48 3 2 6.36 2 10.5c0 2.66 1.76 4.99 4.42 6.33-.14.52-.92 3.37-.95 3.57 0 0-.02.17.09.24.11.06.24.01.24.01.32-.04 3.7-2.44 4.28-2.86.62.09 1.26.14 1.92.14 5.52 0 10-3.36 10-7.5S17.52 3 12 3z"/></svg>
                    {isKo ? '카카오 로그인' : 'Kakao Sign In'}
                  </button>
                  <button className="auth-method-btn" onClick={() => setStep('email')}>
                    <i className="fa-solid fa-envelope" style={{ fontSize: 18 }} />
                    {isKo ? '이메일 로그인' : 'Email Sign In'}
                  </button>
                </div>
                <div className="auth-bottom-link">
                  <span>{isKo ? '계정이 없으신가요?' : "Don't have an account?"}</span>
                  <Link to="/register">{isKo ? '회원가입' : 'Sign Up'}</Link>
                </div>
              </>
            ) : (
              <form className="auth-email-form" onSubmit={handleEmailLogin}>
                <div className="auth-input-group">
                  <input type="email" placeholder={isKo ? '이메일' : 'Email'} value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div className="auth-input-group">
                  <input type="password" placeholder={isKo ? '비밀번호' : 'Password'} value={password} onChange={e => setPassword(e.target.value)} required />
                </div>
                {error && <div className="auth-error">{error}</div>}
                <div className="auth-form-actions">
                  <button type="button" className="auth-back-btn" onClick={() => setStep('methods')}>
                    {isKo ? '뒤로' : 'Back'}
                  </button>
                  <button type="submit" className="auth-next-btn" disabled={loading}>
                    {loading ? '...' : isKo ? '로그인' : 'Sign In'}
                  </button>
                </div>
                <div className="auth-bottom-link">
                  <Link to="/forgot-password">{isKo ? '비밀번호 찾기' : 'Forgot Password?'}</Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
