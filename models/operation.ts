export interface ISuccess<T> {
  status: "Success";
  data: T;
}

export interface IError {
  status: "Error";
  error: Error;
}

export type ResultType<T> = ISuccess<T> & IError;

export function handleResult<T>(obj: ResultType<T>): T | never {
  if (obj.status === "Success") {
    return obj.data;
  }

  if (obj.status === "Error") {
    throw obj.error;
  }
}
