export function formatDate(date: string) {
	return new Date(date).toLocaleDateString('fr-BE', {
		// month: 'long',
		// day: 'numeric',
		year: 'numeric',
	});
}
