# Constract - 전세 계약 시각화 프로젝트

> 전세 계약서 분석 및 사기 예방을 위한 시각화 시스템

---

## 1. 프로젝트 개요

### 1.1 프로젝트 목적
- 복잡한 법률 문서(전세 계약서)를 시각적으로 이해하기 쉽게 변환
- 전세 사기 유형별 위험 신호를 교육하고 예방
- 사용자가 직접 계약서와 등기부등본을 분석할 수 있는 도구 제공

### 1.2 프로젝트 구성
| 프로젝트 | 용도 | 경로 | 상태 |
|---------|------|-----|------|
| **constract** | 발표용 대시보드 | `/root/constract` | 개발 완료 |
| **constract-app** | 전세사기 예방 웹앱 | `/root/constract-app` | 구조 생성 |

### 1.3 기술 스택
| 분류 | 기술 |
|------|-----|
| 프레임워크 | React 18 |
| 빌드 도구 | Vite 5.4 |
| 그래프 시각화 | @xyflow/react |
| 차트 | Chart.js + react-chartjs-2 |
| 스타일링 | Vanilla CSS (CSS Variables) |
| 개발 환경 | WSL2 Ubuntu 24.04 |

---

## 2. 대시보드 상세 (constract)

### 2.1 메인 탭 구조 (6개)

#### 탭 1: 공통사항 (`OverviewTab`)
- 프로젝트 소개 및 목표
- 주요 기능 4가지 소개
- 기술 스택 표시
- 개발 목표 및 비전

#### 탭 2: 계약서별 시각화 (`ContractAnalysisTab`)
3개 서브탭:
- **단순 계약서**: 기본 엔티티 그래프 (관계 그래프, 허브 레이아웃)
- **복잡 계약서**: 불리조항 탐지 분석
- **사기 사례**: 8가지 사기 유형 시각화

#### 탭 3: 분석 도구 (`AnalysisToolsTab`)
- 전세가율 계산기
- 위험도 체크 위자드
- 전문가 추천 정보

#### 탭 4: 설계 구조 (`ArchitectureTab`)
- 시스템 아키텍처 다이어그램
- 컴포넌트 구조 설명
- 데이터 흐름도

#### 탭 5: 레퍼런스 (`ReferenceTab` → `StructureReferencePage`)
3개 서브탭:
- **구조**: 프로젝트 구조 시각화
- **주요 선행연구**: 5편 논문 상세
- **참고문헌**: 학술 자료 목록

#### 탭 6: 개인정보 (`PrivacyTab`)
- 개인정보 보호 원칙 4가지
- 기술적 보호 조치
- 사용자 권리
- 데이터 흐름도

---

### 2.2 사기 사례 분석 상세 (8가지)

#### Case 1: 깡통전세
| 항목 | 내용 |
|-----|------|
| 위험도 | Critical (매우 위험) |
| 설명 | 매매가 대비 전세보증금이 과도하여 시세 하락 시 보증금 미회수 |
| 시각화 | 게이지 차트 (전세가율 95% 표시) |
| 위험 행위 | 시세 확인 없이 계약, 전세가율 80% 이상 물건 계약 등 |
| 안전 행위 | KB시세 직접 확인, 전세가율 70% 이하 선택 등 |

#### Case 2: 소유자-임대인 불일치
| 항목 | 내용 |
|-----|------|
| 위험도 | High (위험) |
| 설명 | 등기부상 소유자와 계약서상 임대인이 다른 경우 |
| 시각화 | 비교 박스 (불일치 표시) |
| 위험 행위 | 등기부등본 확인 없이 계약, 대리인 말만 신뢰 |
| 안전 행위 | 인터넷등기소에서 직접 발급, 실소유자 대면 확인 |

#### Case 3: 보증보험 미가입
| 항목 | 내용 |
|-----|------|
| 위험도 | High (위험) |
| 설명 | 임대인 파산 시 보증금 미회수 가능 |
| 시각화 | HUG/SGI 보험 상태 표시 |
| 위험 행위 | 보증보험 없이 고액 계약, 전입신고 미루기 |
| 안전 행위 | 계약 전 보험 가입 조건 확인, 입주 당일 전입신고 |

#### Case 4: 선순위 권리 과다
| 항목 | 내용 |
|-----|------|
| 위험도 | Critical (매우 위험) |
| 설명 | 내 보증금보다 선순위 채권이 많아 경매 시 회수 불가 |
| 시각화 | 스택 바 차트 (근저당/선순위/내 보증금) |
| 위험 행위 | 등기부 을구 확인 생략, 법무사 분석 없이 계약 |
| 안전 행위 | 근저당 + 선순위 < 시세 70% 확인, 배당순위 시뮬레이션 |

#### Case 5: 대리인 계약 사기
| 항목 | 내용 |
|-----|------|
| 위험도 | Critical (매우 위험) |
| 설명 | 위조된 위임장으로 대리인이 계약하여 보증금 편취 |
| 시각화 | 위임 관계도 (실소유자 ↔ 가짜 대리인) |
| 위험 행위 | 위임장 사본만 확인, 대리인 계좌로 송금 |
| 안전 행위 | 위임장 공증 확인, 실소유자 영상통화, 실소유자 계좌 송금 |

#### Case 6: 이중계약 사기
| 항목 | 내용 |
|-----|------|
| 위험도 | Critical (매우 위험) |
| 설명 | 같은 물건에 여러 명과 계약하여 보증금 다중 수령 |
| 시각화 | 타임라인 (A씨 계약 → B씨 계약 → 잠적) |
| 위험 행위 | 급하다는 말에 서류 검토 생략, 확정일자 미루기 |
| 안전 행위 | 입주 즉시 전입신고 + 확정일자, 이웃 탐문 |

#### Case 7: 전세 사기단
| 항목 | 내용 |
|-----|------|
| 위험도 | Critical (매우 위험) |
| 설명 | 중개사-임대인-법무사가 공모한 조직적 전세 사기 |
| 시각화 | 네트워크 그래프 (공모 관계) |
| 위험 행위 | 중개사 소개 법무사만 이용, 등기부 직접 발급 안함 |
| 안전 행위 | 공인중개사 자격증 조회, 등기부 직접 발급, 법무사 직접 선정 |

#### Case 8: 근저당 급증 사기
| 항목 | 내용 |
|-----|------|
| 위험도 | High (위험) |
| 설명 | 계약 체결 후 잔금 전까지 근저당 추가 설정 |
| 시각화 | 권리변동 타임라인 (계약일 → 잔금일) |
| 위험 행위 | 계약 후 등기부 재확인 안함, 특약 누락 |
| 안전 행위 | 잔금 당일 등기부 재확인, 권리변동 금지 특약 |

---

### 2.3 선행연구 섹션 (5편)

각 논문 구조:
1. **기본 정보 및 연구 질문**
2. **방법론 상세**
3. **실증 결과**
4. **차별점**

| 논문 | 저자 | 연도 |
|-----|-----|------|
| Design Thinking, Visualization and Law | Helena Haapio, Michael D. Passera | 2020 |
| From Visualization to Legal Design | Thomas D. Barton | 2019 |
| Using Legal Visualization to Teach Law | Colette R. Brunschwig | 2021 |
| Visual Contracts in Practice: EU Implementation | Stefania Passera, Helena Haapio | 2022 |
| Legal Design Thinking: A Practical Guide | Margaret Hagan | 2023 |

---

## 3. 웹앱 상세 (constract-app)

### 3.1 핵심 기능
1. **문서 업로드**: 계약서 + 등기부등본 (PDF/이미지)
2. **OCR 분석**: Tesseract.js로 브라우저 내 텍스트 추출
3. **위험도 평가**: 8가지 사기 유형 자동 체크
4. **결과 제공**: 위험도 점수 + PDF 보고서

### 3.2 개인정보 보호 원칙
| 원칙 | 설명 |
|-----|------|
| 데이터 미저장 | 서버에 어떠한 문서도 저장하지 않음 |
| 클라이언트 처리 | 모든 분석은 브라우저 내에서 처리 |
| 즉시 삭제 | 분석 완료 후 메모리에서 자동 삭제 |
| 정보 수집 없음 | 회원가입/로그인 불필요, 쿠키 미사용 |

### 3.3 폴더 구조
```
constract-app/
├── README.md           # 프로젝트 개요
├── src/
│   ├── components/     # FileUploader, DocumentViewer, RiskIndicator 등
│   ├── pages/          # HomePage, UploadPage, AnalysisPage 등
│   ├── services/       # ocrService, analysisService, fileService
│   ├── utils/          # formatters, validators, parsers, riskCalculator
│   ├── hooks/          # useFileUpload, useAnalysis, useOCR
│   ├── assets/         # 이미지, 아이콘
│   └── styles/         # 전역 CSS
├── public/             # 정적 파일
└── docs/               # API 스펙, 위험 기준 문서
```

---

## 4. 프로젝트 구조 (constract)

### 4.1 주요 컴포넌트
```
src/components/
├── DashboardLayout.jsx     # 메인 레이아웃 (6개 탭)
├── ContractTextGraph.jsx   # 계약서 엔티티 그래프
├── ContractEntityViews.jsx # 그래프/허브 뷰 전환
├── FraudCaseVisualization.jsx  # 8가지 사기 사례
├── AdvancedContractAnalysis.jsx # 복잡 계약서 분석
├── JeonseGaugeChart.jsx    # 전세가율 게이지
├── RiskCheckWizard.jsx     # 위험도 체크 위자드
├── StructureReferencePage.jsx  # 레퍼런스 탭
└── tabs/
    ├── OverviewTab.jsx
    ├── ContractAnalysisTab.jsx
    ├── AnalysisToolsTab.jsx
    ├── ArchitectureTab.jsx
    ├── ReferenceTab.jsx
    └── PrivacyTab.jsx
```

### 4.2 데이터 구조 (사기 사례)
```javascript
{
    id: 1,
    title: '깡통전세',
    subtitle: '전세가율 과도',
    riskLevel: 'critical',
    description: '...',
    visualization: { type: 'gauge', data: {...} },
    riskyBehaviors: ['...', '...'],   // 위험 행위 5개
    safeBehaviors: ['...', '...'],    // 안전 행위 5개
    warnings: ['...'],
    recommendations: ['...']
}
```

---

## 5. 실행 방법

### 대시보드 실행
```bash
cd /root/constract
npm install
npm run dev -- --host 0.0.0.0
```
- 로컬: http://localhost:5173/
- 네트워크: http://172.25.83.66:5173/

---

## 6. 향후 계획

### 웹앱 개발
- [ ] Vite 프로젝트 초기화
- [ ] 파일 업로드 컴포넌트
- [ ] Tesseract.js OCR 통합
- [ ] 위험도 분석 로직 구현
- [ ] PDF 보고서 생성

### 대시보드 개선
- [ ] 반응형 디자인 최적화
- [ ] 추가 사기 사례 확장
- [ ] 다국어 지원

---

## 7. 최근 변경 이력

| 날짜 | 변경 내용 |
|-----|----------|
| 2026-01-17 | 개인정보 보호 탭 추가 |
| 2026-01-17 | 웹앱 프로젝트 폴더 구조 생성 |
| 2026-01-15 | 사기 시나리오 8개로 확장 |
| 2026-01-15 | 각 시나리오 상세 행위 추가 |
| 2026-01-15 | 선행연구 5편 구조화 |
