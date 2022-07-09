
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Proident officia duis veniam deserunt.',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Dolor in officia ipsum magna sit pariatur sunt consectetur qui amet sit dolore irure.',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Id qui do eiusmod do fugiat adipisicing qui ut incididunt ut nostrud excepteur.',
            picture: null
        }
    ]
})