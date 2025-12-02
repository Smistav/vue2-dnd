import { IColumn } from '@/types';

const STORAGE_KEY = 'board_columns';

export class StorageService {
    static loadFromStorage(): IColumn[] | null {
        try {
            const data = localStorage.getItem(STORAGE_KEY);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Failed to load from storage:', error);
            return null;
        }
    }

    static saveToStorage(columns: IColumn[]): void {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(columns));
        } catch (error) {
            console.error('Failed to save to storage:', error);
        }
    }
}