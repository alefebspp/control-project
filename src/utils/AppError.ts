export class AppError {
  public message: string;

  constructor(message: string) {
    this.message = message;
  }
}

export function getErrorMessage(error: unknown) {
  const isAppError = error instanceof AppError;
  const title = isAppError
    ? error.message
    : 'Não foi possível criar um novo registro';
  return title;
}
