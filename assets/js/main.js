
const skills = [
  {
    name: 'python',
    level: 90
  },
  {
    name: 'Django',
    level: 90
  },
  {
    name: 'Django Rest Framework',
    level: 95
  },
  {
    name: 'DataBase Relational',
    level: 55
  },
  {
    name: 'Javascript',
    level: 85
  }
]

const skillsRight = document.querySelector('.skills-right');
// const heroImageWrapper = document.querySelector('.hero-image-wrapper');
// const heroIntro = document.querySelector('.hero-intro');
// const skillWrapper = document.querySelector('.skill-wrapper');
// const projects = document.querySelectorAll('.project');
// const projectMainWrapper = document.querySelector('.project-main-wrapper');
// const blogMainWrapper = document.querySelector('.blog-main-wrapper');
// const contactMainWrapper = document.querySelector('.contact-main-wrapper');


const skillInfo = skills.map(skill => {

  return (
    `
      <div class="skill-box">
          <div class="upper-section">
            <p>${skill.name}</p>
            <p>${skill.level}%</p>
          </div>
          <div class="bottom-section">
            <div class="skill-bar">
              <div class="skill-bar-fill" style='width:${skill.level}%'></div>
            </div>
          </div>
      </div>
    `
  );
}).join('');

skillsRight.innerHTML += skillInfo;


let options = {
  root: null,
  threshold: 0,
  rootMargin: '100px 100px 0px 0px'
}

const translateAnim = ({ selector, classes }) => {
  const selectorWrapper = document.querySelector(`.${selector}`);
  let observer = new IntersectionObserver(function (
    entries,
    observer
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      selectorWrapper.classList.remove(`${classes}`);
      observer.disconnect();
    })
  }, options);
  observer.observe(selectorWrapper);
}
const translateAnimAll = ({ selector, classes }) => {
  const selectorWrappers = document.querySelectorAll(`.${selector}`);
  let observer = new IntersectionObserver(function (
    entries,
    observer
  ) {
    selectorWrappers.forEach(selectorWrapper => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        selectorWrapper.classList.remove(`${classes}`);
        observer.disconnect();
      })
    })
  }, options);

  selectorWrappers.forEach(selectorWrapper => {
    observer.observe(selectorWrapper);
  })
}

translateAnim({ selector: 'hero-intro', classes: 'translate-left' });
translateAnim({ selector: 'hero-image-wrapper', classes: 'translate-right' });
translateAnim({ selector: 'skills-wrapper', classes: 'translate-up' });
translateAnim({ selector: 'skills-right', classes: 'translate-right' });
translateAnim({ selector: 'project-main-wrapper', classes: 'translate-up' });
translateAnim({ selector: 'blog-main-wrapper', classes: 'translate-up' });
translateAnim({ selector: 'contact-main-wrapper', classes: 'translate-contact' });
translateAnim({ selector: 'contact-link-main-wrapper', classes: 'opacity' });

translateAnimAll({ selector: 'project', classes: 'translate-up' });