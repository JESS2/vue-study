<template>
    <div>
        <h2>Detail</h2>
        <p>{{ myName }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Detail',
        props: {
            myName: {
                type: String,
                default: 'default myName'
            }
        }
    }
</script>
