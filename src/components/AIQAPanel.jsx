import React, { useState } from 'react';
import './AIQAPanel.css';

const AIQAPanel = ({ contract }) => {
    const [messages, setMessages] = useState([
        {
            type: 'ai',
            text: '안녕하세요! 전세 계약 관련 궁금한 점을 물어보세요. 계약서 분석 결과를 바탕으로 답변해 드립니다.'
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    // 미리 정의된 Q&A 데이터 (데모용)
    const predefinedQA = [
        {
            keywords: ['보증금', '돌려받', '회수', '반환'],
            answer: '현재 계약서 분석 결과, 전세가율이 41%로 안정적인 수준입니다. 선순위 근저당 2억원이 설정되어 있지만, 감정가 대비 충분한 여유가 있어 보증금 회수 가능성이 높습니다. 다만, 전세보증보험 가입을 권장드립니다.'
        },
        {
            keywords: ['위험', '안전', '괜찮'],
            answer: '종합 위험도 점수는 72점(중간)입니다. 주요 위험 요소:\n• 전세보증보험 미가입 상태\n• 선순위 근저당 2억원 존재\n\n권장사항: HUG 또는 SGI 전세보증보험 가입을 적극 권장합니다.'
        },
        {
            keywords: ['전입신고', '확정일자', '대항력'],
            answer: '전입신고와 확정일자는 보증금 보호를 위해 필수입니다!\n\n• 전입신고: 입주 후 14일 이내 주민센터에서\n• 확정일자: 전입신고 당일 함께 신청\n• 대항력: 전입신고 익일 0시부터 발생\n\n잔금 지급일에 바로 전입신고하세요!'
        },
        {
            keywords: ['보증보험', 'HUG', 'SGI', '가입'],
            answer: '전세보증보험은 임대인이 보증금을 반환하지 못할 때 보증기관이 대신 지급해주는 보험입니다.\n\n• HUG(주택도시보증공사): 가장 일반적\n• SGI서울보증: 대안 상품\n\n현재 계약 조건으로 보증보험 가입이 가능합니다. 보증료는 약 15~20만원 수준입니다.'
        },
        {
            keywords: ['근저당', '저당', '담보'],
            answer: '현재 등기부등본상 선순위 근저당 2억원이 설정되어 있습니다.\n\n• 채권최고액: 2억원 (국민은행)\n• 감정가: 9억원\n• 전세보증금: 3.5억원\n\n(근저당 + 보증금) / 감정가 = 61%로 안전한 수준입니다.'
        },
        {
            keywords: ['등기', '소유자', '임대인', '명의'],
            answer: '등기부등본 확인 결과:\n\n• 소유자: 김철수\n• 계약서 임대인: 김철수\n\n소유자와 임대인이 일치합니다. 다만, 계약 전 신분증과 등기부등본을 대조하여 본인 확인을 권장합니다.'
        },
        {
            keywords: ['계약', '기간', '만료', '갱신'],
            answer: '현재 계약 정보:\n\n• 계약 기간: 2025.01.15 ~ 2027.01.14 (2년)\n• 계약 만료: 2027년 1월 14일\n• 갱신 통보 기한: 만료 6개월~1개월 전\n\n계약갱신청구권을 사용하면 1회 (2년) 추가 연장 가능합니다.'
        }
    ];

    const getAIResponse = (question) => {
        const lowerQuestion = question.toLowerCase();

        for (const qa of predefinedQA) {
            if (qa.keywords.some(keyword => lowerQuestion.includes(keyword))) {
                return qa.answer;
            }
        }

        return '죄송합니다. 해당 질문에 대한 정확한 답변을 찾지 못했습니다. 다음 키워드로 다시 질문해 보세요:\n\n• 보증금, 회수\n• 위험도, 안전\n• 전입신고, 확정일자\n• 보증보험, HUG\n• 근저당, 담보\n• 등기, 소유자\n• 계약 기간, 갱신';
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMessage = { type: 'user', text: inputValue };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // AI 응답 시뮬레이션 (1.5초 딜레이)
        setTimeout(() => {
            const aiResponse = { type: 'ai', text: getAIResponse(inputValue) };
            setMessages(prev => [...prev, aiResponse]);
            setIsTyping(false);
        }, 1500);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const quickQuestions = [
        '보증금 돌려받을 수 있어?',
        '이 계약 위험해?',
        '보증보험 가입해야 해?',
        '근저당이 뭐야?'
    ];

    return (
        <div className="ai-qa-panel card">
            <div className="card-header">
                <div className="card-icon ai-bg">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                </div>
                <h3 className="card-title">AI 계약 분석 상담</h3>
                <span className="demo-badge">DEMO</span>
            </div>

            <div className="chat-container">
                <div className="messages-area">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`message ${msg.type}`}>
                            {msg.type === 'ai' && (
                                <div className="avatar ai-avatar">AI</div>
                            )}
                            <div className="message-bubble">
                                <pre className="message-text">{msg.text}</pre>
                            </div>
                            {msg.type === 'user' && (
                                <div className="avatar user-avatar">나</div>
                            )}
                        </div>
                    ))}
                    {isTyping && (
                        <div className="message ai">
                            <div className="avatar ai-avatar">AI</div>
                            <div className="message-bubble typing">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="quick-questions">
                    {quickQuestions.map((q, idx) => (
                        <button
                            key={idx}
                            className="quick-btn"
                            onClick={() => {
                                setInputValue(q);
                            }}
                        >
                            {q}
                        </button>
                    ))}
                </div>

                <div className="input-area">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="계약 관련 질문을 입력하세요..."
                        className="chat-input"
                    />
                    <button
                        className="send-btn"
                        onClick={handleSend}
                        disabled={!inputValue.trim() || isTyping}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AIQAPanel;
