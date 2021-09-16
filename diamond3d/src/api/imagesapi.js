const port =3001;
export const getsingleuserdata = async (body) =>
    await fetch(`http://localhost:${port}/image/getsingleuserimage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(data => data)
