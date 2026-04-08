import { useState, type ReactElement } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import { updateProfile } from '../utils/auth';
import SEOHead from '../components/SEOHead';

export default function MyPage(): ReactElement {
  const { language } = useLanguage();
  const { user, profile, signOut, refreshProfile, isAdmin } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const isKo = language === 'ko';

  const [editing, setEditing] = useState(false);
  const [displayName, setDisplayName] = useState(profile?.display_name || '');

  if (!user) {
    return (
      <>
        <SEOHead title={isKo ? '마이페이지' : 'My Page'} path="/mypage" noindex />
        <section className="page-header">
          <div className="container">
            <h1>{isKo ? '마이페이지' : 'My Page'}</h1>
          </div>
        </section>
        <section style={{ padding: '80px 0', textAlign: 'center' }}>
          <div className="container">
            <p style={{ marginBottom: 24, color: 'var(--text-secondary)' }}>
              {isKo ? '로그인이 필요합니다.' : 'Please sign in to continue.'}
            </p>
            <Link to="/login" className="btn btn-primary">{isKo ? '로그인' : 'Sign In'}</Link>
          </div>
        </section>
      </>
    );
  }

  const name = profile?.display_name || user.email?.split('@')[0] || '';
  const avatarLetter = name.charAt(0).toUpperCase();

  const handleSave = async () => {
    if (!user) return;
    try {
      await updateProfile(user.id, { display_name: displayName });
      await refreshProfile();
      setEditing(false);
      showToast(isKo ? '프로필이 업데이트되었습니다.' : 'Profile updated.', 'success');
    } catch {
      showToast(isKo ? '업데이트 실패' : 'Update failed', 'error');
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <>
      <SEOHead title={isKo ? '마이페이지' : 'My Page'} path="/mypage" noindex />
      <section className="page-header">
        <div className="container">
          <h1>{isKo ? '마이페이지' : 'My Page'}</h1>
        </div>
      </section>
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="mypage-card">
            <div className="mypage-avatar">
              {profile?.avatar_url ? (
                <img src={profile.avatar_url} alt={name} />
              ) : (
                <div className="mypage-avatar-placeholder">{avatarLetter}</div>
              )}
            </div>
            <div className="mypage-info">
              {editing ? (
                <div className="mypage-edit-form">
                  <input
                    type="text"
                    value={displayName}
                    onChange={e => setDisplayName(e.target.value)}
                    style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--border-medium)', borderRadius: 8, fontSize: 15 }}
                  />
                  <div className="mypage-edit-actions">
                    <button className="btn btn-primary btn-sm" onClick={handleSave}>{isKo ? '저장' : 'Save'}</button>
                    <button className="btn btn-secondary btn-sm" onClick={() => setEditing(false)}>{isKo ? '취소' : 'Cancel'}</button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="mypage-name">{name}</h2>
                  <p className="mypage-email">{user.email}</p>
                  <p className="mypage-provider">{profile?.provider || 'email'}</p>
                  {isAdmin && <span className="mypage-role-badge">Admin</span>}
                  <button
                    className="btn-link"
                    style={{ marginTop: 8, fontSize: 13 }}
                    onClick={() => { setDisplayName(name); setEditing(true); }}
                  >
                    <i className="fa-solid fa-pen" /> {isKo ? '이름 수정' : 'Edit Name'}
                  </button>
                </>
              )}
            </div>

            <div className="mypage-footer">
              <button className="btn btn-secondary btn-sm" onClick={handleSignOut}>
                {isKo ? '로그아웃' : 'Sign Out'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
