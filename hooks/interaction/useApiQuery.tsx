

export enum ApiQueryType {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

interface ApiQueryData {
  path: string;
  type: ApiQueryType;
  headers?: Record<string, unknown>;
  payload?: Record<string, unknown>;
  options?: Record<string, unknown>;
  autoInit?: boolean;
}

type FetcherArgs = Pick<ApiQueryData, 'path' | 'type' | 'payload' | 'headers'>;

export interface ApiOutput<T = Record<string, unknown>> {
  data: T;
  error?: string;
}

export const fetcher: Fetcher<ApiOutput, FetcherArgs> = async ({
  path,
  type,
  payload,
  headers,
}) => {
  const options = {
    ...(headers && { headers }),
  };
  if (payload) {
    return await apiCall[type](path, payload, options);
  } else return await apiCall[type](path, options);
};

export const useApiQuery = ({
  path,
  type,
  payload,
  options,
  headers,
  autoInit = true,
}: ApiQueryData) => {
  const { data, error, mutate } = useSWR(
    autoInit ? { path, type, payload, headers } : null,
    fetcher,
    {
      revalidateIfStale: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      ...options,
    }
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
    mutate: mutate,
  };
};

export async function createUser(data) {
  const myHeaders = new Headers();
  myHeaders.append("X-SYS-API-KEY-SECRET", import.meta.env.SYSTEM_API_KEY_SECRET);
  myHeaders.append("X-SYS-API-KEY", import.meta.env.SYSTEM_API_KEY_ID);
  myHeaders.append("Content-Type", "application/json");
  
  data["send_invitation"] = true;
  data["invitation_message"] = `Welcome to Qwil, ${data.first_name}!`
  console.log(data);
  var raw = JSON.stringify(data);
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://web.qwil.io/entity-service/sys-api/entity-memberships/create", requestOptions);

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    // Handle error...
    throw error;
  }
}