import React, { useState } from 'react';
import './StructureReferencePage.css';

const StructureReferencePage = () => {
    const [activeTab, setActiveTab] = useState('structure');
    const [fullscreenImage, setFullscreenImage] = useState(null);

    const references = [
        {
            category: '법·계약 시각화 논문',
            items: [
                {
                    title: 'Design Thinking, Visualization and Law',
                    desc: '법·계약을 디자인 씽킹과 시각화 관점에서 재구성하는 방법론',
                    url: 'https://traficantes.net/sites/default/files/pdfs/9788410054677.pdf',
                },
                {
                    title: 'From Visualization to Legal Design',
                    desc: '계약을 시각화된 프로덕트로 보는 프레임워크 (Thomas Barton)',
                    url: 'https://www.swissre.com/dam/jcr:bd259050-ce5b-472b-8812-c0ed9a5c1078/Presentation_Thomas_Barton_and+Gerlinde+Berger-Walliser.pdf',
                },
                {
                    title: 'Using Legal Visualization to Teach Law',
                    desc: '법 규칙을 플로우차트·아이콘·타임라인으로 재구성하는 교육 사례',
                    url: 'https://aodr.org/xml/38533/38533.pdf',
                },
            ]
        },
        {
            category: 'Visual Contracts',
            items: [
                {
                    title: 'Visual Contracts EU',
                    desc: '레이아웃 계층화로 핵심 정보, 상세 조항, 아이콘·색상 가독성 향상',
                    url: 'https://www.visualcontracts.eu',
                },
                {
                    title: 'Legal Design Thinking',
                    desc: 'UX 좋은 계약서 = Visual Contract 개념 정리',
                    url: 'https://visualcontracts.com/what-is-legal-design-thinking/',
                },
            ]
        },
        {
            category: 'React 시각화 라이브러리',
            items: [
                {
                    title: 'React Flow',
                    desc: '노드 기반 UI, 줌/드래그, 커스텀 노드 - 플로우차트/그래프용',
                    url: 'https://reactflow.dev',
                },
                {
                    title: 'react-decision-tree-flow',
                    desc: 'YES/NO 분기 의사결정 플로우 위저드',
                    url: 'https://github.com/rjerue/react-decision-tree-flow',
                },
                {
                    title: 'D3.js',
                    desc: '데이터 시각화 라이브러리 - 게이지, 네트워크 그래프 등',
                    url: 'https://d3js.org',
                },
                {
                    title: 'Recharts',
                    desc: 'React 차트 라이브러리 - 바 차트, 라인 차트, 파이 차트',
                    url: 'https://recharts.org',
                },
            ]
        },
        {
            category: '디자인 레퍼런스',
            items: [
                {
                    title: 'Dribbble - Dashboard',
                    desc: '대시보드 UI/UX 디자인 영감',
                    url: 'https://dribbble.com/search/dashboard',
                },
                {
                    title: 'Behance - Legal Design',
                    desc: '법률 디자인 포트폴리오 및 케이스 스터디',
                    url: 'https://www.behance.net/search/projects?search=legal%20design',
                },
                {
                    title: 'LegalCreatives',
                    desc: '법률 시각화 실무 기법 - 카드형 요약, 플로우, 타임라인',
                    url: 'https://www.legalcreatives.com/blog/3-must-try-legal-design-and-visualization-techniques-with-tools-to-use',
                },
            ]
        },
    ];

    const designImages = [
        { src: '/계약서_AI_설계/KakaoTalk_20260104_202754262.png', title: '전체 구조도' },
        { src: '/계약서_AI_설계/계약서_AI_설계_2.jpg', title: '설계 2' },
        { src: '/계약서_AI_설계/계약서_AI_설계_3.jpg', title: '설계 3' },
        { src: '/계약서_AI_설계/계약서_AI_설계_4.jpg', title: '설계 4' },
        { src: '/계약서_AI_설계/계약서_AI_설계_5.jpg', title: '설계 5' },
        { src: '/계약서_AI_설계/계약서_AI_설계_6.jpg', title: '설계 6' },
        { src: '/계약서_AI_설계/계약서_AI_설계_7.jpg', title: '설계 7' },
        { src: '/계약서_AI_설계/계약서_AI_설계_8.jpg', title: '설계 8' },
    ];

    const openFullscreen = (img) => {
        setFullscreenImage(img);
    };

    const closeFullscreen = () => {
        setFullscreenImage(null);
    };

    return (
        <div className="structure-reference-page">
            {/* Fullscreen Modal */}
            {fullscreenImage && (
                <div className="fullscreen-modal" onClick={closeFullscreen}>
                    <button className="close-btn" onClick={closeFullscreen}>✕</button>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={fullscreenImage.src} alt={fullscreenImage.title} />
                        <span className="modal-title">{fullscreenImage.title}</span>
                    </div>
                </div>
            )}

            <div className="page-header">
                <h1>📐 설계 구조 및 레퍼런스</h1>
                <p>전세 계약서 시각화 서비스의 설계 구조와 참고 자료</p>
            </div>

            <div className="tab-navigation">
                <button
                    className={`tab-btn ${activeTab === 'structure' ? 'active' : ''}`}
                    onClick={() => setActiveTab('structure')}
                >
                    📊 구조도
                </button>
                <button
                    className={`tab-btn ${activeTab === 'references' ? 'active' : ''}`}
                    onClick={() => setActiveTab('references')}
                >
                    📚 레퍼런스
                </button>
                <button
                    className={`tab-btn ${activeTab === 'designs' ? 'active' : ''}`}
                    onClick={() => setActiveTab('designs')}
                >
                    🎨 설계 이미지
                </button>
            </div>

            <div className="tab-content">
                {activeTab === 'structure' && (
                    <div className="structure-section">
                        <div className="structure-card">
                            <h2>서비스 구조도</h2>
                            <div className="structure-image-container">
                                <img
                                    src="/계약서_AI_설계/KakaoTalk_20260104_202754262.png"
                                    alt="전세 계약서 시각화 서비스 구조도"
                                    className="structure-image clickable"
                                    onClick={() => openFullscreen({ src: '/계약서_AI_설계/KakaoTalk_20260104_202754262.png', title: '서비스 구조도' })}
                                />
                            </div>
                            <p className="click-hint">클릭하면 전체화면으로 볼 수 있습니다</p>
                        </div>

                        <div className="structure-overview">
                            <h3>주요 구성 요소</h3>
                            <div className="component-grid">
                                <div className="component-card">
                                    <span className="comp-icon">📄</span>
                                    <h4>계약서 입력</h4>
                                    <p>OCR/PDF 파싱으로 계약서 데이터 추출</p>
                                </div>
                                <div className="component-card">
                                    <span className="comp-icon">🤖</span>
                                    <h4>AI 분석</h4>
                                    <p>위험도 평가, 이상 조항 탐지</p>
                                </div>
                                <div className="component-card">
                                    <span className="comp-icon">📊</span>
                                    <h4>시각화</h4>
                                    <p>플로우차트, 네트워크 그래프, 게이지</p>
                                </div>
                                <div className="component-card">
                                    <span className="comp-icon">🛡️</span>
                                    <h4>위험 알림</h4>
                                    <p>전세 사기 패턴 매칭 및 경고</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'references' && (
                    <div className="references-section">
                        {references.map((category, idx) => (
                            <div key={idx} className="reference-category">
                                <h3>{category.category}</h3>
                                <div className="reference-list">
                                    {category.items.map((item, i) => (
                                        <a
                                            key={i}
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="reference-item"
                                        >
                                            <div className="ref-content">
                                                <h4>{item.title}</h4>
                                                <p>{item.desc}</p>
                                            </div>
                                            <span className="ref-arrow">→</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'designs' && (
                    <div className="designs-section">
                        <p className="click-hint">이미지를 클릭하면 전체화면으로 볼 수 있습니다</p>
                        <div className="designs-grid">
                            {designImages.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="design-card"
                                    onClick={() => openFullscreen(img)}
                                >
                                    <img src={img.src} alt={img.title} />
                                    <span className="design-title">{img.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StructureReferencePage;

