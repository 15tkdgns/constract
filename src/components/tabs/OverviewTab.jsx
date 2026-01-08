import React from 'react';
import './TabStyles.css';

/**
 * Tab 1: 공통사항 - 프로젝트 소개 및 개요
 */
const OverviewTab = () => {
    const features = [
        {
            title: '계약서 시각화',
            description: '복잡한 계약서를 직관적인 그래프와 다이어그램으로 표현',
        },
        {
            title: '불리조항 탐지',
            description: 'AI 기반 위험 조항 자동 분석 및 경고',
        },
        {
            title: '관계 분석',
            description: '당사자, 자산, 법적조건 간 관계 네트워크 시각화',
        },
        {
            title: '사기 예방',
            description: '전세 사기 사례 분석 및 위험 지표 제공',
        },
    ];

    const techStack = [
        { name: 'React', category: 'Frontend' },
        { name: 'React Flow', category: 'Graph' },
        { name: 'Recharts', category: 'Charts' },
        { name: 'CSS Variables', category: 'Styling' },
    ];

    return (
        <div className="tab-content overview-tab">
            {/* 히어로 섹션 */}
            <section className="hero-section">
                <h2>전월세 계약서 시각화 시스템</h2>
                <p>
                    복잡한 임대차 계약서를 시각적으로 분석하고,
                    잠재적 위험 요소를 사전에 탐지하는 지능형 시스템입니다.
                </p>
            </section>

            {/* 주요 기능 */}
            <section className="features-section">
                <h3>주요 기능</h3>
                <div className="features-grid">
                    {features.map((feature, idx) => (
                        <div key={idx} className="feature-card">
                            <h4>{feature.title}</h4>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 기술 스택 */}
            <section className="tech-section">
                <h3>기술 스택</h3>
                <div className="tech-tags">
                    {techStack.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                            <span className="tech-category">{tech.category}</span>
                            <span className="tech-name">{tech.name}</span>
                        </span>
                    ))}
                </div>
            </section>

            {/* 프로젝트 목표 */}
            <section className="goals-section">
                <h3>프로젝트 목표</h3>
                <div className="goals-list">
                    <div className="goal-item">
                        <span className="goal-number">01</span>
                        <div className="goal-content">
                            <h4>계약서 이해도 향상</h4>
                            <p>법률 용어와 복잡한 조항을 시각적으로 표현하여 이해도 증진</p>
                        </div>
                    </div>
                    <div className="goal-item">
                        <span className="goal-number">02</span>
                        <div className="goal-content">
                            <h4>위험 사전 탐지</h4>
                            <p>불리한 조항과 전세 사기 위험 요소를 자동으로 분석</p>
                        </div>
                    </div>
                    <div className="goal-item">
                        <span className="goal-number">03</span>
                        <div className="goal-content">
                            <h4>의사결정 지원</h4>
                            <p>계약 체결 전 종합적인 정보를 제공하여 합리적 판단 지원</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OverviewTab;
