module.exports = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      description: 'Name of the Tag',
    },
    bgColor: {
      type: 'string',
      description: 'Background color hex code',
    },
    textColor: {
      type: 'string',
      description: 'Text color hex code',
    },
    prayers: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/Prayer',
      },
      description: 'Prayers with the Tag',
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
      description: 'Date and time of the Tag creation',
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
      description: 'Date and time of the Tag update',
    },
  },
  required: ['name'],
};
