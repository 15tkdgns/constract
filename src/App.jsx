import React from 'react';
import ContractSummaryCard from './components/ContractSummaryCard';
import RiskScoreIndicator from './components/RiskScoreIndicator';
import ContractFlowchart from './components/ContractFlowchart';
import StructureMindMap from './components/StructureMindMap';
import ContractTimeline from './components/ContractTimeline';
import RightsStackChart from './components/RightsStackChart';
import { sampleContract, timelineEvents, mindMapNodes } from './data/sampleContract';
import './App.css';

function App() {
    return (
        <div className="app">
            <header className="header">
                <h1>전월세 계약서 시각화</h1>
                <p>계약 정보를 한눈에 파악하고, 잠재적 리스크를 사전에 분석합니다</p>
            </header>

            <main className="container">
                <section className="section">
                    <h2 className="section-title">계약 개요</h2>
                    <div className="grid grid-cols-2">
                        <ContractSummaryCard contract={sampleContract} />
                        <RiskScoreIndicator risk={sampleContract.risk} />
                    </div>
                </section>

                <section className="section">
                    <h2 className="section-title">계약 프로세스</h2>
                    <ContractFlowchart />
                </section>

                <section className="section">
                    <h2 className="section-title">전세 구조 분석</h2>
                    <StructureMindMap mindMapData={mindMapNodes} />
                </section>

                <section className="section">
                    <h2 className="section-title">권리관계 분석</h2>
                    <RightsStackChart contract={sampleContract} />
                </section>

                <section className="section">
                    <h2 className="section-title">계약 일정</h2>
                    <div className="grid grid-cols-2">
                        <ContractTimeline events={timelineEvents} />
                        <div className="info-card card">
                            <div className="card-header">
                                <div className="card-icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="12" y1="16" x2="12" y2="12" />
                                        <line x1="12" y1="8" x2="12.01" y2="8" />
                                    </svg>
                                </div>
                                <h3 className="card-title">서비스 방향</h3>
                            </div>
                            <div className="info-list">
                                <div className="info-row">
                                    <h4>데이터 기반 분석</h4>
                                    <p>공공데이터포털 전월세/실거래가 API를 활용하여 시세 및 지역 위험도를 분석합니다.</p>
                                </div>
                                <div className="info-row">
                                    <h4>AI 위험 탐지</h4>
                                    <p>패턴 분석과 이상치 탐지로 필수 조항 누락 및 불리한 조항을 실시간 탐지합니다.</p>
                                </div>
                                <div className="info-row">
                                    <h4>직관적 시각화</h4>
                                    <p>텍스트를 그래프, 타임라인, 카드 UI로 분해하여 정보를 명확하게 전달합니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>전월세 계약서 시각화 데모</p>
            </footer>
        </div>
    );
}

export default App;
