import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation } from "@tanstack/react-query";
import { syncUser } from "../lib/api";
import { useEffect } from "react";

const useUserSync = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  const {
    mutate: syncUserMutation,
    isSuccess,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: syncUser,
    onError: (error) => console.error("User sync failed:", error),
    retry: 1,
  });

  useEffect(() => {
    if (isSignedIn && user && !isPending && !isSuccess) {
      const email = user?.primaryEmailAddress?.emailAddress || "";
      const name = user.fullName || user.firstName || user.username || "";
      const imageUrl = user?.imageUrl;
      syncUserMutation({ email, name, imageUrl });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignedIn, user, isPending, isSuccess]);

  return { isSynced: isSuccess, isError, error };
};

export default useUserSync;
