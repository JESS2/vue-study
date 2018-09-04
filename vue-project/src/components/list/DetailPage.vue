<template>
    <div>
        <h2>Detail Page</h2>
        <ul class="list-group">
            <li class="list-group-item"><b>id</b> : {{ listId }}</li>
            <li class="list-group-item"><b>생성일</b> : {{ listCreatedAt }}</li>
            <li class="list-group-item"><b>수정일</b> : {{ listUpdatedAt }}</li>
            <li class="list-group-item"><b>내용</b> : {{ listName }}</li>
        </ul>
    </div>
</template>

<script>
    const url = 'https://todos.garam.xyz/api'
    export default {
        name: 'DetailPage',
        props: {
            listId: {
                type: Number,
                default: 0
            },
            listCreatedAt: {
                type: String,
                default: ''
            },
            listName: {
                type: String,
                default: ''
            },
            listUpdatedAt: {
                type: String,
                default: ''
            }
        }
    }
</script>