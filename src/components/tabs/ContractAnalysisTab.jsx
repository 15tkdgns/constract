import React, { useState } from 'react';
import ContractEntityViews from '../ContractEntityViews';
import AdvancedContractAnalysis from '../AdvancedContractAnalysis';
import FraudCaseVisualization from '../FraudCaseVisualization';
import './TabStyles.css';

/**
 * Tab 2: 계약서별 시각화 - 서브탭 구조
 */
const ContractAnalysisTab = () => {
    const [activeSubTab, setActiveSubTab] = useState('simple');

    const subTabs = [
        { id: 'simple', label: '기본 계약서', badge: 'Simple' },
        { id: 'complex', label: '복잡한 계약서', badge: 'Complex' },
        { id: 'fraud', label: '사기 사례', badge: 'Fraud' },
    ];

    return (
        <div className="tab-content contract-analysis-tab">
            {/* 서브탭 네비게이션 */}
            <div className="sub-tab-nav">
                {subTabs.map(tab => (
                    <button
                        key={tab.id}
                        className={`sub-tab-btn ${activeSubTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveSubTab(tab.id)}
                    >
                        <span className="sub-tab-label">{tab.label}</span>
                        <span className={`sub-tab-badge ${tab.id}`}>{tab.badge}</span>
                    </button>
                ))}
            </div>

            {/* 서브탭 콘텐츠 */}
            <div className="sub-tab-content">
                {activeSubTab === 'simple' && (
                    <div className="sub-content-wrapper">
                        <div className="sub-content-header">
                            <h3>기본 임대차 계약서 분석</h3>
                            <p>표준 전세 계약서의 주요 개체와 관계를 시각화합니다.</p>
                        </div>
                        <ContractEntityViews />
                    </div>
                )}

                {activeSubTab === 'complex' && (
                    <div className="sub-content-wrapper">
                        <div className="sub-content-header">
                            <h3>복잡한 계약서 분석 (불리조항 탐지)</h3>
                            <p>13개 조항이 포함된 실제 계약서의 위험도를 분석합니다.</p>
                        </div>
                        <AdvancedContractAnalysis />
                    </div>
                )}

                {activeSubTab === 'fraud' && (
                    <div className="sub-content-wrapper">
                        <div className="sub-content-header">
                            <h3>전세 사기 사례 분석</h3>
                            <p>실제 발생한 전세 사기 유형과 위험 지표를 학습합니다.</p>
                        </div>
                        <FraudCaseVisualization />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContractAnalysisTab;
