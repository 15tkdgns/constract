import React from 'react';
import './ResponsibilityMatrix.css';

const ResponsibilityMatrix = () => {
    const responsibilities = [
        {
            task: '전입신고',
            landlord: false,
            tenant: true,
            joint: false,
            guarantor: false,
            deadline: '입주 후 14일 이내',
            importance: 'high'
        },
        {
            task: '확정일자',
            landlord: false,
            tenant: true,
            joint: false,
            guarantor: false,
            deadline: '전입신고 당일',
            importance: 'high'
        },
        {
            task: '등기부등본 확인',
            landlord: false,
            tenant: true,
            joint: false,
            guarantor: false,
            deadline: '계약 전',
            importance: 'high'
        },
        {
            task: '보증보험 가입',
            landlord: false,
            tenant: false,
            joint: true,
            guarantor: true,
            deadline: '계약 후 30일 이내',
            importance: 'high'
        },
        {
            task: '보증금 수령',
            landlord: true,
            tenant: false,
            joint: false,
            guarantor: false,
            deadline: '계약일/잔금일',
            importance: 'medium'
        },
        {
            task: '보증금 반환',
            landlord: true,
            tenant: false,
            joint: false,
            guarantor: true,
            deadline: '계약 만료일',
            importance: 'high'
        },
        {
            task: '월세 납부',
            landlord: false,
            tenant: true,
            joint: false,
            guarantor: false,
            deadline: '매월 약정일',
            importance: 'medium'
        },
        {
            task: '시설물 수리 (대)',
            landlord: true,
            tenant: false,
            joint: false,
            guarantor: false,
            deadline: '요청 시',
            importance: 'low'
        },
        {
            task: '시설물 수리 (소)',
            landlord: false,
            tenant: true,
            joint: false,
            guarantor: false,
            deadline: '발생 시',
            importance: 'low'
        },
        {
            task: '계약 갱신 통보',
            landlord: false,
            tenant: true,
            joint: false,
            guarantor: false,
            deadline: '만료 6개월~1개월 전',
            importance: 'medium'
        }
    ];

    const getImportanceStyle = (importance) => {
        switch (importance) {
            case 'high': return { backgroundColor: '#fef2f2', borderLeft: '3px solid #dc2626' };
            case 'medium': return { backgroundColor: '#fffbeb', borderLeft: '3px solid #f59e0b' };
            default: return { backgroundColor: '#f0fdf4', borderLeft: '3px solid #22c55e' };
        }
    };

    return (
        <div className="responsibility-matrix card">
            <div className="card-header">
                <div className="card-icon matrix-bg">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                    </svg>
                </div>
                <h3 className="card-title">당사자별 책임 매트릭스</h3>
            </div>

            <div className="matrix-container">
                <table className="matrix-table">
                    <thead>
                        <tr>
                            <th className="task-col">항목</th>
                            <th>임대인</th>
                            <th>임차인</th>
                            <th>공동</th>
                            <th>보증기관</th>
                            <th className="deadline-col">기한</th>
                        </tr>
                    </thead>
                    <tbody>
                        {responsibilities.map((item, idx) => (
                            <tr key={idx} style={getImportanceStyle(item.importance)}>
                                <td className="task-name">{item.task}</td>
                                <td className="check-cell">
                                    {item.landlord ? <span className="check active">✓</span> : <span className="check inactive">-</span>}
                                </td>
                                <td className="check-cell">
                                    {item.tenant ? <span className="check active">✓</span> : <span className="check inactive">-</span>}
                                </td>
                                <td className="check-cell">
                                    {item.joint ? <span className="check joint">✓</span> : <span className="check inactive">-</span>}
                                </td>
                                <td className="check-cell">
                                    {item.guarantor ? <span className="check guarantor">보증</span> : <span className="check inactive">-</span>}
                                </td>
                                <td className="deadline">{item.deadline}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="matrix-legend">
                <div className="legend-item">
                    <span className="legend-color high"></span>
                    <span>필수 (높음)</span>
                </div>
                <div className="legend-item">
                    <span className="legend-color medium"></span>
                    <span>중요 (중간)</span>
                </div>
                <div className="legend-item">
                    <span className="legend-color low"></span>
                    <span>일반 (낮음)</span>
                </div>
            </div>
        </div>
    );
};

export default ResponsibilityMatrix;
