import React, { useState } from 'react';
import './ExpertRecommendation.css';

const ExpertRecommendation = ({ region = '강남구' }) => {
    const [activeTab, setActiveTab] = useState('lawyer');

    // 샘플 전문가 데이터 (데모용)
    const experts = {
        lawyer: [
            {
                id: 1,
                name: '김법무',
                office: '강남법무사사무소',
                specialty: '부동산등기, 전세계약',
                rating: 4.9,
                reviews: 328,
                experience: '15년',
                verified: true,
                phone: '02-555-1234',
                address: '서울 강남구 테헤란로 123',
                description: '전세 사기 예방 전문, 등기부등본 분석 무료 상담'
            },
            {
                id: 2,
                name: '이등기',
                office: '신뢰법무사',
                specialty: '임대차계약, 권리분석',
                rating: 4.8,
                reviews: 256,
                experience: '12년',
                verified: true,
                phone: '02-555-2345',
                address: '서울 강남구 역삼로 456',
                description: '주택임대차보호법 전문, 신속한 권리관계 분석'
            },
            {
                id: 3,
                name: '박안전',
                office: '안심법무사',
                specialty: '전세보증, 경매',
                rating: 4.7,
                reviews: 189,
                experience: '10년',
                verified: true,
                phone: '02-555-3456',
                address: '서울 강남구 선릉로 789',
                description: '경매/공매 전문, 전세보증보험 가입 지원'
            }
        ],
        agent: [
            {
                id: 4,
                name: '최중개',
                office: '행복공인중개사사무소',
                specialty: '아파트 전월세',
                rating: 4.9,
                reviews: 512,
                experience: '20년',
                verified: true,
                phone: '02-333-1234',
                address: '서울 강남구 대치동 890',
                description: '강남 지역 20년 전문, 안전한 매물만 엄선'
            },
            {
                id: 5,
                name: '정공인',
                office: '신뢰부동산',
                specialty: '오피스텔, 빌라',
                rating: 4.8,
                reviews: 423,
                experience: '15년',
                verified: true,
                phone: '02-333-2345',
                address: '서울 강남구 논현동 123',
                description: '임차인 권리보호 우선, 계약 전 등기부 무료 분석'
            },
            {
                id: 6,
                name: '한부동',
                office: '스마트공인중개사',
                specialty: '원룸, 투룸',
                rating: 4.6,
                reviews: 298,
                experience: '8년',
                verified: true,
                phone: '02-333-3456',
                address: '서울 강남구 삼성동 456',
                description: '청년 전세 전문, 보증보험 가입 가능 매물 위주'
            }
        ]
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalf = rating % 1 >= 0.5;
        const stars = [];

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<span key={i} className="star full">★</span>);
            } else if (i === fullStars && hasHalf) {
                stars.push(<span key={i} className="star half">★</span>);
            } else {
                stars.push(<span key={i} className="star empty">★</span>);
            }
        }
        return stars;
    };

    const currentExperts = experts[activeTab];

    return (
        <div className="expert-recommendation card">
            <div className="card-header">
                <div className="card-icon expert-bg">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                </div>
                <h3 className="card-title">{region} 추천 전문가</h3>
                <span className="demo-badge">DEMO</span>
            </div>

            <div className="expert-tabs">
                <button
                    className={`expert-tab ${activeTab === 'lawyer' ? 'active' : ''}`}
                    onClick={() => setActiveTab('lawyer')}
                >
                    <span className="tab-icon">⚖️</span>
                    <span>법무사</span>
                </button>
                <button
                    className={`expert-tab ${activeTab === 'agent' ? 'active' : ''}`}
                    onClick={() => setActiveTab('agent')}
                >
                    <span className="tab-icon">🏠</span>
                    <span>공인중개사</span>
                </button>
            </div>

            <div className="experts-list">
                {currentExperts.map((expert, idx) => (
                    <div key={expert.id} className="expert-card">
                        <div className="expert-rank">#{idx + 1}</div>
                        <div className="expert-info">
                            <div className="expert-header">
                                <h4 className="expert-name">
                                    {expert.name}
                                    {expert.verified && <span className="verified-badge">✓ 인증</span>}
                                </h4>
                                <span className="expert-experience">{expert.experience} 경력</span>
                            </div>
                            <p className="expert-office">{expert.office}</p>
                            <p className="expert-specialty">{expert.specialty}</p>
                            <p className="expert-description">{expert.description}</p>
                            <div className="expert-rating">
                                <div className="stars">{renderStars(expert.rating)}</div>
                                <span className="rating-value">{expert.rating}</span>
                                <span className="review-count">({expert.reviews}개 리뷰)</span>
                            </div>
                        </div>
                        <div className="expert-actions">
                            <button className="action-btn call">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                전화
                            </button>
                            <button className="action-btn consult">상담 예약</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="disclaimer">
                <p>* 본 추천은 데모용 샘플 데이터입니다. 실제 전문가 정보와 다를 수 있습니다.</p>
            </div>
        </div>
    );
};

export default ExpertRecommendation;
