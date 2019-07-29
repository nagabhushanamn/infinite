


// store 


const store = {
    listeners: [],
    state: {
        topics: [
            "java",
            "javascript",
            "scala",
            "python",
            "go"
        ],
        comments: {
            java: [
                'my first language',
                'popular',
                'the best'
            ],
            javascript: [
                'secons friend..',
                'bla bla'
            ]
        }
    },
    getState() {
        return this.state;
    },
    subscribe(listener) {
        this.listeners.push(listener)
    }
}

// let i = 0;
// setInterval(() => {
//     i++;
//     let topic = `topic-${i}`
//     let newState = { ...store.state, 'topics': [...store.state.topics, topic] }
//     store.state = newState
//     store.listeners.forEach(listener => listener())
// }, 2000)


export default store;