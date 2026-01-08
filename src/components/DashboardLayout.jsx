import React, { useState } from 'react';
import OverviewTab from './tabs/OverviewTab';
import ContractAnalysisTab from './tabs/ContractAnalysisTab';
import AnalysisToolsTab from './tabs/AnalysisToolsTab';
import ArchitectureTab from './tabs/ArchitectureTab';
import ReferenceTab from './tabs/ReferenceTab';
import './DashboardLayout.css';

/**
 * 메인 대시보드 레이아웃 - 5개 탭 구조
 */
const DashboardLayout = () => {
    const [activeMainTab, setActiveMainTab] = useState('overview');

    const mainTabs = [
        { id: 'overview', label: '공통사항' },
        { id: 'contracts', label: '계약서별 시각화' },
        { id: 'tools', label: '분석 도구' },
        { id: 'architecture', label: '설계 구조' },
        { id: 'reference', label: '레퍼런스' },
    ];

    const renderTabContent = () => {
        switch (activeMainTab) {
            case 'overview':
                return <OverviewTab />;
            case 'contracts':
                return <ContractAnalysisTab />;
            case 'tools':
                return <AnalysisToolsTab />;
            case 'architecture':
                return <ArchitectureTab />;
            case 'reference':
                return <ReferenceTab />;
            default:
                return <OverviewTab />;
        }
    };

    return (
        <div className="dashboard-layout">
            <header className="dashboard-header">
                <h1 className="dashboard-title">전월세 계약서 시각화 대시보드</h1>
                <p className="dashboard-subtitle">계약서 분석 및 위험 탐지 시스템</p>
            </header>

            <nav className="main-tab-nav">
                {mainTabs.map(tab => (
                    <button
                        key={tab.id}
                        className={`main-tab-btn ${activeMainTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveMainTab(tab.id)}
                    >
                        <span className="tab-label">{tab.label}</span>
                    </button>
                ))}
            </nav>

            <main className="dashboard-content">
                {renderTabContent()}
            </main>

            <footer className="dashboard-footer">
                <p>전월세 계약서 시각화 데모 v2.0</p>
            </footer>
        </div>
    );
};

export default DashboardLayout;
