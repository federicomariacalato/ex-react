import { useQuery } from "@tanstack/react-query";

export type User = {
  id: number;
  name: string;
  login: string;
  avatar_url: string;
};

export function useGithubUser(username: string) {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["users", username],
    queryFn: async () => {
      if (!username) return null;

      const response = await fetch(`https://api.github.com/users/${username}`);

      return response.json() as Promise<User>;
    },
    enabled: username !== null && username.trim() !== "",
  });

  return {
    user: data,
    error,
    isLoading,
    fetchUserManually: refetch,
  } as const;
}
