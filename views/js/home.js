(() => {
    // Define an array of blog post objects
    const blogPosts = [
        {
          title: "Blog Post 1",
          description: "This is the first blog post. It covers various topics.",
          image: "https://via.placeholder.com/300"
        },
        {
          title: "Blog Post 2",
          description: "The second blog post discusses important issues in depth.",
          image: "https://via.placeholder.com/300"
        },
        {
          title: "Blog Post 3",
          description: "In the third blog post, we explore new ideas and concepts.",
          image: "https://via.placeholder.com/300"
        },
        {
          title: "Blog Post 4",
          description: "This post delves into recent developments and trends.",
          image: "https://via.placeholder.com/300"
        },
        {
          title: "Blog Post 5",
          description: "Here's another exciting blog post that you don't want to miss.",
          image: "https://via.placeholder.com/300"
        },
        {
          title: "Blog Post 6",
          description: "Learn about interesting facts and trivia in this post.",
          image: "https://via.placeholder.com/300"
        },
        {
          title: "Blog Post 7",
          description: "Discover tips and tricks for improving your skills.",
          image: "https://via.placeholder.com/300"
        },
        {
          title: "Blog Post 8",
          description: "Find out about upcoming events and opportunities.",
          image: "https://via.placeholder.com/300"
        },
        {
          title: "Blog Post 9",
          description: "Stay updated with the latest news and announcements.",
          image: "https://via.placeholder.com/300"
        }
      ];

    // Function to dynamically generate blog cards
    function generateBlogCards() {
        const blogSection = document.getElementById("blogCardsRow");

        // Iterate over the blogPosts array
        blogPosts.forEach(post => {
            // Create card element
            const card = document.createElement("div");
            card.className = "col-lg-4 col-md-6 mb-4";

            // Create card content
            const cardContent = `
        <div class="card">
          <img src="${post.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.description}</p>
            <a href="#" class="btn btn-primary">Read More</a>
          </div>
        </div>
      `;

            // Set card content
            card.innerHTML = cardContent;

            // Append card to the blog section
            blogSection.appendChild(card);
        });
    }

    // Call the function to generate blog cards when the page loads
    window.onload = generateBlogCards;

})()