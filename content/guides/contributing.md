---
title: Contributing Guide
tags: [guide]
---

PACL Wiki에 기여하는 방법을 안내합니다.

## 문서 유형

위키에는 두 가지 유형의 문서가 있습니다:

### Concept (개념 정리)
특정 주제에 대한 개념 설명, 정의, 예시 등을 담는 문서입니다. 각 주제 폴더 루트에 위치합니다.

### Paper (논문 노트)
읽은 논문의 요약, 핵심 기여, 개인 메모 등을 담는 문서입니다. 각 주제의 `papers/` 하위 폴더에 위치합니다.

## 문서 작성법

### 1. 적절한 위치에 파일 생성

- Concept: 주제 폴더 루트 → `sca/dpa.md`, `pqc/ml-kem.md`
- Paper: 주제의 papers/ 폴더 → `sca/papers/kim-2024-masking.md`

### 2. Frontmatter 작성

모든 문서는 YAML frontmatter로 시작합니다.

**Concept 템플릿:**
```yaml
---
title: "주제 이름"
tags: [concept, sca, masking]
---
```

**Paper 템플릿:**
```yaml
---
title: "논문 제목 (저자, 연도)"
tags: [paper, sca, pqc, masking]
---
```

### 3. 태그 규칙

| 태그 유형 | 예시 | 필수 여부 |
|---|---|---|
| 노트 유형 | `concept`, `paper`, `tutorial` | 필수 |
| 연구 분야 | `sca`, `pqc`, `pet`, `quantum`, `security` | 필수 |
| 세부 주제 | `masking`, `lattice`, `ckks`, `v2x` | 권장 |

### 4. Wikilink 활용

관련 문서는 반드시 `[[wikilink]]`로 연결합니다. Quartz의 Graph view와 Backlinks에서 자동으로 연결이 표시됩니다.

```markdown
이 공격에 대한 대응 기법은 [[sca/masking]]을 참고하세요.
```

## Paper Note 작성 예시

`sca/papers/kim-2025-masking-kyber.md`:

```markdown
---
title: "Higher-Order Masking of Kyber (Kim et al., CHES 2025)"
tags: [paper, sca, pqc, masking, lattice]
---

## 서지 정보

- **저자**: Kim, Lee, Park
- **학회**: CHES 2025
- **링크**: https://doi.org/...

## 요약

> 한 문단으로 논문의 핵심 내용을 요약합니다.

## 핵심 기여

1. ...
2. ...

## 방법론

> 논문의 접근 방식을 설명합니다.

## 실험 결과

> 주요 실험 결과를 정리합니다.

## 메모

> 개인적인 생각, 의문점, 후속 연구 아이디어 등을 기록합니다.

## 관련 문서

- [[sca/masking]] — 마스킹 기법 개요
- [[pqc/ml-kem]] — ML-KEM 알고리즘
```

## 로컬 개발

```bash
# 의존성 설치
npm install

# 로컬 서버 실행
npx quartz build --serve
```

수정 후 브라우저에서 `http://localhost:8080`으로 확인할 수 있습니다.
