declare namespace Express {
    interface Response {
        // result middleware
        result: {
            next: {
                page: number;
                limit: number;
            };
            previous: {
                page: number;
                limit: number;
            };
            data: any[];
        };
    }
}
