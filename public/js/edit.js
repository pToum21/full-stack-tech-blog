const updateBlogPost = async () => {
    const title = document.querySelector('#project-name').value.trim();
    const description = document.querySelector('#project-desc').value.trim();
    const id = document.querySelector('.custom-card').getAttribute('data-id')


    if (title && description) {
        const response = await fetch(`/api/post/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, description }),
            headers: { 'Content-type': 'application/json' },
        });
        console.log(response)


        if (response.ok) {
            document.location.replace('/dashboard')
        } else {
            alert('Failed to update blog post, Try again')
        }
    }
}

document.querySelector('#edit-post').addEventListener('click', updateBlogPost);