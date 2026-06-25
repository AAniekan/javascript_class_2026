const formEle = document.forms[0]


formEle.addEventListener('submit', function(event){
    event.preventDefault();

    let formdata = new FormData(formEle)

    payload = Object.fromEntries(formdata.entries())

    register(payload)

})


async function register(payload)
{
    let response = await fetch('https://futurelabs-student-api.vercel.app/api/auth/register', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })

    let res = await response.json()

    if(res.success)
    {
        localStorage.setItem('token', res.data.token)

        window.location.href = '../dashboard/index.html'
    }
}