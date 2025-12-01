export interface ICard {
    id: string;
    title: string;
    description: string;
    columnId: string;
}

export interface IColumn {
    id: string;
    title: string;
    cards: ICard[];
}
