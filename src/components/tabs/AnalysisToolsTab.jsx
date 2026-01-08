import React from 'react';
import RiskCheckWizard from '../RiskCheckWizard';
import JeonseGaugeChart from '../JeonseGaugeChart';
import ResponsibilityMatrix from '../ResponsibilityMatrix';
import AIQAPanel from '../AIQAPanel';
import { sampleContract } from '../../data/sampleContract';
import './TabStyles.css';

/**
 * Tab 3: 분석 도구 - 다양한 분석 컴포넌트
 */
const AnalysisToolsTab = () => {
    return (
        <div className="tab-content analysis-tools-tab">
            <div className="tools-intro">
                <h3>계약서 분석 도구</h3>
                <p>다양한 도구를 활용하여 계약서를 심층 분석하세요.</p>
            </div>

            <div className="tools-grid">
                {/* 위험도 체크 위저드 */}
                <section className="tool-section wizard-section">
                    <h4 className="tool-title">위험도 체크리스트</h4>
                    <RiskCheckWizard />
                </section>

                {/* 전세가율 게이지 */}
                <section className="tool-section gauge-section">
                    <h4 className="tool-title">전세가율 분석</h4>
                    <JeonseGaugeChart />
                </section>

                {/* 책임 매트릭스 */}
                <section className="tool-section matrix-section">
                    <h4 className="tool-title">당사자별 책임</h4>
                    <ResponsibilityMatrix />
                </section>

                {/* AI Q&A */}
                <section className="tool-section qa-section">
                    <h4 className="tool-title">AI 계약 상담</h4>
                    <AIQAPanel contract={sampleContract} />
                </section>
            </div>
        </div>
    );
};

export default AnalysisToolsTab;
