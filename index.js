/* ========== OVERVIEW TEMPLATE ============ */
const data = [ 
  {
      name: "facebook",
      title: "Page Views",
      icon: "./assets/images/icon-facebook.svg",
      number: 87,
      rating: {
          rate: 'up',
          number: 3
      }
  },
  {
      name: "facebook",
      title: "Likes",
      icon: "./assets/images/icon-facebook.svg",
      number: 52,
      rating: {
          rate: 'down',
          number: 2
      }
  },
  {
      name: "instagram",
      title: "Likes",
      icon: "./assets/images/icon-instagram.svg",
      number: 5462,
      rating: {
          rate: 'up',
          number: 2257
      }
  },
  {
      name: "instagram",
      title: "Profile Views",
      icon: "./assets/images/icon-instagram.svg",
      number: "52k",
      rating: {
          rate: 'up',
          number: 1375
      }
  },
  {
      name: "twitter",
      title: "Retweets",
      icon: "./assets/images/icon-twitter.svg",
      number: 117,
      rating: {
          rate: 'up',
          number: 303
      }
  },
  {
      name: "twitter",
      title: "Likes",
      icon: "./assets/images/icon-twitter.svg",
      number: 507,
      rating: {
          rate: 'up',
          number: 553
      }
  },
  {
      name: "youtube",
      title: "Likes",
      icon: "./assets/images/icon-youtube.svg",
      number: 107,
      rating: {
          rate: 'down',
          number: 19
      }
  },
  {
      name: "youtube",
      title: "Total Views",
      icon: "./assets/images/icon-youtube.svg",
      number: 1407,
      rating: {
          rate: 'down',
          number: 12
      }
  },
]

if ('content' in document.createElement('template')) { 
  var overviews = document.getElementById("overviews");
  let template = document.querySelector('#overview');
  
  for (let i = 0; i < data.length; i++) {
    var clone = template.content.cloneNode(true);

    // get all elements from 'template'
    const numberEl = clone.querySelector("[data-overview='number']");
    const titleEl = clone.querySelector("[data-overview='title']");
    const rateEl = clone.querySelector("[data-overview='rate']");
    const iconImgEl = clone.querySelector("[data-overview='icon']");
    const rateImgEl = clone.querySelector("[data-overview='rateImg']");

    // check the icon image (up or down) according to rate
    let rateImg, rate;
    if (data[i].rating.rate === 'up') {
      rateImg = './assets/images/icon-up.svg';
      rate = 'text-success';
    }
    
    else if (data[i].rating.rate === 'down') {
      rateImg = './assets/images/icon-down.svg';
      rate = 'text-danger';
    }

    // assign values to elements
    numberEl.textContent = data[i].number;
    titleEl.textContent = data[i].title;
    rateEl.classList.add(rate);
    rateEl.textContent = data[i].rating.number + '%';

    // helper function to set several attributes at once
    function setAttributes(el, attrs) {
      for(var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    }

    // set attributes to img by providing 'src, alt, title'
    setAttributes(iconImgEl, {
      "src": data[i].icon,
      "alt": data[i].name,
      "title": data[i].name
    });

    setAttributes(rateImgEl, {
      "src": rateImg,
      "alt": data[i].rating.rate,
      "title": data[i].rating.rate
    });

    // take all assigned elements and append it to the parent
    overviews.appendChild(clone);
  }
}


/* ========== THEME ============ */
const themeToggle = document.getElementById("theme-toggle");
function enableDarkMode() {
  document.body.classList.add("dark-theme");
  themeToggle.setAttribute("aria-label", "Switch to light theme");
}

function enableLightMode() {
  document.body.classList.remove("dark-theme");
  themeToggle.setAttribute("aria-label", "Switch to dark theme");
}

// check the user's theme preference
function setThemePreference() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    enableDarkMode();
    return;
  }
  enableLightMode();
}

document.onload = setThemePreference();

themeToggle.addEventListener("click", () => {
  document.body.classList.contains("dark-theme")
    ? enableLightMode()
    : enableDarkMode();
});
