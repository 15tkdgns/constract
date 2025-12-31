import React from 'react';
import './ContractSummaryCard.css';

const ContractSummaryCard = ({ contract }) => {
    const formatCurrency = (value) => {
        if (value >= 100000000) {
            const eok = Math.floor(value / 100000000);
            const man = Math.floor((value % 100000000) / 10000);
            return man > 0 ? `${eok}억 ${man}만원` : `${eok}억원`;
        }
        return `${(value / 10000).toLocaleString()}만원`;
    };

    const calculateContractDuration = () => {
        const start = new Date(contract.period.moveInDate);
        const end = new Date(contract.period.endDate);
        const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
        return `${Math.floor(months / 12)}년`;
    };

    return (
        <div className="summary-card card">
            <div className="card-header">
                <div className="card-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                </div>
                <h2 className="card-title">계약 요약</h2>
                <span className="type-badge">{contract.property.type}</span>
            </div>

            <div className="address-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{contract.property.address}</span>
            </div>

            <div className="info-grid">
                <div className="info-item">
                    <span className="info-label">임대인</span>
                    <span className="info-value">{contract.landlord.name}</span>
                </div>
                <div className="info-item">
                    <span className="info-label">임차인</span>
                    <span className="info-value">{contract.tenant.name}</span>
                </div>
                <div className="info-item">
                    <span className="info-label">전용면적</span>
                    <span className="info-value">{contract.property.area}㎡</span>
                </div>
                <div className="info-item">
                    <span className="info-label">층수</span>
                    <span className="info-value">{contract.property.floor}</span>
                </div>
                <div className="info-item highlight">
                    <span className="info-label">보증금</span>
                    <span className="info-value">{formatCurrency(contract.financial.deposit)}</span>
                </div>
                <div className="info-item">
                    <span className="info-label">월세</span>
                    <span className="info-value">
                        {contract.financial.monthlyRent === 0 ? '없음 (전세)' : formatCurrency(contract.financial.monthlyRent)}
                    </span>
                </div>
                <div className="info-item">
                    <span className="info-label">계약기간</span>
                    <span className="info-value">{calculateContractDuration()}</span>
                </div>
                <div className="info-item">
                    <span className="info-label">전세가율</span>
                    <span className="info-value accent">{contract.financial.jeonseRatio}%</span>
                </div>
            </div>
        </div>
    );
};

export default ContractSummaryCard;
