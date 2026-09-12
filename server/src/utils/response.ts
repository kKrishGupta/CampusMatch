export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  meta?: any;
}

export class ResponseUtil {
  public static success<T>(data?: T, message = 'Success', meta?: any): ApiResponse<T> {
    return {
      success: true,
      message,
      data,
      meta,
    };
  }

  public static error(message = 'An error occurred', meta?: any): ApiResponse<null> {
    return {
      success: false,
      message,
      meta,
    };
  }
}
