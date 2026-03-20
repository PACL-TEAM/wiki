---
title: SCA
tags: [sca]
---

부채널 분석(Side-Channel Analysis)은 PACL의 핵심 연구 분야입니다. 암호 알고리즘의 물리적 구현에서 발생하는 부채널 정보(전력, 전자파, 타이밍 등)를 분석하여 비밀 정보를 추출하거나, 이를 방어하는 대응책을 연구합니다.

## Concepts

### Attacks
- SPA (Simple Power Analysis)
- DPA (Differential Power Analysis)
- CPA (Correlation Power Analysis)
- Fault Injection
- EM (Electromagnetic) Analysis
- Timing Attacks

### Countermeasures
- 마스킹 (Boolean, arithmetic, higher-order)
- 셔플링 (Shuffling)
- Hiding 기법
- Constant-time 구현

### Implementation
- FPGA / ASIC 구현
- SW 최적화 및 벤치마킹

### Tools
- ChipWhisperer
- 오실로스코프 사용법
- 분석 프레임워크 (SCARR, Lascar 등)

## [[sca/papers/index|Papers]]

## 관련 분야

- [[pqc/index|PQC]] — 양자내성암호에 대한 부채널 공격/대응
- [[foundations/cryptography/index|Cryptography]] — 공격 대상 알고리즘 기초
