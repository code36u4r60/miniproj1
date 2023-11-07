<script setup lang="ts">
defineProps<{
    name: string,
    photoUrl: string
}>()
</script>

<template>
    <div class="user-avatar">
        
        <img v-show="photoUrl" :src="photoUrl" alt='name' >

        <div class="avatar-name">{{ name }}</div>
    </div>
</template>


<style>
.user-avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.avatar-photo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
}

.avatar-name {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
}
</style>
