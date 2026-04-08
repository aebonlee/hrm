import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import type { ReactElement } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const MyPage = lazy(() => import('../pages/MyPage'));

const HrmIntro = lazy(() => import('../pages/hrm-intro/HrmIntro'));
const Recruitment = lazy(() => import('../pages/recruitment/Recruitment'));
const Training = lazy(() => import('../pages/training/Training'));
const Performance = lazy(() => import('../pages/performance/Performance'));
const Compensation = lazy(() => import('../pages/compensation/Compensation'));
const LaborRelations = lazy(() => import('../pages/labor-relations/LaborRelations'));
const OrgCulture = lazy(() => import('../pages/org-culture/OrgCulture'));
const HrTrends = lazy(() => import('../pages/hr-trends/HrTrends'));

const NotFound = lazy(() => import('../pages/NotFound'));

function LoadingFallback(): ReactElement {
  return (
    <div className="loading-page">
      <div className="loading-spinner" />
    </div>
  );
}

export default function PublicLayout(): ReactElement {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="site-main">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/mypage" element={<MyPage />} />

            <Route path="/hrm-intro" element={<HrmIntro />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/training" element={<Training />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/compensation" element={<Compensation />} />
            <Route path="/labor-relations" element={<LaborRelations />} />
            <Route path="/org-culture" element={<OrgCulture />} />
            <Route path="/hr-trends" element={<HrTrends />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
