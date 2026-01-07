import React, { useState } from 'react';
import './FraudCaseVisualization.css';

const FraudCaseVisualization = () => {
    const [activeCase, setActiveCase] = useState(0);

    const fraudCases = [
        {
            id: 1,
            title: '깡통전세',
            subtitle: '전세가율 과도',
            riskLevel: 'critical',
            description: '매매가 대비 전세보증금이 과도하여 시세 하락 시 보증금 미회수',
            visualization: {
                type: 'gauge',
                data: {
                    jeonseRatio: 95,
                    marketPrice: 800000000,
                    deposit: 760000000,
                    expectedLoss: 200000000
                }
            },
            warnings: [
                '전세가율 95%로 매우 높음',
                '시세 하락 시 보증금 전액 손실 위험',
                '경매 시 예상 손실: 2억원 이상'
            ],
            recommendations: [
                '전세가율 70% 이하 물건 권장',
                '전세보증보험 필수 가입',
                '시세 조사 철저히'
            ]
        },
        {
            id: 2,
            title: '소유자-임대인 불일치',
            subtitle: '명의신탁 의심',
            riskLevel: 'high',
            description: '등기부상 소유자와 계약서상 임대인이 다른 경우',
            visualization: {
                type: 'mismatch',
                data: {
                    registryOwner: '김철수',
                    contractLandlord: '이영희',
                    match: false
                }
            },
            warnings: [
                '등기부 소유자 ≠ 계약서 임대인',
                '명의신탁 또는 무권한 전세 가능',
                '계약 무효 위험'
            ],
            recommendations: [
                '등기부등본 직접 발급 확인',
                '실소유자와 직접 대면 계약',
                '법무사 상담 필수'
            ]
        },
        {
            id: 3,
            title: '보증보험 미가입',
            subtitle: '보증금 보호 불가',
            riskLevel: 'high',
            description: '임대인 파산 시 보증금 미회수 가능',
            visualization: {
                type: 'insurance',
                data: {
                    hasHUG: false,
                    hasSGI: false,
                    deposit: 350000000
                }
            },
            warnings: [
                'HUG/SGI 보증보험 미가입',
                '임대인 파산 시 보증금 전액 손실',
                '대위변제 불가'
            ],
            recommendations: [
                '계약 전 보증보험 가입 조건 명시',
                'HUG 또는 SGI 가입 필수',
                '보증 한도 확인'
            ]
        },
        {
            id: 4,
            title: '선순위 권리 과다',
            subtitle: '회수 불가',
            riskLevel: 'critical',
            description: '내 보증금보다 선순위 채권이 많아 경매 시 회수 불가',
            visualization: {
                type: 'stack',
                data: {
                    appraisalValue: 1000000000,
                    seniorMortgage: 400000000,
                    seniorTenant: 300000000,
                    myDeposit: 400000000,
                    expectedRecovery: 100000000
                }
            },
            warnings: [
                '선순위 근저당 4억원',
                '선순위 임차인 3억원',
                '경매 시 예상 회수: 0~1억원'
            ],
            recommendations: [
                '등기부 권리관계 철저히 확인',
                '선순위 합계 < 감정가 70%인지 확인',
                '법무사 권리분석 의뢰'
            ]
        }
    ];

    const getRiskColor = (level) => {
        switch (level) {
            case 'critical': return '#dc2626';
            case 'high': return '#f59e0b';
            case 'medium': return '#3b82f6';
            default: return '#22c55e';
        }
    };

    const getRiskLabel = (level) => {
        switch (level) {
            case 'critical': return '매우 위험';
            case 'high': return '위험';
            case 'medium': return '주의';
            default: return '안전';
        }
    };

    const formatMoney = (value) => {
        if (value >= 100000000) {
            const billions = Math.floor(value / 100000000);
            const remainder = (value % 100000000) / 10000;
            if (remainder > 0) return `${billions}억 ${Math.round(remainder).toLocaleString()}만원`;
            return `${billions}억원`;
        }
        if (value >= 10000) return `${Math.round(value / 10000).toLocaleString()}만원`;
        return `${value.toLocaleString()}원`;
    };

    const currentCase = fraudCases[activeCase];

    const renderVisualization = () => {
        const { type, data } = currentCase.visualization;

        if (type === 'gauge') {
            const angle = (data.jeonseRatio / 100) * 180 - 90;
            return (
                <div className="viz-gauge">
                    <svg viewBox="0 0 200 120" className="gauge-svg">
                        <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#e5e7eb" strokeWidth="12" strokeLinecap="round" />
                        <path d="M 20 100 A 80 80 0 0 1 60 35" fill="none" stroke="#22c55e" strokeWidth="12" strokeLinecap="round" />
                        <path d="M 60 35 A 80 80 0 0 1 100 20" fill="none" stroke="#3b82f6" strokeWidth="12" strokeLinecap="round" />
                        <path d="M 100 20 A 80 80 0 0 1 140 35" fill="none" stroke="#f59e0b" strokeWidth="12" strokeLinecap="round" />
                        <path d="M 140 35 A 80 80 0 0 1 180 100" fill="none" stroke="#dc2626" strokeWidth="12" strokeLinecap="round" />
                        <line x1="100" y1="100" x2={100 + 60 * Math.cos(angle * Math.PI / 180)} y2={100 - 60 * Math.sin(angle * Math.PI / 180)} stroke="#1f2937" strokeWidth="3" strokeLinecap="round" />
                        <circle cx="100" cy="100" r="8" fill="#1f2937" />
                    </svg>
                    <div className="gauge-value">{data.jeonseRatio}%</div>
                    <div className="gauge-label">전세가율</div>
                    <div className="gauge-details">
                        <span>매매가: {formatMoney(data.marketPrice)}</span>
                        <span>보증금: {formatMoney(data.deposit)}</span>
                    </div>
                </div>
            );
        }

        if (type === 'mismatch') {
            return (
                <div className="viz-mismatch">
                    <div className="mismatch-box owner">
                        <span className="label">등기부 소유자</span>
                        <span className="name">{data.registryOwner}</span>
                    </div>
                    <div className="mismatch-icon">
                        <span className="not-equal">≠</span>
                        <span className="danger-text">불일치!</span>
                    </div>
                    <div className="mismatch-box landlord">
                        <span className="label">계약서 임대인</span>
                        <span className="name">{data.contractLandlord}</span>
                    </div>
                </div>
            );
        }

        if (type === 'insurance') {
            return (
                <div className="viz-insurance">
                    <div className="insurance-status">
                        <div className={`insurance-item ${data.hasHUG ? 'active' : 'inactive'}`}>
                            <span className="icon">{data.hasHUG ? '✓' : '✗'}</span>
                            <span className="name">HUG 보증</span>
                        </div>
                        <div className={`insurance-item ${data.hasSGI ? 'active' : 'inactive'}`}>
                            <span className="icon">{data.hasSGI ? '✓' : '✗'}</span>
                            <span className="name">SGI 보증</span>
                        </div>
                    </div>
                    <div className="insurance-warning">
                        <span className="warning-icon">⚠</span>
                        <span>보증금 {formatMoney(data.deposit)} 보호 불가</span>
                    </div>
                </div>
            );
        }

        if (type === 'stack') {
            const total = data.appraisalValue;
            return (
                <div className="viz-stack">
                    <div className="stack-bar">
                        <div className="stack-layer danger" style={{ width: `${(data.seniorMortgage / total) * 100}%` }}>
                            <span>근저당 {formatMoney(data.seniorMortgage)}</span>
                        </div>
                        <div className="stack-layer warning" style={{ width: `${(data.seniorTenant / total) * 100}%` }}>
                            <span>선순위 {formatMoney(data.seniorTenant)}</span>
                        </div>
                        <div className="stack-layer my-deposit" style={{ width: `${(data.myDeposit / total) * 100}%` }}>
                            <span>내 보증금 {formatMoney(data.myDeposit)}</span>
                        </div>
                    </div>
                    <div className="stack-legend">
                        <span>감정가: {formatMoney(total)}</span>
                        <span className="recovery">예상 회수: {formatMoney(data.expectedRecovery)}</span>
                    </div>
                </div>
            );
        }

        return null;
    };

    return (
        <div className="fraud-case-card card">
            <div className="card-header">
                <div className="card-icon warning-bg">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                </div>
                <h3 className="card-title">전세 사기 사례 분석</h3>
            </div>

            <div className="case-tabs">
                {fraudCases.map((c, idx) => (
                    <button
                        key={c.id}
                        className={`case-tab ${activeCase === idx ? 'active' : ''}`}
                        onClick={() => setActiveCase(idx)}
                        style={{ borderColor: activeCase === idx ? getRiskColor(c.riskLevel) : 'transparent' }}
                    >
                        <span className="tab-number">Case {c.id}</span>
                        <span className="tab-title">{c.title}</span>
                    </button>
                ))}
            </div>

            <div className="case-content">
                <div className="case-header">
                    <div className="case-info">
                        <h4>{currentCase.title}</h4>
                        <p>{currentCase.subtitle}</p>
                    </div>
                    <span
                        className="risk-badge"
                        style={{ backgroundColor: getRiskColor(currentCase.riskLevel) }}
                    >
                        {getRiskLabel(currentCase.riskLevel)}
                    </span>
                </div>

                <p className="case-description">{currentCase.description}</p>

                <div className="case-visualization">
                    {renderVisualization()}
                </div>

                <div className="case-details">
                    <div className="warnings-section">
                        <h5>⚠ 위험 신호</h5>
                        <ul>
                            {currentCase.warnings.map((w, i) => (
                                <li key={i}>{w}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="recommendations-section">
                        <h5>✓ 권장 사항</h5>
                        <ul>
                            {currentCase.recommendations.map((r, i) => (
                                <li key={i}>{r}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FraudCaseVisualization;
