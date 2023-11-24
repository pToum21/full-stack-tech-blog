const addComment = async (event) => {
    event.preventDefault();
    // grab url
    const url = window.location.href;

    // extract blogpost id number from url
    const match = url.match(/\/post\/(\d+)/);
    const targetId = match[1];
    // verify blog post id
    if (match) {
        const comment = document.querySelector('#comment').value.trim();
        // send comment value with target blog post id
        if (comment) {
            const response = await fetch('/api/comment', {
                method: 'POST',
                body: JSON.stringify({ comment, targetId }),
                headers: { 'Content-type': 'application/json' },
            });
            // reload page to see new comment
            if (response.ok) {
                document.location.reload()
            } else {
                alert('Failed to add comment');
            }
        }
    }
};



const commentDeleteBtn = document.querySelectorAll('#delete-comment');
// event delegation for all comment delete buttons
commentDeleteBtn.forEach((button) => {
    button.addEventListener('click', deleteCommentHandler);
});
// event listener
document.querySelector('#add-comment').addEventListener('click', addComment);