---
title: PQC
tags: [pqc]
---

양자 컴퓨터의 위협에 대응하는 양자내성암호(Post-Quantum Cryptography)를 다룹니다.

## Concepts

### Lattice-based
- LWE / RLWE 문제
- ML-KEM (Kyber) — NIST 표준 KEM
- ML-DSA (Dilithium) — NIST 표준 전자서명
- NTRU

### Code-based
- McEliece 암호 시스템

### Hash-based
- SPHINCS+
- XMSS / LMS

### Standardization
- NIST PQC 표준화 (FIPS 203, 204, 205)
- KpqC 한국 공모전

## [[pqc/papers/index|Papers]]

## 관련 분야

- [[sca/index|SCA]] — PQC 알고리즘에 대한 부채널 공격/대응
- [[foundations/number-theory/index|Number Theory]] — 격자 이론 등 수학적 기초
- [[quantum/index|Quantum]] — 양자 컴퓨터 알고리즘 (Shor, Grover)
