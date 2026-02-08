import React from 'react';
import './PrivacyTab.css';

/**
 * 개인정보 보호 탭 - 개인정보 처리 방침 및 보호 조치 안내
 */
const PrivacyTab = () => {
    const privacyPrinciples = [
        {
            title: '데이터 미저장 원칙',
            description: '업로드된 모든 문서는 서버에 저장되지 않습니다',
            details: [
                '계약서, 등기부등본 등 모든 문서는 브라우저 메모리에서만 처리',
                '분석 완료 즉시 메모리에서 삭제',
                '서버 전송 없이 클라이언트에서 직접 분석',
                '세션 종료 시 모든 데이터 자동 삭제'
            ]
        },
        {
            title: '개인정보 수집 최소화',
            description: '불필요한 개인정보를 수집하지 않습니다',
            details: [
                '회원가입/로그인 불필요',
                '이름, 연락처 등 개인식별정보 수집 없음',
                '쿠키/트래킹 사용 없음',
                '분석 이력 저장 없음'
            ]
        },
        {
            title: '브라우저 내 처리',
            description: '모든 분석은 사용자의 브라우저에서 처리됩니다',
            details: [
                'OCR 텍스트 추출: 브라우저 내 Tesseract.js 사용',
                '위험도 분석: JavaScript로 클라이언트 처리',
                '결과 PDF 생성: 브라우저에서 직접 생성',
                '네트워크 전송 최소화'
            ]
        },
        {
            title: '투명한 오픈소스',
            description: '코드가 공개되어 처리 방식을 직접 확인할 수 있습니다',
            details: [
                'GitHub에서 전체 소스코드 공개',
                '데이터 처리 로직 투명하게 확인 가능',
                '커뮤니티 보안 검토 가능',
                '개선 제안 및 기여 가능'
            ]
        }
    ];

    const technicalMeasures = [
        {
            category: '클라이언트 처리',
            items: [
                { measure: 'Tesseract.js', purpose: '브라우저 내 OCR 처리' },
                { measure: 'Web Worker', purpose: '메인 스레드와 분리된 처리' },
                { measure: 'Blob URL', purpose: '임시 파일 참조, 자동 해제' }
            ]
        },
        {
            category: '메모리 관리',
            items: [
                { measure: '즉시 삭제', purpose: '분석 후 Blob/ObjectURL 해제' },
                { measure: 'WeakRef', purpose: '자동 가비지 컬렉션' },
                { measure: '세션 스토리지', purpose: '브라우저 종료 시 자동 삭제' }
            ]
        },
        {
            category: '보안 조치',
            items: [
                { measure: 'HTTPS', purpose: '전송 구간 암호화' },
                { measure: 'CSP', purpose: '외부 스크립트 차단' },
                { measure: 'SRI', purpose: '라이브러리 무결성 검증' }
            ]
        }
    ];

    const userRights = [
        { right: '열람권', description: '처리되는 개인정보 확인 (수집 없음으로 해당 없음)' },
        { right: '삭제권', description: '데이터 미저장으로 자동 보장' },
        { right: '거부권', description: '언제든 서비스 이용 중단 가능' },
        { right: '이의제기권', description: '개인정보 처리에 대한 문의 가능' }
    ];

    return (
        <div className="privacy-tab">
            <div className="privacy-header">
                <h2>개인정보 보호</h2>
                <p>전세사기 예방 웹앱의 개인정보 처리 방침</p>
            </div>

            <div className="privacy-summary">
                <div className="summary-card highlight">
                    <h3>핵심 원칙</h3>
                    <p><strong>서버 저장 없음</strong> - 모든 데이터는 브라우저에서만 처리되며, 어떠한 개인정보도 수집하거나 저장하지 않습니다.</p>
                </div>
            </div>

            <section className="privacy-section">
                <h3>개인정보 보호 원칙</h3>
                <div className="principles-grid">
                    {privacyPrinciples.map((principle, idx) => (
                        <div key={idx} className="principle-card">
                            <h4>{principle.title}</h4>
                            <p className="principle-desc">{principle.description}</p>
                            <ul>
                                {principle.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section className="privacy-section">
                <h3>기술적 보호 조치</h3>
                <div className="measures-grid">
                    {technicalMeasures.map((category, idx) => (
                        <div key={idx} className="measure-card">
                            <h4>{category.category}</h4>
                            <table>
                                <thead>
                                    <tr>
                                        <th>기술</th>
                                        <th>목적</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {category.items.map((item, i) => (
                                        <tr key={i}>
                                            <td><code>{item.measure}</code></td>
                                            <td>{item.purpose}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </section>

            <section className="privacy-section">
                <h3>사용자 권리</h3>
                <div className="rights-list">
                    {userRights.map((item, idx) => (
                        <div key={idx} className="right-item">
                            <span className="right-name">{item.right}</span>
                            <span className="right-desc">{item.description}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="privacy-section">
                <h3>데이터 흐름도</h3>
                <div className="data-flow">
                    <div className="flow-step">
                        <div className="flow-icon">1</div>
                        <div className="flow-content">
                            <h5>문서 업로드</h5>
                            <p>사용자 브라우저 메모리에 로드</p>
                        </div>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step">
                        <div className="flow-icon">2</div>
                        <div className="flow-content">
                            <h5>OCR 분석</h5>
                            <p>브라우저 내 텍스트 추출</p>
                        </div>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step">
                        <div className="flow-icon">3</div>
                        <div className="flow-content">
                            <h5>위험도 평가</h5>
                            <p>클라이언트 JavaScript 처리</p>
                        </div>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step">
                        <div className="flow-icon">4</div>
                        <div className="flow-content">
                            <h5>결과 표시</h5>
                            <p>화면 출력 후 메모리 삭제</p>
                        </div>
                    </div>
                </div>
                <p className="flow-note">* 전 과정에서 서버 전송 없음</p>
            </section>

            <section className="privacy-section contact-section">
                <h3>문의처</h3>
                <p>개인정보 처리에 관한 문의사항이 있으시면 아래로 연락해 주세요.</p>
                <div className="contact-info">
                    <p><strong>이메일:</strong> privacy@constract.kr</p>
                    <p><strong>GitHub:</strong> github.com/constract/constract-app</p>
                </div>
            </section>
        </div>
    );
};

export default PrivacyTab;
