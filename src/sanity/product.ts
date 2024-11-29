// sanity/pet.ts
export default {
    name: 'book',
    type: 'document',
    title: 'book',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'prise',
            type: 'number',
            title: 'prise'
        },
        {
            name: 'auther',
            type: 'string',
            title: 'auther'
        },
        {
            name: 'image',
            type: 'image',
            title: 'image'
        }
    ]
}