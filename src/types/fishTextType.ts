export type fishTextType = {
    first_block: {
        title: string,
        description: string,
    },
    second_block: {
        title: string,
        description: string | string[]
    }[]
}