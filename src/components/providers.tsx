"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { authClient } from "~/server/better-auth/client";
import { getQueryClient } from "~/lib/query-client";
import { AuthProvider } from "./auth/auth-provider";

const normalizeParam = (param: string | string[] | undefined) =>
  (Array.isArray(param) ? param[0] : param)?.replace(/^@/, "") ?? null;

export function Providers({ children }: { children: ReactNode }) {
  const router = useRouter();
  const params = useParams();
  const queryClient = getQueryClient();
  const slug = normalizeParam(params.slug);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider
        authClient={authClient}
        redirectTo="/"
        socialProviders={["google", "github"]}
        emailAndPassword={{ requireEmailVerification: false }}
        navigate={({ to, replace }) =>
          replace ? router.replace(to) : router.push(to)
        }
        Link={Link}
      >
        {children}
      </AuthProvider>
    </QueryClientProvider>
  );
}
