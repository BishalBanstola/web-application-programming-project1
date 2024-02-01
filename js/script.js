//news articles collection object
var news = {
  items: [
    {
      title: "Breaking News: Earthquake Hits Major City",
      description:
        "A powerful earthquake struck a major city today, causing widespread damage to buildings and infrastructure. The quake, measuring 7.2 on the Richter scale, shook the region for nearly a minute, sending residents fleeing into the streets in panic. Reports of collapsed buildings and injuries are pouring in, with emergency services scrambling to assess the situation and provide aid to those in need. The full extent of the damage and casualties is yet to be determined, but authorities are urging residents to remain vigilant and stay safe amidst the ongoing aftershocks.",
      image: "./assets/earthquake.jpg",
      category: "General",
      trending: true,
    },
    {
      title: "Latest Videos - Sports Update: Team Wins Championship",
      description: "",
      video: "https://www.youtube.com/embed/PyoetdmbxBw?si=7iunga_E6SVQ_rbV",
      category: "Sports",
      trending: true,
    },
    {
      title: "General News: Political Unrest in Capital City",
      description:
        "Mass protests erupted in the capital city today as citizens demand political reforms, echoing their calls for change heard across the nation. Thousands took to the streets, chanting slogans and waving banners, as they voiced their grievances and called for accountability from government officials. Tensions escalated as clashes broke out between protesters and law enforcement, with reports of injuries and arrests making headlines around the world. As the situation remains fluid, all eyes are on the capital, where the fate of the nation hangs in the balance amid calls for dialogue and reconciliation.",
      image: "./assets/protest.jpg",
      category: "General",
      trending: false,
    },
    {
      title:
        "Latest Videos - Sports Highlight: Record-Breaking Marathon Finish",
      description: "",
      video: "https://www.youtube.com/embed/4AEA1y6yQRo?si=kUFRM3Ky0btZXp9i",
      category: "Sports",
      trending: false,
    },
    {
      title:
        "Photo feature - Entertainment Update: Brad Angelina Attend Event Together",
      description: "",
      image: "./assets/hollywood-marriage.jpg",
      category: "Entertainment",
      trending: false,
    },
    {
      title: "Photo feature - Entertainment Scoop: Dune Part 2 Latest Photo",
      description: "",
      image: "./assets/dune.jpg",
      category: "Entertainment",
      trending: false,
    },
    {
      title: "Photo feature - Oscar Snub: Barbie Left Out",
      description: "",
      image: "./assets/barbie.jpg",
      category: "Entertainment",
      trending: false,
    },
    {
      title: "Photo feature -  New Supergirl: Milly Alcock",
      description: "",
      image: "./assets/supergirl.jpg",
      category: "Entertainment",
      trending: true,
    },
    {
      title: "Tech News: Breakthrough in Artificial Intelligence",
      description:
        "Researchers achieved a major breakthrough in AI technology, paving the way for revolutionary applications that promise to transform industries and improve lives. Leveraging cutting-edge algorithms and computational power, the new AI model demonstrates unprecedented capabilities in tasks ranging from natural language processing to image recognition and autonomous decision-making. With implications spanning healthcare, finance, transportation, and beyond, the breakthrough heralds a new era of innovation and discovery, fueling optimism for a future powered by intelligent machines that augment human potential and enhance societal progress.",
      image: "./assets/ai.jpg",
      video: "https://www.youtube.com/embed/E_a78HF4Q1c?si=o_2EoGfQg5_mmdRL",
      category: "Tech",
      trending: false,
    },
    {
      title: "Tech Update: Latest Gadgets Unveiled at Tech Expo",
      description:
        "Tech enthusiasts were treated to a sneak peek of the latest gadgets and innovations showcased at the annual tech expo, where innovation and ingenuity took center stage. From sleek smartphones with cutting-edge features to futuristic wearables that seamlessly integrate into everyday life, the expo offered a glimpse into the future of technology and its transformative impact on society. As attendees marveled at the displays, interacted with prototypes, and attended keynote presentations by industry leaders, excitement reached a fever pitch, igniting imaginations and inspiring the next generation of innovators to push the boundaries of what's possible.",
      image: "./assets/watch.jpg",
      video: "https://www.youtube.com/embed/oNCs4C2SMjo?si=Aql3vIokJ_pjLzlK",
      category: "Tech",
      trending: false,
    },
    {
      title: "Tech Breakthrough: Quantum Computing Milestone Achieved",
      description:
        "In a groundbreaking achievement that promises to revolutionize computing as we know it, scientists have reached a significant milestone in the development of quantum computing technology. Leveraging the principles of quantum mechanics, researchers successfully demonstrated the ability to manipulate and control qubits with unprecedented precision and stability, overcoming longstanding technical challenges that have hindered progress in this field. With the potential to exponentially increase computational power and solve complex problems that are currently beyond the reach of classical computers, this breakthrough heralds a new era of innovation and discovery with far-reaching implications for science, industry, and society at large.",
      image: "./assets/quantum.jpg",
      video: "https://www.youtube.com/embed/XlCsi8zagNw?si=7_XhCnsl8sAR0Jl4",
      category: "Tech",
      trending: false,
    },
    {
      title:
        "Latest Videos - Football Update: Legendary Rivalry Renewed in High-Stakes Derby",
      description: "",
      video: "https://www.youtube.com/embed/AiT_HWFGN-I?si=oT5DqMF7ajxa8RwR",
      category: "Sports",
      trending: false,
    },
    {
      title:
        "Latest Videos - Basketball Buzz: All-Star Showdown Raises the Roof with Jaw-Dropping Plays",
      description: "",
      video: "https://www.youtube.com/embed/hV1c7qEGkew?si=F7I1mJDhPZGVdWZQ",
      category: "Sports",
      trending: false,
    },
  ],
};

// get header and popup element and add mouseover event
var header = document.getElementById("page-header");
var popupMessage = document.getElementById("popup-message");

header.addEventListener("mouseover", function () {
  popupMessage.classList.add("show");

  // to hide popup message after 2 seconds
  setTimeout(function () {
    popupMessage.classList.remove("show");
  }, 2000);
});

//show the news when the site loads
function showTrendingNews() {
  document.getElementById("top-news").innerHTML = generateNewsHTML(news);
}

// add event listener to the Home button
document.getElementById("home-btn").addEventListener("click", showTrendingNews);

// function to generate HTML for news items based on their properties: the object and whether it is trending or not
function generateNewsHTML(newsObj, trending) {
  var html = "";
  newsObj.items.forEach(function (newsItem) {
    // check if the news item is trending
    if ((trending && newsItem.trending) || !trending) {
      html += `<article>
                <h2>${newsItem.title}</h2>
                <p>${newsItem.description}</p>`;

      // check if item has an image
      if (newsItem.image) {
        html += `<img src="${newsItem.image}" alt="Image">`;
      }

      // check if item has a video
      if (newsItem.video) {
        html += `<div class="video-container">
            <iframe width="560" height="315" src="${newsItem.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>`;
      }

      html += `</article>`;
    }
  });
  return html;
}

// function to add a new category
function addCategory() {
  console.log("here");
  var selectElement = document.getElementById("category-select");
  var newCategory = selectElement.value.trim();
  if (!news.categories) {
    news.categories = [];
  }
  if (newCategory !== "" && !news.categories.includes(newCategory)) {
    news.categories.push(newCategory);
    updateSidebar();
    selectElement.value = "Sports";
  }
}

// function to update the sidebar with categories
function updateSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.innerHTML = generateCategoriesHTML(news.categories);
  // add click to each items on the list to display them by category when clicked
  var categoryItems = document.querySelectorAll(".category-list li");
  categoryItems.forEach(function (item) {
    console.log("heeee");
    item.addEventListener("click", function () {
      var selectedCategory = this.textContent;
      displayNewsByCategory(selectedCategory);
    });
  });
}

// function to display filtered news
function displayNewsByCategory(category) {
  var filteredNews = news.items.filter(function (newsItem) {
    return newsItem.category === category;
  });

  document.getElementById("top-news").innerHTML = generateNewsHTML(
    {
      items: filteredNews,
    },
    false
  );
}

// function to generate HTML for categories
function generateCategoriesHTML(categories) {
  categories = categories || [];
  var html = "";
  categories.forEach(function (category) {
    html += `<li>${category}</li>`;
  });
  return html;
}

// display top trending news and categories on the homepage
document.getElementById("top-news").innerHTML = generateNewsHTML(news, true);
// update sidebar initially
updateSidebar();

// add event listener for the Add button
document.getElementById("add-btn").addEventListener("click", addCategory);

// color schemes for black or white
var colorSchemes = [
  { background: "black", text: "white" },
  { background: "white", text: "black" },
];

// current color scheme index
var currentColorSchemeIndex = 0;

// function to change the color scheme of the page
function changeColorScheme() {
  // get the next color scheme and set the background and text color
  var colorScheme = colorSchemes[currentColorSchemeIndex];

  document.body.style.backgroundColor = colorScheme.background;
  document.body.style.color = colorScheme.text;

  // toggler to switch colors
  currentColorSchemeIndex = (currentColorSchemeIndex + 1) % colorSchemes.length;
}

var colorSchemeBtn = document.getElementById("color-scheme-btn");
colorSchemeBtn.addEventListener("click", changeColorScheme);

// function to delete a category
function deleteCategory(category) {
  var index = news.categories.indexOf(category);
  if (index !== -1) {
    news.categories.splice(index, 1);
    updateSidebar();
  }
}
// function to handle unsubscribe button click
function handleUnsubscribe() {
  var unsubscribeList = document.getElementById("unsubscribe-list");
  unsubscribeList.style.display = "block";
  unsubscribeList.innerHTML = "";

  // show list of subscribed categories
  var categoriesHTML = "<h5>Unsubscribe from these categories</h5>";
  news.categories.forEach(function (category) {
    categoriesHTML += `<div>${category} <button class="remove-btn" data-category="${category}">Remove</button></div>`;
  });
  unsubscribeList.innerHTML = categoriesHTML;

  // add event listeners to remove buttons
  var removeButtons = unsubscribeList.querySelectorAll(".remove-btn");
  removeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var categoryToRemove = button.dataset.category;
      deleteCategory(categoryToRemove);
      handleUnsubscribe();
    });
  });
}

document
  .getElementById("unsubscribe-btn")
  .addEventListener("click", handleUnsubscribe);
