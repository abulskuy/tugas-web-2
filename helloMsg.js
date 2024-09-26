const helloMsg = (element) => {
    element.text('Hello')
    element.click(() => {
        alert('Goodbye')
    })
}

const goodbyeMsg = (element) => {
    element.text('Goodbye')
    element.click(() => {
        alert('Goodbye')
    })
}

export {goodbyeMsg, helloMsg}