//用户每次创建一个todo，就存进数组
//循环数组，生成数组长度相同的li结构

var todoData = []
var addTodo = document.querySelector('.btn')  //需要类在前面加.
var todoList = document.querySelector('.list')

//新增按钮
function addNewTodo() {
     //先判断input是否有值
   if ( document.getElementById('newTodo').value !== '') {
            todoData.push({
                id: Date.now(),
                content: document.getElementById('newTodo').value,
                completed: false 
            })


   }
        //渲染列表
        render()
        document.getElementById('newTodo').value=''

}

function render(){
        var str = ''

        for(var i=0;i<todoData.length;i++){
           var item = todoData[i]
            str+=` 
            <li class="list-item">
            <input type="checkbox" class="item-check" data-action = "delete" data-id = "${item.id}">
            <p class="item-content" data-id="${item.id}">${item.content}</p>
            <span class="close" data-id="${item.id}" data-action="remove">×</span>
        </li>
            `
        }

        //往ul中植入str
        todoList.innerHTML = str

}

function removeTodo(e){
       if(e.target.dataset.action == "remove"){ //dataset：这是一个 HTMLElement 属性，提供对所有自定义数据属性 (data-* 属性) 的访问。它返回一个 DOMStringMap 对象。
        //拿到当前这个span上的id值，找到数组中哪个对象中的id和这个span的id相等，
        var list_id = e.target.dataset.id
        //找出它的下标
        var index = todoData.findIndex(function(item){
            return item.id == list_id
        })
        //按照下标移出数组中的元素
        todoData.splice(index,1)
        

        render()
       }
}

function deleteTodo(e){
    if (e.target.classList.contains('item-check')) {
        // 拿到当前这个checkbox的id，找到数组中相对的元素
        var listId = e.target.dataset.id
        
        // 找到与复选框相对应的段落元素
        var contentElement = document.querySelector(`.item-content[data-id="${listId}"]`)

        // 如果复选框被选中，给段落添加下划线
        if (e.target.checked) {
            contentElement.style.textDecoration = 'line-through'
            contentElement.style.color = '#bfbfbf'
        } else {
            // 如果复选框未被选中，移除下划线
            contentElement.style.textDecoration = 'none'
            contentElement.style.color = '#000000'
        }
    }
}



addTodo.addEventListener('click',addNewTodo)
todoList.addEventListener('click',deleteTodo) 
todoList.addEventListener('click',removeTodo)  //事件委托
