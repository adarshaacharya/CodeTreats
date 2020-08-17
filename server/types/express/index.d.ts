declare namespace Express {
    interface Response {
        // result middleware
        paginatedResults: {
            previous: {
                page: number;
                limit: number;
            };
            next: {
                page: number;
                limit: number;
            };

            data: any[];
        };
    }
}

// declare namespace Express {
//     interface Response {
//         // result middleware
//         results: any;
//     }
// }
