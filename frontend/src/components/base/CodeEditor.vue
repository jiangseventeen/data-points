<template>
  <div class="code-editor" ref="editor" @keydown.stop>
  </div>
</template>

<script>
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import 'monaco-editor/esm/vs/language/json/monaco.contribution'

export default {
  name: 'CodeEditor',
  props: ['value'],
  mounted () {
    this.monaco = monaco.editor.create(this.$refs.editor, {
      minimap: {
        enabled: false
      },
      language: 'json',
      theme: 'vs-dark',
      contextmenu: false,
      lineNumbersMinChars: 3,
      lineDecorationsWidth: 2,
      scrollBeyondLastLine: false,
      scrollbar: {
        verticalScrollbarSize: 5
      },
    })
    this.monaco.getModel().updateOptions({tabSize: 2})
  }
}
</script>

<style lang="scss">
.code-editor {
  width: 100%;
  height: 350px;
}
</style>