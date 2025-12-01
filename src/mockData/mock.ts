import { IColumn } from '@/types';

export const getInitialData = (): IColumn[] => {
    return [
        {
            id: 'todo',
            title: 'Назначено',
            cards: [
                { id: 'card1', title: 'Задача 1', description: 'Описание 1', columnId: 'todo' },
                { id: 'card2', title: 'Задача 2', description: 'Описание 2', columnId: 'todo' },
            ],
        },
        {
            id: 'inProgress',
            title: 'В работе',
            cards: [
                { id: 'card3', title: 'Задача 3', description: 'Описание 3', columnId: 'inProgress' },
            ],
        },
        {
            id: 'done',
            title: 'Выполнено',
            cards: [
                { id: 'card4', title: 'Задача 4', description: 'Описание 4', columnId: 'done' },
            ],
        },
    ];
}
