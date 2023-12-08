const project = {
	name: 'project',
	title: 'Projects',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image', 
			options: { hotspot: true },
			fields: [
				{
					name: 'alt',
					title: 'Alt',
					type: 'string', 
				},
			],
		},
		{
			name: 'url',
			title: 'URL',
			type: 'url',
		},
		{
			name: 'position',
			title: 'Position',
			type: 'string',
		},
		{
			name: 'time',
			title: 'Time',
			type: 'string',
		},
		{
			title: 'Release date',
			name: 'releaseDate',
			type: 'date',
			options: {
				dateFormat: 'YYYY-MM-DD',
				calendarTodayLabel: 'Today',
			},
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [ { type: 'block' } ], 
		},
	],
};

export default project;