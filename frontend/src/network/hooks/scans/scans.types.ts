export interface IScan {
    id: number;
    createdAt: string;
}

export interface IScanNote {
    id: number;
    scanId: number;
    title: string;
    content: string;
    createdAt: string;
}