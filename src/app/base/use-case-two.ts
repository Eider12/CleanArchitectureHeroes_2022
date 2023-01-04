import { Observable } from 'rxjs';

export interface UseCaseTwo<S, T> {
  execute(params: S): Observable<T>;
}
