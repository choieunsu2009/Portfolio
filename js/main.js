/**
 * Main JavaScript
 * - Smooth scroll navigation
 * - Navigation highlighting on scroll
 * - Project filtering
 * - Project modal
 * - Mobile menu
 */

(function () {
  'use strict';

  // =========================================
  // Project Data
  // =========================================
  const projectsData = {
    cesbot: {
      id: 'cesbot',
      category: 'personal',
      date: '2026-01 ~ 2026-02',
      tags: ['OpenClaw', 'AI Agent', 'Figma', 'Newsletter'],
      title: {
        en: 'CES the bot',
        ko: 'CES the bot'
      },
      badge: null,
      overview: {
        en: 'Goal: Build a personal AI agent that integrates with tools and automates daily workflows.\n\nBuilt on the OpenClaw framework, this personal AI agent supports custom skill creation and automated content generation.',
        ko: '목표: 도구와 연동되고 일상 워크플로우를 자동화하는 개인용 AI 에이전트 제작.\n\nOpenClaw 기반으로 개발한 개인용 AI 에이전트로, 커스텀 스킬 제작 및 자동화된 콘텐츠 생성을 지원합니다.'
      },
      details: {
        en: 'Developed a Figma skill for the agent, enabling AI-assisted design operations directly within Figma. Also configured an automated daily tech newsletter pipeline that collects and curates tech news every evening, ensuring no overlap with the previous day\'s content.',
        ko: 'Figma용 스킬을 제작하여 Figma 내에서 AI 기반 디자인 작업을 직접 수행할 수 있게 했습니다. 또한 매일 저녁 기술 뉴스를 수집·큐레이션하는 자동화 뉴스레터 파이프라인을 구성했으며, 전날 내용과 겹치지 않도록 설계하였습니다.'
      },
      techStack: {
        en: ['Agent Framework: OpenClaw', 'Custom Skill: Figma integration', 'Automation: Daily tech newsletter pipeline (no duplicates)'],
        ko: ['에이전트 프레임워크: OpenClaw', '커스텀 스킬: Figma 연동', '자동화: 매일 저녁 기술 뉴스레터 파이프라인 (중복 없음)']
      },
      keyAchievements: {
        en: 'Built a personal AI agent with Figma skill and automated daily tech newsletter that avoids duplicate content from the previous day.',
        ko: 'Figma 스킬과 전날과 겹치지 않는 기술 뉴스레터 자동 생성 기능을 갖춘 개인용 AI 에이전트를 구축했습니다.'
      },
      links: []
    },
    cafe: {
      id: 'cafe',
      category: 'personal',
      date: '2025-12-01 ~ 2026-01-01',
      tags: ['Spring Boot', 'MySQL', 'AWS EC2', 'CI/CD', 'Mustache'],
      title: {
        en: 'Cafe Management System',
        ko: '카페관리 시스템'
      },
      badge: null,
      overview: {
        en: 'Project Goal: Practice Spring Boot deployment and CI/CD automation on AWS EC2\nTarget User: Cafe owners with features for user registration, point management, and menu management',
        ko: '프로젝트 목표: Spring Boot와 AWS EC2 서버에 배포를 연습하고 CI/CD로 배포과정을 자동화\n대상 사용자: 카페 사장님 (사용자 등록, 포인트 관리, 메뉴 관리)'
      },
      details: {
        en: 'Designed user registration, point, and menu management features using Spring Boot. Focused on completing AWS EC2 deployment and CI/CD automation from start to finish, not just "practicing" but fully completing the operational setup.',
        ko: 'Spring Boot 기반으로 사용자 등록, 포인트/메뉴 관리 기능을 설계했습니다. AWS EC2 배포 및 CI/CD 자동화를 "연습"이 아니라 "끝까지" 해보는 데 집중했습니다.'
      },
      techStack: {
        en: ['Backend: Spring Boot', 'Database: MySQL', 'Frontend: Mustache, Bootstrap', 'Deployment: AWS EC2'],
        ko: ['백엔드: Spring Boot', '데이터베이스: MySQL', '프론트엔드: Mustache, Bootstrap', '배포: AWS EC2']
      },
      keyAchievements: {
        en: 'Completed AWS EC2 deployment and CI/CD automation from start to finish, not just "tried" but fully completed the operational setup.',
        ko: 'AWS EC2 배포 및 CI/CD 자동화를 "연습"이 아니라 "끝까지" 완료했습니다.'
      },
      links: []
    },
    timer: {
      id: 'timer',
      category: 'personal',
      date: '2025-12-01',
      tags: ['ESP32', 'Embedded C', 'Timing'],
      title: {
        en: 'TIMER Project (ESP32)',
        ko: 'TIMER 제작 프로젝트 (ESP32)'
      },
      badge: null,
      overview: {
        en: 'Learning project for ESP32 microcontroller.\nTimer measures time in approximately 0.1-second intervals (with some error).',
        ko: 'ESP32를 처음 사용하고 익히기 위한 학습 프로젝트.\n시간은 약 0.1초 단위로 측정됩니다. (다소 오차있음)'
      },
      details: {
        en: 'Created a timer for ESP32 learning purposes, targeting 0.1-second precision (with tolerances). Experienced precision issues from hardware constraints and documented improvement points.',
        ko: 'ESP32 학습 목적의 타이머 제작. 약 0.1초 단위 측정(오차 존재)을 목표로 하고, 하드웨어 제약에서 오는 정밀도 이슈를 경험하며 개선 포인트를 정리했습니다.'
      },
      techStack: {
        en: ['Hardware: ESP32', 'Language: Embedded C', 'Focus: Timing precision'],
        ko: ['하드웨어: ESP32', '언어: Embedded C', '중점: 타이밍 정밀도']
      },
      keyAchievements: {
        en: 'Gained hands-on experience with embedded systems and timing precision challenges.',
        ko: '임베디드 시스템과 타이밍 정밀도 문제에 대한 실습 경험을 쌓았습니다.'
      },
      links: []
    },
    wineswap: {
      id: 'wineswap',
      category: 'personal',
      date: '2025-05-01',
      tags: ['Next.js', 'UI/UX', 'MVP'],
      title: {
        en: 'WINE SWAP (Lost & Found / Student Trading)',
        ko: 'WINE SWAP (분실물/학생 간 거래)'
      },
      badge: null,
      overview: {
        en: 'Background: Many items are lost in the school dormitory, and students often cannot leave campus to purchase items due to strict outing policies.\n\nGoal: Designed a platform for student-to-student trading and easy lost-and-found item tracking.',
        ko: '배경: 경소마고 정심관에서는 많은 분실물이 발생하기도 하고, 급하게 물건을 구입하고 싶어도 외출 기준이 엄격해 나가지 못하는 경우가 많습니다.\n\n목표: 학생간의 교류와 빠르게 물건을 사고 팔고 싶을 때 사용할 수 있도록 기획하였습니다. 또한 분실물을 올려서 쉽게 찾을 수 있도록 제작하였습니다.'
      },
      details: {
        en: 'Designed for quick student trading and lost-and-found tracking in a restricted-outing environment. Currently frontend-focused (Next.js), with backend integration planned for expansion.',
        ko: '외출 제약 환경에서 "학생 간 빠른 거래 + 분실물 찾기"를 목표로 기획. 현재는 프론트 중심(Next.js)이며, 백엔드 연동을 전제로 확장 계획을 잡았습니다.'
      },
      techStack: {
        en: ['UI Design: Figma', 'Frontend scaffold: v0.dev AI', 'Frontend: Next.js with bug fixes and feature additions'],
        ko: ['UI 디자인: Figma', '프론트 틀 제작: v0.dev AI', '프론트: Next.js 기반, 오류 수정 및 기능 추가']
      },
      keyAchievements: {
        en: 'Currently frontend-only. Backend integration is planned for future development.',
        ko: '아직은 프론트만 개발 된 상태이고, 추후 개발을 통해 백엔드와 연동하여 완성 할 계획입니다.'
      },
      links: []
    },
    anonymous: {
      id: 'anonymous',
      category: 'personal',
      date: '2025-06-01',
      tags: ['Node.js', 'Express', 'EJS', 'MySQL', 'Security'],
      title: {
        en: 'Anonymous Message Board',
        ko: '최은수에게 전하고 싶은 말 (익명 메시지)'
      },
      badge: null,
      overview: {
        en: 'Goal: Practice Express web backend framework learned in class.\n\nSimple web page titled "Messages to Choi Eunsu (Anonymous)". Also created a view page for easy browsing.',
        ko: '목표: 수업시간에 학습한 Express 웹백엔드 프레임워크를 복습하기 위한 프로젝트.\n\n"최은수에게 전하고 싶은 말(익명)"이라는 제목의 간단한 웹페이지이다. 또한 쉽게 열람이 가능하도록 열람페이지도 제작하였다.'
      },
      details: {
        en: 'Express practice mini-service. Built views with EJS and used MySQL-based storage. Included real security hardening practice after hosting to defend against actual threats.',
        ko: 'Express 복습용 미니 서비스. EJS로 뷰를 구성하고 MySQL 기반 저장소를 사용했습니다. 호스팅 후 실제로 들어오는 보안 위험을 "막아내는" 실습까지 포함했습니다.'
      },
      techStack: {
        en: ['Frontend: EJS (simple templating)', 'Database: MySQL (free hosting service)', 'Security: Practiced defending against real security threats after hosting'],
        ko: ['프론트엔드: EJS로 간단하게 작성', 'DB: MySQL 기반의 무료 사이트를 이용', '보안: 호스팅 이후 날아오는 보안 위험을 막아내는 실습도 진행']
      },
      keyAchievements: {
        en: 'Currently inaccessible due to Glitch hosting service shutdown.',
        ko: '현재는 글리치의 호스팅 서비스 종료로 접속이 불가능하다.'
      },
      links: [
        { label: 'Blog Article', url: 'https://velog.io/@ignatius/glitch-node.js-%EB%B0%B0%ED%8F%AC' }
      ],
      role: {
        en: 'Full-stack (planning, development, design)',
        ko: '풀스택(기획, 개발, 디자인)'
      }
    },
    razino: {
      id: 'razino',
      category: 'team',
      date: '2025-04-01 ~ 2025-11-01',
      tags: ['WebRTC', 'Express', 'EJS', 'Raspberry Pi'],
      title: {
        en: 'Razino',
        ko: '라즈이노'
      },
      badge: {
        en: '🏆 Korea Code Fair Finalist',
        ko: '🏆 한국 코드페어 본선 진출'
      },
      overview: {
        en: 'Goal: Prevent elderly solitary deaths and facilitate family communication.\n\nRazino is an IoT-based one-touch video call system designed to prevent elderly solitary deaths and enable smooth family communication.',
        ko: '목표: 독거노인의 고독사 방지 및 가족 간 원활한 소통\n\n라즈이노는 독거노인의 고독사 방지 및 가족 간 원활한 소통을 목적로 한 IoT 기반 원터치 통화 시스템이다.'
      },
      details: {
        en: 'When a guardian calls via smartphone, the communication arrives at a Raspberry Pi monitor mounted on the wall, initiating a video call with family members. The system is designed for easy use by elderly people who have difficulty moving or using smartphones.',
        ko: '사용자(보호자)가 스마트폰으로 통화를 걸면 벽면에 설치된 라즈베리파이 모니터에 통신이 와서 가족과 화상통화를 하게 만들었고 거동이 어렵거나 스마트폰의 사용이 어려운 노인분들이 쉽게 사용할 수 있게 설계 되어있다.'
      },
      techStack: {
        en: ['Frontend: EJS', 'Backend: Express, WebRTC', 'IoT: Raspberry Pi'],
        ko: ['프론트엔드: EJS', '백엔드: Express, WebRTC', 'IoT: Raspberry Pi']
      },
      keyAchievements: {
        en: 'IoT one-touch video call system for preventing elderly solitary deaths and family communication. Implemented the flow: Raspberry Pi display receives call → WebRTC-based call connection.',
        ko: '독거노인 고독사 방지 및 가족 소통을 위한 IoT 원터치 화상통화 시스템. Raspberry Pi 디스플레이로 수신 → WebRTC 기반 통화 연결 흐름을 구현했습니다.'
      },
      links: []
    },
    awareai: {
      id: 'awareai',
      category: 'personal',
      date: '2026-01 ~ 2026-03',
      tags: ['FastAPI', 'Gemini 2.5 Flash', 'GPT-5 mini', 'AI Agent'],
      title: {
        en: 'AWARE AI',
        ko: 'AWARE AI'
      },
      badge: null,
      overview: {
        en: 'Goal: Provide personalized appearance scoring and AI-generated styling through photo analysis.\n\nFull-stack AI styling analysis application. Users upload a photo and receive an animal personality type (동물상), a style score, and AI-generated styled image variations.',
        ko: '목표: 사진 분석을 통한 외모 점수 평가 및 AI 스타일링 이미지 제공.\n\n풀스택 AI 스타일링 분석 서비스. 사진을 업로드하면 동물상 유형, 스타일 점수, AI 스타일링 이미지 변환 결과를 제공합니다.'
      },
      details: {
        en: 'Backend built with FastAPI, exposing two endpoints: /api/analyze (processes photo with user metadata via OpenAI GPT-5 mini) and /api/apply (generates styled images via Gemini 2.5 Flash Image).\n\nThe system classifies users into one of 7 animal vibe types (dog, cat, rabbit, fox, deer, bear, dinosaur) and normalizes style scores (0–100 → 0–10) through a sanitization layer.\n\nFrontend is a vanilla JS single-page app with three screens: upload, results, and styled image view.',
        ko: 'FastAPI 백엔드에 두 개의 엔드포인트 구성: /api/analyze (OpenAI GPT-5 mini로 사진 및 사용자 메타데이터 분석), /api/apply (Gemini 2.5 Flash Image로 스타일링 이미지 생성).\n\n7가지 동물상 유형(강아지상, 고양이상, 토끼상, 여우상, 사슴상, 곰상, 공룡상)으로 분류하고, 스타일 점수를 0–100에서 0–10으로 정규화하는 출력 정제 레이어를 구현했습니다.\n\n프론트엔드는 바닐라 JS SPA로 업로드, 결과, 스타일링 이미지 3단계 화면으로 구성됩니다.'
      },
      techStack: {
        en: ['Backend: FastAPI (Python)', 'Analysis AI: GPT-5 mini (animal type + style score)', 'Image AI: Gemini 2.5 Flash Image (styled image generation)', 'Frontend: Vanilla JS SPA (HTML/CSS/JavaScript)'],
        ko: ['백엔드: FastAPI (Python)', '분석 AI: GPT-5 mini (동물상 분류 + 스타일 점수)', '이미지 AI: Gemini 2.5 Flash Image (스타일링 이미지 생성)', '프론트엔드: Vanilla JS SPA (HTML/CSS/JavaScript)']
      },
      keyAchievements: {
        en: 'Built a dual-model AI pipeline combining GPT-5 mini and Gemini 2.5 Flash Image. Implemented output sanitization to normalize AI responses and classify users into 7 animal personality types with style scoring.',
        ko: 'GPT-5 mini와 Gemini 2.5 Flash Image를 결합한 듀얼 모델 AI 파이프라인 구축. AI 응답을 정규화하고 7가지 동물상 유형 분류 및 스타일 점수를 반환하는 출력 정제 레이어를 구현했습니다.'
      },
      links: [
        { label: 'GitHub Organization', url: 'https://github.com/optimist-AWARE' }
      ]
    },
    gca: {
      id: 'gca',
      category: 'team',
      date: '2025-06-01',
      tags: ['React Native', 'AI', 'Figma', 'UI/UX'],
      title: {
        en: 'GCA (Good quality Cheap price with AI)',
        ko: 'GCA (Good quality Cheap price with AI)'
      },
      badge: null,
      overview: {
        en: 'Goal: Promote regional economy and Uiseong area.\n\nGCA is an application developed to promote regional economy and the Uiseong area.',
        ko: '목표: 의성 지역 홍보와 경제를 살리는 것\n\nGCA(Good quality Cheap price with Ai) 어플리케이션은 의성 지역 홍보와 경제를 살리는것을 목표로 개발한 어플리케이션이다.'
      },
      details: {
        en: 'Zero-fee direct trading service for buyers and sellers. Revenue through local government partnership or main page banner ads. Strategy: attract users with low prices and good quality, then increase ad revenue.\n\nKey Feature: AI image inspection to grade products (A, B, C, D). Makes it easier for general consumers unfamiliar with agricultural products to access.',
        ko: '기본적으로 구매 및 판매 수수료 0원 직거래 서비스를 기획했으며, 수익은 지자체의 협력이나 메인페이지 배너 광고로 수익을 얻으려 하였다. 초반에 싸고 좋은 품질로 사용자를 모으고 그를 바탕으로 광고비를 높게 잡아 수익을 내는 구조이다.\n\n핵심 기능: 인공지능 이미지 검사를 통해 A, B, C, D로 등급을 측정하는 서비스를 기획했다. 이를통해 농작물을 잘 모르는 일반 소비자도 더 쉽게 접근이 가능하다.'
      },
      techStack: {
        en: ['Design: Figma', 'Frontend: React Native', 'AI: Image grading system'],
        ko: ['디자인: Figma', '프론트엔드: React Native', 'AI: 이미지 등급 시스템']
      },
      keyAchievements: {
        en: 'Applied as UI/UX designer. Handled wireframe implementation and logo design using Figma. Referenced modern designs like Karrot and Musinsa for the target audience (20-30s). Changed the initial detail-heavy logo design to a modern, clean logo to minimize user confusion. Collaborated with frontend developer to implement My Page in React Native. Also created PPT and presented.',
        ko: '지원 할 때 UI/UX디자이너로 지원하였다. 하지만 부족한 디자인 실력과 제한된 시간으로 인해 와이어 프레임 구현과 로고디자인을 맡았다. Figma를 이용했으며 대상 사용자인 2030세대에 맞게 당근, 무신사 등 모던한 디자인을 참고했다. 첫 로고는 디테일이 많이 포함된 디자인에서 사용자의 혼란을 최소화하고 디자인을 깔끔히 하기 위해 모던하고 깔끔한 로고로 변경하는 작업도 진행하였다. 디자인 이후 남는 시간동안 RN을 통한 마이페이지 구현을 프론트엔드 개발자와 협력하여 개발하였다. 마지막으로 PPT를 만들고 발표를 진행하였다.'
      },
      links: [],
      role: {
        en: 'UI/UX Designer & Frontend Developer',
        ko: 'UI/UX 디자이너 & 프론트엔드 개발자'
      }
    }
  };

  // Project order for navigation
  const projectOrder = ['cesbot', 'awareai', 'cafe', 'timer', 'wineswap', 'anonymous', 'razino', 'gca'];

  // =========================================
  // DOM Elements
  // =========================================
  let header, nav, navLinks, mobileMenuToggle;
  let tabBtns, projectItems;
  let modal, modalClose, modalContent, prevBtn, nextBtn;
  let currentProjectIndex = 0;

  // =========================================
  // Initialize
  // =========================================
  function init() {
    // Cache DOM elements
    header = document.getElementById('header');
    nav = document.getElementById('nav');
    navLinks = document.querySelectorAll('.nav-link');
    mobileMenuToggle = document.getElementById('mobileMenuToggle');
    tabBtns = document.querySelectorAll('.tab-btn');
    projectItems = document.querySelectorAll('.project-item');
    modal = document.getElementById('projectModal');
    modalClose = document.getElementById('modalClose');
    modalContent = document.getElementById('modalContent');
    prevBtn = document.getElementById('prevProject');
    nextBtn = document.getElementById('nextProject');

    // Set up event listeners
    setupNavigation();
    setupMobileMenu();
    setupProjectTabs();
    setupProjectModal();
    setupScrollHighlight();
  }

  // =========================================
  // Smooth Scroll Navigation
  // =========================================
  function setupNavigation() {
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        if (target) {
          const headerHeight = header.offsetHeight;
          const targetPosition = target.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Close mobile menu if open
          if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
          }
        }
      });
    });
  }

  // =========================================
  // Mobile Menu
  // =========================================
  function setupMobileMenu() {
    if (mobileMenuToggle && nav) {
      mobileMenuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
        this.classList.toggle('active');
      });
    }
  }

  // =========================================
  // Project Tab Filtering
  // =========================================
  function setupProjectTabs() {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        // Update active tab
        tabBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // Filter projects
        const filter = this.getAttribute('data-filter');

        projectItems.forEach(item => {
          const category = item.getAttribute('data-category');

          if (filter === 'all' || category === filter) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  }

  // =========================================
  // Project Modal
  // =========================================
  function setupProjectModal() {
    // Open modal when clicking project link
    document.querySelectorAll('.project-link').forEach(link => {
      link.addEventListener('click', function () {
        const projectId = this.getAttribute('data-project');
        openModal(projectId);
      });
    });

    // Close modal
    if (modalClose) {
      modalClose.addEventListener('click', closeModal);
    }

    // Close on background click
    if (modal) {
      modal.addEventListener('click', function (e) {
        if (e.target === modal) {
          closeModal();
        }
      });
    }

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });

    // Previous/Next buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        currentProjectIndex = (currentProjectIndex - 1 + projectOrder.length) % projectOrder.length;
        openModal(projectOrder[currentProjectIndex]);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        currentProjectIndex = (currentProjectIndex + 1) % projectOrder.length;
        openModal(projectOrder[currentProjectIndex]);
      });
    }
  }

  function openModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    // Update current index
    currentProjectIndex = projectOrder.indexOf(projectId);

    // Get current language
    const lang = window.getCurrentLang ? window.getCurrentLang() : 'en';

    // Build modal content
    const html = buildModalContent(project, lang);
    modalContent.innerHTML = html;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Update language content for modal
    if (window.updateLanguageContent) {
      window.updateLanguageContent();
    }
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function buildModalContent(project, lang) {
    const otherLang = lang === 'en' ? 'ko' : 'en';

    let html = `
      <div class="modal-header">
        <p class="modal-date">${project.date}</p>
        <h2 class="modal-title">${project.title[lang]}</h2>
        <p class="modal-title-ko">${project.title[otherLang]}</p>
        ${project.badge ? `<span class="modal-badge">${project.badge[lang]}</span>` : ''}
        <div class="modal-tags">
          ${project.tags.map(tag => `<span>${tag}</span>`).join(' · ')}
        </div>
      </div>
    `;

    // Overview
    html += `
      <div class="modal-section">
        <h4 data-lang="en">Overview</h4>
        <h4 data-lang="ko" style="display:none;">개요</h4>
        <p data-lang="en">${project.overview.en.replace(/\n/g, '<br>')}</p>
        <p data-lang="ko" style="display:none;">${project.overview.ko.replace(/\n/g, '<br>')}</p>
      </div>
    `;

    // Details
    html += `
      <div class="modal-section">
        <h4 data-lang="en">Details</h4>
        <h4 data-lang="ko" style="display:none;">상세</h4>
        <p data-lang="en">${project.details.en.replace(/\n/g, '<br>')}</p>
        <p data-lang="ko" style="display:none;">${project.details.ko.replace(/\n/g, '<br>')}</p>
      </div>
    `;

    // Tech Stack
    html += `
      <div class="modal-section">
        <h4 data-lang="en">Tech Stack</h4>
        <h4 data-lang="ko" style="display:none;">기술 스택</h4>
        <ul data-lang="en">
          ${project.techStack.en.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <ul data-lang="ko" style="display:none;">
          ${project.techStack.ko.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    `;

    // Key Achievements
    html += `
      <div class="modal-section">
        <h4 data-lang="en">Key Achievements</h4>
        <h4 data-lang="ko" style="display:none;">주요 성과</h4>
        <p data-lang="en">${project.keyAchievements.en.replace(/\n/g, '<br>')}</p>
        <p data-lang="ko" style="display:none;">${project.keyAchievements.ko.replace(/\n/g, '<br>')}</p>
      </div>
    `;

    // Role (if exists)
    if (project.role) {
      html += `
        <div class="modal-section">
          <h4 data-lang="en">Role</h4>
          <h4 data-lang="ko" style="display:none;">역할</h4>
          <p data-lang="en">${project.role.en}</p>
          <p data-lang="ko" style="display:none;">${project.role.ko}</p>
        </div>
      `;
    }

    // Links
    if (project.links && project.links.length > 0) {
      html += `
        <div class="modal-links">
          ${project.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>`).join('')}
        </div>
      `;
    }

    return html;
  }

  // =========================================
  // Scroll Highlight Navigation
  // =========================================
  function setupScrollHighlight() {
    const sections = document.querySelectorAll('section[id]');

    function highlightNav() {
      const scrollPos = window.scrollY + header.offsetHeight + 100;

      sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < bottom) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', highlightNav);
    highlightNav(); // Initial call
  }

  // =========================================
  // Run on DOM Ready
  // =========================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
