// Include other fields that your error response might have
interface ApiValidationErrorResponse {
  type: string;
  message: string;
}

export const isApiValidationErrorResponse = (result: unknown): result is ApiValidationErrorResponse => result!== undefined;