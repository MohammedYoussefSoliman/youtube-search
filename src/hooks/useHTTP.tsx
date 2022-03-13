import Axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { useCallback, useState } from "react";

const api = Axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

// eslint-disable-next-line @typescript-eslint/ban-types
type IJSONParsable = string | number | boolean | object;

type IApiConfig = {
  endPoint?: string;
  method?: "GET" | "POST" | "DELETE" | "PUT";
  params?: {
    [key: string]: IJSONParsable | Array<IJSONParsable>;
  };
};

type IProps = <T>(config: IApiConfig) => {
  isLoading: boolean;
  isSubmitting: boolean;
  data: T | undefined;
  error: any;
  call: (data?: any) => Promise<any>;
};

const useHttp: IProps = ({ endPoint, method = "GET", params }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any | null>(null);

  const call = useCallback(
    // eslint-disable-next-line consistent-return
    async (callData: any) => {
      const requestConfig: AxiosRequestConfig = {
        headers: {
          Accept: "application/json",
        },
        params,
        responseType: "json",
      };

      let response: AxiosResponse;
      try {
        setIsSubmitting(true);
        setIsLoading(true);
        switch (method) {
          case "POST":
            response = await api.post(endPoint || "", callData, requestConfig);
            break;
          case "DELETE":
            response = await api.delete(endPoint || "", requestConfig);
            break;
          case "PUT":
            response = await api.put(endPoint || "", callData, requestConfig);
            break;
          case "GET":
          default:
            response = await api.get(endPoint || "", requestConfig);
            break;
        }
        setData(response.data);
        setError(false);
        return response;
      } catch (err) {
        const axiosError = err as AxiosError;
        if (axiosError) {
          setError(axiosError.response?.data.errors);
        } else {
          setError("an unknown error occurred");
        }
      } finally {
        setIsLoading(false);
        setIsSubmitting(false);
      }
    },
    [endPoint, method, params],
  );
  return {
    isLoading,
    isSubmitting,
    data,
    error,
    call,
  };
};

export default useHttp;
