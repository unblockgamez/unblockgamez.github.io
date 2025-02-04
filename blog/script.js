document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("show");
});
document.addEventListener("DOMContentLoaded", function() {
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            const blogPostsContainer = document.getElementById('blog-posts');
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('blog-post');

                const titleElement = document.createElement('h2');
                const linkElement = document.createElement('a');
                linkElement.href = post.link;
                linkElement.textContent = post.title;
                titleElement.appendChild(linkElement);

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = post.description;

                postElement.appendChild(titleElement);
                postElement.appendChild(descriptionElement);

                blogPostsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error loading the posts:', error));
});