const newFormHandler = async (event) => {
    event.preventDefault();
    const title  = document.querySelector('#project-name').value.trim()
    const name = document.querySelector('#project-name').value.trim()
    const description = document.querySelector('#project-desc').value.trim();

    if (name && title && description) {
        const response = await fetch(`/api/post`, {
            method: 'POST',
            body: JSON.stringify({ name, title, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create project');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/post/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete project');
        }
    }
};

document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);