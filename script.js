document.addEventListener('DOMContentLoaded', () => {
    const subjects = document.querySelectorAll('.subject');
    const searchBar = document.getElementById('search-bar');
    const lectureLinks = document.querySelectorAll('section ul li a');
    const postButtons = document.querySelectorAll('.post-button');

    subjects.forEach(subject => {
        const header = subject.querySelector('h2');
        const lectureList = subject.querySelector('.lectures');

        header.addEventListener('click', () => {
            lectureList.classList.toggle('hidden');
        });
    });

    searchBar.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        lectureLinks.forEach(link => {
            if (link.textContent.toLowerCase().includes(query)) {
                link.parentElement.style.display = '';
            } else {
                link.parentElement.style.display = 'none';
            }
        });
    });

    postButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const forum = event.target.closest('.forum');
            const newPostInput = forum.querySelector('.new-post');
            const postsDiv = forum.querySelector('.posts');

            const newPostText = newPostInput.value.trim();
            if (newPostText !== "") {
                const newPost = document.createElement('div');
                newPost.textContent = newPostText;
                postsDiv.appendChild(newPost);
                newPostInput.value = '';
            }
        });
    });

    console.log('Website loaded');
});
