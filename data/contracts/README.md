# 계약서 데이터 폴더

이 폴더는 전세/월세 계약서 관련 데이터를 관리합니다.

## 폴더 구조

```
data/contracts/
├── README.md              # 폴더 설명
├── sample_contracts.json  # 샘플 계약서 데이터
├── sources.md             # 데이터 출처 정보
```

## 샘플 데이터 설명

`sample_contracts.json` 파일에는 3개의 샘플 계약서가 포함되어 있습니다:

| 번호 | 유형 | 위치 | 보증금 | 위험도 | 설명 |
|------|------|------|--------|--------|------|
| 1 | 전세 | 강남구 | 3.5억 | 보통 | 일반적인 전세 계약 |
| 2 | 월세 | 마포구 | 3천만/90만 | 낮음 | 보증보험 가입 |
| 3 | 전세 | 분당구 | 6.5억 | 위험 | 고위험 갭투자 사례 |

## 데이터 필드 설명

### 부동산 정보 (`property`)
- `address`: 전체 주소
- `type`: 건물 유형 (아파트, 오피스텔 등)
- `area`: 면적 (㎡)
- `floor`: 층수

### 당사자 정보
- `landlord`: 임대인 정보
- `tenant`: 임차인 정보
- `agent`: 중개사 정보

### 금융 정보 (`financial`)
- `deposit`: 보증금
- `monthlyRent`: 월세
- `marketPrice`: 시세
- `jeonseRatio`: 전세가율

### 권리관계 (`rights`)
- `seniorMortgage`: 선순위 근저당
- `seniorTenant`: 선순위 임차인
- `expectedRecovery`: 예상 회수금액

### 위험도 (`risk`)
- `score`: 위험 점수 (0-100)
- `level`: 위험 등급 (low, medium, high, critical)
- `factors`: 위험 요인 목록
