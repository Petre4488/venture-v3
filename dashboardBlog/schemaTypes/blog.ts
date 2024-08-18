import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'blog',
  title: 'Venture Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    },),
    defineField({
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [{type: 'block'}],
    },),
  ],
})

export default eventType;