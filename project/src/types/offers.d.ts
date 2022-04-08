export type OffersType = Array<OfferType>


export type OfferType = {
	name: string,
	id: OfferIdType,
	img: array<string>,
	price: number,
	type: string,
	level: string,
	city: string,
	isFav: boolean,
	ratings: number,
	room: number,
	adults: number,
	inside: array<string>,
	author: AuthorOferType
}

export type AuthorOferType = {
	name: string,
	img: string,
	level: string,
	text: array<string>
}

export type OfferIdType = string;
