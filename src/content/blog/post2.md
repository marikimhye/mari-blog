---
title: "PM의 Claude Code 워크플로우: 6개 커스텀 스킬 소개"
description: "PRD 자동 작성, 세션 마무리, Confluence 연동 등 PM 업무에 최적화된 Claude Code 커스텀 스킬을 소개합니다."
pubDate: "Feb 10 2026"
heroImage: "/post_img.webp"
tags: ["claude-code", "워크플로우", "PM"]
---

## PM에게 Claude Code란

Claude Code를 단순한 코딩 도구로 쓰고 있다면, 잠재력의 10%만 쓰고 있는 것이다.

나는 PM으로서 Claude Code에 **커스텀 스킬**을 만들어 붙였다. `/prd`라고 치면 PRD가 자동 생성되고, `/wrap`이라고 치면 오늘 작업을 분석해서 다음 할 일을 제안한다.

## 내가 만든 6개 스킬

| 스킬 | 기능 | 절약 시간 |
|------|------|-----------|
| `/prd` | PRD 템플릿 기반 자동 작성 | 2시간 → 20분 |
| `/wrap` | 세션 마무리 + 후속 작업 제안 | 매 세션 10분 |
| `/confluence` | Vault → Confluence 자동 변환 | 30분 → 2분 |
| `/meeting` | Google Calendar 회의 자동 생성 | 5분 → 30초 |
| `/spam-report` | KISA 조치내역서 자동 생성 | 5시간/월 → 5분 |
| `/vault-cleanup` | 파일명 표준화 자동 정리 | 수동 불가능 |

## 다음 글 예고

각 스킬의 구체적인 만들기 과정과 코드를 공개할 예정입니다.
