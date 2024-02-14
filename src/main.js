Error.stackTraceLimit = Infinity;

import { of, mergeMap, tap } from 'rxjs';

const delay = (timeout) => new Promise((resolve) => {
    setTimeout(resolve, timeout);
})

const start = () => {
    of(null).pipe(
        tap(() => console.log('step_1', new Error().stack)),
        mergeMap(async () => await delay(1000)),
        tap(() => console.log('step_2', new Error().stack))
    ).subscribe(() => {
        console.log('finish');
    });
}

start();
