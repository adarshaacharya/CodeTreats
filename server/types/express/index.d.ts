declare namespace Express {
    interface Response {
        // result middleware
        results: {
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
