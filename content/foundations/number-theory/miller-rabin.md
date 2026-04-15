---
title: Miller-Rabin primality test
tags:
    - Misc
    - Mathematics
---

밀러-라빈 소수판별법은 입력으로 주어진 수가 소수인지 아닌지 확률적으로 판별하는 알고리즘입니다.

# 1. 수학적 배경
## 1-1. 페르마의 소정리
소수 $p$와 $p$의 배수가 아닌 정수 $a$에 대하여 다음 식이 성립합니다.

$$
a^{p-1} \equiv 1 (\bmod \; p)
$$

## 1-2. 1의 자명하지 않은 제곱근 (non-trivial square roots of 1)
소수 $p$에 대하여 $x^2 \equiv 1 (\bmod \; p)$를 만족하는 $x$의 값은 오직 $\lbrace 1, -1 \equiv p-1 (\bmod \; p) \rbrace$ 뿐입니다.

# 2. 알고리즘 원리
임의의 정수 $n>2$에 대한 소수 판별은 다음과 같이 진행됩니다.

## 2-1. $n-1$ 분해하기

$n$은 홀수이므로, $n-1$은 짝수가 됩니다. 즉, 다음과 같이 적을 수 있습니다.
$$
n-1 = 2^s \cdot d
$$
이 때, $d$는 홀수이고, $s$는 1 이상의 정수입니다.

## 2-2. 밑 (base) 선택하기
$1 < a < n-1$ 범위의 임의의 정수 $a$를 선택합니다.

## 2-3. 검사 진행
페르마의 소정리에 의해 $n$이 소수라면 $a^{n-1} \equiv 1 (\bmod \; n)$ 을 만족합니다.
$n-1 = 2^s \cdot d$ 이므로, 아래와 같이 식을 정리할 수 있습니다.
$$
a^{n-1} = a^{2^s \cdot d} \equiv 1 (\bmod \; n)
$$
따라서, 임의의 정수 $n >2$이 소수일 조건은 아래 두 경우 중 하나라도 만족하는 경우입니다.
- $a^d \equiv 1 (\bmod \; n)$ 인 경우: $1$을 $s$번 제곱하는 결과
- $a^{2^r \cdot d} \equiv -1 (\bmod \; n)$ (where $0 \le r < s)$:  $-1$이 제곱되어 결국엔 $1$로 귀결되는 결과

# 3. 예외
그런데, Miller-Rabin Primality Test를 통과했다고 **무조건** 소수라 믿을 수 있는 것은 아닙니다.

예를 들어, 홀수인 정수 $2047$에 대한 소수 판별을 MR로 해볼 수 있습니다. 이 때, base는 $a=2$ 로 사용합니다.

$$
2^{2047 - 1} = 2^{2046} = 2^{2 \times 1023} \equiv 1 \bmod 2047
$$

실제로 계산해보면 위와 같이 MR test를 통과하게 됩니다. 그런데, $2047 = 23 \times 89$인 합성수 입니다.
따라서, 합성수이지만 MR test를 통과하는 경우가 존재합니다.

> 덧붙여 여러 Base에 대해 MR test를 통과해버리는 교묘한 합성수를 ***Strong Pseudoprime number***라 부릅니다.
> 
> 예를 들어, Base $2, 3, 5, 7$을 모두 통과하는 수는 $3{,}215{,}031{,}751$로 알려져 있습니다.
>
> 이러한 pseudoprime에 대한 연구로 `Monier-Rabin` theorem ([MIT spring 2017 타원곡선 lecture note 12, Theorem 12.8](https://math.mit.edu/classes/18.783/2017/LectureNotes12.pdf)) 이 알려져 있습니다. 

## 3-1. Strong pseudoprime 구하는 법
한 가지 방법으로는 [RMPT1995](https://www.unilim.fr/pages_perso/francois.arnault/documents/papers/RMPT1995.pdf) 를 참고할 수 있습니다.
이 방법은 기본적으로 CRT(Chinese Remainder Theorem)와 카마이클 수(Carmichael number)를 활용한 방법입니다.


