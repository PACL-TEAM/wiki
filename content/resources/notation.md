---
title: Notation (표기법)
tags: [resource]
---

위키에서 사용하는 수학적 표기법 컨벤션입니다. KaTeX를 사용하여 수식을 렌더링합니다.

## 일반

| 표기 | 의미 |
|------|------|
| $\mathbb{Z}$ | 정수 집합 |
| $\mathbb{Z}_q$ | $q$를 법으로 하는 정수 환 |
| $\mathbb{F}_q$ | 원소 $q$개인 유한체 |
| $\mathbb{Z}_q^n$ | $n$차원 벡터 공간 (over $\mathbb{Z}_q$) |
| $\mathcal{O}(\cdot)$ | Big-O 표기 |
| $\lambda$ | 보안 매개변수 (security parameter) |
| $\text{negl}(\lambda)$ | 무시 가능 함수 (negligible function) |

## 암호학

| 표기 | 의미 |
|------|------|
| $\mathsf{Enc}(pk, m)$ | 공개키 $pk$로 메시지 $m$ 암호화 |
| $\mathsf{Dec}(sk, c)$ | 비밀키 $sk$로 암호문 $c$ 복호화 |
| $\mathsf{Sign}(sk, m)$ | 비밀키 $sk$로 메시지 $m$ 서명 |
| $\mathsf{Verify}(pk, m, \sigma)$ | 서명 $\sigma$ 검증 |
| $H(\cdot)$ | 해시 함수 |
| $\xleftarrow{\$} S$ | 집합 $S$에서 균일 랜덤 샘플링 |

## 격자 (Lattice)

| 표기 | 의미 |
|------|------|
| $\mathcal{L}(\mathbf{B})$ | 기저 $\mathbf{B}$로 생성된 격자 |
| $\mathbf{A} \cdot \mathbf{s} + \mathbf{e}$ | LWE 인스턴스 |
| $\chi$ | 오류 분포 (error distribution) |

## 동형암호 (FHE)

| 표기 | 의미 |
|------|------|
| $\llbracket m \rrbracket$ | 메시지 $m$의 암호문 |
| $\mathsf{Eval}(f, c_1, \ldots, c_k)$ | 암호문에 대한 함수 $f$ 평가 |
