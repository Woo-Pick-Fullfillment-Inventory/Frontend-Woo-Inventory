interface ApiValidationErrorResponse {
  type: string;
  message: string;
  // Include other fields that your error response might have
}

export const isApiValidationErrorResponse = (result: unknown): result is ApiValidationErrorResponse => result!== undefined;