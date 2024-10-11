<template>
	<div class="pdf__status">
		<div class="status__text">
			<p>
				Статус:
				<span
					:style="`background: ${pdfStatius === 'Не подписан' ? '' : ''}`"
					>{{ pdfStatius }}</span
				>
			</p>
		</div>
		<form class="status__form">
			<input type="password" placeholder="ключ" />
			<button type="button">Ознакомился</button>
		</form>
	</div>
	<div class="main__pdf">
		<div class="pdf__content" :style="{ width: '1028px', height: '700px' }">
			<VPdfViewer v-if="pdfSrc" :src="pdfSrc" />
			<div v-else>
				<p>PDF не загружен или недоступен</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { VPdfViewer } from '@vue-pdf-viewer/viewer'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { postStore } from '../../../store/postStore'

const pdfStatius = 'Не подписан'

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
</script>

<style lang="scss" scoped>
.pdf__status {
	margin-top: 100px;
	width: 100%;
	margin-left: 9%;
	@include Flex(column, start, start);
	gap: 40px;

	.status__text {
		font-size: 20px;

		span {
			padding: 10px 20px;
			margin-left: 15px;
			background: rgb(119, 23, 60);
			border-radius: 10px;
			color: white;
		}
	}

	.status__form {
		input {
			padding: 10px 20px;
			border: 2px solid rgb(86, 78, 57);
			border-radius: 10px;
		}

		button {
			margin-left: 15px;
			padding: 10px 20px;
			cursor: pointer;
			border-radius: 10px;
		}
	}
}

.main__pdf {
	margin: 10px 0 100px 0;
	@include Flex;
	pointer-events: none;

	.pdf__content {
		margin-top: 50px;
	}
}
</style>
