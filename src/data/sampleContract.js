// 샘플 전월세 계약 데이터
export const sampleContract = {
    property: {
        address: '서울특별시 강남구 테헤란로 123, 삼성아파트 101동 1502호',
        addressShort: '강남구 테헤란로 123',
        type: '아파트',
        area: 84.5,
        floor: '15층/25층',
        built: 2018,
    },

    landlord: {
        name: '김**',
        isOwner: true,
        contact: '010-****-1234',
    },

    tenant: {
        name: '이**',
        contact: '010-****-5678',
    },

    agent: {
        name: '강남공인중개사사무소',
        license: '제12345호',
        contact: '02-555-1234',
    },

    financial: {
        deposit: 350000000,
        monthlyRent: 0,
        marketPrice: 900000000,
        appraisalValue: 850000000,
        jeonseRatio: 41.2,
    },

    period: {
        contractDate: '2024-11-15',
        moveInDate: '2025-01-15',
        registrationDeadline: '2025-01-16',
        endDate: '2027-01-14',
        returnDate: '2027-01-15',
    },

    rights: {
        seniorMortgage: 200000000,
        seniorTenant: 0,
        myDeposit: 350000000,
        totalLiability: 550000000,
        expectedRecovery: 300000000,
    },

    risk: {
        score: 72,
        level: 'medium',
        factors: [
            { type: 'warning', text: '전세가율 41.2%로 안정적 수준' },
            { type: 'danger', text: '근저당 2억원 설정 확인 필요' },
            { type: 'success', text: '임대인이 실소유자로 확인됨' },
        ],
        topRisks: [
            '근저당권 설정 2억원 존재',
            '전세보증보험 미가입 상태',
            '계약갱신청구권 사용 불가',
        ],
    },

    insurance: {
        hasHGI: false,
        hasSeoulGuarantee: false,
        hasSGI: false,
    },
};

export const timelineEvents = [
    {
        id: 1,
        date: '2024-11-15',
        title: '계약 체결',
        status: 'completed',
        tasks: ['계약서 서명', '계약금 10% 지급'],
    },
    {
        id: 2,
        date: '2025-01-15',
        title: '잔금일',
        status: 'upcoming',
        tasks: ['잔금 지급', '열쇠 인수', '가스/수도 검침'],
    },
    {
        id: 3,
        date: '2025-01-16',
        title: '전입신고·확정일자',
        status: 'upcoming',
        tasks: ['주민센터 전입신고', '확정일자 받기'],
    },
    {
        id: 4,
        date: '2027-01-14',
        title: '계약 종료',
        status: 'future',
        tasks: ['갱신 여부 결정', '이사 준비'],
    },
    {
        id: 5,
        date: '2027-01-15',
        title: '보증금 반환',
        status: 'future',
        tasks: ['보증금 수령', '열쇠 반환'],
    },
];

export const mindMapNodes = {
    center: {
        id: 'property',
        label: '강남구 테헤란로 123',
        type: 'property',
    },
    primaryNodes: [
        { id: 'landlord', label: '임대인', type: 'person' },
        { id: 'tenant', label: '임차인', type: 'person' },
        { id: 'agent', label: '중개사', type: 'organization' },
        { id: 'bank', label: '금융기관', type: 'organization' },
        { id: 'insurance', label: '보증기관', type: 'organization' },
    ],
    secondaryNodes: {
        landlord: [
            { id: 'owner-status', label: '실소유자 확인', status: 'safe' },
            { id: 'mortgage', label: '근저당 2억', status: 'warning' },
        ],
        tenant: [
            { id: 'deposit', label: '보증금 3.5억', status: 'neutral' },
            { id: 'rent', label: '월세 없음', status: 'neutral' },
        ],
        property: [
            { id: 'market-price', label: '시세 9억', status: 'neutral' },
            { id: 'jeonse-ratio', label: '전세가율 41%', status: 'safe' },
        ],
        bank: [
            { id: 'mortgage-bank', label: '국민은행', status: 'neutral' },
        ],
        insurance: [
            { id: 'hgi', label: 'HUG 미가입', status: 'danger' },
            { id: 'sgi', label: 'SGI 미가입', status: 'danger' },
        ],
    },
};

export const rightsChartData = {
    labels: ['선순위 근저당', '선순위 임차인', '내 보증금', '여유분'],
    datasets: [
        {
            data: [200000000, 0, 350000000, 300000000],
            backgroundColor: ['#ef4444', '#f97316', '#3b82f6', '#22c55e'],
            borderWidth: 0,
        },
    ],
    appraisalValue: 850000000,
    recoveryAmount: 300000000,
};
