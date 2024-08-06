type ApiResponse = {
	data: any;
	isError: boolean;
};

type defaultType = { status: boolean };

/**
 * This means Inputed type must be a child of Obbject class
 * And If we do not provide any InputedType explicitly inside <>
 * Then it will get inputedType = defaultType object by default 
 */
type BetterApiResponse<InputedType extends object = defaultType> = {
	data: InputedType;
	isError: boolean;
};

const post: BetterApiResponse<{ name: string; age: number }> = {
	data: {
		name: 'Kakon',
		age: 20,
	},
	isError: false,
};

const posWithDefaultType: BetterApiResponse = {
	data: { status: false },
	isError: false,
};
