let dtl1 = document.getElementById('menu1');
let dtl2 = document.getElementById('menu2');
let dtl3 = document.getElementById('menu3');
let dtls = document.querySelectorAll('details');
let menuName = document.querySelector('summary').querySelector('span');
let menu = document.querySelector('.mobile--menu');
let menuIcon = document.querySelector('.menu--icon');
let menuClose = document.querySelector('.menu--close');
let navMenu = document.querySelector('.header--nav');
let navCTA = document.querySelector('.header--cta');

for (let i = 0; i < dtls.length; i++) {
    dtls[i].addEventListener('keyup',
        function escapeMenu(e) {
            if (e.key == 'Escape') {
                dtls[i].removeAttribute('open');
                dtls[i].querySelector('summary').querySelector('div').style.transform = 'rotate(0deg)';
            }
        }
    )
}

dtl1.addEventListener('click', () => {
    dtl2.removeAttribute('open');
    setTimeout(() => {
        dtl2.querySelector('summary').querySelector('div').style.transform = 'rotate(0deg)';
    }, 20);
    dtl3.removeAttribute('open');
    setTimeout(() => {
        dtl3.querySelector('summary').querySelector('div').style.transform = 'rotate(0deg)';
    }, 20);
    if (dtl1.hasAttribute('open')) {
        dtl1.querySelector('summary').querySelector('div').style.transform = 'rotate(0deg)';
        dtl1.querySelector('summary').querySelector('span').style.color = 'var(--veryDarkBlueHeadings)';
    } else {
        dtl1.querySelector('summary').querySelector('div').style.transform = 'rotate(0deg)';
        dtl1.querySelector('summary').querySelector('span').style.color = 'var(--veryDarkGrayishBlueBodyCopy)';
        setTimeout(() => {
            dtl1.querySelector('summary').querySelector('div').style.transform = 'rotate(90deg)';
        }, 20);
        setTimeout(() => {
            dtl1.querySelector('summary').querySelector('div').style.transform = 'rotate(180deg)';
        }, 20);
    }
});

dtl2.addEventListener('click', () => {
    dtl1.removeAttribute('open');
    setTimeout(() => {
        dtl1.querySelector('summary').querySelector('div').style.transform = 'rotate(0deg)';
    }, 20);
    dtl3.removeAttribute('open');
    setTimeout(() => {
        dtl3.querySelector('summary').querySelector('div').style.transform = 'rotate(0deg)';
    }, 20);
    if (dtl2.hasAttribute('open')) {
        dtl2.querySelector('summary').querySelector('span').style.color = 'var(--veryDarkBlueHeadings)';
        dtl2.querySelector('summary').querySelector('div').style.transform = 'rotate(0deg)';
    } else {
        dtl2.querySelector('summary').querySelector('span').style.color = 'var(--veryDarkGrayishBlueBodyCopy)';
        dtl2.querySelector('summary').querySelector('div').style.transform = 'rotate(0deg)';
        setTimeout(() => {
            dtl2.querySelector('summary').querySelector('div').style.transform = 'rotate(90deg)';
        }, 20);
        setTimeout(() => {
            dtl2.querySelector('summary').querySelector('div').style.transform = 'rotate(180deg)';
        }, 20);
    }
});

dtl3.addEventListener('click', () => {
    dtl1.removeAttribute('open');
    setTimeout(() => {
        dtl1.querySelector('summary').querySelector('div').style.transform = 'rotate(0deg)';
    }, 20);
    dtl2.removeAttribute('open');
    setTimeout(() => {
        dtl2.querySelector('summary').querySelector('div').style.transform = 'rotate(0deg)';
    }, 20);
    if (dtl3.hasAttribute('open')) {
        dtl3.querySelector('summary').querySelector('span').style.color = 'var(--veryDarkBlueHeadings)';
        dtl3.querySelector('summary').querySelector('div').style.transform = 'rotate(0deg)';
    } else {
        dtl3.querySelector('summary').querySelector('span').style.color = 'var(--veryDarkGrayishBlueBodyCopy)';
        dtl3.querySelector('summary').querySelector('div').style.transform = 'rotate(0deg)';
        setTimeout(() => {
            dtl3.querySelector('summary').querySelector('div').style.transform = 'rotate(90deg)';
        }, 20);
        setTimeout(() => {
            dtl3.querySelector('summary').querySelector('div').style.transform = 'rotate(180deg)';
        }, 20);
    }
}
);

menuIcon.addEventListener('click', () => {
    if (menuIcon.style.display = 'block') {
        menuIcon.style.display = 'none';
        setTimeout(() => {
            navMenu.style.opacity = '1';
            navCTA.style.opacity = '1';
        }, 200);
        navMenu.style.display = 'flex';
        navCTA.style.display = 'flex';
        menuClose.style.display = 'block';
    }
    menuClose.addEventListener('click', () => {
        if (menuClose.style.display = 'block') {
            menuIcon.style.display = 'block';
            navMenu.style.display = 'none';
            navCTA.style.display = 'none';
            setTimeout(() => {
                navMenu.style.opacity = '0';
                navCTA.style.opacity = '0';
            }, 200);
            navMenu.style.display = 'none';
            navCTA.style.display = 'none';
            menuClose.style.display = 'none';
        }
    })
});