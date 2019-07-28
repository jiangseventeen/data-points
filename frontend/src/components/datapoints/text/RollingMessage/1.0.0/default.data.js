export default {
  type: 'static',
  staticData: [
    { valued: '这是一行测试文本' },
    { value: '这是滚动测试文本' },
    { value: '这是无名测试文本' },
  ],
  schema: {
    type: 'array', 
    items: {
      type: 'object',
      properties: {
        value: { type: 'string' }
      },
      required: ['value']
    }
  },
  uri: '',
}