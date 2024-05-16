console.log('hi')

window.onload = () => {
    if (window.screen.width < 768)
    document.querySelector('body').innerHTML = `
    <div>
        <h1>Je ne suis pas encore disponible pour le mobile, utilise un ordinateur</h1>
    </div>
    `
}
