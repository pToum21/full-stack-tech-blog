const addCommentHandler = async (event) => {
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

// delete user comment
const deleteCommentHandler = async (event) => {
    // get comment id
    const id = event.target.getAttribute('data-id');
    // make api call wiht comment id
    const response = await fetch(`/api/comment/${id}`, {
        method: 'DELETE',
    });
    // reload page after comment is deleted
    if (response.ok) {
        document.location.reload();
    } else {
        alert('Failed to delete comment');
    }
};

const commentDeleteBtn = document.querySelectorAll('.btn-delete-comment');
// event delegation for all comment delete buttopns
commentDeleteBtn.forEach((button) => {
    button.addEventListener('click', deleteCommentHandler);
});
// event listener
document.querySelector('#postComment').addEventListener('click', addCommentHandler);