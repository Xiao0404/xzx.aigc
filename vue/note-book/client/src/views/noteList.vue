<template>

  <div class="note-list">
    <ul>
      <li v-for="item in noteList" :key="item.id" @click="goNoteDetail(item.id)">
        <div class="img">
          <img :src=item.head_img alt="">
        </div>
        <div class="time">{{ item.c_time }}</div>
        <div class="title">{{ item.title }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute,useRouter} from 'vue-router';
import axios from '@/api';
import { ref ,onMounted  } from 'vue';

const noteList = ref([])
const route = useRoute();
const router = useRouter();
// 两种方法传承都行，但是注意，params需要在路由那里扩展url
// const title = route.params.title;
const title = route.query.title;

 axios.get('/findNoteListByType', {
  params: {
    note_type: title
  }
}).then(res => {

noteList.value = res.data
console.log(noteList.value);
})

// const fetchNoteList = async () => {
//   try {
//     const res = await axios.get('/findNoteListByType', {
//       params: {
//         note_type: title
//       }
//     });
//     noteList.value = res.data;
//     console.log(noteList.value);
//   } catch (error) {
//     console.error('Error fetching note list:', error);
//   }
// };

// onMounted(() => {
//   fetchNoteList();
// });


const goNoteDetail = (id) => {
    router.push({path:'/noteDetail',query:{id:id}})
}



</script>

<style scoped>
.note-list {
  width: 100%;
  padding: 1rem 0.667rem 0;
  box-sizing: border-box;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 30px;

    li {
      font-size: 0.37rem;

      .img {
        width: 100%;
        height: 4rem;
        border-radius: 0.27rem;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .title {
        margin-top: 5px;
      }
    }
  }

}
</style>