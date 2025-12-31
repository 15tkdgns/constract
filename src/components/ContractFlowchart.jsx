import React from 'react';
import './ContractFlowchart.css';

const ContractFlowchart = () => {
    return (
        <div className="flowchart-container card">
            <div className="card-header">
                <div className="card-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
                    </svg>
                </div>
                <h2 className="card-title">전월세 계약 프로세스</h2>
            </div>

            <p className="flowchart-desc">
                계약 전 확인사항부터 입주 완료까지의 전체 프로세스입니다.
            </p>

            <div className="flow-wrapper">
                {/* Phase 1: 계약 전 */}
                <div className="flow-phase">
                    <div className="phase-header">
                        <span className="phase-number">1</span>
                        <span className="phase-title">계약 전 확인</span>
                    </div>
                    <div className="phase-nodes">
                        <div className="flow-node">매물 탐색</div>
                        <div className="flow-connector horizontal"></div>
                        <div className="flow-node">등기부등본 열람</div>
                        <div className="flow-connector horizontal"></div>
                        <div className="flow-node highlight">
                            소유자 확인
                            <span className="node-badge success">필수</span>
                        </div>
                        <div className="flow-connector horizontal"></div>
                        <div className="flow-node highlight">
                            근저당권 확인
                            <span className="node-badge warning">주의</span>
                        </div>
                    </div>
                </div>

                <div className="flow-connector-vertical"></div>

                {/* Phase 2: 계약 체결 */}
                <div className="flow-phase">
                    <div className="phase-header">
                        <span className="phase-number">2</span>
                        <span className="phase-title">계약 체결</span>
                    </div>
                    <div className="phase-nodes">
                        <div className="flow-node">계약서 작성</div>
                        <div className="flow-connector horizontal"></div>
                        <div className="flow-node">
                            특약사항 검토
                            <span className="node-badge info">AI 분석</span>
                        </div>
                        <div className="flow-connector horizontal"></div>
                        <div className="flow-node">계약금 지급 (10%)</div>
                    </div>
                </div>

                <div className="flow-connector-vertical"></div>

                {/* Phase 3: 잔금 및 입주 */}
                <div className="flow-phase">
                    <div className="phase-header">
                        <span className="phase-number">3</span>
                        <span className="phase-title">잔금 및 입주</span>
                    </div>
                    <div className="phase-nodes">
                        <div className="flow-node">잔금 지급</div>
                        <div className="flow-connector horizontal"></div>
                        <div className="flow-node">열쇠 인수</div>
                        <div className="flow-connector horizontal"></div>
                        <div className="flow-node">시설물 점검</div>
                    </div>
                </div>

                <div className="flow-connector-vertical"></div>

                {/* Phase 4: 권리 보전 */}
                <div className="flow-phase">
                    <div className="phase-header">
                        <span className="phase-number">4</span>
                        <span className="phase-title">권리 보전</span>
                    </div>
                    <div className="phase-nodes">
                        <div className="flow-node highlight">
                            전입신고
                            <span className="node-badge danger">당일</span>
                        </div>
                        <div className="flow-connector horizontal"></div>
                        <div className="flow-node highlight">
                            확정일자
                            <span className="node-badge danger">당일</span>
                        </div>
                        <div className="flow-connector horizontal"></div>
                        <div className="flow-node">
                            보증보험 가입
                            <span className="node-badge success">권장</span>
                        </div>
                    </div>
                </div>

                <div className="flow-connector-vertical success"></div>

                {/* Phase 5: 완료 */}
                <div className="flow-phase end">
                    <div className="flow-node result success">입주 완료</div>
                </div>
            </div>

            {/* AI 분석 플로우 */}
            <div className="ai-flow-section">
                <h3 className="section-subtitle">AI 계약서 분석 프로세스</h3>
                <div className="ai-flow">
                    <div className="ai-step">
                        <div className="ai-step-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                            </svg>
                        </div>
                        <span>계약서 업로드</span>
                    </div>
                    <div className="ai-arrow"></div>
                    <div className="ai-step">
                        <div className="ai-step-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </div>
                        <span>OCR 텍스트 추출</span>
                    </div>
                    <div className="ai-arrow"></div>
                    <div className="ai-step">
                        <div className="ai-step-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                <path d="M2 17l10 5 10-5" />
                                <path d="M2 12l10 5 10-5" />
                            </svg>
                        </div>
                        <span>NER 개체 인식</span>
                    </div>
                    <div className="ai-arrow"></div>
                    <div className="ai-step">
                        <div className="ai-step-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                <line x1="12" y1="9" x2="12" y2="13" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                        </div>
                        <span>위험 조항 탐지</span>
                    </div>
                    <div className="ai-arrow"></div>
                    <div className="ai-step highlight">
                        <div className="ai-step-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                        </div>
                        <span>시각화 리포트</span>
                    </div>
                </div>
            </div>

            {/* 위험 탐지 분류 */}
            <div className="risk-detection-section">
                <h3 className="section-subtitle">위험 탐지 분류</h3>
                <div className="risk-categories">
                    <div className="risk-category danger">
                        <div className="category-header">
                            <span className="category-icon">!</span>
                            <span className="category-title">고위험</span>
                        </div>
                        <ul className="category-list">
                            <li>전세가율 80% 초과</li>
                            <li>근저당권 선순위</li>
                            <li>임대인 불일치</li>
                        </ul>
                    </div>
                    <div className="risk-category warning">
                        <div className="category-header">
                            <span className="category-icon">?</span>
                            <span className="category-title">주의</span>
                        </div>
                        <ul className="category-list">
                            <li>특약조항 누락</li>
                            <li>보증보험 미가입</li>
                            <li>중개사 미확인</li>
                        </ul>
                    </div>
                    <div className="risk-category success">
                        <div className="category-header">
                            <span className="category-icon">✓</span>
                            <span className="category-title">안전</span>
                        </div>
                        <ul className="category-list">
                            <li>전세가율 60% 이하</li>
                            <li>실소유자 확인</li>
                            <li>HUG 보증 가입</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContractFlowchart;
