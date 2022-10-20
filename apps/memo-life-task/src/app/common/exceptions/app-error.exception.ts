export class AppException {
  message: string;
  details: any;
  constructor(message: string, details?: unknown) {
    if (message) {
      this.message = message;
    } else {
      this.message = 'UNKNOWN_EXCEPTION';
    }
    this.details = details;
  }
}
