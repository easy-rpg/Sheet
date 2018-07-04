<template>
	<div>
		<campanhas></campanhas>
        <arcos></arcos>
		<personagens></personagens>
	</div>
</template>

<script>
import ListagemCampanhas from '@/components/Campanha/ListagemCampanhas'
import ListagemArcos from '@/components/Campanha/ListagemArcos'
import ListagemPersonagens from '@/components/Personagem/ListagemPersonagens'

export default {
	components: {
		campanhas: ListagemCampanhas,
		arcos: ListagemArcos,
		personagens: ListagemPersonagens
	}
}
</script>
