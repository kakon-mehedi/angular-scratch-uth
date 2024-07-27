export const navigations = [
	{
		id: 'HumanResource',
		title: 'Human Resource',
		translate: 'HUMAN_RESOURCE',
		type: 'collapsable',
		icon: 'description',
		iconType: 'material',
		isVisible: true,
		children: [
			{
				id: 'EmployeeList',
				title: 'Employee List',
				translate: 'EMPLOYEE_LIST',
				type: 'item',
				url: '/employee-list',
				isVisible: true,
			},
		],
	},

	{
		id: 'Projects',
		title: 'Projects',
		translate: 'PROJECTS',
		type: 'collapsable',
		icon: 'projects',
		iconType: 'material',
		isVisible: true,
		children: [
			{
				id: 'ProjectList',
				title: 'Project List',
				translate: 'PROJECT_LIST',
				type: 'item',
				url: '/project-list',
				isVisible: true,
			},
		],
	},
];
