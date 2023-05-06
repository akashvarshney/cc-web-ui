<template>
  <v-main>
    <v-toolbar color="primary">
      <v-toolbar-title>Add New Contest</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>    
    <div style="padding-top: 10px;">
      <v-row>
        <v-col cols="12" md="8" offset-md="2">
          <QuillEditor ref="quillEditor" :options="editorOptions" v-model="editorContent"
            @image-added="handleImageAdded" />
        </v-col>
      </v-row>
    </div>
  </v-main>
</template>

<script lang="ts">
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import '@vueup/vue-quill/dist/vue-quill.bubble.css'

export default {
  components: {
    QuillEditor,
  },
  data() {
    return {
      editorContent: '',
      editorOptions: {
        placeholder: 'Start typing here...',
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ color: [] }, { background: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image', 'video'],
            ['clean'],
          ],
        },
      },
    }
  },
  methods: {
    handleImageAdded(image) {
      // handle image upload and insert into editor content
    },
  },
}
</script>
<style scoped></style>
