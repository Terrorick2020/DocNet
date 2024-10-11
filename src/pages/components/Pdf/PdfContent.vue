<template>
	<div v-if="pdfSrc" class="pdf__status">
		<div class="status__text">
			<p>Статус: 
				<span :style="`background: ${ isSuccessStatus ? '#1bb28a' : '#77173c' }`">
					{{ isSuccessStatus ? 'Подписан' : 'Не подписан' }}
				</span>
			</p>
		</div>
	</div>
	<div class="main__pdf">
		<div class="pdf__content" :style="{ width: '1028px', height: '700px' }">
			<VPdfViewer v-if="pdfSrc" :src="pdfSrc" />
			<div v-else>
				<p>PDF не загружен или недоступен!</p>
			</div>
		</div>
	</div>
	<form v-if="!isSuccessStatus && pdfSrc" class="status__form">
		<button type="button">Поставить подпись
			<input type="file" 
					@change="handleKeyFileChange" 
					accept=".pem">
		</button>
	</form>
</template>

<script setup lang="ts">
import { VPdfViewer } from '@vue-pdf-viewer/viewer'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { postStore } from '../../../store/postStore'

var isSuccessStatus = ref( false )
const keyFile = ref<File | null>(null)

const PostStore = postStore()

const pdfSrc = ref<string | null>(null)

const route = useRoute()
const postId = Number(route.params.id)

const fetchPdfBase64 = async (id: number) => {
	await PostStore.getPost(id)

	const base64Pdf = PostStore.post.content

	if (base64Pdf) {
		return base64Pdf
	}

	return null
}

onMounted(async () => {
	const base64Pdf = await fetchPdfBase64(postId)

	if (base64Pdf) {
		pdfSrc.value = `data:application/pdf;base64,${base64Pdf}`
	} else {
		console.error('Ошибка: PDF не найден или не загружен.')
	}
})

const handleKeyFileChange = ( event: Event ) => {
	const target = event.target as HTMLInputElement;
    if (target.files) {
        keyFile.value = target.files[0]
		
		isSuccessStatus.value = true
    }
}
</script>

<style lang="scss" scoped>
.pdf__status {
	margin-top: 100px;
	width: 100%;
	margin-left: 8%;

	.status__text {
		font-size: 20px;

		span {
			padding: 10px 20px;
			margin-left: 15px;
			background: #1bb28a;
			border-radius: 10px;
			color: white;
		}
	}
}

.main__pdf {
	margin: 10px 0 10px 0;
	@include Flex;
	pointer-events: none;

	.pdf__content {
		margin-top: 50px;
	}
}

.status__form {
	width: 100%;
	margin-bottom: 100px;
	text-align: center;

	button {
		width: 40%;
		position: relative;
		margin-left: 15px;
		padding: 10px 20px;
		cursor: pointer;
		border-radius: 10px;

		input {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			opacity: 0;
			cursor: pointer;
		}
	}
}
</style>
