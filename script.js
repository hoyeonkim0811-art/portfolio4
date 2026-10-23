const projects = [
  { title: '잔혹동화', subtitle: '책표지 디자인 · 2025', type: 'Photoshop · Illustrator', pages: [4, 5, 6], description: '아름답게 각색된 동화 속에 감춰진 잔혹한 이야기를 다시 바라봤습니다. 익숙한 동화의 상징과 실루엣을 붉은색과 검은색으로 재구성해, 아름다움과 잔혹성이 공존하는 책표지를 만들었습니다.' },
  { title: '상반된 상징', subtitle: '패턴 디자인 · 2025', type: 'Photoshop · Illustrator', pages: [7, 8], description: '흰나비와 나자르 본주를 하나의 반복 패턴에 담았습니다. 불길함과 그것을 막아내는 상징, 서로 반대되는 의미가 색과 배치에서 드러나도록 구성했습니다.' },
  { title: 'A Gem in Korea', subtitle: '전통문화 보드게임 · 2026', type: 'Rhino', pages: [9, 10, 11], description: '한국을 방문한 사람들이 게임을 통해 전통 장식품을 자연스럽게 만나는 경험을 기획했습니다. 사용하지 않는 시계를 업사이클해 보드게임으로 만들고, 전통 보석함에서 가져온 모티프로 패키지를 디자인했습니다. QR을 통해 게임과 온라인 정보를 연결했습니다.' },
  { title: '나를 전시하는 법', subtitle: '인포그래픽 자기소개 · 2026', type: 'Illustrator', pages: [12, 13], description: '나의 생활 패턴과 관심사, 성격과 역량을 하나의 인포그래픽으로 표현했습니다. 기하학적 캐릭터를 중심에 두고 자격증과 취미, 특징을 작품과 그래프로 배치했습니다.' },
  { title: '건강을 끼우다', subtitle: '샌드위치 브랜드 아이덴티티 · 2026', type: 'Photoshop · Illustrator', pages: [14, 15, 16], description: '건강한 재료를 일상 속에 가볍게 끼워 넣는 샌드위치 브랜드입니다. 채소와 재료를 심볼에 활용하고 초록색을 중심으로 패키지와 응용 디자인을 전개했습니다.' },
  { title: 'Mushy Cat', subtitle: '캐릭터 · AI 동반자 · 2026', type: 'Photoshop · Illustrator', pages: [17, 18, 19], description: '대화와 친구 사귀기에 어려움을 느끼는 사람을 위한 AI 친구를 상상했습니다. 버섯과 고양이를 결합한 캐릭터, 감정에 따른 여러 표정과 스마트폰 대화 경험을 함께 디자인했습니다.' }
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
  dialogContent.innerHTML = `<p class="eyebrow">${String(index + 1).padStart(2, '0')} / SELECTED WORK</p><h2 class="dialog-title">${project.title}</h2><p class="dialog-subtitle">${project.subtitle}</p><p class="dialog-description">${project.description}</p><p class="dialog-meta">TOOLS — ${project.type}</p><div class="dialog-pages">${project.pages.map((page) => `<img src="page-${String(page).padStart(2, '0')}.jpg" alt="${project.title} 포트폴리오 페이지 ${page}" loading="lazy">`).join('')}</div>`;
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
}

document.querySelectorAll('.project-card').forEach((card) => card.addEventListener('click', () => showProject(Number(card.dataset.project))));
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
