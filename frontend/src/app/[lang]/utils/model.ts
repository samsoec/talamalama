type StrapiResponse<T> = {
  data: T;
  message: string;
};

export interface Attribute {
	url: string;
	alternativeText?: any;
	caption?: any;
	width: number;
	height: number;
}

export interface Data<T> {
	id: number;
	attributes: T;
}

export interface Picture {
	data: Data<Attribute>;
}

export interface Button {
	id: number;
	url: string;
	newTab: boolean;
	text: string;
	type: string;
}

export interface ContentSection {
	id: number;
	__component: string;
	title: string;
	description: string;
	picture: Picture;
	buttons: Button[];
}

export interface Attribute {
	shortName: string;
	slug: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string;
	heading?: any;
	description?: any;
	contentSections: ContentSection[];
}

export interface Pagination {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
}

export interface Meta {
	pagination: Pagination;
}

export interface RootObject {
	data: Data<Attribute>[];
	meta: Meta;
}

export interface Category {
	name: string;
	slug: string;
	description: string;
	serviceFeatures: ArrayData<Service>;
}

export interface Service {
	slug: string;
	name: string;
	description: string;
	picture: Picture;
}

export interface ArrayData<T> {
	data: Data<T>[];
}