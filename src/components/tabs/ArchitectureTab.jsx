import React from 'react';
import './TabStyles.css';

/**
 * Tab 4: 설계 구조 - 시스템 아키텍처
 */
const ArchitectureTab = () => {
    const components = [
        {
            category: '레이아웃',
            items: [
                { name: 'DashboardLayout', desc: '메인 탭 네비게이션' },
                { name: 'App', desc: '루트 컴포넌트' },
            ]
        },
        {
            category: '시각화',
            items: [
                { name: 'ContractTextGraph', desc: 'React Flow 기반 관계 그래프' },
                { name: 'ContractEntityViews', desc: '개체 시각화 (3가지 뷰)' },
                { name: 'AdvancedContractAnalysis', desc: '불리조항 분석' },
                { name: 'NetworkVisualization', desc: '네트워크 그래프' },
            ]
        },
        {
            category: '분석 도구',
            items: [
                { name: 'RiskCheckWizard', desc: '위험도 체크리스트' },
                { name: 'JeonseGaugeChart', desc: '전세가율 게이지' },
                { name: 'ResponsibilityMatrix', desc: '책임 매트릭스' },
                { name: 'AIQAPanel', desc: 'AI 챗봇' },
            ]
        },
        {
            category: '사례 분석',
            items: [
                { name: 'FraudCaseVisualization', desc: '사기 사례 시각화' },
                { name: 'ContractTimeline', desc: '계약 타임라인' },
            ]
        }
    ];

    const dataFlow = [
        { step: 1, title: '계약서 입력', desc: 'JSON 형태 계약 데이터' },
        { step: 2, title: 'NER 처리', desc: '개체명 인식 (시뮬레이션)' },
        { step: 3, title: '관계 추출', desc: '개체 간 관계 정의' },
        { step: 4, title: '위험도 분석', desc: '조항별 위험 점수 산정' },
        { step: 5, title: '시각화 렌더링', desc: 'React Flow / Charts' },
    ];

    return (
        <div className="tab-content architecture-tab">
            {/* 컴포넌트 구조 */}
            <section className="arch-section">
                <h3>컴포넌트 구조</h3>
                <div className="component-tree">
                    {components.map((cat, idx) => (
                        <div key={idx} className="component-category">
                            <h4 className="category-title">{cat.category}</h4>
                            <div className="component-list">
                                {cat.items.map((item, i) => (
                                    <div key={i} className="component-item">
                                        <code className="component-name">{item.name}</code>
                                        <span className="component-desc">{item.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 데이터 흐름 */}
            <section className="arch-section">
                <h3>데이터 흐름</h3>
                <div className="data-flow">
                    {dataFlow.map((item, idx) => (
                        <React.Fragment key={idx}>
                            <div className="flow-step">
                                <span className="step-number">{item.step}</span>
                                <div className="step-content">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                            {idx < dataFlow.length - 1 && (
                                <div className="flow-arrow">→</div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </section>

            {/* 기술 상세 */}
            <section className="arch-section">
                <h3>핵심 기술</h3>
                <div className="tech-details">
                    <div className="tech-card">
                        <h4>React Flow (@xyflow/react)</h4>
                        <p>계약서 개체 간 관계를 노드-엣지 그래프로 시각화</p>
                        <ul>
                            <li>드래그 가능한 노드</li>
                            <li>카테고리별 섹션 그룹화</li>
                            <li>미니맵 및 컨트롤</li>
                        </ul>
                    </div>
                    <div className="tech-card">
                        <h4>위험도 분석 알고리즘</h4>
                        <p>조항별 키워드 및 패턴 기반 위험 점수 산정</p>
                        <ul>
                            <li>0-100점 위험 스코어</li>
                            <li>4단계 위험 등급</li>
                            <li>카테고리별 분류</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ArchitectureTab;
