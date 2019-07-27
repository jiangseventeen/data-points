<template>
  <div class="code-editor" ref="editor" @keydown.stop>
  </div>
</template>

<script>
import * as monaco from 'monaco-editor'

export default {
  name: 'CodeEditor',
  props: ['value'],
  data () {
    return {
      isEdit: false
    }
  },
  methods: {
    init () {
      this.monaco = monaco.editor.create(this.$refs.editor, {
        minimap: { enabled: false },
        language: 'json',
        theme: 'vs-dark',
        contextmenu: false,
        lineNumbersMinChars: 3,
        lineDecorationsWidth: 2,
        scrollBeyondLastLine: false,
        scrollbar: { verticalScrollbarSize: 5 },
      })
      this.monaco.getModel().updateOptions({tabSize: 2})
      this.monaco.onDidChangeModelContent(event => {
        const value = this.monaco.getValue()
        if (this.value !== value) {
          this.isEdit = true
          this.$emit('input', value, event)
        }
      })
      this.monaco.onDidFocusEditorText(() => {
        this.isEdit = false
      })
      this.monaco.onDidBlurEditorText(() => {
        this.$emit('blur', this.isEdit)
      })
    },
  },
  mounted () {
    this.init()
    this.monaco.setValue(this.value)
  },
  watch: {
    'value': function (newValue) {
      if (newValue != this.monaco.getValue()) {
        this.monaco.setValue(newValue)
      }
    }
  }
}
</script>

<style lang="scss">
.code-editor {
  width: 100%;
  height: 350px;
}
</style>