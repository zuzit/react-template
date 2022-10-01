export namespace Components {
  export namespace Responses {
    export type BadRequestOpenApiError = /**
     * OpenAPIError
     * API error base
     */ Schemas.OpenAPIError;
    export type InternalServerError = /**
     * APIError
     * API error base
     */ Schemas.APIError;
    export type NotFoundError = /**
     * APIError
     * API error base
     */ Schemas.APIError;
  }
  export namespace Schemas {
    /**
     * APIError
     * API error base
     */
    export interface APIError {
      /**
       * HTTP status
       */
      status?: string;
      /**
       * Error message
       */
      message: string;
      /**
       * Determines whether the message should be visible to user or not
       */
      isPublic?: boolean;
    }
    /**
     * OpenAPIError
     * API error base
     */
    export interface OpenAPIError {
      /**
       * HTTP status
       */
      status?: string;
      /**
       * Error message
       */
      message: string;
      /**
       * Additional error data
       */
      data?: {
        invalidFields?: string;
      };
      /**
       * Determines whether the message should be visible to user or not
       */
      isPublic?: boolean;
    }
  }
}
