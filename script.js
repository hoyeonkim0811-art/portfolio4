const projects = [
  { title: 'A Gem in Korea', highlight: '대표 제품 디자인', subtitle: '전통문화 보드게임 · 2026', type: 'Rhino', pages: [9, 10, 11], captions: ['프로젝트 개요 — 전통 장식품을 만나는 보드게임', '디자인 전개 — 업사이클 시계·전통 모티프·QR 경험', '제품 설계 — 게임판·패키지 구조와 치수'], description: '음식이나 건축물을 주제로 한 보드게임과 차별화를 두기 위해 한국 전통 보석함을 소재로 정했습니다. 보석함을 어떻게 게임으로 풀어낼지 고민하던 중 영화 《쥬만지》에 등장하는 게임판에서 영감을 얻어, 보석함을 열고 탐험하듯 장식품의 이야기를 찾아가는 지금의 게임판 형태로 발전시켰습니다. 사용하지 않는 시계를 업사이클한 게임판과 전통 보석함에서 가져온 패키지 모티프, QR 정보를 연결해 한국 전통 장식품을 게임으로 경험하도록 기획했습니다.' },
  { title: '건강을 끼우다', highlight: '대표 브랜드 디자인', subtitle: '샌드위치 브랜드 아이덴티티 · 2026', type: 'Photoshop · Illustrator', pages: [14, 15, 16], captions: ['브랜드 적용 — 패키지·모바일·사인 디자인', '브랜드 시스템 — 심볼·로고·컬러 변형', '응용 목업 — 여러 패키지와 매체 적용'], description: '2026년 식품 트렌드를 참고해, 간편하게 먹으면서 필요한 영양소를 취향에 맞게 조합할 수 있는 샌드위치를 기획했습니다. 건강한 재료를 일상 속에 가볍게 더한다는 콘셉트를 심볼과 초록색 중심의 패키지·응용 디자인으로 발전시켰습니다.' },
  { title: '잔혹동화', highlight: '청소년디자인전람회 입선', subtitle: '책표지 디자인 · 2025', type: 'Photoshop · Illustrator', pages: [4, 5, 6], captions: ['책표지 디자인 — 표지의 최종 비주얼', '콘셉트 — 동화의 이면과 상징 조사', '디자인 전개 — 색상·타이포그래피와 책 목업'], processPages: [{ src: 'cruel-fairy-cover-v1.jpg', caption: '초기 시안 ver.1 — 검붉은 색과 동화 속 인물 실루엣으로 불길한 분위기 표현' }, { src: 'cruel-fairy-cover-v2.jpg', caption: '초기 시안 ver.2 — 거울과 독사과 등 상징을 중심으로 표지 구성 발전' }], description: '무서운 분위기를 표현할 때 흔히 떠올리는 검붉은 색을 중심으로 잡았습니다. 초기 시안에서는 동화 속 인물의 실루엣과 거울·해골 같은 불길한 상징을 시도했고, 여러 차례 다듬어 최종 표지로 발전시켰습니다. 익숙한 동화의 아름다운 이미지와 잔혹한 이야기의 대비를 한 권의 표지에 담고자 했습니다.' },
  { title: '상반된 상징', highlight: '청소년디자인전람회 입선', subtitle: '패턴 디자인 · 2025', type: 'Photoshop · Illustrator', pages: [7, 8], captions: ['패턴 디자인 — 흰나비와 나자르 본주 모티프', '디자인 전개 — 상반된 상징의 반복 패턴과 색상'], description: '반복 패턴에 불길한 요소를 더하고, 흰나비와 나자르 본주를 함께 배치해 상반된 상징이 공존하도록 구성했습니다. 익숙한 패턴에 긴장감과 이야기를 담고자 했습니다.' },
  { title: '나를 전시하는 법', highlight: '나를 소개하는 인포그래픽', subtitle: '인포그래픽 자기소개 · 2026', type: 'Illustrator', pages: [12, 13], captions: ['인포그래픽 자기소개 — 생활 패턴과 관심사', '정보 구성 — 자격·취미·성향을 하나의 화면으로'], description: '선생님들께 아이디어가 독특하고 참신하다는 평가를 받은 경험에서 출발해, 저를 추상화의 조형 언어로 표현했습니다. 기하학적 캐릭터와 그래프를 활용해 생활 패턴과 관심사, 성향을 하나의 인포그래픽으로 구성했습니다.' },
  { title: 'Mushy Cat', highlight: '유일한 캐릭터 디자인 프로젝트', subtitle: '캐릭터 · AI 동반자 · 2026', type: 'Photoshop · Illustrator', pages: [17, 18, 19], captions: ['캐릭터 디자인 — Mushy Cat의 최종 형태', '캐릭터 전개 — 턴어라운드와 감정별 표정', 'AI 동반자 콘셉트 — 앱 화면과 대화 시나리오'], description: '흔히 볼 수 있는 고양이 캐릭터와 구별되도록 독버섯 모티브를 결합했습니다. 귀여운 인상에 낯설고 조금은 위험한 이미지를 더해 차별화하고자 했으며, 감정에 따른 표정과 스마트폰 대화 경험도 함께 디자인했습니다.' }
];

const dialog = document.querySelector('#projectDialog');
const dialogContent = dialog.querySelector('.dialog-content');
let activeProject = 0;

function showProject(index) {
  activeProject = index;
  const project = projects[index];
  dialog.querySelector('.dialog-count').textContent = `PROJECT ${String(index + 1).padStart(2, '0')} / 06`;
  dialog.querySelector('.dialog-prev').disabled = index === 0;
  dialog.querySelector('.dialog-next').disabled = index === projects.length - 1;
  const highlightClass = `project-highlight${project.highlight.includes('입선') ? ' is-award' : ''}`;
  dialogContent.innerHTML = `<p class="eyebrow">${String(index + 1).padStart(2, '0')} / SELECTED WORK</p><h2 class="dialog-title">${project.title}</h2><p class="${highlightClass}">${project.highlight}</p><p class="dialog-subtitle">${project.subtitle}</p><p class="dialog-description">${project.description}</p><p class="dialog-meta dialog-role">PROJECT TYPE — 학교 지정 주제 · 개인 작업</p><p class="dialog-meta">MY CONTRIBUTION — 주제 해석 · 세부 콘셉트 기획 · 디자인 제작</p><p class="dialog-meta">TOOLS — ${project.type}</p><div class="dialog-pages">${[...(project.processPages || []).map(page => ({ ...page, alt: `${project.title} ${page.caption}` })), ...project.pages.map((page, pageIndex) => ({ src: `page-${String(page).padStart(2, '0')}.jpg`, alt: `${project.title} 포트폴리오 페이지 ${page}`, caption: project.captions[pageIndex] }))].map(page => `<figure class="dialog-page"><img src="${page.src}" alt="${page.alt}" loading="lazy"><figcaption>${page.caption}</figcaption></figure>`).join('')}</div>`;
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
}

document.querySelectorAll('.project-card').forEach((card) => {
  const project = projects[Number(card.dataset.project)];
  const caption = card.querySelector('.project-caption > span');
  caption.classList.add('project-caption-copy');
  const marker = document.createElement('span');
  marker.className = `project-highlight${project.highlight.includes('입선') ? ' is-award' : ''}`;
  marker.textContent = project.highlight;
  caption.insertBefore(marker, caption.querySelector('small'));
  card.addEventListener('click', () => showProject(Number(card.dataset.project)));
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
document.querySelector('.dialog-prev').addEventListener('click', () => { if (activeProject > 0) showProject(activeProject - 1); });
document.querySelector('.dialog-next').addEventListener('click', () => { if (activeProject < projects.length - 1) showProject(activeProject + 1); });
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });

document.querySelectorAll('.filter').forEach((button) => button.addEventListener('click', () => {
  document.querySelector('.filter.active').classList.remove('active');
  button.classList.add('active');
  const filter = button.dataset.filter;
  document.querySelector('.project-grid').classList.toggle('is-filtered', filter !== 'all');
  document.querySelectorAll('.project-card').forEach((card) => {
    card.hidden = filter !== 'all' && card.dataset.category !== filter;
  });
}));

// Gentle entrance reveals keep the long page moving without hiding content when JS is unavailable.
const revealTargets = document.querySelectorAll('.section-heading, .project-card, .manifesto-text, .about-layout, .tools-block, .credential-block');
revealTargets.forEach((element, index) => {
  element.classList.add('reveal-in');
  if (element.matches('.project-card')) element.style.setProperty('--reveal-index', index % 4);
});
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('reveal-ready');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealTargets.forEach((element) => revealObserver.observe(element));
}
