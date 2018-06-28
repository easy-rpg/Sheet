<template>
	<v-layout row wrap>
		<v-flex xs12 md4 sm4 v-for="(key, value) in (1,2,3)">
			<v-card>
				<v-card-media>
					<img src="http://www.brasil.gov.br/editoria/cultura/2012/07/rio-de-janeiro-recebe-titulo-de-paisagem-cultural/cristo-redentor-rio-de-janeiro/@@images/07f37450-5824-4d00-a7bf-11fc6eed17e6.jpeg" alt="" height="200">
				</v-card-media>
				<v-card-title>
					<div>
						<h3 class="headline mb-0">Alguma coisa</h3>
						<p>Alguma descricao</p>
					</div>
				</v-card-title>
				<v-card-actions>
					<v-btn fab dark color="info">
						<v-icon>thumb_up</v-icon>
					</v-btn>
					<v-btn fab dark color="error">
						<v-icon>thumb_down</v-icon>
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>

</script>
