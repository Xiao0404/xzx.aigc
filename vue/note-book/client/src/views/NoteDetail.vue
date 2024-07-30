<template>
  <div class="note-detail" >
    <div class="note-img">
      <img :src="note.head_img" alt="">
    </div>
    <div class="note-content">
      <div class="tab">
        <span class="note_type">{{ note.note_type }}</span>
        <span class="author">{{ note.nickname }}</span>
      </div>
      <p class="title">{{ note.title }}</p>
      <div class="content" v-html="note.note_content"></div>
    </div>
  </div>
</template>


<script setup>
  import { useRoute,useRouter} from 'vue-router';
  import axios from '@/api';
  import { ref,onMounted  } from 'vue';

  const route = useRoute();
  const  note = ref('');

  const id = route.query.id;

  axios.get('/findNoteDetailById', {
  params: {
    note_id: id
  }
}).then(res => {
  console.log(res.data);
  note.value = res.data[0];
  console.log(note);

})


</script>

<style lang="less" scoped>
.note-detail {
  .note-img {
    width: 100%;
    height: 5rem;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .note-content {
    padding: 0.667rem;

    .tab {
      display: flex;
      justify-content: space-between;
      color: rgba(16, 16, 16, 0.7);
      font-size: 0.48rem;

      span {
        padding-bottom: 4px;
        border-bottom: 2px solid #e51c23;
      }
    }

    .title {
      margin: .5333rem 0;
      line-height: 1.3;
      color: rgba(16, 16, 16, 1);
      font-size: 0.8rem;
    }

    .content {
      line-height: 1.5;
      color: rgba(16, 16, 16, 1);
      font-size: 0.3733rem;
    }
  }
}
</style>