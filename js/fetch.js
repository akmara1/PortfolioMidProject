fetch('https://www.boredapi.com/api/activity')
    .then(response => {
        if (!response.ok) throw new Error('Oops!')
        return response.json()
    })
    .then(data => {
        const box = document.querySelector('.api-get')
        const h3 = document.querySelector('.api-get__title')
        const text = document.querySelector('.api-get__text')
        const num = document.querySelector('.api-get__num')
        h3.textContent = data.type
        text.textContent = data.activity
        num.textContent = `Participants: ${data.participants}`

    })

const changeActivity = () => {
    location.reload()
}