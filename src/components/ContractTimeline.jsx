import React from 'react';
import './ContractTimeline.css';

const ContractTimeline = ({ events }) => {
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return {
            month: date.toLocaleDateString('ko-KR', { month: 'short' }),
            day: date.getDate(),
            year: date.getFullYear(),
        };
    };

    const getStatusClass = (status) => {
        switch (status) {
            case 'completed': return 'completed';
            case 'upcoming': return 'upcoming';
            default: return 'future';
        }
    };

    return (
        <div className="timeline-card card">
            <div className="card-header">
                <div className="card-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                </div>
                <h2 className="card-title">계약 일정</h2>
            </div>

            <div className="timeline">
                {events.map((event, index) => {
                    const date = formatDate(event.date);
                    const isLast = index === events.length - 1;

                    return (
                        <div key={event.id} className={`timeline-item ${getStatusClass(event.status)}`}>
                            <div className="timeline-date">
                                <span className="date-year">{date.year}</span>
                                <span className="date-day">{date.month} {date.day}</span>
                            </div>
                            <div className="timeline-connector">
                                <div className="timeline-dot">
                                    {event.status === 'completed' && (
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    )}
                                </div>
                                {!isLast && <div className="timeline-line"></div>}
                            </div>
                            <div className="timeline-content">
                                <h3 className="timeline-title">{event.title}</h3>
                                <div className="timeline-tasks">
                                    {event.tasks.map((task, i) => (
                                        <span key={i} className="task-tag">{task}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ContractTimeline;
