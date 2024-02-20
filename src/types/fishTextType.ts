export type fishTextType = {
    first_block: {
        title: string,
        description: string,
    },
    second_block: {
        title: string,
        description: string | string[]
    }[],
    third_block: {
        mainTitle: string,
        cooTitle: string,
        ul: string[],
        price: number
    }[],
}